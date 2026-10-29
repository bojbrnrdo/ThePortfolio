# Studio cinematic direction

Implemented in the existing Next.js portfolio on `feature/studio-cinematic-redesign`.

## Visual language

Six folded, metallic planes replace the orange orbital hero. CSS perspective, gradients and GSAP create the sculpture without model downloads or another rendering dependency. Silver edges and a single red seam connect the opening, architectural About study, project aperture and closing horizon. Graphite sections establish continuity; certificates retain a light reading surface.

## Motion

- First eligible desktop visit: eight-second light sweep, viewpoint rotation, unfolding planes and name reveal. The navigation is always available. Skip introduction, a navigation click, scrolling or scroll keys settle the intro immediately.
- `sessionStorage` prevents replay within the same tab session. Direct section links skip it. Storage unavailable means the settled version is shown.
- ScrollTrigger controls the outer sculpture independently of the intro's inner object, so scrolling can take over without competing transforms. The shared opening/identity timeline reverses as one composition.
- Projects use restrained perspective, image-frame settling and overlapping replacements. Existing project names, descriptions, artwork and links remain.
- Mobile, short viewports, reduced motion and JavaScript-free visits retain readable native content. There is no loading gate, hidden required content or scroll lock.

## Editing and running

Content remains in `src/data/portfolio.ts`, `certificates.ts` and `technologies.ts`. Sculpture: `src/components/graphics/RevealSculpture.tsx`; scroll beats: `src/components/motion/`; visual system: final Studio direction block in `src/app/globals.css`.

Use Node.js 24, `npm ci`, then `npm run dev`. Open the localhost URL printed by Next.js. Production verification: `npm run typecheck` and `npm run build`; local production preview: `npm start`.

No new runtime dependency. No remote push or production deployment is part of this redesign.
