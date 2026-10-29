# Validation — 2026-10-29

Validated against the local production server using system Chromium and temporary Playwright/axe-core tooling outside the application dependencies.

Passed:
- Clean `npm ci --no-audit --no-fund` followed by `npm run build`.
- `npm run typecheck`.
- `npm audit --omit=dev`: zero known vulnerabilities at validation time.
- Desktop 1440×1000, mobile 390×844, reduced-motion 1280×800: ten scenes rendered; no JavaScript page errors; zero axe WCAG A/AA violations; no document horizontal overflow.
- Menu opens, direct experience navigation closes it, contact/back-to-beginning navigation returns to the opening.
- Forward and reverse scroll traversal, desktop identity pinning, pin release on mobile resize, desktop pin restoration, and project information disclosure.
- Server-rendered identity headings remain visible with JavaScript disabled.
- Desktop and mobile opening screenshots visually inspected.

Limitations:
- Automated accessibility checks do not replace assistive-technology and human usability review.
- Chromium was tested; Safari/Firefox and physical-device performance were not measured.
- Contact email, LinkedIn, résumé, project links/media/details, specific technical skills, and experience await verified content. Abstract covers are labeled placeholders.
- No deployment, remote push, or fresh-task snapshot restoration was performed.
- Turbopack was unavailable due to cloud worker socket restrictions; the supported Webpack build passes.
