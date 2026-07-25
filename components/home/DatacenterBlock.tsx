import Link from "next/link";
import ButtonLinkout from "@/components/ds/ButtonLinkout";
import PageSection from "@/components/ds/PageSection";

export default function MocsiTeaser() {
  return (
    <PageSection borderTop background="subtle">
      <h2 className="pai-h3">Powered by MOCSI</h2>
      <p className="pai-mono mt-2">Maine Open Compute Services Initiative</p>
      <div className="mt-6 max-w-3xl space-y-4 pai-body">
        <p>
          MOCSI is community-governed open compute in Maine—local ownership of
          the physical asset, an explicit public-services carveout, and open,
          auditable AI models instead of vendor-locked defaults.
        </p>
        <p>
          Every service on this site runs on MOCSI infrastructure. Benefits
          accrue to Mainers: affordable access for residents, municipalities, and
          small businesses—not distant private platforms.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-6">
        <ButtonLinkout href="/mocsi/">Learn more</ButtonLinkout>
        <a
          href="mailto:info@publicai.network?subject=Funding%20or%20co-investment%20in%20MOCSI"
          className="pai-body no-underline hover:text-brand"
        >
          Support the initiative
        </a>
      </div>
    </PageSection>
  );
}
