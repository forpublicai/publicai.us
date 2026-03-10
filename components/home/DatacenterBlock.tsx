import Link from "next/link";

export default function DatacenterBlock() {
  return (
    <section className="border-y border-gray-200 bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Data centers are the least popular thing in America
        </h2>
        <div className="mt-4 space-y-4 text-gray-700">
          <p>
            Across the United States, community resistance is increasingly
            blocking large AI and data-center developments. In Q2 of 2025 alone,
            more than $100 billion in proposed data center projects were halted
            or delayed due to local opposition, permitting issues, and community
            pushback.
          </p>
          <p>
            In Maine, the Lewiston City Council unanimously voted down a
            proposed AI data center at Bates Mill after significant public
            outcry over potential impacts and lack of local benefit. At the same
            time, municipalities often default to closed, vendor-locked AI
            services that return little value to residents.
          </p>
          <p>
            A publicly governed infrastructure pilot in Maine addresses both:
            local ownership of the asset and an explicit public-services carveout
            so benefits accrue to Mainers.{" "}
            <Link href="/about/" className="font-medium text-brand hover:underline">
              Why it matters
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
