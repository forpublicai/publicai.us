export type NewsItemPart = string | { text: string; href: string };

export interface NewsItem {
  date: string;
  parts: NewsItemPart[];
}

// Most recent first.
export const news: NewsItem[] = [
  {
    date: "2026-08-21",
    parts: [
      "We brought on ",
      { text: "Fletcher Kittredge", href: "https://kittredge.com/" },
      " as fractional CEO, with a plan to write a forkable recipe for any city or state that wants to try what we're doing.",
    ],
  },
  {
    date: "2026-08-20",
    parts: [
      "We hosted another small workshop with local Maine stakeholders, focused on the site, structure, and finances of the deal.",
    ],
  },
  {
    date: "2026-08-10",
    parts: [
      "Sam Merkatz presented an initial proof of concept for the ",
      { text: "Public AI Aquaculture", href: "https://aquaculture.publicai.co" },
      " project.",
    ],
  },
  {
    date: "2026-06-25",
    parts: [
      "We hosted our first stakeholder workshop at the Roux Institute in downtown Portland. Attendees included state legislators, prominent entrepreneurs, civil society, representatives from multiple state agencies including the Maine Connectivity Authority, and Bernstein Shur and other key Maine business leaders.",
    ],
  },
  {
    date: "2026-05-01",
    parts: [
      "We visited candidate sites and reviewed financing across Lincoln Mill in Brunswick, Loring Air Force Base, and CENTRA on Cumberland St. in Portland.",
    ],
  },
  {
    date: "2026-04-07",
    parts: [
      "The Maine Legislature passed a ",
      {
        text: "data center moratorium",
        href: "https://www.maine.gov/housedems/news/maine-house-advances-sachs-bill-establish-moratorium-data-centers-0",
      },
      " led by Rep. Melanie Sachs. Governor Mills vetoed it on April 24, 2026.",
    ],
  },
  {
    date: "2025-12-16",
    parts: [
      "The Lewiston City Council unanimously voted down a proposed AI data center at Bates Mill after public outcry. ",
      {
        text: "Read the Press Herald's coverage",
        href: "https://www.pressherald.com/2025/12/16/lewiston-votes-down-ai-data-center-project-after-public-outcry/",
      },
      ".",
    ],
  },
  {
    date: "2025-12-15",
    parts: [
      "Josh joked to a table of funders, “Who wants to help me build the least popular thing in America?” To his surprise, the CEO of Omidyar Network said yes.",
    ],
  },
  {
    date: "2025-12-08",
    parts: [
      { text: "Matt", href: "/about/" },
      " messages ",
      { text: "Josh", href: "/about/" },
      ": “Is a 'pretty small' data center sufficient to make this worthwhile? Generally, Maine is fairly prime for an energy/compute play. Rural Maine gets telehealth but they close the hospitals; edtech but they close the school, etc. The highways of Maine were built by corporations that had state-mandated legal obligations to share ownership interest and governance rights with the communities affected by the highways - farmers, local biz, towns themselves. Let's run it back.”",
    ],
  },
];
