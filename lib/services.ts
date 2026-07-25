export type ServiceStatus = "live" | "beta" | "coming";

export interface Service {
  id: string;
  name: string;
  status: ServiceStatus;
  audience: string;
  description: string;
  examples?: string[];
  href: string;
  external?: boolean;
  cta: string;
  mailtoSubject?: string;
}

export const services: Service[] = [
  {
    id: "chat",
    name: "Public AI Chat",
    status: "live",
    audience: "Maine residents & organizations",
    description:
      "A general-purpose AI chat for research, learning, and everyday questions—subsidized for Maine users.",
    href: "https://chat.publicai.co",
    external: true,
    cta: "Open chat",
  },
  {
    id: "permitting",
    name: "Permitting assistant",
    status: "live",
    audience: "Maine small businesses",
    description:
      "Plain-language guidance on government permits and municipal requirements—so you know what you need before you apply.",
    href: "/permitting/",
    cta: "Get started",
  },
  {
    id: "libraries",
    name: "Library kiosk",
    status: "live",
    audience: "Public libraries (national pilot)",
    description:
      "A shared Public AI workstation for libraries—chat, creative tools, and coding support for patrons in a trusted public space.",
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
      "A statewide dialogue on AI in Maine—your direct line to the people building public AI for your community, modeled on Switzerland's national AI dialogue.",
    href: "mailto:info@publicai.network?subject=Maine%20AI%20Dialogue",
    cta: "Learn more",
    mailtoSubject: "Maine AI Dialogue",
  },
  {
    id: "agents",
    name: "Community agents",
    status: "beta",
    audience: "Maine groups & companies",
    description:
      "Pre-deployed agents that work autonomously on behalf of Maine organizations—no need to build your own.",
    examples: [
      "Town hall summaries — monitor and summarize public meetings",
      "Grant monitoring — track requirements, deadlines, and reporting",
    ],
    href: "mailto:info@publicai.network?subject=Proposing%20a%20community%20agent",
    cta: "Propose an agent",
    mailtoSubject: "Proposing a community agent",
  },
];

export const statusLabels: Record<ServiceStatus, string> = {
  live: "Live",
  beta: "Beta",
  coming: "Coming soon",
};
