# Job Matthew Bernardo — Cinematic Portfolio

Next.js App Router, React, TypeScript, Tailwind CSS v4, GSAP ScrollTrigger, and Lenis. Self-hosted Space Grotesk; no external media or API keys required.

## Run

Use Node.js 24 and npm 11 (validated with Node 24.19.0).

```sh
npm ci
npm run dev
```

Production: `npm run build && npm start`. Type check: `npm run typecheck`.
Webpack is selected explicitly because Turbopack's PostCSS worker requires socket capabilities unavailable in this cloud environment.

## Content

Edit `src/data/portfolio.ts` for personal copy, disciplines, project notes, experience, links, and metadata. Empty contact/link fields are intentionally omitted from the UI. LifeGen and ChatP2P are supplied project names; covers are abstract placeholders, not screenshots. Add verified descriptions, classifications, tools, dates, images, and links before public release. No employment or credentials are claimed. Process copy is suggested editorial copy for review.

## Motion architecture

`MotionDirector` owns GSAP contexts, matchMedia cleanup, ScrollTrigger, and Lenis lifecycle. Opening typography and geometry share a scroll sequence; the identity composition pins and transitions between statements; the two-project sequence uses vertical scroll to move a horizontal track. Other scenes use masked reveals and deliberate editorial pauses. `ProjectShowcase` and `Navigation` remain separate from choreography and content.

Desktop pinning is enabled at 900px and above. Smaller screens stack projects and identity statements. Reduced motion disables Lenis, pinning, and scrubbed animation. Server-rendered content remains accessible without JavaScript. Menu, chapter status, and progress enhance the document without hiding essential information.

## Validation

Production compilation and TypeScript checks are required. Browser validation should cover desktop, mobile, reduced motion, keyboard focus, menu navigation, project disclosure, forward/backward scrolling, resizing, and back-to-top. Run accessibility scanning on all modes. No deployment or remote push is part of setup.
