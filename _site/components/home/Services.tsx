export default function Services() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900">Services</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
          <li>
            Subsidized access for Maine residents and companies via chat, API,
            and agentic tooling
          </li>
          <li>
            Prepaid, usage-capped access for local services and public-interest
            use cases
          </li>
          <li>
            <a
              href="https://libraries.publicai.co"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand hover:underline"
            >
              Library services
            </a>{" "}
            — AI for public libraries nationwide
          </li>
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href="mailto:info@publicai.network?subject=Requesting%20access%20to%20Public%20AI%20USA%20services"
            className="inline-flex items-center rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand/90"
          >
            Request access
          </a>
          <a
            href="/about/"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            See examples and details →
          </a>
        </div>
      </div>
    </section>
  );
}
