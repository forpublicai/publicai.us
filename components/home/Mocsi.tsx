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
        MOCSI is a planned community-scale data center (8-16 GPUs, &lt;$1M
        capex) in Maine with local ownership, an explicit public interest
        focus, and an open, auditable service stack.
      </p>

      <h3 className="pai-section mt-4">Why</h3>
      <p className="pai-body-secondary mt-2 max-w-2xl">
        Affordable compute for Maine citizens and businesses, so that
        benefits accrue to Mainers instead of distant tech companies.
        Imagine if AI was both 50% cheaper in Maine and 50% better at the
        stuff that we care about. That&apos;s possible when people own their
        own compute.
      </p>

      <h3 className="pai-section mt-4">How</h3>
      <p className="pai-body-secondary mt-2 max-w-2xl">
        Right now, data centers are among the least popular things in
        America. We turn that data center backlash into affordable compute.
        This has been done before. Maine has a history of{" "}
        <a
          href="https://www.houlton-maine.com/departments/houlton-water-company/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand"
        >
          public
        </a>{" "}
        and{" "}
        <a
          href="https://www.emec.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand"
        >
          cooperative
        </a>{" "}
        infrastructure. We&apos;re inspired by{" "}
        <a
          href="https://townofislesboro.com/committees/islesboro-municipal-broadband/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand"
        >
          town-owned broadband
        </a>
        ,{" "}
        <a
          href="https://www.ecfiber.net/about-us/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand"
        >
          cooperative ISPs
        </a>
        , and other public AI projects like{" "}
        <a
          href="https://www.empireai.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand"
        >
          Empire AI
        </a>{" "}
        and{" "}
        <a
          href="https://californiacompute.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand"
        >
          Calcompute
        </a>
        . And we plan to serve inference in a few ways:
      </p>


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
                        {s.href ? (
                          s.external ? (
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
                          )
                        ) : (
                          s.name
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
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Button href="mailto:hello@publicai.co">Contact us</Button>
      </div>
    </PageSection>
  );
}
