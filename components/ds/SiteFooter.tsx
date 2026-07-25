import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="pai-hairline-top bg-white">
      <div className="pai-container py-12 sm:py-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="pai-section">Public AI USA</p>
            <a
              href="mailto:info@publicai.network"
              className="pai-body-secondary mt-2 block no-underline hover:text-brand"
            >
              info@publicai.network
            </a>
          </div>
          <p className="max-w-md pai-body-secondary">
            Public AI services for Maine communities and municipalities—powered
            by{" "}
            <Link href="/mocsi/" className="text-oak no-underline hover:text-brand">
              MOCSI
            </Link>
            , Maine Open Compute Services Initiative.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="pai-body-secondary">
            Want to use our services?{" "}
            <a
              href="mailto:info@publicai.network?subject=Requesting%20access%20to%20Public%20AI%20services"
              className="text-[var(--text-primary)] no-underline hover:text-brand"
            >
              Request access
            </a>
            . Fund MOCSI?{" "}
            <Link href="/mocsi/#support" className="no-underline hover:text-brand">
              Support the initiative
            </Link>
            .
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="mailto:info@publicai.network"
              className="pai-btn-label text-[var(--text-primary)] no-underline hover:text-brand"
            >
              Contact
            </a>
            <Link
              href="/mocsi/#support"
              className="pai-btn-label no-underline hover:text-brand"
            >
              Investors
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
