import type { Metadata } from "next";
import Link from "next/link";
import ButtonLinkout from "@/components/ds/ButtonLinkout";
import PageSection from "@/components/ds/PageSection";
import StatusLabel from "@/components/ds/StatusLabel";

export const metadata: Metadata = {
  title: "Public AI Aquaculture | Public AI USA",
  description:
    "Plain-language DMR license guidance for Maine aquaculture operators, piloting in Van Buren, Maine.",
};

export default function AquaculturePage() {
  return (
    <>
      <PageSection>
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="pai-h2">Public AI Aquaculture</h1>
          <StatusLabel status="live" />
        </div>
        <p className="pai-body mt-2 max-w-2xl">
          Plain-language guidance on Maine Department of Marine Resources (DMR)
          aquaculture licensing. Piloting in Van Buren, a town of about 2,000 on
          the Canadian border in Aroostook County.
        </p>
      </PageSection>

      <PageSection borderTop>
        <div className="max-w-3xl space-y-4">
          <section>
            <h2 className="pai-h3">Who it&apos;s for</h2>
            <p className="pai-body mt-2">
              People planning an aquaculture operation in Maine, whether starting
              a new lease or expanding an existing one, who need to know which
              DMR license applies.
            </p>
          </section>

          <section>
            <h2 className="pai-h3">What it does</h2>
            <p className="pai-body mt-2">
              The assistant asks about your proposed operation and recommends the
              license type you need.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 pai-body">
              <li>Species, equipment, and method you plan to use</li>
              <li>Site size and lease duration</li>
              <li>Recommended license type based on your answers</li>
              <li>Answers to DMR regulatory questions</li>
            </ul>
            <p className="pai-body-secondary mt-2">
              This is a proof of concept. It provides guidance, not a substitute
              for DMR guidance. Always confirm requirements with DMR directly.
            </p>
          </section>

          <section>
            <h2 className="pai-h3">How it works</h2>
            <p className="pai-body mt-2">
              Chat with the aquaculture assistant, running on{" "}
              <Link href="/#mocsi" className="hover:text-brand">
                MOCSI
              </Link>{" "}
              infrastructure in Maine.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <ButtonLinkout href="https://aquaculture.publicai.co">
                Start chat
              </ButtonLinkout>
              <Link href="/#services" className="pai-body hover:text-brand">
                All services
              </Link>
            </div>
          </section>

          <section>
            <h2 className="pai-h3">Need help beyond aquaculture licensing?</h2>
            <p className="pai-body-secondary mt-2">
              Public AI Chat covers business planning, grant applications,
              marketing, and general questions, also subsidized for Maine users.
            </p>
            <ButtonLinkout href="https://chat.publicai.co" className="mt-2">
              Open chat
            </ButtonLinkout>
          </section>
        </div>
      </PageSection>
    </>
  );
}
