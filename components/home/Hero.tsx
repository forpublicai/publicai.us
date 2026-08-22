import Link from "next/link";
import Button from "@/components/ds/Button";
import PageSection from "@/components/ds/PageSection";

export default function Hero() {
  return (
    <PageSection>
      <h1 className="pai-display max-w-4xl">Public AI for Maine</h1>
      <p className="pai-ui mt-6 max-w-2xl">
        Value-added AI services for citizens, municipalities, and small
        businesses—running on community-governed compute at{" "}
        <Link href="/mocsi/" className="no-underline hover:text-brand">
          MOCSI
        </Link>
        , the Maine Open Compute Services Initiative.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-6">
        <Button href="#services">Explore</Button>
        <Link href="/mocsi/" className="pai-body no-underline hover:text-brand">
          About MOCSI
        </Link>
      </div>
      <div className="pai-card mt-10 max-w-2xl">
        <p className="pai-section">Chat, permitting help, and more</p>
        <p className="pai-body-secondary mt-3">
          Start with{" "}
          <a
            href="https://chat.publicai.co"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-brand"
          >
            Public AI Chat
          </a>
          , get help with{" "}
          <Link href="/permitting/" className="no-underline hover:text-brand">
            business permits
          </Link>
          , or browse the full service list below.
        </p>
      </div>
    </PageSection>
  );
}
