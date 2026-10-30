'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { filmChapters } from '../../data/filmChapters';
import type { CharacterClip } from '../../types/characterFilm';

export default function ScrollCharacterFilm({ clips }: { clips: CharacterClip[] }) {
  const video = useRef<HTMLVideoElement>(null);
  const requestedProgress = useRef(0);
  const seekFrame = useRef(0);
  const lastSeek = useRef({ source: '', time: -1 });
  const [chapter, setChapter] = useState(0);
  const [compact, setCompact] = useState(true);
  const [still, setStill] = useState(true);
  const [readySource, setReadySource] = useState('');
  const [failedSource, setFailedSource] = useState('');
  const [failedPoster, setFailedPoster] = useState('');
  const clip = clips.find(item => item.chapter === filmChapters[chapter].id);
  const source = still ? '' : compact ? clip?.mobileSrc ?? '' : clip?.src ?? '';
  const canSeek = Boolean(source && source !== failedSource);

  function seek() {
    const element = video.current;
    if (!element || element.readyState < 1 || !clip || !Number.isFinite(element.duration) || element.duration <= 0 || document.hidden) return;
    const end = Math.min(clip.out, Math.max(0, element.duration - .04));
    const start = Math.min(clip.in, end);
    const target = start + requestedProgress.current * (end - start);
    if (element.seeking) return;
    const tolerance = requestedProgress.current < .001 || requestedProgress.current > .999 ? .005 : .035;
    if (Math.abs(element.currentTime - target) <= tolerance) { lastSeek.current = { source, time: target }; return; }
    // A decoder that cannot reach a frame must not trigger an endless seek/seeked loop.
    if (lastSeek.current.source === source && Math.abs(lastSeek.current.time - target) <= tolerance) return;
    lastSeek.current = { source, time: target };
    element.currentTime = target;
  }
  const seekLatest = useRef(seek);
  seekLatest.current = seek;
  function scheduleSeek() {
    cancelAnimationFrame(seekFrame.current);
    seekFrame.current = requestAnimationFrame(() => seekLatest.current());
  }

  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const small = matchMedia('(max-width: 899px)');
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; addEventListener?: (type: string, cb: () => void) => void; removeEventListener?: (type: string, cb: () => void) => void } }).connection;
    const update = () => { setCompact(small.matches); setStill(reduced.matches || Boolean(connection?.saveData)); };
    update();
    reduced.addEventListener('change', update); small.addEventListener('change', update); connection?.addEventListener?.('change', update);
    return () => { reduced.removeEventListener('change', update); small.removeEventListener('change', update); connection?.removeEventListener?.('change', update); };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let thresholds: number[] = [];
    let active = -1;
    const measure = () => {
      const max = Math.max(1, ScrollTrigger.maxScroll(window));
      thresholds = filmChapters.map((item, index) => {
        const target = document.querySelector(item.target);
        return index === 0 || !target ? 0 : Math.max(0, Math.min(max - 1, target.getBoundingClientRect().top + scrollY - innerHeight * .65));
      });
    };
    const apply = (position: number) => {
      let index = 0;
      thresholds.forEach((threshold, i) => { if (position >= threshold) index = i; });
      const end = thresholds[index + 1] ?? Math.max(1, ScrollTrigger.maxScroll(window));
      requestedProgress.current = gsap.utils.clamp(0, 1, (position - thresholds[index]) / Math.max(1, end - thresholds[index]));
      if (index !== active) { active = index; setChapter(index); }
      else scheduleSeek();
    };
    const trigger = ScrollTrigger.create({
      id: 'character-film', trigger: 'main', start: 'top top', end: 'bottom bottom',
      onUpdate: self => apply(self.scroll()), onRefresh: self => { measure(); apply(self.scroll()); },
    });
    measure(); apply(scrollY);
    ScrollTrigger.sort(); ScrollTrigger.refresh();
    const visibility = () => { if (!document.hidden) scheduleSeek(); };
    document.addEventListener('visibilitychange', visibility);
    return () => { trigger.kill(); cancelAnimationFrame(seekFrame.current); document.removeEventListener('visibilitychange', visibility); };
  }, []);
  useEffect(() => { scheduleSeek(); }, [chapter, source]);

  const poster = clip?.poster && clip.poster !== failedPoster ? clip.poster : '';
  const ready = canSeek && readySource === source;
  return <div className="character-film" data-chapter={filmChapters[chapter].id} data-visible={Boolean(poster || ready)} aria-hidden="true">
    {poster && <img className="character-poster" src={poster} alt="" onError={() => setFailedPoster(poster)}/>}
    {canSeek && <video ref={video} key={source} className="character-footage" data-ready={ready} src={source} muted playsInline preload="metadata" disablePictureInPicture disableRemotePlayback
      onLoadedMetadata={scheduleSeek} onLoadedData={() => { setReadySource(source); scheduleSeek(); }}
      onSeeked={() => { setReadySource(source); scheduleSeek(); }} onError={() => setFailedSource(source)}/>}
    <div className="character-film-shade"/>
  </div>;
}
