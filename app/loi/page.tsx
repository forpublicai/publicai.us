import type { Metadata } from "next";
import PageSection from "@/components/ds/PageSection";
import LoiForm from "./LoiForm";

export const metadata: Metadata = {
  title: "Letter of Intent | Public AI USA",
  description:
    "Non-binding letter of intent for MOCSI compute: monthly demand, organic compute preference, and founding-customer interest.",
};

export default function LoiPage() {
  return (
    <>
      <PageSection>
        <h1 className="pai-h2">Letter of Intent</h1>
        <p className="pai-body mt-2 max-w-2xl">
          MOCSI (Maine Open Compute Services Initiative) is a community-owned
          compute service in development at Brunswick Landing in Midcoast Maine,
          fiscally sponsored by Metagov as part of its Public AI initiative.
        </p>
        <p className="pai-body mt-2 max-w-2xl">
          This form is a <strong>non-binding statement of intent</strong>. It
          does not obligate you to purchase services or MOCSI to deliver them.
          Final terms—including pricing, capacity, and service levels—will be
          set in a definitive agreement. Pilot capacity is limited and allocated
          on a best-effort basis until then. Organizations that submit an LOI
          receive first consideration as founding customers once the MOCSI
          entity is formed.
        </p>
        <p className="pai-body mt-2 max-w-2xl">
          We&apos;re asking for two demand signals: how much monthly compute you
          anticipate, and how much more (or less) you would pay for{" "}
          <strong>organic</strong> compute—hydropowered, community-controlled,
          locally sourced—compared with typical market prices.
        </p>
      </PageSection>

      <PageSection borderTop>
        <LoiForm />
      </PageSection>
    </>
  );
}
