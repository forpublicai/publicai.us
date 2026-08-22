export default function SiteFooter() {
  return (
    <footer className="pai-hairline-top bg-white">
      <div className="pai-container py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="pai-section">Public AI USA</p>
            <a
              href="mailto:hello@publicai.co"
              className="pai-body-secondary hover:text-brand"
            >
              hello@publicai.co
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:hello@publicai.co"
              className="pai-btn-label text-[var(--text-primary)] no-underline hover:text-brand"
            >
              Request access
            </a>
            <a href="mailto:hello@publicai.co" className="pai-btn-label no-underline hover:text-brand">
              Investors
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
