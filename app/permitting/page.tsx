import type { Metadata } from "next";
import Link from "next/link";
import ButtonLinkout from "@/components/ds/ButtonLinkout";
import PageSection from "@/components/ds/PageSection";
import StatusLabel from "@/components/ds/StatusLabel";

export const metadata: Metadata = {
  title: "Permitting assistant | Public AI USA",
  description:
    "Plain-language permitting guidance for Maine small businesses—powered by MOCSI.",
};

export default function PermittingPage() {
  return (
    <>
      <PageSection>
        <div className="flex flex-wrap items-center gap-4">
          <h1 className="pai-h2">Permitting assistant</h1>
          <StatusLabel status="live" />
        </div>
        <p className="pai-body mt-6 max-w-2xl">
          Plain-language guidance on government permits and municipal requirements
          for Maine small businesses.
        </p>
      </PageSection>

      <PageSection borderTop>
        <div className="max-w-3xl space-y-10">
          <section>
            <h2 className="pai-h3">Who it&apos;s for</h2>
            <p className="pai-body mt-4">
              Maine small business owners navigating permits, licenses, and local
              regulations—whether you&apos;re opening a shop, renovating a space, or
              expanding operations.
            </p>
          </section>

          <section>
            <h2 className="pai-h3">What it does</h2>
            <p className="pai-body mt-4">
              The permitting assistant helps you understand what permits you may need,
              which agencies to contact, and what to prepare before you apply.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 pai-body">
              <li>Identify permits required for your business type and location</li>
              <li>Understand timelines, fees, and application steps</li>
              <li>Clarify zoning, health, safety, and environmental requirements</li>
              <li>Prepare checklists before visiting town offices or filing online</li>
            </ul>
            <p className="pai-body-secondary mt-4">
              This tool provides guidance, not legal advice. Always confirm
              requirements with your local municipality or a qualified professional.
            </p>
          </section>

          <section>
            <h2 className="pai-h3">How it works</h2>
            <p className="pai-body mt-4">
              Chat with the permitting assistant through Public AI—running on{" "}
              <Link href="/mocsi/" className="no-underline hover:text-brand">
                MOCSI
              </Link>{ " "}
              infrastructure in Maine.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <ButtonLinkout href="https://chat.publicai.co">Start chat</ButtonLinkout>
              <Link href="/#services" className="pai-body no-underline hover:text-brand">
                All services
              </Link>
            </div>
          </section>

          <section className="pai-card bg-parchment">
            <h2 className="pai-section">Need help beyond permits?</h2>
            <p className="pai-body-secondary mt-3">
              Public AI Chat covers business planning, grant applications, marketing,
              and general questions—also subsidized for Maine users.
            </p>
            <ButtonLinkout href="https://chat.publicai.co" className="mt-6">
              Open chat
            </ButtonLinkout>
          </section>
        </div>
      </PageSection>
    </>
  );
}
