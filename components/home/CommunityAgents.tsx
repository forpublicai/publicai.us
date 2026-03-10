export default function CommunityAgents() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900">Community agents</h2>
        <p className="mt-4 text-gray-700">
          Pre-deployed agents that work autonomously on behalf of Maine groups
          and companies—no need to build your own.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
          <li>
            <strong>Town hall summaries</strong> — Agents that monitor and
            summarize public meetings for your organization.
          </li>
          <li>
            <strong>Grant monitoring</strong> — Keep track of grant
            requirements, deadlines, and reporting without manual overhead.
          </li>
        </ul>
        <p className="mt-4 text-sm text-gray-500">
          More use cases and availability coming as the pilot launches.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href="mailto:info@publicai.network?subject=Proposing%20a%20community%20agent"
            className="inline-flex items-center rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand/90"
          >
            Propose a community agent
          </a>
        </div>
      </div>
    </section>
  );
}
