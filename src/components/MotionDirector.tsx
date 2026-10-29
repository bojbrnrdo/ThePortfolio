'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { directWork } from './motion/workChoreography';
import { directOpening, directDisciplines, directProcess } from './motion/choreography';
export function MotionDirector(){
 useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add('motion-ready');
  const mm=gsap.matchMedia();
  let lenis:Lenis|undefined;
  let seekTimeline: (hash: string, immediate?: boolean) => boolean = () => false;
  const tick=(time:number)=>lenis?.raf(time*1000);
  const syncDimensions = () => lenis?.resize();
  ScrollTrigger.addEventListener('refresh', syncDimensions);
  mm.add('(prefers-reduced-motion: no-preference)',()=>{
   lenis=new Lenis({duration:1.05,anchors:false});
   lenis.on('scroll',ScrollTrigger.update); gsap.ticker.add(tick);
   const onAnchor = (event: MouseEvent) => {
     if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
     const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
     const hash = link?.getAttribute('href');
     if (!hash || hash === '#' || link?.target === '_blank') return;
     const target = document.getElementById(hash.slice(1));
     if (!target) return;
     event.preventDefault();
     scrollToHash(hash);
     if (location.hash !== hash) history.pushState(null, '', hash);
   };
   document.addEventListener('click', onAnchor);
   const ctx=gsap.context(()=>{
    gsap.to('.scroll-progress',{scaleX:1,ease:'none',scrollTrigger:{trigger:'main',start:'top top',end:'bottom bottom',scrub:true}});
    gsap.utils.toArray<HTMLElement>('[data-scene]').forEach((scene)=>{
     ScrollTrigger.create({trigger:scene,start:'top center',end:'bottom center',onEnter:()=>setChapter(scene),onEnterBack:()=>setChapter(scene)});
    });
    gsap.utils.toArray<HTMLElement>('.reveal').forEach(el=>gsap.from(el,{y:50,clipPath:'inset(100% 0 0 0)',duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%',toggleActions:'play none none reverse'}}));

   });
   return ()=>{ctx.revert();document.removeEventListener('click', onAnchor);gsap.ticker.remove(tick);lenis?.destroy();lenis=undefined;};
  });
  mm.add('(min-width: 900px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)',()=>{
   const cleanups: (() => void)[] = [];
   const ctx=gsap.context(()=>{
    const opening = directOpening(document.querySelector<HTMLElement>('.film-stage')!);
    const resetDisciplines = directDisciplines(document.querySelector<HTMLElement>('.disciplines')!);
    const resetProcess = directProcess(document.querySelector<HTMLElement>('.process')!);
    const work = directWork(document.querySelector<HTMLElement>('.work-stage')!);
    gsap.fromTo('.closing-mark', { rotation: -90, scale: .45 }, { rotation: 0, scale: 1, scrollTrigger: { trigger: '.contact', start: 'top bottom', end: 'center center', scrub: .7 } });
    const seek = (hash: string, immediate = false) => {
      const timeline = hash === '#identity' || hash === '#beginning' ? opening.timeline : hash === '#work' || /^#project-\d+$/.test(hash) ? work.timeline : null;
      if (!timeline) return false;
      const label = hash === '#beginning' ? 'opening' : hash.slice(1);
      const time = timeline.labels[label];
      if (time === undefined) return false;
      const at = time + (hash === '#beginning' ? 0 : hash === '#identity' ? .7 : hash === '#work' ? .1 : .35);
      const scroll = timeline.scrollTrigger!;
      lenis?.scrollTo(scroll.start + (scroll.end - scroll.start) * at / timeline.duration(), {
        immediate,
        onComplete: () => {
          const target = document.querySelector<HTMLElement>(hash.startsWith('#project-') ? `${hash} h3` : hash);
          if (target) { target.tabIndex = -1; target.focus({ preventScroll: true }); }
        },
      });
      return true;
    };
    seekTimeline = seek;
    cleanups.push(() => {
      opening.cleanup(); resetDisciplines(); resetProcess(); work.cleanup();
      seekTimeline = () => false;
    });
   });return ()=>{ctx.revert();cleanups.forEach(cleanup => cleanup());};
  });
  function scrollToHash(hash: string, immediate = false) {
    if (!hash.startsWith('#') || hash.length < 2) return;
    const target = document.getElementById(hash.slice(1));
    if (!target || seekTimeline(hash, immediate)) return;
    const position = target.getBoundingClientRect().top + window.scrollY;
    const focus = () => { target.tabIndex = -1; target.focus({ preventScroll: true }); };
    if (lenis) {
      lenis.resize();
      lenis.scrollTo(position, { immediate, onComplete: focus });
    } else {
      window.scrollTo({ top: position, behavior: 'instant' });
      focus();
    }
  }
  function setChapter(scene:HTMLElement){const el=document.querySelector('.chapter-current');if(el)el.textContent=scene.dataset.scene||'01';}
  const refresh=()=>{ScrollTrigger.sort();ScrollTrigger.refresh();};
  let layoutFrame = 0;
  let restoreFrame = 0;
  let disposed = false;
  const onLayout = () => { cancelAnimationFrame(layoutFrame); layoutFrame = requestAnimationFrame(refresh); };
  const onHistory = () => scrollToHash(location.hash, true);
  // Restore every section hash after native scrolling, font layout, and pin spacing settle.
  const restoreInitialHash = () => {
    document.fonts.ready.then(() => {
      if (disposed) return;
      restoreFrame = requestAnimationFrame(() => {
        if (disposed) return;
        refresh();
        scrollToHash(location.hash, true);
      });
    });
  };
  window.addEventListener('portfolio:layout', onLayout);
  window.addEventListener('popstate', onHistory);
  window.addEventListener('hashchange', onHistory);
  if (document.readyState === 'complete') restoreInitialHash();
  else window.addEventListener('load', restoreInitialHash, { once: true });
  document.fonts.ready.then(() => { if (!disposed) refresh(); });
  return () => {
    disposed = true;
    cancelAnimationFrame(layoutFrame);
    cancelAnimationFrame(restoreFrame);
    window.removeEventListener('portfolio:layout', onLayout);
    window.removeEventListener('popstate', onHistory);
    window.removeEventListener('hashchange', onHistory);
    window.removeEventListener('load', restoreInitialHash);
    mm.revert();
    ScrollTrigger.removeEventListener('refresh', syncDimensions);
    gsap.ticker.remove(tick);
    document.documentElement.classList.remove('motion-ready');
  };
 },[]);
 return null;
}
