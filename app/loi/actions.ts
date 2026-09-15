"use server";

import { Resend } from "resend";
import { ensureLoiTable, getSql } from "@/lib/db";

export type LoiSubmitResult =
  | { ok: true }
  | { ok: false; error: string };

const ORG_KINDS = [
  "nonprofit",
  "university",
  "government",
  "business",
  "cooperative",
  "other",
] as const;

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

export async function submitLoi(formData: FormData): Promise<LoiSubmitResult> {
  // Honeypot — bots fill this; humans leave it empty
  if (str(formData, "website")) {
    return { ok: true };
  }

  const organization = str(formData, "organization");
  const name = str(formData, "name");
  const email = str(formData, "email");
  const orgKind = str(formData, "orgKind");
  const location = str(formData, "location");
  const computeUnit = str(formData, "computeUnit");
  const computeAmount = str(formData, "computeAmount");
  const computeScale = str(formData, "computeScale");
  const organicRaw = str(formData, "organicPremiumPct");
  const neededBy = str(formData, "neededBy");
  const comments = str(formData, "comments");
  const nonBindingAck = bool(formData, "nonBindingAck");
  const fundraisingRef = bool(formData, "fundraisingRef");

  if (!organization || !name || !email) {
    return { ok: false, error: "Organization, name, and email are required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (!ORG_KINDS.includes(orgKind as (typeof ORG_KINDS)[number])) {
    return { ok: false, error: "Please select a kind of organization." };
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
    organicPremiumPct > 100
  ) {
    return {
      ok: false,
      error: "Organic compute preference must be between −50% and +100%.",
    };
  }

  if (!nonBindingAck) {
    return {
      ok: false,
      error: "Please acknowledge that this is a non-binding statement of intent.",
    };
  }

  if (!fundraisingRef) {
    return {
      ok: false,
      error:
        "Please acknowledge that MOCSI may reference this letter in fundraising materials.",
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
        ${orgKind},
        ${location || null},
        ${false},
        ${computeUnit},
        ${computeUnit === "scale" ? null : computeAmount},
        ${computeUnit === "scale" ? computeScale : null},
        ${organicPremiumPct},
        ${neededBy || null},
        ${null},
        ${comments || null},
        ${nonBindingAck},
        ${fundraisingRef}
      )
    `;
  } catch (err) {
    console.error("LOI DB insert failed:", err);
    return {
      ok: false,
      error: "Could not save your submission. Please try again or email hello@publicai.co.",
    };
  }

  try {
    await sendLoiEmail({
      organization,
      name,
      email,
      orgKind,
      location,
      computeUnit,
      computeAmount,
      computeScale,
      organicPremiumPct,
      neededBy,
      comments,
      fundraisingRef,
    });
  } catch (err) {
    console.error("LOI email failed (submission was saved):", err);
  }

  return { ok: true };
}

type LoiEmailPayload = {
  organization: string;
  name: string;
  email: string;
  orgKind: string;
  location: string;
  computeUnit: string;
  computeAmount: string;
  computeScale: string;
  organicPremiumPct: number;
  neededBy: string;
  comments: string;
  fundraisingRef: boolean;
};

const ORG_KIND_LABELS: Record<string, string> = {
  nonprofit: "Nonprofit",
  university: "University / research",
  government: "Government / municipality",
  business: "Business",
  cooperative: "Cooperative",
  other: "Other",
};

const SCALE_LABELS: Record<string, string> = {
  exploratory: "Exploratory / small",
  tens: "Tens of GPU-hours / month",
  hundreds: "Hundreds of GPU-hours / month",
  thousands: "Thousands+ of GPU-hours / month",
};

function formatCompute(p: LoiEmailPayload): string {
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

async function sendLoiEmail(p: LoiEmailPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; skipping LOI email");
    return;
  }

  const domain = process.env.RESEND_EMAIL_DOMAIN?.trim();
  const from =
    process.env.LOI_FROM_EMAIL ??
    (domain
      ? `MOCSI LOI <noreply@${domain}>`
      : "MOCSI LOI <onboarding@resend.dev>");
  const to = process.env.LOI_TO_EMAIL ?? "josh@publicai.co";

  const resend = new Resend(apiKey);
  const lines = [
    `<p><strong>New Letter of Intent</strong> from ${escapeHtml(p.organization)}</p>`,
    "<ul>",
    `<li><strong>Name:</strong> ${escapeHtml(p.name)}</li>`,
    `<li><strong>Email:</strong> ${escapeHtml(p.email)}</li>`,
    `<li><strong>Organization:</strong> ${escapeHtml(p.organization)}</li>`,
    `<li><strong>Kind:</strong> ${escapeHtml(ORG_KIND_LABELS[p.orgKind] ?? p.orgKind)}</li>`,
    `<li><strong>Location:</strong> ${escapeHtml(p.location || "—")}</li>`,
    `<li><strong>Monthly compute:</strong> ${escapeHtml(formatCompute(p))}</li>`,
    `<li><strong>Organic vs market:</strong> ${escapeHtml(formatOrganic(p.organicPremiumPct))}</li>`,
    `<li><strong>When needed:</strong> ${escapeHtml(p.neededBy || "—")}</li>`,
    `<li><strong>Fundraising reference OK:</strong> ${p.fundraisingRef ? "Yes" : "No"}</li>`,
    "</ul>",
    p.comments
      ? `<p><strong>Other requirements / comments:</strong></p><p>${escapeHtml(p.comments).replace(/\n/g, "<br>")}</p>`
      : "",
  ].join("\n");

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: p.email,
    subject: `LOI: ${p.organization} — ${formatCompute(p)}`,
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
