import Link from "next/link";
import Button from "@/components/ds/Button";
import PageSection from "@/components/ds/PageSection";
import { services } from "@/lib/services";

const divisions = [
  {
    name: "Bare-metal access",
    detail: "Dedicated, unshared compute for anchor customers and research institutions.",
  },
  {
    name: "Government deployments",
    detail:
      "Voice-based public service AI agents for local agencies; local deployments of the Public AI Libraries Project catalog.",
  },
  {
    name: "Subsidized end-user access",
    detail: "Chat, API, and agentic tooling for locals and Mainers.",
  },
  {
    name: "Free access",
    detail:
      "For specific local services and public-interest use cases, e.g. suicide hotlines, diagnostic health screening.",
  },
];

export default function Mocsi() {
  const liveServices = services.filter((s) => s.status !== "coming");

  return (
    <PageSection id="mocsi" borderTop background="subtle">
      <h2 className="pai-h3">MOCSI</h2>
      <p className="pai-mono mt-1">Maine Open Compute Services Initiative</p>

      <h3 className="pai-section mt-4">What</h3>
      <p className="pai-body mt-2 max-w-2xl">
        Community-governed open compute in Maine. Local ownership of the
        physical asset, an explicit public-services carveout, and open,
        auditable AI models power every service on this site, so benefits
        accrue to Mainers instead of distant hyperscalers.
      </p>

      <h3 className="pai-section mt-4">Why</h3>
      <p className="pai-body-secondary mt-2 max-w-2xl">
        Maine has a history of public and cooperative infrastructure. We&apos;re
        inspired by{" "}
        <a href="https://www.empireai.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-brand">
          Empire AI
        </a>
        ,{" "}
        <a href="https://californiacompute.org/" target="_blank" rel="noopener noreferrer" className="hover:text-brand">
          CalCompute
        </a>
        ,{" "}
        <a
          href="https://townofislesboro.com/committees/islesboro-municipal-broadband/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand"
        >
          town-owned broadband
        </a>
        , and{" "}
        <a href="https://arrowheadcoop.com/internet/" target="_blank" rel="noopener noreferrer" className="hover:text-brand">
          cooperative ISPs
        </a>
        .
      </p>

      <h3 className="pai-section mt-4">How</h3>
      <table id="services" className="mt-2 w-full max-w-3xl border-collapse text-left pai-body">
        <thead>
          <tr className="pai-hairline-bottom">
            <th className="w-44 py-1 pr-3 pai-mono font-normal">Service category</th>
            <th className="py-1 pai-mono font-normal">What it covers</th>
          </tr>
        </thead>
        <tbody>
          {divisions.map((d) => (
            <tr key={d.name} className="pai-hairline-top align-top">
              <td className="py-2 pr-3 font-semibold">{d.name}</td>
              <td className="py-2">
                {d.detail}
                {d.name === "Subsidized end-user access" && (
                  <>
                    {" "}
                    Currently:{" "}
                    {liveServices.map((s, i) => (
                      <span key={s.id}>
                        {s.external ? (
                          <a
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-brand"
                          >
                            {s.name}
                          </a>
                        ) : (
                          <Link href={s.href} className="hover:text-brand">
                            {s.name}
                          </Link>
                        )}
                        {s.status === "beta" ? " (beta)" : ""}
                        {i < liveServices.length - 1 ? ", " : "."}
                      </span>
                    ))}
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="pai-body-secondary mt-4 max-w-2xl">
        The pilot: a micro data center (roughly 8–16 GPUs) at an existing
        brownfield infrastructure site with dark fiber and an interested
        tenant, operating under community-based governance with a defined
        sunset: evaluate, scale, or shut down after 12–18 months.
      </p>
      <p className="pai-body-secondary mt-2 max-w-2xl">
        We have identified the site and engaged stakeholders connected to the
        Maine Connectivity Authority, with active involvement from Bernstein
        Shur and key Maine business leaders.
      </p>

      <div id="support" className="mt-4 flex flex-wrap items-center gap-3">
        <Button href="mailto:hello@publicai.co">Contact us</Button>
      </div>
    </PageSection>
  );
}
