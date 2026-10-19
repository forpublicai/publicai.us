import type { Metadata } from "next";
import PageSection from "@/components/ds/PageSection";
import WaitlistForm from "./WaitlistForm";

export const metadata: Metadata = {
  title: "Waitlist | Public AI USA",
  description:
    "Join the MOCSI waitlist for local AI compute in Maine. Tell us what you need and hear from us first when capacity opens.",
};

export default function WaitlistPage() {
  return (
    <>
      <PageSection>
        <p className="pai-mono">MOCSI</p>
        <h1 className="pai-h2 mt-1">Join the waitlist</h1>
        <p className="pai-body mt-2 max-w-2xl">
          MOCSI (the Maine Open Compute Services Initiative) is building trusted, local AI, starting in Maine. We will run auditable, open source, open-weight models on hardware we own, in a community that wants it.
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
