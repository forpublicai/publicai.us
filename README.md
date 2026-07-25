# Public AI USA

Public AI services for Maine communities and municipalities—powered by MOCSI (Maine Open Compute Services Initiative). Built with **Next.js 15** (App Router), **React 19**, and **Tailwind CSS**, following the [Public AI design system](https://github.com/forpublicai/design-system).

## Design system

This site consumes the design system as a git submodule at `vendor/design-system`. After cloning:

```bash
git submodule update --init --recursive
```

Design tokens are imported in `app/globals.css`. UI primitives live in `components/ds/`.

**NB International Pro CG** webfonts are not in the public design-system repo (license). To use the brand typeface locally, add licensed font files to `vendor/design-system/assets/fonts/` per the design-system README. The site falls back to Overpass Bold.

Logos and favicon are synced from the design system into `public/`.

## Site structure

- `/` — Homepage with service grid, MOCSI teaser, partners, and blog roll
- `/mocsi/` — MOCSI infrastructure story, progress, and funder CTAs
- `/permitting/` — Permitting assistant for Maine small businesses
- `/about/` — Mission, team, and contact
- `/blog/` — Blog index
- `/blog/[slug]/` — Individual posts

External services: [chat.publicai.co](https://chat.publicai.co), [libraries.publicai.co](https://libraries.publicai.co)

## Develop

```bash
npm install
git submodule update --init --recursive
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (static export)

```bash
npm run build
```

Output is in the `out/` directory. Deploy `out/` to GitHub Pages, Vercel, or any static host. The `CNAME` file is included for custom domain (publicai.us).

For CI/deploy hosts, ensure submodules are initialized (e.g. `git submodule update --init --recursive` before build).

## Project layout

- `app/` — Next.js App Router pages
- `components/ds/` — Design-system primitives (Button, SiteHeader, etc.)
- `components/home/` — Homepage sections
- `vendor/design-system/` — Git submodule (tokens, reference components, assets)
- `content/posts/` — Markdown blog posts (parsed with gray-matter)
- `lib/posts.ts` — Blog post loading for static generation
- `lib/services.ts` — Service card data shared across homepage and MOCSI page
- `public/` — Static assets (logo SVGs, favicon, CNAME)
