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

- `/` — Homepage with MOCSI story, service divisions table, and news & updates
- `/about/` — Mission, people, and contact
- `/funders/` — Co-investment overview for funders supporting MOCSI
- `/loi/` — Non-binding letter of intent for MOCSI compute demand
- `/aquaculture/` — Redirects to [aquaculture.publicai.co](https://aquaculture.publicai.co)

External services: [chat.publicai.co](https://chat.publicai.co), [libraries.publicai.co](https://libraries.publicai.co), [aquaculture.publicai.co](https://aquaculture.publicai.co)

## Develop

```bash
npm install
git submodule update --init --recursive
vercel link --scope public-ai-co --project publicai-us
vercel env pull .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The LOI form needs Neon (`DATABASE_URL`) and Resend (`RESEND_API_KEY`) from the linked Vercel project. See [`.env.example`](.env.example). Pull env vars after Marketplace integrations are connected.

## Build & deploy

```bash
npm run build
```

Deploy on Vercel (Server Actions require a Node runtime; this is no longer a static export). Ensure git submodules are initialized in CI (`git submodule update --init --recursive` before build). The `CNAME` / custom domain for publicai.us is configured on the Vercel project.

## Project layout

- `app/` — Next.js App Router pages (including `app/loi/` form + Server Action)
- `components/ds/` — Design-system primitives (Button, SiteHeader, etc.)
- `components/home/` — Homepage sections
- `vendor/design-system/` — Git submodule (tokens, reference components, assets)
- `lib/db.ts` — Neon helper and `loi_submissions` table ensure
- `lib/services.ts` — Live/beta/coming service data, listed under the MOCSI service divisions table
- `lib/people.json` — People shown in the About page's People section
- `lib/news.ts` — News & updates entries shown on the homepage
- `public/` — Static assets (logo SVGs, favicon, CNAME, people photos)
