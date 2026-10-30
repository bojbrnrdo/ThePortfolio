# Job Matthew Bernardo — character film production brief

Status: **pre-production only**. No images or videos have been generated, no Higgsfield job has been submitted, and no paid generation has been authorized. The Higgsfield plugin was tagged by the user but exposes no callable tools in this session. Soul ID support, input requirements, model choices and costs are unverified.

## Identity reference

The chat portrait is the identity reference, not an instruction to create a generic character. It shows Job in a cream-white suit jacket, white collared shirt, dark green tie, dark sunglasses and wristwatch. Preserve the visible facial proportions, jaw/cheeks, nose, mouth, warm skin tone, thick swept dark hair and hair volume. Keep the same wardrobe and glasses initially, so costume changes do not compete with identity consistency.

The original was received as `akoto.jpg.zip`, safely extracted and visually inspected. The unmodified 960×958 JPEG is stored at `.private/character-reference/akoto.jpg`; its byte count and SHA-256 are recorded in the adjacent private `reference.json`. Both files are Git-ignored and are not published assets. Use this actual photograph for the identity reference. Do not reconstruct it from text or substitute certificate photographs or another person.

The image crops the lower body and sunglasses obscure the eyes. Generated profiles, hidden facial details, height and lower-body proportions are proposals, not recovered facts. Keep sunglasses on; obtain user review of new angles and full-body proportions. Do not guarantee exact likeness from this single view. If Soul ID is available, verify its actual input requirements first; never pretend an identity model has been trained or reuse a fabricated ID.

## Approval sequence

1. Confirm the original photo file, available Higgsfield tools, supported identity workflow and private upload destination.
2. Prepare an exact first-batch proposal: models/settings, four reference images, quoted cost or credit usage, and intended outputs. Obtain explicit approval **before** any paid submission. Approval of this brief is not approval to spend unspecified credits.
3. Produce only the approved batch. Present front, side, three-quarter and full-body references for likeness review. The user chooses the canonical approved reference set.
4. Quote the next motion batch with per-clip durations, retries and total cost. Obtain approval before submitting it. Do not auto-retry paid jobs.
5. Review every output for identity, anatomy, hands, glasses, wardrobe, continuity and unwanted text. Reject identity drift; do not hide it with blur.
6. Encode approved footage for scroll scrubbing, then enable only approved clips in `public/cinema/manifest.json`. Keep failed generations and source photographs outside `public`.

## Shared visual direction

A fictional architectural environment, used as a visual metaphor for a real personal portfolio. Near black, graphite, silver studio light and a restrained red accent. Realistic skin, practical-looking lighting, grounded feet and believable contact. Smooth single-camera movement; avoid rapid orbiting, extreme lens changes, exaggerated expressions and multiple simultaneous actions. Keep Job mainly in the right half of wide compositions so semantic website text remains readable on the left. No baked-in names, captions, logos, UI labels or contact details: HTML provides readable, editable text and working links.

Common identity instruction for every generation:

> Use the supplied, approved photograph/reference set as the identity source for Job Matthew Bernardo. Preserve his recognizable face, proportions, hairstyle/volume, skin tone and natural anatomy. This must be the same person, not a similar-looking stock model. Maintain the cream-white jacket, white collared shirt, dark green tie, sunglasses and wristwatch from the canonical reference. Keep the glasses and facial identity stable in every frame. Match the approved references when changing camera angle. Photorealistic, restrained cinematic lighting, no facial transformation or beautification that changes identity.

Common exclusion instruction, translated into the chosen provider's supported controls rather than assuming a universal negative-prompt field:

> No face replacement, identity drift, changing hairline, changing eyewear, warped watch, extra fingers, fused hands, ungrounded footsteps, broken joints, distorted proportions, random background people, fake credentials, invented project screenshots, baked text, watermarks or fabricated professional achievements.

## Reusable reference assets — first proposed batch

| Output | Composition / prompt addition | Review focus |
|---|---|---|
| Front portrait | Canonical face/upper body, eye-level lens, neutral graphite studio, soft key and silver rim light, relaxed expression. | Match the supplied face; retain sunglasses. |
| Side profile | Same character and wardrobe, true side view, neutral pose and lens, same light direction. | New-angle likeness needs explicit review; do not imply unseen anatomy is verified. |
| Three-quarter portrait | Same character, 35–45° view, eye-level camera, shoulders relaxed, hands out of frame. | Jaw/cheek/nose continuity and matching hair volume. |
| Full-body reference | Same character standing naturally, head-to-toe, flat studio floor, no foreshortening, restrained footwear matching the suit. | User approval of inferred height, lower body, footwear and realistic proportions. |

## Reusable motion / chapter shots — second proposed batch

Durations below are creative targets, not a cost quote or a claim of provider support. Split complex camera moves into separately approved shots if the model cannot reliably maintain identity. These shots supply the six requested reusable motion behaviors; use approved frame references or supported start/end frames consistently.

### 01 — The Arrival: walking

- Shot A, 4–5 s: Job walks naturally down a dark architectural corridor. Rear three-quarter follow, feet grounded, subtle reflections, no other characters. Camera remains smooth at shoulder height.
- Shot B, 4–5 s: matching corridor and walking direction, gentle side tracking to three-quarter face reveal. Match Shot A's final pose/lighting using supported reference frames.
- Website mapping: `.opening-film`; existing name and introduction appear as HTML. Do not render text into the corridor.

### 02 — The Identity: reaching / standing

- 5–6 s: Job pauses in a huge quiet gallery, looks toward a floating abstract folded sculpture, then slowly reaches one hand toward it. One deliberate gesture, anatomically correct fingers; sculpture motion is separate from his face.
- An interactive sculpture can be a composited SVG/WebGL layer. Generated footage alone cannot provide real object picking or a controllable 3D character.
- Website mapping: About and disciplines. Do not invent an additional biography.

### 03 — The Creations: interacting

- 5–6 s: Job approaches a blank, lightly illuminated exhibition panel, makes a small reaching gesture and looks toward the panel. Gentle lateral camera movement, stable character silhouette, no generated UI.
- Composite **provided, verified** project imagery afterward; do not ask the video model to invent LifeGen/ChatP2P screens. Real screenshots are currently missing. Existing conceptual covers remain explicitly identified.
- Website mapping: work / selected projects, retaining real project links and accessible controls.

### 04 — The Craft: looking around / assembling

- 5–6 s: Job stands naturally before a large abstract mechanical installation. He looks along it, then makes one restrained hand movement. Nearby components align slowly, away from his hands/face. No dangerous contact or implausible body motion.
- The installation is a visual metaphor, not a claim that every reference technology has been used professionally.
- Website mapping: tools and languages; existing expertise disclaimers remain.

### 05 — The Journey: walking through environments

- 5–6 s: Job walks through connected architectural spaces with consistent direction and lighting. Exhibition surfaces remain blank for later factual overlays. Keep the same outfit and recognizable face.
- No employment or professional milestones have been supplied. Do not generate offices, employers, graduations, trophies or awards implying an actual history. The existing certificate collection is the available factual material; preserve issue/expiry details and distinguish course completions from professional certifications.
- Website mapping: experience placeholder, certificates and process. Verify any future milestones before changing the shot brief.

### 06 — The Final Frame: turn / close-up

- Shot A, 4–5 s: Job walks toward a large architectural opening, stops naturally, and turns toward camera without a fast head whip.
- Shot B, 4–5 s: matching settled three-quarter/front pose, gentle camera push to a close portrait. Maintain glasses, hair, face and wardrobe. A quiet hold at the end makes the closing frame readable.
- Website mapping: contact. The only supplied working contact profile is GitHub. HTML supplies links; do not invent an email, phone number or résumé.

## Delivery and web integration

- Master clips: clean, silent 16:9, consistent framing, exposure and frame rate; recommended creative target 24/30 fps and 1080p if the approved provider supports it.
- Web exports: H.264 MP4, fast-start metadata and short keyframe intervals (roughly 0.25–0.5 s) for backward seeking. Verify the encoding on real Safari/iPhone, not just Chromium. Keep originals separately. Avoid interpolation that changes the face.
- Optional mobile export: independently framed 720p or smaller; without it mobile shows the approved poster rather than downloading a desktop master.
- Poster: approved still from the matching clip. Reduced motion and data-saving users get the poster, with all HTML content and navigation intact.
- This is a scroll-scrubbed video layer, not an animated 3D avatar. A truly interactive rigged character would require a separately sourced/approved model, rig and animation clips.
