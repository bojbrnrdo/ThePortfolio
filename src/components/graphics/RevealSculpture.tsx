'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/** A small, programmatic studio sculpture: six folded metal planes, no model download. */
export function RevealSculpture() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element || !window.matchMedia('(min-width: 900px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)').matches || location.hash || window.scrollY > 30) return;
    try { if (sessionStorage.getItem('jmb-studio-intro')) return; sessionStorage.setItem('jmb-studio-intro', '1'); } catch { return; }
    const stage = element.closest('.film-stage')!;
    let timeline: gsap.core.Timeline;
    const ctx = gsap.context(() => {
      timeline = gsap.timeline({ onComplete: () => stage.classList.remove('intro-playing') });
      stage.classList.add('intro-playing');
      timeline.fromTo('.studio-beam', { xPercent: -130, opacity: 0 }, { xPercent: 130, opacity: 1, duration: 2, ease: 'power2.inOut' }, 0)
        .fromTo('.studio-object', { rotationY: -65, rotationX: 20, scale: 1.12, opacity: .05 }, { rotationY: -22, rotationX: -12, opacity: 1, duration: 4, ease: 'power2.inOut' }, 0)
        .fromTo('.studio-fin', { rotationY: -18 }, { rotationY: 0, stagger: .1, duration: 2, ease: 'power3.inOut' }, 3.5)
        .fromTo('.studio-red-line', { scaleX: 0 }, { scaleX: 1, duration: 1.5 }, 4)
        .to('.studio-object', { scale: .86, rotationY: -30, duration: 2, ease: 'power3.inOut' }, 6)
        .fromTo('.hero-title, .hero-composition, .hero-eyebrow', { opacity: 0, y: 24 }, { opacity: 1, y: 0, stagger: .12, duration: 1.4 }, 6);
    }, stage);
    const finish = () => { timeline?.progress(1); };
    const onScroll = () => { if (window.scrollY > 12) finish(); };
    const onKey = (event: KeyboardEvent) => { if (['Escape', 'PageDown', 'ArrowDown', ' '].includes(event.key)) finish(); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    stage.querySelector('.intro-skip')?.addEventListener('click', finish);
    document.addEventListener('click', finish);
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    media.addEventListener('change', finish);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('keydown', onKey); document.removeEventListener('click', finish); stage.querySelector('.intro-skip')?.removeEventListener('click', finish); media.removeEventListener('change', finish); ctx.revert(); stage.classList.remove('intro-playing'); };
  }, []);
  return <div className="studio-sculpture" ref={root} aria-hidden="true"><div className="studio-light"/><div className="studio-beam"/><div className="studio-object">{Array.from({ length: 6 }, (_, i) => <div className="studio-fin" key={i} style={{ '--fin': i } as React.CSSProperties}><span/></div>)}</div><div className="studio-red-line"/><div className="studio-floor"/></div>;
}
