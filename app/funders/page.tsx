import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ds/Button";
import PageSection from "@/components/ds/PageSection";

export const metadata: Metadata = {
  title: "For funders | Public AI USA",
  description: "Where the MOCSI pilot stands today: pre-construction, small team, seeking co-investment.",
};

export default function FundersPage() {
  return (
    <>
      <PageSection>
        <h1 className="pai-h2">For funders</h1>
        <p className="pai-body mt-2 max-w-2xl">
          MOCSI is pre-construction. Nothing is built yet, and no funding round
          has closed. This page is here so that&apos;s never a surprise.
        </p>
      </PageSection>

      <PageSection borderTop>
        <div className="max-w-3xl space-y-4">
          <section>
            <h2 className="pai-h3">Where things stand</h2>
            <p className="pai-body mt-2">
              We&apos;ve identified a brownfield site in Maine with dark fiber
              and an interested tenant, and held two stakeholder workshops in
              2026 (June and August) covering site, structure, and financing.
              The pilot itself is scoped small: roughly 8–16 GPUs, with a
              defined 12–18 month sunset to evaluate, scale, or shut down.
            </p>
          </section>

          <section>
            <h2 className="pai-h3">Team</h2>
            <p className="pai-body mt-2">
              Fletcher Kittredge joined as fractional CEO in August 2026.
              Beyond that it&apos;s a product lead, counsel, a few advisors,
              and one intern. See{" "}
              <Link href="/about/" className="hover:text-brand">
                who&apos;s involved
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="pai-h3">Why this is harder than it looks</h2>
            <p className="pai-body mt-2">
              Maine&apos;s data center politics are live and unresolved.
              Lewiston&apos;s city council rejected an AI data center at
              Bates Mill in December 2025 after public backlash, and the
              Legislature passed (then had vetoed) a data center moratorium
              in April 2026. MOCSI is designed smaller and differently on
              purpose: local ownership, a public-services carveout, and a
              defined pilot sunset instead of an open-ended buildout. Full
              timeline in{" "}
              <Link href="/#news" className="hover:text-brand">
                News & updates
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="pai-h3">What we&apos;re raising for</h2>
            <p className="pai-body mt-2">
              Site build-out and the pilot&apos;s first 12–18 months of
              operating costs. The financing structure is still being worked
              out. If you&apos;re a potential co-investor or philanthropic
              partner, get in touch and we&apos;ll walk you through where it
              stands.
            </p>
            <div className="mt-4">
              <Button href="mailto:hello@publicai.co">Contact us</Button>
            </div>
          </section>
        </div>
      </PageSection>
    </>
  );
}
