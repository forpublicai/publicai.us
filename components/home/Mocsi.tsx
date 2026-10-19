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
        Maine local government and nonprofits could use AI to significantly
        increase their effectiveness. Unfortunately, issues with the
        trustworthiness of current AI solutions and lack of access to AI
        expertise are blocking the best uses of AI. MOCSI is building{" "}
        <Link href="/provenance/" className="hover:text-brand">
          trusted
        </Link>
        , local AI: designing applications tailored for these institutions and
        building local AI expertise. We are building a solution that is
        designed with the host community to benefit the host community. We
        are starting in Maine, but are building so other states can follow.
      </p>
      <p className="pai-body mt-2 max-w-2xl">
        We have three projects, all under way: planning is done, and we have
        started raising the funds. They can proceed separately, and each makes
        the others stronger.
      </p>
      <ol className="pai-body mt-2 max-w-2xl list-decimal space-y-1 pl-6">
        <li>
          <strong>Software and Services</strong> will provide AI applications,
          expertise, and training to Maine municipalities, libraries, schools,
          and nonprofits. The software stack will be open source and the
          models open weight, and every system will be designed for strong
          data privacy.
        </li>
        <li>
          <strong>Compute</strong> will provide dedicated GPUs for
          institutions to run their own models, harnesses, RAG, and any other
          compute task. <strong>Software and Services</strong> will run on{" "}
          <strong>Compute</strong> once both are running.
        </li>
        <li>
          <strong>Facilities</strong> will refit an existing building as a
          small data center to host <strong>Compute</strong>. The hosting
          community will be a stakeholder in the data center.
        </li>
      </ol>

      <h3 className="pai-section mt-4">Why</h3>
      <p className="pai-body-secondary mt-2 max-w-2xl">
        So that the benefits of AI stay in Maine. We will work with Maine
        educators and nonprofits to build the Maine AI talent pool. We will
        hire Mainers wherever we can and go out of state only for specialist
        skills unavailable in Maine.
      </p>
      <p className="pai-body-secondary mt-2 max-w-2xl">
        Every customer will know which model answered, which version, where
        it ran, and who runs it. We will host in the United States, build
        strong privacy protections, write data handling into every contract,
        and let any customer leave with its data, no copies left behind. Our{" "}
        <Link href="/provenance/" className="hover:text-brand">
          provenance
        </Link>{" "}
        page has the details.
      </p>

      <h3 className="pai-section mt-4">How</h3>
      <p className="pai-body-secondary mt-2 max-w-2xl">
        Data centers are among the least popular things in America, and
        Maine towns have been voting this year to pause them. MOCSI&apos;s
        will be small, in an existing building, in a community that wants
        and benefits from it. This has been done before. Maine has a history of{" "}
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
        <Button href="/waitlist/">Join the waitlist</Button>
        <Button href="mailto:hello@publicai.co">Contact us</Button>
      </div>
    </PageSection>
  );
}
