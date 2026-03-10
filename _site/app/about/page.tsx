import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Public AI USA",
  description: "Public AI USA — pilot-scale public AI compute in Maine.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="border-b border-gray-100 pb-6">
        <h1 className="text-3xl font-bold text-gray-900">About</h1>
        <p className="mt-3 max-w-2xl text-gray-700">
          Learn how the Maine pilot works, why it matters, and how you can help
          bring public AI to your community.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <a
            href="mailto:info@publicai.network?subject=Conversation%20about%20Maine%20public%20AI%20pilot"
            className="inline-flex items-center rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand/90"
          >
            Start a conversation about Maine
          </a>
        </div>
      </header>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900">
          What we&apos;re doing
        </h2>
        <p className="mt-4 text-gray-700">
          We are piloting a pilot-scale public AI compute facility in Maine
          that repurposes an underutilized site to deliver{" "}
          <strong>affordable AI services</strong> for local Maine companies,
          communities, and residents.
        </p>
        <p className="mt-4 text-gray-700">The pilot includes:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
          <li>A micro data center (roughly 8–16 GPUs)</li>
          <li>Open, auditable AI models</li>
          <li>
            Subsidized access for Maine residents and companies through chat,
            API, and agentic tooling
          </li>
          <li>
            Prepaid, usage-capped access for local services and public-interest
            use cases
          </li>
          <li>
            <strong>Community-based governance</strong>
          </li>
          <li>
            A defined sunset: evaluate, scale, or shut down after 12–18 months
          </li>
        </ul>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <a
            href="mailto:info@publicai.network?subject=Becoming%20a%20pilot%20site"
            className="inline-flex items-center rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand/90"
          >
            Ask about becoming a pilot site
          </a>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900">Why it matters</h2>
        <p className="mt-4 text-gray-700">
          Across the United States, community resistance is increasingly
          blocking large AI and data-center developments. At the same time,
          municipalities often default to closed, vendor-locked AI services
          governed outside the public interest—locking in long-term costs and
          opaque data practices that return little value to residents.
        </p>
        <p className="mt-4 text-gray-700">
          A publicly governed infrastructure pilot in Maine addresses both:{" "}
          <strong>local or municipal ownership</strong> of a physical
          data-center asset, paired with an explicit{" "}
          <strong>public-services carveout</strong> so benefits accrue to
          residents rather than distant private platforms. This is a replicable
          pattern; Maine can lead the way.
        </p>
        <p className="mt-4 text-sm text-gray-700">
          Want to brief your local officials?{" "}
          <a
            href="mailto:info@publicai.network?subject=Briefing%20local%20officials%20on%20Public%20AI%20USA"
            className="font-medium text-brand hover:underline"
          >
            Email us for talking points
          </a>
          .
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900">
          Current progress
        </h2>
        <p className="mt-4 text-gray-700">
          We have identified an existing brownfield infrastructure site with
          dark fiber and an interested tenant, and are ready to break ground by
          summer. We have engaged stakeholders connected to the Maine
          Connectivity Authority (MCA), with active involvement from Bernstein
          Shur and key Maine business and infrastructure leaders. A clear
          funding pathway has been identified, combining MCA&apos;s Digital
          Opportunity Fund with federal and state New Markets Tax Credits to
          support community-benefit, non-hyperscale infrastructure.
        </p>
        <p className="mt-4 text-sm text-gray-700">
          If you&apos;re a funder or institutional partner and want to support
          the pilot,{" "}
          <a
            href="mailto:info@publicai.network?subject=Funding%20or%20co-investment%20in%20Public%20AI%20USA"
            className="font-medium text-brand hover:underline"
          >
            contact us about funding or co-investment
          </a>
          .
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900">Team</h2>
        <ul className="mt-4 space-y-3 text-gray-700">
          <li>
            <strong>Joshua Tan</strong> — Product and strategy lead at Public
            AI; background in AI systems, governance, and public-interest
            digital infrastructure.
          </li>
          <li>
            <strong>Matthew Victor</strong> — Technology and infrastructure
            attorney at Bernstein Shur; deep experience in Maine politics,
            public-sector projects, and complex multi-stakeholder deals.
          </li>
          <li>
            <strong>Ben Polsky</strong> — Infrastructure and technology
            strategist at Stanford; focuses on aligning new technology
            deployments with institutional and public-sector stakeholders.
          </li>
          <li>
            <strong>Richard Qualey</strong> — Energy and environmental law
            attorney at Bernstein Shur; native of northern Maine with deep
            regional knowledge.
          </li>
          <li>
            <strong>Tom Law</strong> — Founder and CEO of Oak AI, a Maine-based
            startup focused on applied AI systems.
          </li>
          <li>
            <strong>Kerem Durdag (advisor)</strong> — Longtime builder of public
            and cooperative internet infrastructure; former CEO of a Maine-based
            B Corp delivering public internet services.
          </li>
        </ul>
      </section>

      <section className="mt-10" id="contact">
        <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
        <p className="mt-4 text-gray-700">
          For general inquiries:{" "}
          <a
            href="mailto:info@publicai.network"
            className="font-medium text-brand hover:underline"
          >
            info@publicai.network
          </a>
          .
        </p>
        <p className="mt-2 text-gray-700">
          For funders and investment inquiries, please use the same address with
          the subject line “Investor inquiry”.
        </p>
      </section>
    </article>
  );
}
