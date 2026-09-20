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
          MOCSI (Maine Open Compute Services Initiative) is a community-owned compute center in development in Maine. We specialize in local, 'organic' compute: hydropowered, community-controlled, and locally sourced AI inference, right here in Maine.
        </p>
        <p className="pai-body mt-2 max-w-2xl">
          If you're interested in reserving some compute, sign up below. Pilot capacity will be limited. Filling out the form adds you to the waitlist, and does not commit you to a purchase.
        </p>
      </PageSection>

      <PageSection borderTop>
        <WaitlistForm />
      </PageSection>
    </>
  );
}
