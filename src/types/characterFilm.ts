import { filmChapters, type FilmChapterId } from '../data/filmChapters';
export type CharacterClip = {
  chapter: FilmChapterId;
  identityApproved: true;
  src: string;
  poster: string;
  mobileSrc?: string;
  in: number;
  out: number;
};
const videoPath = /^\/cinema\/[a-zA-Z0-9_/-]+\.(mp4|webm)$/;
const imagePath = /^\/cinema\/[a-zA-Z0-9_/-]+\.(webp|jpg|jpeg|png|avif)$/;

/** Unreviewed clips and external asset URLs never enter the production film. */
export function approvedCharacterClips(value: unknown): CharacterClip[] {
  if (!value || typeof value !== 'object' || !('version' in value) || value.version !== 1 || !('clips' in value) || !Array.isArray(value.clips)) return [];
  const seen = new Set<string>();
  return value.clips.flatMap((item: unknown) => {
    if (!item || typeof item !== 'object') return [];
    const clip = item as Record<string, unknown>;
    if (clip.identityApproved !== true || typeof clip.chapter !== 'string' || !filmChapters.some(chapter => chapter.id === clip.chapter) || seen.has(clip.chapter)) return [];
    if (typeof clip.src !== 'string' || !videoPath.test(clip.src) || typeof clip.poster !== 'string' || !imagePath.test(clip.poster)) return [];
    if (clip.mobileSrc !== undefined && (typeof clip.mobileSrc !== 'string' || !videoPath.test(clip.mobileSrc))) return [];
    if (typeof clip.in !== 'number' || !Number.isFinite(clip.in) || clip.in < 0 || typeof clip.out !== 'number' || !Number.isFinite(clip.out) || clip.out <= clip.in) return [];
    seen.add(clip.chapter);
    return [{ chapter: clip.chapter as FilmChapterId, identityApproved: true as const, src: clip.src, poster: clip.poster, mobileSrc: clip.mobileSrc, in: clip.in, out: clip.out } as CharacterClip];
  });
}
