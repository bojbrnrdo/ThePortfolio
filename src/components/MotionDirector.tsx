'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { directOpening, directDisciplines, directProcess } from './motion/choreography';
export function MotionDirector(){
 useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add('motion-ready');
  const mm=gsap.matchMedia();
  let lenis:Lenis|undefined;
  const tick=(time:number)=>lenis?.raf(time*1000);
  mm.add('(prefers-reduced-motion: no-preference)',()=>{
   lenis=new Lenis({duration:1.05,anchors:true});
   lenis.on('scroll',ScrollTrigger.update); gsap.ticker.add(tick);
   const ctx=gsap.context(()=>{
    gsap.to('.scroll-progress',{scaleX:1,ease:'none',scrollTrigger:{trigger:'main',start:'top top',end:'bottom bottom',scrub:true}});
    gsap.utils.toArray<HTMLElement>('[data-scene]').forEach((scene)=>{
     ScrollTrigger.create({trigger:scene,start:'top center',end:'bottom center',onEnter:()=>setChapter(scene),onEnterBack:()=>setChapter(scene)});
    });
    gsap.utils.toArray<HTMLElement>('.reveal').forEach(el=>gsap.from(el,{y:50,clipPath:'inset(100% 0 0 0)',duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%',toggleActions:'play none none reverse'}}));
    gsap.utils.toArray<HTMLElement>('.project-art').forEach(el=>gsap.fromTo(el,{scale:.88,clipPath:'inset(10% 6% 10% 6%)'},{scale:1,clipPath:'inset(0% 0% 0% 0%)',scrollTrigger:{trigger:el,start:'top bottom',end:'top 20%',scrub:1}}));
   });
   return ()=>{ctx.revert();gsap.ticker.remove(tick);lenis?.destroy();lenis=undefined;};
  });
  mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)',()=>{
   const cleanups: (() => void)[] = [];
   const ctx=gsap.context(()=>{
    const opening = directOpening(document.querySelector<HTMLElement>('.film-stage')!);
    const resetDisciplines = directDisciplines(document.querySelector<HTMLElement>('.disciplines')!);
    const resetProcess = directProcess(document.querySelector<HTMLElement>('.process')!);
    gsap.fromTo('.work-intro h2', { scale: .7, xPercent: -8, rotate: -5 }, { scale: 1, xPercent: 0, rotate: 0, scrollTrigger: { trigger: '.work-intro', start: 'top bottom', end: 'center center', scrub: .6 } });
    gsap.fromTo('.closing-mark', { rotation: -90, scale: .45 }, { rotation: 0, scale: 1, scrollTrigger: { trigger: '.contact', start: 'top bottom', end: 'center center', scrub: .7 } });
    const onAnchor = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest('a[href="#identity"]') : null;
      if (!target || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      event.stopPropagation();
      const trigger = opening.timeline.scrollTrigger!;
      lenis?.scrollTo(trigger.start + (trigger.end - trigger.start) * (opening.timeline.labels.identity + .7) / opening.timeline.duration());
    };
    document.addEventListener('click', onAnchor, true);
    cleanups.push(() => { opening.cleanup(); resetDisciplines(); resetProcess(); document.removeEventListener('click', onAnchor, true); });
    gsap.to('.project-track',{x:()=>-(document.querySelector('.project-track')!.scrollWidth-window.innerWidth),ease:'none',scrollTrigger:{refreshPriority:2,trigger:'.projects',start:'top top',end:()=>'+='+window.innerWidth,pin:true,scrub:1,invalidateOnRefresh:true}});
   });return ()=>{ctx.revert();cleanups.forEach(cleanup => cleanup());};
  });
  function setChapter(scene:HTMLElement){const el=document.querySelector('.chapter-current');if(el)el.textContent=scene.dataset.scene||'01';}
  const refresh=()=>{ScrollTrigger.sort();ScrollTrigger.refresh();}; document.fonts.ready.then(refresh);
  return ()=>{mm.revert();gsap.ticker.remove(tick);document.documentElement.classList.remove('motion-ready');};
 },[]);
 return null;
}
