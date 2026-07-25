import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ds/Button";
import PageSection from "@/components/ds/PageSection";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "MOCSI | Public AI USA",
  description:
    "MOCSI — Maine Open Compute Services Initiative. Community-governed open compute in Maine powering Public AI services.",
};

export default function MocsiPage() {
  const liveServices = services.filter((s) => s.status !== "coming");

  return (
    <>
      <PageSection>
        <h1 className="pai-h2">MOCSI</h1>
        <p className="pai-ui mt-4 text-secondary">
          Maine Open Compute Services Initiative
        </p>
        <p className="pai-body mt-4 max-w-2xl">
          Community-governed open compute in Maine—the infrastructure that powers
          Public AI services for residents, municipalities, and small
          businesses.
        </p>
      </PageSection>

      <PageSection borderTop>
        <div className="max-w-3xl space-y-10">
          <section>
            <h2 className="pai-h3">What is MOCSI?</h2>
            <p className="pai-body mt-4">
              MOCSI is a publicly governed AI compute initiative in Maine. It
              repurposes underutilized infrastructure to deliver affordable AI
              services with <strong>local ownership</strong> of the physical asset
              and an explicit <strong>public-services carveout</strong> so benefits
              flow to Mainers—not distant hyperscalers.
            </p>
            <p className="pai-body mt-4">
              MOCSI runs open, auditable AI models and provides the compute
              backbone for every service on{" "}
              <Link href="/" className="no-underline hover:text-brand">publicai.us</Link>.
            </p>
          </section>

          <section>
            <h2 className="pai-h3">What runs on it</h2>
            <p className="pai-body mt-4">
              Public AI services demonstrate what community-owned compute can deliver:
            </p>
            <ul className="mt-4 space-y-3 pai-body">
              {liveServices.map((service) => (
                <li key={service.id}>
                  <strong>{service.name}</strong> —{" "}
                  {service.description.slice(0, 120)}
                  {service.description.length > 120 ? "…" : ""}{" "}
                  {service.external ? (
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline hover:text-brand"
                    >
                      {service.cta}
                    </a>
                  ) : (
                    <Link href={service.href} className="no-underline hover:text-brand">
                      {service.cta}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <p className="pai-body-secondary mt-4">
              More services—including a statewide Maine AI Dialogue—are in development.
            </p>
          </section>

          <section>
            <h2 className="pai-h3">How it&apos;s different</h2>
            <p className="pai-body mt-4">
              Across the United States, municipalities often default to closed,
              vendor-locked AI services governed outside the public interest—locking
              in long-term costs and opaque data practices that return little value
              to residents.
            </p>
            <p className="pai-body mt-4">
              MOCSI addresses this with <strong>local or municipal ownership</strong>{" "}
              of a physical data-center asset, paired with subsidized access for
              Maine residents and organizations.
            </p>
          </section>

          <section>
            <h2 className="pai-h3">The facility</h2>
            <p className="pai-body mt-4">
              The MOCSI pilot includes a micro data center (roughly 8–16 GPUs) at an
              existing brownfield infrastructure site with dark fiber and an
              interested tenant.
            </p>
          </section>

          <section>
            <h2 className="pai-h3">Why Maine</h2>
            <p className="pai-body mt-4">
              Maine has a history of public and cooperative infrastructure—from
              town-owned broadband to cooperative ISPs—and a growing awareness that
              unchecked, vendor-locked AI leaves communities behind.
            </p>
            <p className="pai-body mt-4">
              In Maine, the Lewiston City Council unanimously voted down a proposed
              AI data center at Bates Mill after significant public outcry. MOCSI
              offers a different model: smaller scale, local ownership, and explicit
              community benefit.
            </p>
            <p className="pai-body-secondary mt-4">
              Want to brief your local officials?{" "}
              <a
                href="mailto:info@publicai.network?subject=Briefing%20local%20officials%20on%20MOCSI"
                className="no-underline hover:text-brand"
              >
                Email us for talking points
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="pai-h3">Governance & pilot structure</h2>
            <p className="pai-body mt-4">
              MOCSI operates under <strong>community-based governance</strong> with
              a defined sunset: evaluate, scale, or shut down after 12–18 months.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 pai-body">
              <li>Open, auditable AI models</li>
              <li>Subsidized access for Maine residents and companies</li>
              <li>Prepaid, usage-capped access for public-interest use cases</li>
              <li>Transparent evaluation of community benefit</li>
            </ul>
          </section>

          <section>
            <h2 className="pai-h3">Progress</h2>
            <p className="pai-body mt-4">
              We have identified an existing brownfield infrastructure site with dark
              fiber and an interested tenant. We have engaged stakeholders connected
              to the Maine Connectivity Authority (MCA), with active involvement from
              Bernstein Shur and key Maine business leaders. Funding combines MCA&apos;s
              Digital Opportunity Fund with federal and state New Markets Tax Credits.
            </p>
          </section>

          <section id="support">
            <h2 className="pai-h3">Support MOCSI</h2>
            <p className="pai-body mt-4">
              MOCSI needs partners who believe in community-owned compute—not another
              hyperscaler warehouse.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <Button href="mailto:info@publicai.network?subject=Funding%20or%20co-investment%20in%20MOCSI">
                Contact us
              </Button>
              <a
                href="mailto:info@publicai.network?subject=Investor%20inquiry%20-%20MOCSI"
                className="pai-body no-underline hover:text-brand"
              >
                Investor inquiry
              </a>
            </div>
          </section>

          <section>
            <h2 className="pai-h3">Partner with us</h2>
            <p className="pai-body mt-4">
              Local organizations, municipalities, and councils can help anchor MOCSI.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <Button href="mailto:info@publicai.network?subject=Becoming%20a%20MOCSI%20partner">
                Partner
              </Button>
              <a
                href="mailto:info@publicai.network?subject=Sharing%20MOCSI%20with%20our%20council"
                className="pai-body no-underline hover:text-brand"
              >
                Share with your council
              </a>
            </div>
          </section>
        </div>
      </PageSection>
    </>
  );
}
