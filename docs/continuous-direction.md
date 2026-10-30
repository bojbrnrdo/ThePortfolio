# A continuous personal portfolio

This direction supersedes the earlier isolated sculpture / studio introduction.

One fixed, server-rendered SVG backdrop sits behind the complete portfolio. Nine open silver/red ribbons share matching cubic geometry. A single reversible GSAP ScrollTrigger timeline morphs them through seven arrangements across the complete document. The timeline refreshes its scroll range when media, filters or responsive pin spacing change. A gentle drift and travelling light remain visible between scroll gestures. Reduced motion and JavaScript-free pages show the original static composition.

Every main section, opening stage and work stage has a transparent background over the same near-black environment. Certificate paper and conceptual project media keep their own colors for readability. Dialogs remain distinct accessible overlays. Content, verified links, 36 certificates, technology filters and native navigation are retained.

The hero leads with Job Matthew Bernardo, the supplied tagline, professional disciplines and a direct work link. The sculpture and timed introduction were removed; motion now runs throughout the page instead of depending on a first-visit animation. Pinned identity/project/process typography remains on large screens; compact screens retain unpinned motion. The About section no longer duplicates a decorative graphic.

Edit paths in `src/components/motion/ribbonForms.ts`, scroll choreography in `continuousField.ts`, and server markup in `graphics/ContinuousBackdrop.tsx`. The final continuous-environment block in `src/app/globals.css` defines the shared background and contrast treatments. No dependencies were added.

Run with Node 24: `npm ci`, `npm run dev`, then open the localhost URL printed in Terminal. Checks: `npm run typecheck`, `npm run build`. No lint script is configured.

## Threads integration

`ThreadAtmosphere` dynamically loads the licensed React Bits Threads renderer on capable desktops. Its mutable uniform state in `motion/threadMotion.ts` is animated by the same timeline as the SVG paths: spread, amplitude, angle, waves, fray and speed change across the complete document and reverse with scrolling. This bridge avoids React renders per animation frame. Pointer distortion is disabled to keep content stable. Render resolution is capped upstream at a 1920-pixel longest edge; the application uses 42 lines.

A first-successful-render callback reveals the shader and dims the fallback; initialization errors and context loss return to SVG. Document visibility and capability changes unmount the optional renderer. The ambient motion control is portalled to the body so it remains above the page stacking context and keyboard accessible. Pausing unmounts the shader and pauses the SVG's automatic motion; scroll-driven transforms remain controlled by the visitor. Reduced motion mounts no shader and disables both automatic and scroll-driven background animation. Certificate fallbacks remain hidden only when an actual certificate canvas is present.
