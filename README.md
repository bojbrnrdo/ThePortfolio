# Job Matthew Bernardo — Cinematic Portfolio

Next.js App Router, React, TypeScript, Tailwind CSS v4, GSAP ScrollTrigger, Lenis, and OGL-backed React Bits studies. Self-hosted Space Grotesk; no external media or API keys required.

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

`ContinuousBackdrop` renders one fixed SVG composition behind every section. `motion/continuousField.ts` morphs nine open ribbons across the complete document with a reversible ScrollTrigger timeline. All sections share a transparent background over near-black; only project media and certificate paper retain distinct surfaces. Gentle drift and travelling light provide continuous motion, while reduced motion retains a static composition. See `docs/continuous-direction.md` for the current visual system. This replaces the isolated sculpture and timed first-visit intro.

`OpeningSequence` still shares a pinned opening/identity stage. Disciplines and process retain coordinated typography replacements; `WorkSequence` retains masked project transitions and direct project anchors. Compact screens receive unpinned character, row and media reveals.

`MotionDirector` owns matchMedia contexts, Lenis, ScrollTrigger, anchor targeting, and cleanup. Directed layout classes are applied only when desktop motion initializes and are removed on resize or preference changes. `workChoreography.ts` owns the project timeline and named project positions. Lenis dimensions are synchronized after ScrollTrigger refreshes, and initial deep links are restored after load and font layout. Stable project anchors support direct entry, previous/next controls, and browser history; navigation moves keyboard focus to the presented project. The native navigation dialog contains focus, closes with Escape, locks background scrolling, and restores focus to its trigger. `ProjectShowcase` and `Navigation` stay separate from choreography and content.
Desktop pinning is enabled at 900px wide and 700px tall or above. Smaller screens and short desktop windows stack projects and identity statements. Reduced motion disables Lenis, pinning, and scrubbed animation. Server-rendered content remains accessible without JavaScript. Menu, chapter status, and progress enhance the document without hiding essential information.

## Validation

Production compilation and TypeScript checks are required. Browser validation should cover desktop, mobile, reduced motion, keyboard focus, menu navigation, project disclosure, forward/backward scrolling, resizing, and back-to-top. Run accessibility scanning on all modes. No deployment or remote push is part of setup.

## React Bits integration

The about scene includes a pointer-revealed DitherVeil study. The work stage has a **Browse projects** dialog using FlexCarousel, alongside native project links. Artwork is local SVG illustration, explicitly labeled conceptual covers; it is not a project screenshot. Project preview paths and descriptions live in `src/data/portfolio.ts`.

The JS/CSS sources are preserved under `src/components/react-bits`, with typed application adapters under `src/components/graphics`. Both effects share the single `ogl` dependency. Imports are dynamic and GPU rendering is gated on visibility, desktop dimensions, pointer capability, motion preference, and WebGL2 availability. Reduced motion, touch devices, short windows, and unavailable WebGL retain static artwork and normal links. Carousel autoplay and vertical wheel capture are disabled.

The registry CLI was blocked by this environment; the component files were copied from the official repository at `e12c22192ac7b4b452c5e2feb9b586d74765d696` after source inspection. See `src/components/react-bits/LICENSE.md` for the upstream MIT + Commons Clause terms. `components.json` registers the React Bits namespace for environments that can access `reactbits.dev` and `ui.shadcn.com`; runtime use requires neither domain.

## Certificate collection

All 36 supplied documents are imported: 26 PDFs and 10 images, presented as 2 professional certifications, 33 course completions, and 1 membership document. `src/data/certificates.ts` contains titles, issuers, document types, printed issue/expiry dates, and asset paths. Missing issue dates were not inferred. The Alibaba Cloud Big Data credential is marked historical because its printed validity ended on 3 July 2026.

`public/certificates/originals` preserves every source document byte-for-byte. `previews` holds readable WebP images; `carousel` holds smaller padded WebP textures so the photo shader does not crop document edges. Original-file SHA-256 values and archive filenames are recorded in `docs/certificate-import.json`. All collection assets are local; Drive access is no longer needed to display or open the documents.

The gallery reuses FlexCarousel with autoplay and vertical wheel capture disabled. Document-type filters, previous/next controls, original-document links, and a collapsible full index keep all documents accessible. Mobile, reduced-motion, and unavailable-WebGL modes use a static image preview with native controls and links. Without JavaScript, the full document index remains accessible through native disclosure elements. Dates are displayed as printed on the documents; inclusion is not independent issuer verification or a claim of current certification validity.

Gallery size changes notify `MotionDirector` to refresh downstream ScrollTrigger positions, including when the archive expands or filters change. Preview space is reserved before GPU enhancement to avoid shifting the composition.

## Technology icon spiral

The skills chapter now includes InfiniteSpiral with 36 local technology marks: 12 web-development references, 12 game-development references, and 12 cybersecurity/tooling references. This is an illustrative ecosystem, not a proficiency or certification claim. Names, discipline grouping, and asset paths are editable in `src/data/technologies.ts`.

The upstream JS/CSS source is from the same recorded React Bits revision. The registry request failed in this environment, so the official cloned source was used with its license retained. InfiniteSpiral uses CSS transforms and adds no runtime package dependency. It responds to scroll/drag, pauses on hover, provides a persistent pause/resume control, and unmounts outside the supported visible desktop state. Mobile, short windows, reduced motion, and JavaScript-disabled pages show a readable icon grid. Its labels are also available through a native disclosure. The disclosure and footer keep their layout space when the animation unmounts, so downstream section links do not shift.

Static SVG icons come from Simple Icons 16.36.0 and Devicon 2.18.0, with source attribution and licenses under `public/technology-icons`. They are rendered as bare monochrome marks to preserve the portfolio palette. The spiral has no outer panel, card backgrounds, or pill-style filter containers; it uses slower motion, soft edge fades, and gentle filter entrances. No icon CDN is required.

## Motion references

See [motion background references](docs/motion-background-references.md) for researched Codrops, React Bits and Three.js sources, demo links and the recommended direction. Threads is integrated as a dynamically loaded renderer with a direct GSAP uniform bridge. Other examples remain references. No new runtime package was added.

## Optional character film

The six-chapter protagonist workflow is prepared in [the production brief](docs/cinema/production-brief.md). [Integration instructions](docs/cinema/integration.md) explain the reviewed-media manifest and scroll-video adapter. The manifest is currently empty: no portrait-derived footage is generated or displayed, and the existing site remains the fallback. The original portrait file and callable Higgsfield tools are still needed; paid generations require a separately approved batch/cost before submission.
