export type ServiceStatus = "live" | "beta" | "coming";

export interface Service {
  id: string;
  name: string;
  status: ServiceStatus;
  audience: string;
  description: string;
  examples?: string[];
  href?: string;
  external?: boolean;
  cta: string;
}

export const services: Service[] = [
  {
    id: "chat",
    name: "Public AI Chat",
    status: "live",
    audience: "Maine residents & organizations",
    description:
      "A general-purpose AI chat for research, learning, and everyday questions, subsidized for Maine users.",
    href: "https://chat.publicai.co",
    external: true,
    cta: "Open chat",
  },
  {
    id: "aquaculture",
    name: "Public AI Aquaculture",
    status: "live",
    audience: "Aquaculture operators in Van Buren, Maine",
    description:
      "Tells you which Maine DMR aquaculture license you need based on your species, equipment, site size, and lease duration, plus DMR regulatory Q&A.",
    href: "https://aquaculture.publicai.co",
    external: true,
    cta: "Get started",
  },
  {
    id: "libraries",
    name: "Library kiosk",
    status: "live",
    audience: "Public libraries (pilot)",
    description:
      "A shared Public AI workstation for libraries: chat, creative tools, and coding support for patrons in a trusted public space.",
    href: "https://libraries.publicai.co",
    external: true,
    cta: "Explore program",
  },
  {
    id: "dialogue",
    name: "Maine AI Dialogue",
    status: "coming",
    audience: "Maine citizens",
    description:
      "A planned dialogue on AI in Maine: your direct line to the people building public AI for your community.",
    href: "mailto:hello@publicai.co",
    cta: "Learn more",
  },
  {
    id: "agents",
    name: "Community agents",
    status: "beta",
    audience: "Maine groups & companies",
    description:
      "Pre-deployed agents that work autonomously on behalf of Maine organizations, no need to build your own.",
    examples: [
      "Early examples we're testing: town hall summaries, grant deadline tracking",
    ],
    cta: "Propose an agent",
  },
];
