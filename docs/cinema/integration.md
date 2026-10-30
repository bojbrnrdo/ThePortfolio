# Character footage integration

The existing site remains unchanged while `public/cinema/manifest.json` contains no approved clips. `CharacterFilm` loads only that small manifest; the scroll-video component and media mount only after validation accepts approved assets. Do not put the original reference photo in the manifest or publish it as a fake movie frame.

## Enable a reviewed clip

Export the approved assets into `public/cinema/` and edit the manifest. Example only — these files do not currently exist:

```json
{
  "version": 1,
  "clips": [
    {
      "chapter": "arrival",
      "identityApproved": true,
      "src": "/cinema/arrival.mp4",
      "poster": "/cinema/arrival.webp",
      "mobileSrc": "/cinema/arrival-mobile.mp4",
      "in": 0,
      "out": 6
    }
  ]
}
```

Supported chapter IDs: `arrival`, `identity`, `creations`, `craft`, `journey`, `final-frame`. Actual chapter mapping is centralized in `src/data/filmChapters.ts`. Only local `/cinema/` video/image paths are accepted. Unknown chapters, duplicates, malformed timing, remote URLs and unapproved clips are ignored. A clip need not be enabled until it passes identity review. The files above are examples, not generated outputs.

`ScrollCharacterFilm` measures the existing document after ScrollTrigger refreshes, so its six intervals respect desktop pin spacing and responsive changes. Scroll position chooses the current chapter and its trim range. One video is mounted at a time. Seeks are coalesced through animation frames and the decoder's `seeked` event; there is no autoplay, audio, playback loop or scroll lock. A poster covers loading/error states, then the existing Threads/SVG background remains beneath any missing media. Text, links, projects and certificates remain semantic HTML.

Reduced motion/data-saving mode uses posters only. Compact screens require `mobileSrc` to load video, otherwise they keep the poster. The decoder stops seeking while the document is hidden; listeners, pending frames and the character ScrollTrigger clean up on unmount. Metadata clamps trim times to the actual video duration. The media host must support HTTP byte-range requests (`206 Partial Content` / `Accept-Ranges: bytes`) for reliable scrubbing; a fully buffered but non-seekable response can still remain at its first frame. The player suppresses identical repeated seeks so a decoder that cannot reach a frame cannot create an endless seek loop.

## Before enabling all six chapters

- Inspect every frame for likeness and anatomy; compare all angles to the approved canonical references.
- Verify file presence, aspect ratio, duration, decode compatibility, byte-range responses and transfer size.
- Check text contrast against the brightest actual frames and adjust chapter framing/shading as necessary; synthetic test footage cannot validate the eventual character composition.
- Use real screenshots/composites for project panels, and verified data for milestones.
- Test forward/backward scrolling, deep links, page-bottom contact, resize, reduced motion, missing media and mobile Safari/iPhone.
- Confirm the source reference, generated drafts and rejected outputs are excluded from publication.
- Push/deploy only after approval; paid generations require a separately approved quote/batch before submission.
