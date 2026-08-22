import Link from "next/link";
import PageSection from "@/components/ds/PageSection";

export default function Hero() {
  return (
    <PageSection>
      <h1 className="pai-display max-w-4xl">Public AI for Maine</h1>
      <p className="pai-ui mt-2 max-w-2xl">
        Value-added AI services for citizens, municipalities, and small
        businesses, running on community-governed compute at{" "}
        <Link href="/#mocsi" className="hover:text-brand">
          MOCSI
        </Link>
        , the Maine Open Compute Services Initiative.
      </p>
      <p className="mt-4 text-lg opacity-60" aria-hidden="true">
        🥤🌊🦞
      </p>
    </PageSection>
  );
}
