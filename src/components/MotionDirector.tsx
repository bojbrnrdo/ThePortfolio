'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
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
    gsap.from('.hero-title .word',{yPercent:115,rotate:3,stagger:.12,duration:1.2,ease:'power4.out',delay:.1});
    gsap.timeline({scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}}).to('.hero-title',{yPercent:-20,scale:.9},0).to('.sculpture',{rotate:55,scale:1.6,yPercent:30},0).to('.hero-bottom',{opacity:0},0);
    gsap.utils.toArray<HTMLElement>('.reveal').forEach(el=>gsap.from(el,{y:50,clipPath:'inset(100% 0 0 0)',duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%',toggleActions:'play none none reverse'}}));
    gsap.utils.toArray<HTMLElement>('.project-art').forEach(el=>gsap.fromTo(el,{scale:.88,clipPath:'inset(10% 6% 10% 6%)'},{scale:1,clipPath:'inset(0% 0% 0% 0%)',scrollTrigger:{trigger:el,start:'top bottom',end:'top 20%',scrub:1}}));
   });
   return ()=>{ctx.revert();gsap.ticker.remove(tick);lenis?.destroy();lenis=undefined;};
  });
  mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)',()=>{
   const ctx=gsap.context(()=>{
    const words=gsap.utils.toArray<HTMLElement>('.identity-word');
    gsap.set(words.slice(1),{yPercent:110});
    const tl=gsap.timeline({scrollTrigger:{trigger:'.identity',start:'top top',end:'+=170%',pin:true,scrub:.7}});
    words.forEach((word,i)=>{if(i){tl.to(words[i-1],{yPercent:-110,duration:1}).to(word,{yPercent:0,duration:1},'<');}tl.to('.identity-orbit',{rotate:i*90,scale:1+i*.12,duration:.5});});
    gsap.to('.project-track',{x:()=>-(document.querySelector('.project-track')!.scrollWidth-window.innerWidth),ease:'none',scrollTrigger:{trigger:'.projects',start:'top top',end:()=>'+='+window.innerWidth,pin:true,scrub:1,invalidateOnRefresh:true}});
   });return ()=>ctx.revert();
  });
  function setChapter(scene:HTMLElement){const el=document.querySelector('.chapter-current');if(el)el.textContent=scene.dataset.scene||'01';}
  const refresh=()=>ScrollTrigger.refresh(); document.fonts.ready.then(refresh);
  return ()=>{mm.revert();gsap.ticker.remove(tick);document.documentElement.classList.remove('motion-ready');};
 },[]);
 return null;
}
