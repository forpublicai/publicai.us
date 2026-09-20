"use server";

import { Resend } from "resend";
import { ensureLoiTable, getSql } from "@/lib/db";
import { researchWaitlistSignup } from "@/lib/waitlist-research";

export type WaitlistSubmitResult =
  | { ok: true }
  | { ok: false; error: string };

const COMPUTE_UNITS = ["gpu_hours", "usd", "scale"] as const;

const COMPUTE_SCALES = [
  "exploratory",
  "tens",
  "hundreds",
  "thousands",
] as const;

function str(formData: FormData, key: string): string {
  const v = formData.get(key);
  return typeof v === "string" ? v.trim() : "";
}

function bool(formData: FormData, key: string): boolean {
  return formData.get(key) === "on" || formData.get(key) === "true";
}

export async function submitWaitlist(formData: FormData): Promise<WaitlistSubmitResult> {
  // Honeypot — bots fill this; humans leave it empty
  if (str(formData, "website")) {
    return { ok: true };
  }

  const organization = str(formData, "organization");
  const name = str(formData, "name");
  const email = str(formData, "email");
  const location = str(formData, "location");
  const computeUnit = str(formData, "computeUnit");
  const computeAmount = str(formData, "computeAmount");
  const computeScale = str(formData, "computeScale");
  const organicRaw = str(formData, "organicPremiumPct");
  const computePurpose = str(formData, "computePurpose");
  const neededBy = str(formData, "neededBy");
  const comments = str(formData, "comments");
  const nonBindingAck = bool(formData, "nonBindingAck");
  const fundraisingRef = nonBindingAck;

  if (!organization || !name || !email) {
    return { ok: false, error: "Organization, name, and email are required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (!COMPUTE_UNITS.includes(computeUnit as (typeof COMPUTE_UNITS)[number])) {
    return { ok: false, error: "Please choose how you express monthly compute." };
  }

  if (computeUnit === "scale") {
    if (!COMPUTE_SCALES.includes(computeScale as (typeof COMPUTE_SCALES)[number])) {
      return { ok: false, error: "Please select a rough scale for monthly compute." };
    }
  } else if (!computeAmount) {
    return {
      ok: false,
      error:
        computeUnit === "usd"
          ? "Please enter an indicative monthly budget in USD."
          : "Please enter an indicative monthly GPU-hour amount.",
    };
  }

  const organicPremiumPct = Number.parseInt(organicRaw, 10);
  if (
    Number.isNaN(organicPremiumPct) ||
    organicPremiumPct < -50 ||
    organicPremiumPct > 200
  ) {
    return {
      ok: false,
      error: "Organic compute preference must be between −50% and +200%.",
    };
  }

  if (!neededBy || !isValidTiming(neededBy)) {
    return { ok: false, error: "Please choose when you need compute." };
  }

  if (!nonBindingAck) {
    return {
      ok: false,
      error:
        "Please acknowledge that joining the waitlist is non-binding and that MOCSI may reference this signup in fundraising materials.",
    };
  }

  try {
    await ensureLoiTable();
    const sql = getSql();
    await sql`
      INSERT INTO loi_submissions (
        organization,
        name,
        email,
        org_kind,
        location,
        in_maine,
        compute_unit,
        compute_amount,
        compute_scale,
        organic_premium_pct,
        needed_by,
        needed_by_note,
        comments,
        non_binding_ack,
        fundraising_ref
      ) VALUES (
        ${organization},
        ${name},
        ${email},
        ${"unspecified"},
        ${location || null},
        ${false},
        ${computeUnit},
        ${computeUnit === "scale" ? null : computeAmount},
        ${computeUnit === "scale" ? computeScale : null},
        ${organicPremiumPct},
        ${neededBy},
        ${computePurpose || null},
        ${comments || null},
        ${nonBindingAck},
        ${fundraisingRef}
      )
    `;
  } catch (err) {
    console.error("Waitlist DB insert failed:", err);
    return {
      ok: false,
      error: "Could not save your submission. Please try again or email hello@publicai.co.",
    };
  }

  try {
    const research = await researchWaitlistSignup({
      organization,
      name,
      email,
      location,
      comments: [computePurpose, comments].filter(Boolean).join("\n\n"),
    });
    await sendWaitlistEmail(
      {
        organization,
        name,
        email,
        location,
        computeUnit,
        computeAmount,
        computeScale,
        organicPremiumPct,
        computePurpose,
        neededBy,
        comments,
        fundraisingRef,
      },
      research?.summaryHtml ?? null,
    );
  } catch (err) {
    console.error("Waitlist email failed (submission was saved):", err);
  }

  return { ok: true };
}

function isValidTiming(value: string): boolean {
  if (value === "asap" || value === "not_urgent") return true;
  return /^within_\d+_months$/.test(value);
}

type WaitlistEmailPayload = {
  organization: string;
  name: string;
  email: string;
  location: string;
  computeUnit: string;
  computeAmount: string;
  computeScale: string;
  organicPremiumPct: number;
  computePurpose: string;
  neededBy: string;
  comments: string;
  fundraisingRef: boolean;
};

const SCALE_LABELS: Record<string, string> = {
  exploratory: "Exploratory / small",
  tens: "Tens of GPU-hours / month",
  hundreds: "Hundreds of GPU-hours / month",
  thousands: "Thousands+ of GPU-hours / month",
};

function formatCompute(p: WaitlistEmailPayload): string {
  if (p.computeUnit === "gpu_hours") {
    return `~${p.computeAmount} GPU-hours / month`;
  }
  if (p.computeUnit === "usd") {
    return `~$${p.computeAmount} / month`;
  }
  return SCALE_LABELS[p.computeScale] ?? p.computeScale;
}

function formatOrganic(pct: number): string {
  if (pct === 0) return "About market (0%)";
  if (pct > 0) return `Willing to pay ${pct}% more than typical market prices`;
  return `Would need ${Math.abs(pct)}% below typical market prices`;
}

function formatTiming(neededBy: string): string {
  if (neededBy === "asap") return "ASAP";
  if (neededBy === "not_urgent") return "Not urgent";
  const match = neededBy.match(/^within_(\d+)_months$/);
  if (match) {
    const n = match[1];
    return `Within ${n} month${n === "1" ? "" : "s"}`;
  }
  return neededBy;
}

async function sendWaitlistEmail(
  p: WaitlistEmailPayload,
  backgroundHtml: string | null,
) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; skipping waitlist email");
    return;
  }

  const domain = process.env.RESEND_EMAIL_DOMAIN?.trim();
  const from =
    process.env.LOI_FROM_EMAIL ??
    (domain
      ? `MOCSI Waitlist <noreply@${domain}>`
      : "MOCSI Waitlist <onboarding@resend.dev>");
  const to = process.env.LOI_TO_EMAIL ?? "josh@publicai.co";

  const resend = new Resend(apiKey);
  const lines = [
    `<p><strong>New waitlist signup</strong> from ${escapeHtml(p.organization)}</p>`,
    "<ul>",
    `<li><strong>Name:</strong> ${escapeHtml(p.name)}</li>`,
    `<li><strong>Email:</strong> ${escapeHtml(p.email)}</li>`,
    `<li><strong>Organization:</strong> ${escapeHtml(p.organization)}</li>`,
    `<li><strong>Location:</strong> ${escapeHtml(p.location || "—")}</li>`,
    `<li><strong>Monthly compute:</strong> ${escapeHtml(formatCompute(p))}</li>`,
    `<li><strong>Price:</strong> ${escapeHtml(formatOrganic(p.organicPremiumPct))}</li>`,
    `<li><strong>Need compute for:</strong> ${escapeHtml(p.computePurpose || "—")}</li>`,
    `<li><strong>When needed:</strong> ${escapeHtml(formatTiming(p.neededBy))}</li>`,
    `<li><strong>Fundraising reference OK:</strong> ${p.fundraisingRef ? "Yes" : "No"}</li>`,
    "</ul>",
    p.comments
      ? `<p><strong>Other requirements / comments:</strong></p><p>${escapeHtml(p.comments).replace(/\n/g, "<br>")}</p>`
      : "",
    backgroundHtml
      ? `<hr style="border:none;border-top:1px solid #ddd;margin:24px 0" />${backgroundHtml}`
      : `<hr style="border:none;border-top:1px solid #ddd;margin:24px 0" /><p><em>Background research unavailable for this signup.</em></p>`,
  ].join("\n");

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: p.email,
    subject: `Waitlist: ${p.organization} — ${formatCompute(p)}`,
    html: lines,
  });

  if (error) {
    throw new Error(error.message);
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
