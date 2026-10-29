import gsap from 'gsap';

/** The title, aperture and project plates live on the same pinned stage. */
export function directWork(stage: HTMLElement) {
  stage.classList.add('is-directed');
  const q = gsap.utils.selector(stage);
  const panels = q('.project');
  const tl = gsap.timeline({
    defaults: { ease: 'power2.inOut' },
    scrollTrigger: {
      id: 'selected-work', refreshPriority: 2, trigger: stage,
      start: 'top top', end: () => `+=${window.innerHeight * (1.1 + panels.length * 1.1)}`,
      pin: true, scrub: .65, invalidateOnRefresh: true,
      onUpdate: self => {
        const chapter = document.querySelector('.chapter-current');
        if (chapter && self.isActive) chapter.textContent = self.progress < .2 ? '05' : '06';
      },
    },
  });
  gsap.set(panels, { autoAlpha: 0 });
  gsap.set(q('.work-aperture'), { scaleX: .04, scaleY: .04, rotation: 45 });
  tl.addLabel('work', .75)
    .from(q('.work-title-line'), { yPercent: 110, stagger: .1, duration: .65 }, 0)
    .to({}, { duration: .3 })
    .to(q('.work-title-line:first-child'), { xPercent: -110, duration: .8 }, 1)
    .to(q('.work-title-line:nth-child(2)'), { xPercent: 110, duration: .8 }, 1)
    .to(q('.work-intro .section-label, .work-caption, .work-intro sup'), { autoAlpha: 0, duration: .35 }, 1)
    .to(q('.work-aperture'), { scaleX: 1, scaleY: 1, rotation: 0, duration: 1 }, .9)
    .set(q('.work-intro'), { autoAlpha: 0 }, 1.8);
  panels.forEach((panel, index) => {
    const at = 1.6 + index * 2;
    const within = gsap.utils.selector(panel);
    tl.addLabel(`project-${index+1}`, at + .85);
    if (index) {
      tl.to(panels[index-1], { xPercent: -8, scale: .88, rotationY: -8, autoAlpha: 0, duration: .85 }, at)
        .fromTo(panel, { xPercent: 25, rotationY: 10, scale: 1.12, autoAlpha: 0 }, { xPercent: 0, rotationY: 0, scale: 1, autoAlpha: 1, duration: 1.1 }, at)
        .from(within('.art-object'), { rotation: -75, scale: .75, duration: 1.1 }, at);
    } else {
      tl.fromTo(panel, { autoAlpha: 0, clipPath: 'inset(45% 45% 45% 45%)' }, { autoAlpha: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 1 }, at);
    }
    tl.fromTo(within('.project-art'), { rotationX: 6, scale: 1.06 }, { rotationX: 0, scale: 1, duration: 1.4 }, at)
      .from(within('.art-title'), { yPercent: 65, opacity: 0, duration: .65 }, at + .3)
      .from(within('.project-meta, .project-pagination'), { y: 22, opacity: 0, stagger: .08, duration: .45 }, at + .6)
      .to({}, { duration: .9 });
  });
  tl.to(q('.work-playhead i'), { scaleX: 1, ease: 'none', duration: tl.duration() }, 0);
  return { timeline: tl, cleanup: () => stage.classList.remove('is-directed') };
}
