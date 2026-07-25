import Link from "next/link";
import Button from "@/components/ds/Button";
import PageSection from "@/components/ds/PageSection";
import ServiceCard from "@/components/ds/ServiceCard";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <PageSection id="services" borderTop>
      <h2 className="pai-h3">Services</h2>
      <p className="pai-body-secondary mt-4 max-w-2xl">
        Concrete AI tools for Maine—built on community-governed infrastructure,
        not distant hyperscalers.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <p className="pai-body-secondary mt-10">
        All services powered by{" "}
        <Link href="/mocsi/" className="no-underline hover:text-brand">
          MOCSI
        </Link>
        —Maine Open Compute Services Initiative.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-6">
        <Button href="mailto:info@publicai.network?subject=Requesting%20access%20to%20Public%20AI%20services">
          Get access
        </Button>
        <Link href="/about/" className="pai-body no-underline hover:text-brand">
          See examples and details
        </Link>
      </div>
    </PageSection>
  );
}
