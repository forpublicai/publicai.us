import type { Metadata } from "next";
import Link from "next/link";
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
          Public AI USA is the American home of the Public AI family. Its
          first project is{" "}
          <Link href="/#mocsi" className="hover:text-brand">MOCSI</Link>, the
          Maine Open Compute Services Initiative: trusted, local AI, starting
          in Maine.
        </p>
      </PageSection>

      <PageSection borderTop>
        <div className="max-w-3xl space-y-4">
          <section>
            <h2 className="pai-h3">What we believe</h2>
            <p className="pai-body mt-2">
              Everyone in Maine should be able to use AI they can trust, the
              way everyone should be able to get online: wherever you live, at
              a price you can afford, and run by people who answer to you. Most
              of the computers AI runs on belong to a handful of companies far
              from the people it affects. We think a community can have a real
              stake in some of them, and a say in what they&apos;re for.
            </p>
            <p className="pai-body mt-2">
              Maine is where we&apos;re starting, because Maine has done this
              before, with town-built broadband and, before that, public and
              cooperative water and power. If it works here, we&apos;ll publish
              the recipe so any town or state can follow: all our software will
              be open source, and we will document how every piece fits
              together.
            </p>
          </section>

          <section>
            <h2 className="pai-h3">How we&apos;re organized</h2>
            <p className="pai-body mt-2">
              MOCSI runs as{" "}
              <Link href="/#mocsi" className="hover:text-brand">
                three projects
              </Link>
              : Software and Services, Compute, and Facilities. Each can
              proceed on its own, and each makes the others stronger; every
              answer they give will be{" "}
              <Link href="/provenance/" className="hover:text-brand">
                traceable
              </Link>{" "}
              to its source. Public AI USA is incubated by Public AI, a fiscally
              sponsored project of Metagov.
            </p>
            <p className="pai-body mt-2">
              Public AI is AI as public infrastructure, like highways, water,
              electricity, libraries, and the internet. Our sister projects
              include the <Link href="https://publicai.co" className="hover:text-brand">Public AI Inference Utility</Link>, <Link href="https://publicai.network" className="hover:text-brand">Public AI Network</Link>, <Link href="https://publicai.ch" className="hover:text-brand">Public AI Switzerland</Link>, and <Link href="https://aipotluck.org" className="hover:text-brand">AI Potluck</Link>.
            </p>
          </section>

          <section>
            <h2 className="pai-h3">People</h2>
            <PeopleSection />
          </section>

          <section id="contact">
            <h2 className="pai-h3">Contact</h2>
            <p className="pai-body mt-2">
              Every email goes to a person on the team. If you&apos;re a town,
              a library, a business, or a funder,{" "}
              <Link href="/information/" className="hover:text-brand">
                Information for
              </Link>{" "}
              says what we&apos;d ask of you.
            </p>
            <p className="pai-body mt-1">
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
