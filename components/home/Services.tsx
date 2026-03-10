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
      </div>
    </section>
  );
}
