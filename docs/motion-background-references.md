# Motion background references

Research for this portfolio, 30 October 2026. Threads is now integrated through a locally adapted renderer. The SVG/GSAP composition remains the mobile, reduced-motion and unavailable-WebGL fallback. Other sources below remain design references.

## Best match: Codrops — On-Scroll SVG Path Animations

- Source: https://github.com/codrops/OnScrollPathAnimations
- Demo linked by its README: https://tympanus.net/Tutorials/OnScrollPathAnimations/
- Article linked by its README: https://tympanus.net/codrops/?p=63809
- What it offers: SVG path shapes controlled by scrolling. This is the closest fit for one continuous background that changes with the content.
- Direction to take: a small number of large, deliberate shape changes and plenty of empty space around personal copy. Keep our existing SVG implementation rather than adding a canvas for this alone.
- Source README identifies the license as MIT. Repository page and README retrieved successfully during research; the hosted demo was not browser-tested here.

## React Bits — Threads

- Source: https://github.com/DavidHDev/react-bits/tree/main/src/content/Backgrounds/Threads
- Preview page: https://reactbits.dev/backgrounds/threads
- What it offers: flowing line fields, adjustable amplitude/distance/color, and optional pointer interaction. Relevant as a visual reference for richer line motion between scroll gestures.
- Direction to take: monochrome, restrained amplitude, no pointer effect under text, and one field for the complete page. A shader implementation would need a static fallback and careful mobile GPU testing.

## React Bits — Silk

- Source: https://github.com/DavidHDev/react-bits/tree/main/src/content/Backgrounds/Silk
- Preview page: https://reactbits.dev/backgrounds/silk
- What it offers: procedural folded-fabric shading with lighting and wave controls. A softer alternative to thin ribbons.
- Direction to take: very dark graphite, slow movement and low detail. Avoid using it alongside several other background effects.

Threads and Silk were inspected in the existing official React Bits checkout at revision `e12c22192ac7b4b452c5e2feb9b586d74765d696`. The upstream repository README was also fetched successfully. Live preview pages were not accessed through this environment. The retained React Bits license includes MIT plus Commons Clause; review it before incorporating or redistributing more source.

## Codrops — On-Scroll Image Layout Animations

- Source: https://github.com/codrops/ScrollBasedLayoutAnimations
- Demo linked by its README: https://tympanus.net/Development/ScrollBasedLayoutAnimations/
- What it offers: scroll-based layout switches with ScrollTrigger and Flip. Useful for project presentation transitions rather than the background itself.
- Direction to take: continuity of one image across compositions; avoid copying the demo's generated project imagery.
- Source README identifies MIT. Repository page and README retrieved successfully; live demo was not browser-tested.

## Three.js — Spline Extrusion

- Source: https://github.com/mrdoob/three.js/blob/dev/examples/webgl_geometry_extrude_splines.html
- Live example: https://threejs.org/examples/#webgl_geometry_extrude_splines
- What it offers: actual geometry extruded along spline curves, with a moving camera. Relevant only if a future direction needs a lit, dimensional ribbon rather than flat paths.
- Tradeoff: substantially more rendering work than SVG. Use only when the visual improvement justifies WebGL, a lazy-loaded renderer and device testing. Do not add Three.js merely to animate a few lines.
- Official example source retrieved successfully; live example was not browser-tested here.

## Recommendation

Use Codrops path choreography as the structural reference and Threads as the visual reference. Keep the single dark background, give the line field a few memorable transformations, and leave text areas quiet. Silk is an alternative direction, not an additional layer. The subsequent integration uses the official Threads renderer with its license retained and local adaptations documented in `src/components/react-bits/README.md`. No reference artwork, project screenshots or fonts were copied.
