import type { Metadata } from "next";
import PageSection from "@/components/ds/PageSection";
import WaitlistForm from "./WaitlistForm";

export const metadata: Metadata = {
  title: "Waitlist | Public AI USA",
  description:
    "Join the MOCSI waitlist for organic, community-owned AI compute in Maine. Tell us your demand and get first consideration when capacity opens.",
};

export default function WaitlistPage() {
  return (
    <>
      <PageSection>
        <p className="pai-mono">MOCSI</p>
        <h1 className="pai-h2 mt-1">Join the waitlist</h1>
        <p className="pai-body mt-2 max-w-2xl">
          MOCSI (Maine Open Compute Services Initiative) is a community-owned
          compute service in development at Brunswick Landing in Midcoast Maine,
          fiscally sponsored by Metagov as part of its Public AI initiative.
        </p>
        <p className="pai-body mt-2 max-w-2xl">
          We&apos;re building a short waitlist of organizations interested in
          organic compute—hydropowered, community-controlled, locally sourced.
          Pilot capacity will be limited. Joining puts you in line for early
          access and founding-customer consideration when we open up. This is
          not a purchase commitment.
        </p>
        <p className="pai-body mt-2 max-w-2xl">
          Tell us roughly how much monthly compute you&apos;d want, and how much
          more (or less) you&apos;d pay for organic compute compared with typical
          market prices.
        </p>
      </PageSection>

      <PageSection borderTop>
        <WaitlistForm />
      </PageSection>
    </>
  );
}
