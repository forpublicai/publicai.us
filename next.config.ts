import type { NextConfig } from "next";

// The MOCSI pages are static HTML in public/site/, served at clean URLs.
const SITE_PAGES = ["about", "different", "get-involved", "buy-compute", "public-process"];

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  devIndicators: false,
  async redirects() {
    return [
      { source: "/loi", destination: "/waitlist/", permanent: true },
      { source: "/loi/", destination: "/waitlist/", permanent: true },
      { source: "/funders/", destination: "/get-involved/#investors", permanent: false },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/site/index.html" },
        ...SITE_PAGES.map((p) => ({ source: `/${p}/`, destination: `/site/${p}.html` })),
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
