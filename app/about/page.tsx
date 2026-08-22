import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ds/Button";
import PageSection from "@/components/ds/PageSection";
import PeopleSection from "@/components/ds/PeopleSection";

export const metadata: Metadata = {
  title: "About | Public AI USA",
  description:
    "Public AI USA provides value-added AI services for Maine communities, powered by MOCSI.",
};

export default function AboutPage() {
  return (
    <>
      <PageSection>
        <h1 className="pai-h2">About</h1>
        <p className="pai-body mt-2 max-w-2xl">
          Public AI USA is the launch vehicle for community-governed AI services in
          Maine: concrete tools for citizens, municipalities, and small businesses,
          powered by{" "}
          <Link href="/#mocsi" className="hover:text-brand">MOCSI</Link>.
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Button href="mailto:hello@publicai.co">Contact us</Button>
          <Link href="/#services" className="pai-body hover:text-brand">
            Explore services
          </Link>
        </div>
      </PageSection>

      <PageSection borderTop>
        <div className="max-w-3xl space-y-4">
          <section>
            <h2 className="pai-h3">Our mission</h2>
            <p className="pai-body mt-2">
              Public AI is AI as public infrastructure: open, accountable, and built
              to serve everyone. Instead of closed, proprietary systems that lock in
              costs and obscure how data is used, we put governance and benefits in
              the hands of communities.
            </p>
            <p className="pai-body mt-2">
              In Maine, that means delivering value-added services people can use
              today: chat, aquaculture licensing help, library kiosks, and community
              agents, while building community-owned compute through MOCSI.
            </p>
          </section>

          <section>
            <h2 className="pai-h3">Our services</h2>
            <ul className="mt-2 space-y-1 pai-body">
              <li>
                <a
                  href="https://chat.publicai.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand"
                >
                  Public AI Chat
                </a>
                : general AI for Maine residents and organizations
              </li>
              <li>
                <Link href="/aquaculture/" className="hover:text-brand">
                  Public AI Aquaculture
                </Link>
                : DMR license guidance, piloting in Van Buren, Maine
              </li>
              <li>
                <a
                  href="https://libraries.publicai.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand"
                >
                  Library kiosk
                </a>
                : pilot bringing AI workstations to public libraries
              </li>
              <li>Community agents: autonomous tools for Maine groups (beta)</li>
            </ul>
            <Link href="/#services" className="pai-body mt-2 inline-block hover:text-brand">
              View all services
            </Link>
          </section>

          <section>
            <h2 className="pai-h3">MOCSI</h2>
            <p className="pai-body mt-2">
              Every service runs on{" "}
              <Link href="/#mocsi" className="hover:text-brand">MOCSI</Link>
              , the Maine Open Compute Services Initiative.
            </p>
            <Link href="/#mocsi" className="pai-body mt-2 inline-block hover:text-brand">
              Learn about MOCSI
            </Link>
          </section>

          <section>
            <h2 className="pai-h3">People</h2>
            <PeopleSection />
          </section>

          <section id="contact">
            <h2 className="pai-h3">Contact</h2>
            <p className="pai-body mt-2">
              For general inquiries:{" "}
              <a href="mailto:hello@publicai.co" className="hover:text-brand">
                hello@publicai.co
              </a>
              .
            </p>
            <p className="pai-body mt-1">
              For funders, visit{" "}
              <Link href="/#support" className="hover:text-brand">
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
