import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          We&apos;re Working for Maine
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          A pilot-scale public AI compute facility that delivers affordable AI
          for local Maine companies, communities, and residents—with
          community-based governance and a clear path to scale or sunset.
        </p>
        <div className="mt-8 max-w-2xl space-y-6">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:info@publicai.network?subject=Maine%20public%20AI%20deployment"
              className="inline-flex items-center rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand/90"
            >
              Talk to us about a Maine deployment
            </a>
            <Link
              href="/about/"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Read how the pilot works →
            </Link>
          </div>
          <div className="flex aspect-video items-center justify-center rounded-lg bg-gray-200 text-gray-500">
            Video coming soon
          </div>
        </div>
      </div>
    </section>
  );
}
