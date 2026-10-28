# PrideMonth.ca

Bilingual corporate Pride programs website for Canadian organizations. Production: https://pridemonth.ca

## Local development

Use Node.js 22.13+ and pnpm (the lockfile is included).

```sh
pnpm install --frozen-lockfile
pnpm dev
```

```sh
pnpm exec tsc --noEmit
pnpm build
```

Built with React, Vinext and Cloudflare Workers. `.openai/hosting.json` identifies the existing Sites deployment and D1 binding. Sites owns production deployment configuration; pushing this repository does not automatically deploy the website. Deployment outside Sites requires configuring Cloudflare bindings and authentication for the legacy owner inbox; the placeholder D1 ID in vite.config.ts is for local development only.

## Content and inquiries

- English routes are under `app/`; French content is in `app/fr/` and `lib/fr-*`.
- The proposal form collects a brief, allows review and editing, then submits through the existing Formspree integration in `lib/submit-quote.ts`.
- No form submission is made during build or validation. Draft details are held in component memory only, not persistent browser storage.
- `/admin/leads` is the authenticated legacy inbox. Current requests go to Formspree.
- Product and event images are illustrative concepts, not completed client projects. Optimized WebP images serve current pages; original PNG URLs are retained for compatibility.

## Search and answer visibility

Each public page uses canonical and bilingual alternate URLs, descriptive metadata and social previews. Organization and WebSite structured data describe the business. The sitemap includes English and French routes; robots excludes API, admin and sign-in paths. Public planning answers explain products, pricing factors, timing and multi-location requirements without making unverified delivery promises.

Search indexing and AI citations are not guaranteed. Verify the domain in Search Console, submit `/sitemap.xml`, and measure qualified proposal requests. Do not add invented reviews, fixed prices or unsupported service availability.

## October 2026 refresh

- Goal-based homepage paths, updated visual hierarchy and planning FAQs.
- Accessible skip links, keyboard focus, mobile layouts and reduced-motion support.
- Both proposal forms preserve field values when returning from review to edit.
- Smaller WebP images and large-image social metadata.
- Existing production audience, routes and inquiry destination retained.

Validation: TypeScript check and production build. Managed preview was unavailable (Cloudflare local runtime lookup failure); browser checks must be recorded separately. Production inquiry delivery should be tested with an approved real inquiry rather than an automated test lead.
