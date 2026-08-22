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
          Public AI USA is the launch vehicle and eventual portal for community-governed AI services in Maine and beyond: concrete tools for citizens, municipalities, and small businesses across the country,
          powered by{" "}
          <Link href="/#mocsi" className="hover:text-brand">MOCSI</Link>.
        </p>
      </PageSection>

      <PageSection borderTop>
        <div className="max-w-3xl space-y-4">
          <section>
            <h2 className="pai-h3">Our mission</h2>
            <p className="pai-body mt-2">
              Public AI is AI as public infrastructure: think highways, water, electricity, libraries, and the internet. It's open, accountable, and built
              to serve everyone. We're a group of people who believe in public AI and are working to make it happen. Take a look at our sister projects including the <Link href="https://publicai.co" className="hover:text-brand">Public AI Inference Utility</Link>, <Link href="https://publicai.network" className="hover:text-brand">Public AI Network</Link>, <Link href="https://publicai.ch" className="hover:text-brand">Public AI Switzerland</Link>, and <Link href="https://aipotluck.org" className="hover:text-brand">AI Potluck</Link>.
            </p>
            <p className="pai-body mt-2">
              For Mainers, we also provide value-added services on top of the raw inference, for example chat, a permitting assistant for small businesses, kiosks for public libraries, and community agents for local governments. All served by MOCSI.
            </p>
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
              <Link href="/funders/" className="hover:text-brand">
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
