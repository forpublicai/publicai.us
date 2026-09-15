"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ds/Button";
import { submitLoi } from "./actions";

type ComputeUnit = "gpu_hours" | "usd" | "scale";

const fieldClass =
  "mt-1 w-full border border-hairline bg-white px-3 py-2 pai-body outline-none focus:border-brand";
const labelClass = "pai-section block";
const helpClass = "pai-body mt-1 text-[var(--pai-gray-500)]";

function organicLabel(pct: number): string {
  if (pct === 0) return "About the same as typical market prices";
  if (pct > 0) return `${pct}% more than typical market prices`;
  return `${Math.abs(pct)}% less than typical market prices`;
}

export default function LoiForm() {
  const [computeUnit, setComputeUnit] = useState<ComputeUnit>("gpu_hours");
  const [organicPct, setOrganicPct] = useState(0);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);
    try {
      const formData = new FormData(e.currentTarget);
      formData.set("organicPremiumPct", String(organicPct));
      const result = await submitLoi(formData);
      if (result.ok) {
        setDone(true);
      } else {
        setError(result.error);
      }
    } catch {
      setError("Something went wrong. Please try again or email hello@publicai.co.");
    } finally {
      setPending(false);
    }
  }

  if (done) {
    return (
      <div className="max-w-xl space-y-3 rounded border border-hairline bg-subtle p-4">
        <h2 className="pai-h3">Thank you</h2>
        <p className="pai-body">
          We received your letter of intent. This is non-binding; we&apos;ll follow
          up as MOCSI capacity and pricing firm up. If you have questions sooner,
          write{" "}
          <a href="mailto:hello@publicai.co" className="hover:text-brand">
            hello@publicai.co
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl space-y-6" noValidate>
      {/* Honeypot */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <fieldset className="space-y-3">
        <legend className="pai-h3">Monthly compute</legend>
        <p className={helpClass}>
          Indicative is fine. Rough scale works if you don&apos;t have a number yet.
        </p>
        <div className="flex flex-wrap gap-3">
          {(
            [
              ["gpu_hours", "GPU-hours / month"],
              ["usd", "USD / month"],
              ["scale", "Rough scale"],
            ] as const
          ).map(([value, label]) => (
            <label key={value} className="pai-body flex items-center gap-2">
              <input
                type="radio"
                name="computeUnit"
                value={value}
                checked={computeUnit === value}
                onChange={() => setComputeUnit(value)}
              />
              {label}
            </label>
          ))}
        </div>
        {computeUnit === "gpu_hours" && (
          <div>
            <label htmlFor="computeAmount" className={labelClass}>
              Approximate GPU-hours per month
            </label>
            <input
              id="computeAmount"
              name="computeAmount"
              type="number"
              min={0}
              step="any"
              placeholder="e.g. 500"
              className={fieldClass}
            />
          </div>
        )}
        {computeUnit === "usd" && (
          <div>
            <label htmlFor="computeAmount" className={labelClass}>
              Approximate monthly budget (USD)
            </label>
            <input
              id="computeAmount"
              name="computeAmount"
              type="number"
              min={0}
              step="any"
              placeholder="e.g. 2000"
              className={fieldClass}
            />
          </div>
        )}
        {computeUnit === "scale" && (
          <div>
            <label htmlFor="computeScale" className={labelClass}>
              Rough monthly scale
            </label>
            <select id="computeScale" name="computeScale" className={fieldClass} defaultValue="">
              <option value="" disabled>
                Select…
              </option>
              <option value="exploratory">Exploratory / small</option>
              <option value="tens">Tens of GPU-hours / month</option>
              <option value="hundreds">Hundreds of GPU-hours / month</option>
              <option value="thousands">Thousands+ of GPU-hours / month</option>
            </select>
          </div>
        )}
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="pai-h3">Organic compute vs market</legend>
        <p className={helpClass}>
          How much more (or less) would you pay for organic compute—hydropowered,
          community-controlled, locally sourced, Maine-based hosting—compared to
          typical cloud GPU prices?
        </p>
        <div>
          <label htmlFor="organicPremiumPct" className={labelClass}>
            {organicLabel(organicPct)}
          </label>
          <input
            id="organicPremiumPct"
            type="range"
            min={-50}
            max={100}
            step={5}
            value={organicPct}
            onChange={(e) => setOrganicPct(Number(e.target.value))}
            className="mt-2 w-full accent-[var(--pai-red)]"
          />
          <div className="mt-1 flex justify-between pai-mono text-[11px]">
            <span>−50% (less)</span>
            <span>Market</span>
            <span>+100% (more)</span>
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="pai-h3">About you</legend>
        <div>
          <label htmlFor="organization" className={labelClass}>
            Organization
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            required
            autoComplete="organization"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="orgKind" className={labelClass}>
            Kind of organization
          </label>
          <select id="orgKind" name="orgKind" required className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            <option value="nonprofit">Nonprofit</option>
            <option value="university">University / research</option>
            <option value="government">Government / municipality</option>
            <option value="business">Business</option>
            <option value="cooperative">Cooperative</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="location" className={labelClass}>
            Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="City, state / region"
            autoComplete="address-level2"
            className={fieldClass}
          />
          <label className="pai-body mt-2 flex items-center gap-2">
            <input type="checkbox" name="inMaine" />
            We&apos;re in Maine
          </label>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="pai-h3">Timing &amp; requirements</legend>
        <div>
          <label htmlFor="neededBy" className={labelClass}>
            When you need it
          </label>
          <input id="neededBy" name="neededBy" type="month" className={fieldClass} />
          <input
            name="neededByNote"
            type="text"
            placeholder="Optional: range, flexibility, constraints"
            className={`${fieldClass} mt-2`}
          />
        </div>
        <div>
          <label htmlFor="comments" className={labelClass}>
            Other requirements or comments
          </label>
          <textarea
            id="comments"
            name="comments"
            rows={4}
            placeholder="e.g. extra provenance requirements, certain SLAs, specific hardware, specific models"
            className={fieldClass}
          />
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="pai-h3">Acknowledgements</legend>
        <label className="pai-body flex items-start gap-2">
          <input type="checkbox" name="nonBindingAck" required className="mt-1" />
          <span>
            I understand this is a non-binding statement of intent. It does not
            obligate my organization to purchase services or MOCSI to deliver
            them. Final terms will be set in a definitive agreement.
          </span>
        </label>
        <label className="pai-body flex items-start gap-2">
          <input type="checkbox" name="fundraisingRef" className="mt-1" />
          <span>
            MOCSI may reference that we submitted this letter in fundraising
            materials, funder communications, and grant applications. Press
            releases and use of our name or logo still require prior written
            consent.
          </span>
        </label>
      </fieldset>

      {error && (
        <p className="pai-body text-[var(--pai-red)]" role="alert">
          {error}
        </p>
      )}

      <Button type="submit" disabled={pending}>
        {pending ? "Submitting…" : "Submit letter of intent"}
      </Button>
    </form>
  );
}
