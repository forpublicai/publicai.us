import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ds/Button";
import PageSection from "@/components/ds/PageSection";

export const metadata: Metadata = {
  title: "About | Public AI USA",
  description:
    "Public AI USA — value-added AI services for Maine communities, powered by MOCSI.",
};

export default function AboutPage() {
  return (
    <>
      <PageSection>
        <h1 className="pai-h2">About</h1>
        <p className="pai-body mt-6 max-w-2xl">
          Public AI USA is the launch vehicle for community-governed AI services in
          Maine—concrete tools for citizens, municipalities, and small businesses,
          powered by{" "}
          <Link href="/mocsi/" className="no-underline hover:text-brand">MOCSI</Link>.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Button href="mailto:info@publicai.network?subject=Public%20AI%20services%20inquiry">
            Contact us
          </Button>
          <Link href="/#services" className="pai-body no-underline hover:text-brand">
            Explore services
          </Link>
        </div>
      </PageSection>

      <PageSection borderTop>
        <div className="max-w-3xl space-y-10">
          <section>
            <h2 className="pai-h3">Our mission</h2>
            <p className="pai-body mt-4">
              Public AI is AI as public infrastructure—open, accountable, and built
              to serve everyone. Instead of closed, proprietary systems that lock in
              costs and obscure how data is used, we put governance and benefits in
              the hands of communities.
            </p>
            <p className="pai-body mt-4">
              In Maine, that means delivering value-added services people can use
              today—chat, permitting help, library kiosks, and community agents—while
              building community-owned compute through MOCSI.
            </p>
          </section>

          <section>
            <h2 className="pai-h3">Our services</h2>
            <ul className="mt-4 space-y-2 pai-body">
              <li>
                <a
                  href="https://chat.publicai.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:text-brand"
                >
                  Public AI Chat
                </a>
                — general AI for Maine residents and organizations
              </li>
              <li>
                <Link href="/permitting/" className="no-underline hover:text-brand">
                  Permitting assistant
                </Link>
                — permit guidance for Maine small businesses
              </li>
              <li>
                <a
                  href="https://libraries.publicai.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:text-brand"
                >
                  Library kiosk
                </a>
                — national pilot bringing AI workstations to public libraries
              </li>
              <li>Community agents — autonomous tools for Maine groups (beta)</li>
            </ul>
            <Link href="/#services" className="pai-body mt-4 inline-block no-underline hover:text-brand">
              View all services
            </Link>
          </section>

          <section>
            <h2 className="pai-h3">MOCSI</h2>
            <p className="pai-body mt-4">
              Every service runs on{" "}
              <Link href="/mocsi/" className="no-underline hover:text-brand">MOCSI</Link>
              —the Maine Open Compute Services Initiative.
            </p>
            <Link href="/mocsi/" className="pai-body mt-4 inline-block no-underline hover:text-brand">
              Learn about MOCSI
            </Link>
          </section>

          <section>
            <h2 className="pai-h3">Team</h2>
            <ul className="mt-4 space-y-4 pai-body">
              <li>
                <strong>Joshua Tan</strong> — Product and strategy lead at Public AI.
              </li>
              <li>
                <strong>Matthew Victor</strong> — Technology and infrastructure attorney at Bernstein Shur.
              </li>
              <li>
                <strong>Ben Polsky</strong> — Infrastructure and technology strategist at Stanford.
              </li>
              <li>
                <strong>Richard Qualey</strong> — Energy and environmental law attorney at Bernstein Shur.
              </li>
              <li>
                <strong>Tom Law</strong> — Founder and CEO of Oak AI, a Maine-based startup.
              </li>
              <li>
                <strong>Kerem Durdag (advisor)</strong> — Builder of public and cooperative internet infrastructure.
              </li>
            </ul>
          </section>

          <section id="contact">
            <h2 className="pai-h3">Contact</h2>
            <p className="pai-body mt-4">
              For general inquiries:{" "}
              <a href="mailto:info@publicai.network" className="no-underline hover:text-brand">
                info@publicai.network
              </a>
              .
            </p>
            <p className="pai-body mt-2">
              For funders, visit{" "}
              <Link href="/mocsi/#support" className="no-underline hover:text-brand">
                Support MOCSI
              </Link>
              .
            </p>
          </section>
        </div>
      </PageSection>
    </>
  );
}
