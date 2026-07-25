import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "var(--pai-red)",
        brandHover: "var(--pai-red-hover)",
        subtle: "var(--pai-gray-100)",
        secondary: "var(--pai-gray-500)",
        oak: "var(--pai-oak)",
        leather: "var(--pai-leather)",
        parchment: "var(--pai-parchment)",
        hairline: "var(--border-hairline)",
      },
      borderRadius: {
        pill: "var(--radius-pill)",
        card: "var(--radius-card)",
        control: "var(--radius-control)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        ui: ["var(--font-ui)"],
        headline: ["var(--font-headline)"],
        mono: ["var(--font-mono)"],
        brand: ["var(--font-brand)"],
      },
      maxWidth: {
        content: "var(--content-max-width)",
      },
    },
  },
  plugins: [],
};

export default config;
