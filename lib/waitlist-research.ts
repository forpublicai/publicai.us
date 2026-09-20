import { generateText, gateway, isStepCount } from "ai";

export type WaitlistResearchInput = {
  organization: string;
  name: string;
  email: string;
  location: string;
  comments: string;
};

export type WaitlistResearch = {
  summaryHtml: string;
  sources: { title: string; url: string }[];
};

function emailDomain(email: string): string | null {
  const at = email.lastIndexOf("@");
  if (at < 0) return null;
  const domain = email.slice(at + 1).toLowerCase();
  if (!domain || domain.includes("gmail.") || domain.includes("yahoo.") || domain.includes("hotmail.") || domain.includes("outlook.") || domain.includes("icloud.") || domain.includes("proton.")) {
    return null;
  }
  return domain;
}

/**
 * Web-search for background on the waitlist signup.
 * Failures return null so notification email still sends.
 */
export async function researchWaitlistSignup(
  input: WaitlistResearchInput,
): Promise<WaitlistResearch | null> {
  const domain = emailDomain(input.email);
  const prompt = [
    "You are researching a MOCSI (Maine Open Compute Services Initiative) waitlist signup.",
    "MOCSI is a community-owned, organic AI compute project in Maine (hydropowered, community-controlled, ethical).",
    "Use web search. Then write a concise briefing for an internal ops email.",
    "",
    "Signup details:",
    `- Organization: ${input.organization}`,
    `- Person: ${input.name}`,
    `- Email: ${input.email}`,
    domain ? `- Email domain: ${domain}` : null,
    input.location ? `- Location: ${input.location}` : null,
    input.comments ? `- Their comments: ${input.comments}` : null,
    "",
    "Return plain text with these exact headings:",
    "Organization:",
    "Person:",
    "Relevance to MOCSI:",
    "Sources:",
    "",
    "Under each heading, 1–3 short sentences (or bullet lines). Be factual; if unknown, say so.",
    "Under Sources, list up to 5 lines as: Title — URL",
    "Do not invent facts. Prefer official org pages, LinkedIn, news, and academic profiles.",
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const { text, sources } = await generateText({
      model: "openai/gpt-5.4-nano",
      prompt,
      tools: {
        perplexity_search: gateway.tools.perplexitySearch({
          maxResults: 8,
          searchLanguageFilter: ["en"],
          country: "US",
        }),
      },
      stopWhen: isStepCount(4),
      maxRetries: 1,
    });

    if (!text?.trim()) return null;

    const sourceList = extractSources(text, sources);

    return {
      summaryHtml: formatResearchHtml(text.trim(), sourceList),
      sources: sourceList,
    };
  } catch (err) {
    console.error("Waitlist research failed:", err);
    return null;
  }
}

function extractSources(
  text: string,
  sdkSources: unknown,
): { title: string; url: string }[] {
  const fromSdk: { title: string; url: string }[] = [];
  if (Array.isArray(sdkSources)) {
    for (const s of sdkSources) {
      if (
        s &&
        typeof s === "object" &&
        "url" in s &&
        typeof (s as { url: unknown }).url === "string"
      ) {
        const url = (s as { url: string }).url;
        const title =
          "title" in s && typeof (s as { title: unknown }).title === "string"
            ? (s as { title: string }).title.trim()
            : url;
        fromSdk.push({ title, url });
      }
    }
  }

  if (fromSdk.length > 0) return fromSdk.slice(0, 5);

  const fromText: { title: string; url: string }[] = [];
  const urlRe = /https?:\/\/[^\s<>"']+/g;
  const seen = new Set<string>();
  for (const match of text.matchAll(urlRe)) {
    const url = match[0].replace(/[).,;]+$/, "");
    if (seen.has(url)) continue;
    seen.add(url);
    fromText.push({ title: url, url });
    if (fromText.length >= 5) break;
  }
  return fromText;
}

function formatResearchHtml(
  text: string,
  sources: { title: string; url: string }[],
): string {
  const escaped = escapeHtml(text).replace(/\n/g, "<br>");
  const sourceBlock =
    sources.length > 0
      ? `<p><strong>Linked sources:</strong></p><ul>${sources
          .map(
            (s) =>
              `<li><a href="${escapeHtml(s.url)}">${escapeHtml(s.title)}</a></li>`,
          )
          .join("")}</ul>`
      : "";

  return [
    `<h3>Background research</h3>`,
    `<p style="font-size:12px;color:#666">Auto-generated from web search — verify before relying on it.</p>`,
    `<p>${escaped}</p>`,
    sourceBlock,
  ].join("\n");
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
