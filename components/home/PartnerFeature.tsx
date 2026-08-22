import PageSection from "@/components/ds/PageSection";

export default function PartnerFeature() {
  return (
    <PageSection borderTop>
      <h2 className="pai-h3">Maine partners</h2>
      <div className="pai-card mt-6 max-w-3xl">
        <h3 className="pai-section">Our partner in Maine</h3>
        <p className="pai-body mt-3">
          We&apos;re building MOCSI in partnership with local organizations that
          share our commitment to community benefit and public governance. This
          helps ensure the facility serves Maine residents and small businesses
          first—not distant hyperscalers.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-6">
          <a
            href="mailto:info@publicai.network?subject=Becoming%20a%20MOCSI%20partner"
            className="pai-btn-label text-brand no-underline hover:text-brandHover"
          >
            Become a partner
          </a>
          <a
            href="mailto:info@publicai.network?subject=Conversation%20about%20MOCSI"
            className="pai-body no-underline hover:text-brand"
          >
            Start a conversation
          </a>
        </div>
      </div>
    </PageSection>
  );
}
