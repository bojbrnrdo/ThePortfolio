'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { approvedCharacterClips, type CharacterClip } from '../../types/characterFilm';
const ScrollCharacterFilm = dynamic(() => import('./ScrollCharacterFilm'), { ssr: false });

/** No character is invented or displayed while production assets await approval. */
export function CharacterFilm() {
  const [clips, setClips] = useState<CharacterClip[]>([]);
  useEffect(() => {
    const abort = new AbortController();
    fetch('/cinema/manifest.json', { signal: abort.signal })
      .then(response => response.ok ? response.json() : null)
      .then(value => { if (!abort.signal.aborted) setClips(approvedCharacterClips(value)); })
      .catch(() => { /* Existing SVG/Threads environment is the intentional fallback. */ });
    return () => abort.abort();
  }, []);
  return clips.length ? <ScrollCharacterFilm clips={clips}/> : null;
}
