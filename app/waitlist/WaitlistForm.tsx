"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Button from "@/components/ds/Button";
import { submitWaitlist } from "./actions";

type ComputeUnit = "gpu_hours" | "usd" | "scale";
type TimingChoice = "asap" | "not_urgent" | "within_months";

const fieldClass =
  "mt-1 w-full border border-hairline bg-white px-3 py-2 pai-body outline-none focus:border-brand";
const questionClass = "pai-h3";
const helpClass = "pai-body mt-1 text-[var(--pai-gray-500)]";

function Req({ children }: { children: ReactNode }) {
  return (
    <>
      {children}{" "}
      <span className="text-[var(--pai-red)]" aria-hidden="true">
        *
      </span>
    </>
  );
}

function organicLabel(pct: number): string {
  if (pct === 0) return "About the same as typical market prices";
  if (pct > 0) return `${pct}% more than typical market prices`;
  return `${Math.abs(pct)}% less than typical market prices`;
}

/** Visual 0–100 with center (50) = market (0%). Maps −50…0…+200. */
function organicFromVisual(visual: number): number {
  const v = Math.min(100, Math.max(0, visual));
  const pct = v <= 50 ? -50 + v : (v - 50) * 4;
  return Math.round(pct / 5) * 5;
}

function organicToVisual(pct: number): number {
  if (pct <= 0) return 50 + pct;
  return 50 + pct / 4;
}

export default function WaitlistForm() {
  const [computeUnit, setComputeUnit] = useState<ComputeUnit>("gpu_hours");
  const [organicPct, setOrganicPct] = useState(25);
  const [timing, setTiming] = useState<TimingChoice | "">("");
  const [withinMonths, setWithinMonths] = useState("3");
  const [monthsDialogOpen, setMonthsDialogOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  function selectTiming(choice: TimingChoice) {
    if (choice === "within_months") {
      setMonthsDialogOpen(true);
      return;
    }
    setTiming(choice);
    setMonthsDialogOpen(false);
  }

  function confirmWithinMonths() {
    const n = Number.parseInt(withinMonths, 10);
    if (!Number.isFinite(n) || n < 1) {
      setError("Enter how many months (1 or more).");
      return;
    }
    setTiming("within_months");
    setMonthsDialogOpen(false);
    setError(null);
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!timing) {
      setError("Please choose when you need compute.");
      return;
    }

    setPending(true);
    try {
      const formData = new FormData(e.currentTarget);
      formData.set("organicPremiumPct", String(organicPct));
      if (timing === "asap") {
        formData.set("neededBy", "asap");
      } else if (timing === "not_urgent") {
        formData.set("neededBy", "not_urgent");
      } else {
        formData.set("neededBy", `within_${withinMonths}_months`);
      }
      const result = await submitWaitlist(formData);
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
        <h2 className="pai-h3">You&apos;re on the list</h2>
        <p className="pai-body">
          Thanks for joining the MOCSI waitlist. We&apos;ll follow up as capacity
          and pricing firm up. Questions in the meantime?{" "}
          <a href="mailto:hello@publicai.co" className="hover:text-brand">
            hello@publicai.co
          </a>
          .
        </p>
      </div>
    );
  }

  const timingButtonClass = (active: boolean) =>
    [
      "pai-body border px-3 py-2 text-left transition-colors",
      active
        ? "border-brand bg-subtle text-[var(--text-primary)]"
        : "border-hairline bg-white hover:border-brand",
    ].join(" ");

  return (
    <form onSubmit={onSubmit} className="relative max-w-xl space-y-8" noValidate>
      {/* Honeypot */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="organization" className={questionClass}>
          <Req>Organization</Req>
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
        <label htmlFor="name" className={questionClass}>
          <Req>Your name</Req>
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
        <label htmlFor="email" className={questionClass}>
          <Req>Email</Req>
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
        <label htmlFor="location" className={questionClass}>
          Location
        </label>
        <p className={helpClass}>City, state / region</p>
        <input
          id="location"
          name="location"
          type="text"
          autoComplete="address-level2"
          className={fieldClass}
        />
      </div>

      <div className="space-y-3">
        <p className={questionClass}>
          <Req>How much monthly compute do you want?</Req>
        </p>
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
          <input
            id="computeAmount"
            name="computeAmount"
            type="number"
            min={0}
            step="any"
            required
            aria-label="Approximate GPU-hours per month"
            placeholder="e.g. 500"
            className={fieldClass}
          />
        )}
        {computeUnit === "usd" && (
          <input
            id="computeAmount"
            name="computeAmount"
            type="number"
            min={0}
            step="any"
            required
            aria-label="Approximate monthly budget in USD"
            placeholder="e.g. 2000"
            className={fieldClass}
          />
        )}
        {computeUnit === "scale" && (
          <select
            id="computeScale"
            name="computeScale"
            required
            aria-label="Rough monthly scale"
            className={fieldClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select…
            </option>
            <option value="exploratory">Exploratory / small</option>
            <option value="tens">Tens of GPU-hours / month</option>
            <option value="hundreds">Hundreds of GPU-hours / month</option>
            <option value="thousands">Thousands+ of GPU-hours / month</option>
          </select>
        )}
      </div>

      <div className="space-y-3">
        <p className={questionClass}>
          <Req>
            How much more (or less) would you pay for local, &apos;organic&apos;
            compute versus typical cloud GPU prices?
          </Req>
        </p>
        <p className={helpClass}>
          Organic means smaller-scale, hydropowered, community-controlled, and
          ethical.
        </p>
        <div>
          <label htmlFor="organicPremiumPct" className="pai-section block">
            {organicLabel(organicPct)}
          </label>
          <input
            id="organicPremiumPct"
            type="range"
            min={0}
            max={100}
            step={1}
            value={organicToVisual(organicPct)}
            onChange={(e) => setOrganicPct(organicFromVisual(Number(e.target.value)))}
            className="mt-2 w-full accent-[var(--pai-red)]"
            aria-valuemin={-50}
            aria-valuemax={200}
            aria-valuenow={organicPct}
            aria-valuetext={organicLabel(organicPct)}
          />
          <div className="mt-1 flex justify-between pai-mono text-[11px]">
            <span>−50% (less)</span>
            <span>Market</span>
            <span>+200% (more)</span>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="computePurpose" className={questionClass}>
          What do you need compute for?
        </label>
        <p className={helpClass}>
          Workloads, models, training vs inference, or other context.
        </p>
        <textarea
          id="computePurpose"
          name="computePurpose"
          rows={3}
          className={fieldClass}
        />
      </div>

      <div className="space-y-3">
        <p className={questionClass}>
          <Req>When do you need compute?</Req>
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className={timingButtonClass(timing === "asap")}
            onClick={() => selectTiming("asap")}
          >
            ASAP
          </button>
          <button
            type="button"
            className={timingButtonClass(timing === "not_urgent")}
            onClick={() => selectTiming("not_urgent")}
          >
            Not urgent
          </button>
          <button
            type="button"
            className={timingButtonClass(timing === "within_months")}
            onClick={() => selectTiming("within_months")}
          >
            {timing === "within_months"
              ? `Within ${withinMonths} month${withinMonths === "1" ? "" : "s"}`
              : "Within X months"}
          </button>
        </div>
      </div>

      <div>
        <label htmlFor="comments" className={questionClass}>
          Other requirements or comments
        </label>
        <p className={helpClass}>
          e.g. extra provenance requirements, certain SLAs, specific hardware,
          specific models, how excited you are about local, community compute
        </p>
        <textarea id="comments" name="comments" rows={4} className={fieldClass} />
      </div>

      <div>
        <label className="pai-body flex items-start gap-2">
          <input type="checkbox" name="nonBindingAck" required className="mt-1" />
          <span>
            <span className="text-[var(--pai-red)]" aria-hidden="true">
              *{" "}
            </span>
            I understand joining the waitlist is non-binding. It does not
            obligate my organization to purchase services or MOCSI to deliver
            them. MOCSI may reference that we joined this waitlist in fundraising
            materials, funder communications, and grant applications. Press
            releases and use of our name or logo still require prior written
            consent.
          </span>
        </label>
      </div>

      {error && (
        <p className="pai-body text-[var(--pai-red)]" role="alert">
          {error}
        </p>
      )}

      <Button type="submit" disabled={pending}>
        {pending ? "Joining…" : "Join the waitlist"}
      </Button>

      {monthsDialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="months-dialog-title"
          onClick={() => setMonthsDialogOpen(false)}
        >
          <div
            className="w-full max-w-sm space-y-3 border border-hairline bg-white p-4 shadow-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="months-dialog-title" className="pai-h3">
              Within how many months?
            </h2>
            <input
              type="number"
              min={1}
              step={1}
              value={withinMonths}
              onChange={(e) => setWithinMonths(e.target.value)}
              className={fieldClass}
              autoFocus
            />
            <div className="flex flex-wrap gap-2">
              <Button type="button" onClick={confirmWithinMonths}>
                Confirm
              </Button>
              <button
                type="button"
                className="pai-body border border-hairline px-3 py-2"
                onClick={() => setMonthsDialogOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
