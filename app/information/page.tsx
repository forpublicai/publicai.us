import type { Metadata } from "next";
import Link from "next/link";
import PageSection from "@/components/ds/PageSection";

export const metadata: Metadata = {
  title: "Information for | Public AI USA",
  description:
    "What MOCSI will offer residents, towns, libraries and schools, businesses, and funders, and how to reach us.",
};

type Action = { label: string; href: string };

function Actions({ items }: { items: Action[] }) {
  return (
    <p className="pai-body mt-2">
      {items.map((a, i) => {
        const external = a.href.startsWith("http");
        return (
          <span key={a.href + a.label}>
            {i > 0 && " · "}
            {external || a.href.startsWith("mailto:") ? (
              <a
                href={a.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="font-semibold hover:text-brand"
              >
                {a.label}
              </a>
            ) : (
              <Link href={a.href} className="font-semibold hover:text-brand">
                {a.label}
              </Link>
            )}
          </span>
        );
      })}
    </p>
  );
}

const talk: Action = { label: "Talk to us", href: "mailto:hello@publicai.co" };

export default function InformationPage() {
  return (
    <>
      <PageSection>
        <p className="pai-mono">MOCSI</p>
        <h1 className="pai-h2 mt-1">Information for</h1>
      </PageSection>

      <PageSection borderTop>
        <div className="max-w-3xl space-y-4">
          <section id="residents">
            <h2 className="pai-h3">Residents</h2>
            <p className="pai-body mt-2">
              Public AI Chat is open now: a general-purpose AI chat, subsidized
              for Maine users and run by Public AI, our sister project. MOCSI
              is building the local version, and a public dialogue on AI in
              Maine is planned.
            </p>
            <Actions items={[{ label: "Try Public AI Chat", href: "https://chat.publicai.co" }]} />
          </section>

          <section id="towns">
            <h2 className="pai-h3">Towns</h2>
            <p className="pai-body mt-2">
              MOCSI will build AI tools with the towns that use them: answering
              residents&apos; questions, finding things in town records, working
              through permits, and helping volunteer fire and EMS departments
              with training, paperwork, administration, and fund-raising. Every
              answer will trace back to its source, so you can tell a resident
              what produced it.
            </p>
            <Actions items={[{ label: "How provenance works", href: "/provenance/" }, talk]} />
            <p className="pai-body mt-3">
              Does your town have an empty industrial building and want to host
              a small data center? MOCSI needs a home in a Maine community that
              wants it, where the community will be a stakeholder in the
              facility.
            </p>
            <Actions items={[{ label: "Talk to us about hosting", href: "mailto:hello@publicai.co" }]} />
          </section>

          <section id="libraries-and-schools">
            <h2 className="pai-h3">Libraries and schools</h2>
            <p className="pai-body mt-2">
              Public AI&apos;s library kiosk is in a pilot now: a shared AI
              workstation for patrons in a trusted public space. MOCSI will add
              training and tools built with librarians and teachers.
            </p>
            <Actions
              items={[{ label: "Explore the kiosk program", href: "https://libraries.publicai.co" }, talk]}
            />
          </section>

          <section id="businesses">
            <h2 className="pai-h3">Businesses</h2>
            <p className="pai-body mt-2">
              Have work that needs a model you can inspect? Tell us what it is,
              and we will scope it and price it with you, on open-weight models
              MOCSI will host. You will know which model answered and where it
              ran.
            </p>
            <Actions items={[{ label: "Join the waitlist", href: "/waitlist/" }]} />
          </section>

          <section id="funders-and-investors">
            <h2 className="pai-h3">Funders and investors</h2>
            <p className="pai-body mt-2">
              Where MOCSI stands, what it is raising for, and who to talk to.
            </p>
            <Actions items={[{ label: "Support MOCSI", href: "/funders/" }]} />
          </section>
        </div>
      </PageSection>
    </>
  );
}
