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

`OpeningSequence` renders the opening and identity on one shared stage. `motion/choreography.ts` defines reversible GSAP timelines: seven rings assemble, flatten into a frame, turn with CREATE / BUILD / SOLVE, and resolve into a quiet ivory composition. Character reveals, geometry, color, and typography all use the same scroll clock. The disciplines and five-step process each have a pinned replacement sequence, while `WorkSequence` carries the work introduction into a shared aperture and horizontally replaces the project plates. The ring motif returns in the closing frame.

`MotionDirector` owns matchMedia contexts, Lenis, ScrollTrigger, anchor targeting, and cleanup. Directed layout classes are applied only when desktop motion initializes and are removed on resize or preference changes. `workChoreography.ts` owns the project timeline and named project positions. Lenis dimensions are synchronized after ScrollTrigger refreshes, and initial deep links are restored after load and font layout. Stable project anchors support direct entry, previous/next controls, and browser history; navigation moves keyboard focus to the presented project. The native navigation dialog contains focus, closes with Escape, locks background scrolling, and restores focus to its trigger. `ProjectShowcase` and `Navigation` stay separate from choreography and content.
Desktop pinning is enabled at 900px wide and 700px tall or above. Smaller screens and short desktop windows stack projects and identity statements. Reduced motion disables Lenis, pinning, and scrubbed animation. Server-rendered content remains accessible without JavaScript. Menu, chapter status, and progress enhance the document without hiding essential information.

## Validation

Production compilation and TypeScript checks are required. Browser validation should cover desktop, mobile, reduced motion, keyboard focus, menu navigation, project disclosure, forward/backward scrolling, resizing, and back-to-top. Run accessibility scanning on all modes. No deployment or remote push is part of setup.
