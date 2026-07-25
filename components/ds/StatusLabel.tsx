import type { ServiceStatus } from "@/lib/services";
import { statusLabels } from "@/lib/services";

export default function StatusLabel({ status }: { status: ServiceStatus }) {
  return <span className="pai-mono">{statusLabels[status]}</span>;
}
