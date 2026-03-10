# Public AI USA

A pilot-scale public AI compute facility in Maine. This site is built with **Next.js 15** (App Router), **React 19**, and **Tailwind CSS**.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (static export)

```bash
npm run build
```

Output is in the `out/` directory. Deploy `out/` to GitHub Pages, Vercel, or any static host. The `CNAME` file is included for custom domain (publicai.us).

## Structure

- `app/` — Next.js App Router pages (home, about, blog)
- `components/` — React components (Header, Footer, home sections)
- `content/posts/` — Markdown blog posts (parsed with gray-matter)
- `lib/posts.ts` — Blog post loading for static generation
- `public/` — Static assets (logo, favicon, CNAME)
