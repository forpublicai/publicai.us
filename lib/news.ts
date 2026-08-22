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
      " as fractional CEO, thanks to support from the Co-Lab Fund (part of the Pro-Human AI Coalition), with a plan to write a forkable recipe for any city or state that wants to try what we're doing.",
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
    date: "2026-03-16",
    parts: [
      "A few months after Lewiston's vote, we began what would become the Public AI Data Center project: MOCSI.",
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
];
