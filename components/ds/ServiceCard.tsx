import Link from "next/link";
import type { Service } from "@/lib/services";
import StatusLabel from "./StatusLabel";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const isMailto = service.href.startsWith("mailto:");
  const isDisabled = service.status === "coming" && !isMailto;

  const content = (
    <div className="pai-card flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <h3 className="pai-section">{service.name}</h3>
        <StatusLabel status={service.status} />
      </div>
      <p className="pai-mono mt-2">{service.audience}</p>
      <p className="pai-body-secondary mt-4">{service.description}</p>
      {service.examples && (
        <ul className="mt-4 space-y-2 pai-body-secondary">
          {service.examples.map((example) => (
            <li key={example} className="flex gap-2">
              <span className="text-[var(--text-primary)]">·</span>
              <span>{example}</span>
            </li>
          ))}
        </ul>
      )}
      {!isDisabled && (
        <span className="pai-btn-label mt-6 text-brand">{service.cta}</span>
      )}
    </div>
  );

  if (isDisabled) {
    return <div className="opacity-60">{content}</div>;
  }

  if (service.external || isMailto) {
    return (
      <a
        href={service.href}
        target={service.external ? "_blank" : undefined}
        rel={service.external ? "noopener noreferrer" : undefined}
        className="block transition-colors duration-[120ms] hover:opacity-90"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={service.href} className="block transition-colors duration-[120ms] hover:opacity-90">
      {content}
    </Link>
  );
}
