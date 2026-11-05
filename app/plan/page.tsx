import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ds/Button";
import PageSection from "@/components/ds/PageSection";
import CopyAgentPrompt from "./CopyAgentPrompt";

export const metadata: Metadata = {
  title: "The plan | Public AI USA",
  description:
    "MOCSI's active plan: research, financial models, site evaluations, and a reusable package for community-scale compute—showing our work as we go.",
};

const DECK_URL =
  "https://docs.google.com/presentation/d/13Uo47c_HsPGiHJL_Y_tRFQb953UufkJc06DJJlLiHC0/edit";

const PACKAGE_ZIP = "/mocsi/mocsi-package-november-2026.zip";

const AGENT_PROMPT = `Place: [your region or community]

Help me plan a MOCSI-style pilot-scale AI compute package for the place above.

1. Download and unpack https://publicai.us${PACKAGE_ZIP}.
2. Read everything in the package (summaries, both workbooks, decision log, open questions, current state, and the rest).
3. Treat all figures as mid-case planning estimates, not quotes, not audited financials, and not an offer of securities.
4. Adapt the pilot-scale plan to that place.`;

const toc = [
  { href: "#what", label: "What MOCSI is" },
  { href: "#projects", label: "Three projects" },
  { href: "#sites", label: "Sites we have researched" },
  { href: "#compute", label: "Compute ask" },
  { href: "#facility", label: "Facility upgrades" },
  { href: "#build", label: "How to build a data center" },
  { href: "#contact", label: "Get in touch" },
] as const;

export default function PlanPage() {
  return (
    <>
      <PageSection>
        <h1 className="pai-h2">The plan</h1>
        <p className="pai-body mt-2 max-w-2xl">
          This is our active plan for MOCSI including investor decks, financial
          models, and site research. It&apos;s rebuilt regularly from weekly
          working sessions, active Slack discussions, and new information we
          receive. We are showing our work so that neighbors, funders, and other
          communities can follow along and reuse what&apos;s useful.
        </p>
        <p className="pai-body mt-2 max-w-2xl">
          The most recent release is{" "}
          <a href={PACKAGE_ZIP} className="hover:text-brand">
            0e13319 (November 2026)
          </a>
          .
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button href={DECK_URL}>Open the deck</Button>
          <Button href="mailto:hello@publicai.co">Contact us</Button>
        </div>
        <nav aria-label="On this page" className="mt-6 max-w-2xl">
          <p className="pai-section">On this page</p>
          <ol className="pai-body mt-2 list-decimal space-y-1 pl-5">
            {toc.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-brand">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </PageSection>

      <PageSection borderTop>
        <div className="max-w-3xl space-y-4">
          <section id="what">
            <h2 className="pai-h3">What MOCSI is</h2>
            <p className="pai-body mt-2">
              MOCSI is building AI compute that public-interest institutions can
              trust: open-weight models we host ourselves, on hardware we run, in
              a data center where the host community is a stakeholder. It is a
              project of Public AI, fiscally sponsored by Metagov.
            </p>
            <p className="pai-body mt-2">
              Four commitments define the product: open weights we self-host;
              transparent model and location provenance; auditable answers in
              that narrow sense; and community governance of the host facility.
              Pricing is competitive—customers choose us for an inspectable
              stack, not a race to the bottom.
            </p>
          </section>

          <section id="projects">
            <h2 className="pai-h3">Three projects</h2>
            <p className="pai-body mt-2">
              The work splits into three tracks with different funders and
              likely legal forms. Upper layers can run on rented substitutes
              until the layer beneath them is ready.
            </p>
            <ol className="pai-body mt-2 list-decimal space-y-1 pl-5">
              <li>
                <strong>Software and Services</strong> — applications,
                assistants, agent hosting, and engineering for Maine institutions
                and public-interest buyers.
              </li>
              <li>
                <strong>Compute</strong> — a liquid-cooled cluster of used
                NVIDIA datacenter GPUs (64 at launch, growing toward 96),
                financed as equipment.
              </li>
              <li>
                <strong>Facilities</strong> — electrical service, backup power,
                and cooling in a renovated Maine building where the host
                community holds a stake.
              </li>
            </ol>
            <div className="mt-4">
              <Image
                src="/mocsi/StackDiagram.svg"
                alt="Diagram of MOCSI's three tracks: Software and Services, Compute, and Facilities"
                width={720}
                height={420}
                className="h-auto w-full max-w-xl"
              />
            </div>
          </section>
        </div>
      </PageSection>

      <PageSection borderTop background="subtle">
        <div className="max-w-3xl space-y-4">
          <section id="sites">
            <h2 className="pai-h3">Sites we have researched</h2>
            <p className="pai-body mt-2">
              No permanent site is selected. These are places we have done desk
              research, visits, or both. Permanent-home criteria include
              community stake in the facility; some sites below are only
              candidates for interim hosting.
            </p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full border-collapse text-left pai-body">
                <thead>
                  <tr className="pai-hairline-bottom">
                    <th className="py-2 pr-3 font-semibold">Site</th>
                    <th className="py-2 pr-3 font-semibold">Role under study</th>
                    <th className="py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="pai-hairline-top align-top">
                    <td className="py-2 pr-3">
                      Van Buren Connectivity Center / planned Community
                      Innovation Hub (Aroostook County)
                    </td>
                    <td className="py-2 pr-3">
                      Permanent-home candidate under study; Phase 1 pilot in the
                      existing Connectivity Center is also under discussion
                    </td>
                    <td className="py-2">
                      Municipal utility (Van Buren Light &amp; Power). Town is
                      advancing a connectivity hub with partners in Fort Kent
                      and Fort Fairfield. Facility upgrades for a full build are
                      modeled separately (mid ~$2.05M; range ~$1.03M–$3.85M).
                      Conversations with the town are ongoing.
                    </td>
                  </tr>
                  <tr className="pai-hairline-top align-top">
                    <td className="py-2 pr-3">Brunswick Landing</td>
                    <td className="py-2 pr-3">
                      Interim host for one ~8-GPU / ~10 kW IT server (least
                      capital paths)
                    </td>
                    <td className="py-2">
                      Campus includes a FirstLight data center (published
                      ~12–15 kW/rack class). Does not meet the community
                      ownership gate for a permanent home. Field work (landlord,
                      zoning, fiber, rates) still open.
                    </td>
                  </tr>
                  <tr className="pai-hairline-top align-top">
                    <td className="py-2 pr-3">
                      Former Loring AFB campus (Limestone)
                    </td>
                    <td className="py-2 pr-3">Interim / colo pilot candidate</td>
                    <td className="py-2">
                      Public reporting describes a LiquidCool-oriented data
                      center project on the campus. Under evaluation as an
                      existing-facility path while a community-owned permanent
                      home is built.
                    </td>
                  </tr>
                  <tr className="pai-hairline-top align-top">
                    <td className="py-2 pr-3">
                      340 Cumberland Ave, Portland (CENTRA / PWM1)
                    </td>
                    <td className="py-2 pr-3">
                      Evaluated; not a permanent-home candidate
                    </td>
                    <td className="py-2">
                      Carrier hotel / colo with strong interconnect. Strong on
                      time-to-market and redundancy class; does not offer host
                      community ownership of the facility, which disqualifies it
                      as a permanent home under current criteria. Earlier colo
                      quote is expired and undersized for the current fleet
                      plan.
                    </td>
                  </tr>
                  <tr className="pai-hairline-top align-top">
                    <td className="py-2 pr-3">
                      Houlton, Calais, Madison (and similar towns)
                    </td>
                    <td className="py-2 pr-3">
                      Candidate class, lighter diligence
                    </td>
                    <td className="py-2">
                      Same shape as Van Buren: municipal or cooperative
                      utilities. Tracked as the broader class of towns that
                      could meet the community-stake requirement; not fully
                      diligenced as Stage 1 sites.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </PageSection>

      <PageSection borderTop>
        <div className="max-w-3xl space-y-4">
          <section id="compute">
            <h2 className="pai-h3">Compute ask (mid-case)</h2>
            <p className="pai-body mt-2">
              Used NVIDIA datacenter GPUs in eight-GPU servers, liquid-cooled:
              64 GPUs at launch, growing toward 96 by year 4. Hardware model at
              purchase is not locked; the workbook prices H100 then H200 as the
              current basis.
            </p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full border-collapse text-left pai-body">
                <thead>
                  <tr className="pai-hairline-bottom">
                    <th className="py-2 pr-3 font-semibold">Item</th>
                    <th className="py-2 font-semibold">Mid-case figure</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="pai-hairline-top">
                    <td className="py-2 pr-3">
                      Financing sought (launch hardware + working capital)
                    </td>
                    <td className="py-2">$2.14M</td>
                  </tr>
                  <tr className="pai-hairline-top">
                    <td className="py-2 pr-3">Six-year modeled revenue</td>
                    <td className="py-2">$11.55M</td>
                  </tr>
                  <tr className="pai-hairline-top">
                    <td className="py-2 pr-3">
                      Revenue per $1 of operating + hardware cost
                    </td>
                    <td className="py-2">$2.15 (facility grant-funded case)</td>
                  </tr>
                  <tr className="pai-hairline-top">
                    <td className="py-2 pr-3">
                      Lowest modeled year-end cash after loan payments
                    </td>
                    <td className="py-2">$1.16M</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="pai-body mt-2 text-[var(--pai-gray-500)]">
              Full tables and assumptions are in the financial summary PDF and
              the compute workbook in the package. Demand is largely modeled; we
              do not yet have founding term sheets.
            </p>
          </section>

          <section id="facility">
            <h2 className="pai-h3">Facility upgrades (separate project)</h2>
            <p className="pai-body mt-2">
              Electrical service, backup power, and liquid cooling for a ~110 kW
              design load. Planning estimates from list prices and trade
              guides—not budgetary quotes.
            </p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full border-collapse text-left pai-body">
                <thead>
                  <tr className="pai-hairline-bottom">
                    <th className="py-2 pr-3 font-semibold">Subsystem</th>
                    <th className="py-2 pr-3 font-semibold">Mid</th>
                    <th className="py-2 font-semibold">Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="pai-hairline-top">
                    <td className="py-2 pr-3">
                      Electrical service and distribution
                    </td>
                    <td className="py-2 pr-3">$695k</td>
                    <td className="py-2">$313k–$1.43M</td>
                  </tr>
                  <tr className="pai-hairline-top">
                    <td className="py-2 pr-3">Backup power (generator + UPS)</td>
                    <td className="py-2 pr-3">$443k</td>
                    <td className="py-2">$291k–$664k</td>
                  </tr>
                  <tr className="pai-hairline-top">
                    <td className="py-2 pr-3">Liquid cooling plant</td>
                    <td className="py-2 pr-3">$910k</td>
                    <td className="py-2">$422k–$1.76M</td>
                  </tr>
                  <tr className="pai-hairline-top font-semibold">
                    <td className="py-2 pr-3">Total</td>
                    <td className="py-2 pr-3">$2.05M</td>
                    <td className="py-2">$1.03M–$3.85M</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="pai-body mt-2">
              If a grant funds the facility, the compute pays about $598/kW-yr
              on design capacity; if financed over 20 years at 8.5% (assuming a
              loan guarantee), about $2,541/kW-yr. Equipment renewal after year
              6 is largely unfunded in the current charge—see the facility
              renewal note inside the package zip.
            </p>
          </section>
        </div>
      </PageSection>

      <PageSection borderTop background="subtle">
        <div className="max-w-3xl space-y-4">
          <section id="build">
            <h2 className="pai-h3">How to build a data center</h2>
            <p className="pai-body mt-2">
              These are the same materials we use to plan MOCSI. If you are
              scoping a community-scale compute facility somewhere else, start
              with the{" "}
              <a
                href={DECK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand"
              >
                public deck
              </a>
              , the{" "}
              <a
                href="/mocsi/NvidiaUsedLiquidCooledModel.xlsx"
                className="hover:text-brand"
              >
                financial model
              </a>
              , the{" "}
              <a href="/mocsi/DecisionLog.md" className="hover:text-brand">
                decision log
              </a>
              , and the{" "}
              <a href="/mocsi/OpenQuestions.md" className="hover:text-brand">
                open questions
              </a>
              —or{" "}
              <a href={PACKAGE_ZIP} className="hover:text-brand">
                download the November 2026 package (zip)
              </a>{" "}
              and read everything. Figures will keep changing.
            </p>
            <CopyAgentPrompt text={AGENT_PROMPT} />
          </section>
        </div>
      </PageSection>

      <PageSection borderTop>
        <div className="max-w-3xl space-y-4">
          <section id="contact">
            <h2 className="pai-h3">Get in touch</h2>
            <p className="pai-body mt-2">
              Questions, partnership ideas, or feedback on the plan—we want to
              hear from you, whether you are a funder, a Maine institution, or
              someone adapting these materials for another place.
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
