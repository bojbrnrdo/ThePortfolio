import gsap from 'gsap';

/** All beats share one scroll timeline so every transform reverses together. */
export function directOpening(stage: HTMLElement) {
  const q = gsap.utils.selector(stage);
  const fins = q('.studio-fin');
  const words = q('.identity-word');
  stage.classList.add('is-directed');
  gsap.set(q('.identity, .film-outro'), { autoAlpha: 0 });
  gsap.set(words, { autoAlpha: 0 });
  const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' }, scrollTrigger: {
    refreshPriority: 4, id: 'opening-film', trigger: stage, start: 'top top', end: '+=320%', pin: true, scrub: .8, invalidateOnRefresh: true,
    onUpdate: self => { const chapter = document.querySelector('.chapter-current'); if (chapter && self.isActive) chapter.textContent = self.progress < .27 ? '01' : '02'; },
  }});
  tl.addLabel('opening', 0)
    .to(q('.studio-sculpture'), { rotationY: 15, scale: 1.08, duration: 1.2 }, 0)
    .to(q('.hero-title .mask:first-child'), { yPercent: -110, duration: .9 }, 1)
    .to(q('.hero-title .second-line'), { yPercent: 110, duration: .9 }, 1)
    .to(q('.hero-tagline, .figure-caption, .hero-bottom, .hero-eyebrow'), { autoAlpha: 0, y: -15, duration: .5 }, 1)
    .to(q('.studio-sculpture'), { xPercent: -28, scale: 1.5, rotationZ: -15, duration: 1.2 }, 1)
    .to(fins, { x: (i: number) => (i - 2.5) * 48, rotationZ: (i: number) => (i - 2.5) * 6, duration: 1.2 }, 1)
    .set(q('.hero'), { autoAlpha: 0 }, 2.1)
    .set(q('.identity'), { autoAlpha: 1 }, 2.1)
    .addLabel('identity', 2.1)
    .set(words[0], { autoAlpha: 1 }, 2.1)
    .from(q('.identity .section-label, .identity-caption'), { y: 25, opacity: 0, duration: .5 }, 2.1)
    .fromTo(words[0], { yPercent: 110 }, { yPercent: 0, duration: .7 }, 2.1)
    .to(q('.studio-sculpture'), { opacity: .28, duration: .8 }, 2.1);
  words.slice(1).forEach((word, index) => {
    const at = 3.3 + index * 1.2;
    tl.to(words[index], { yPercent: -110, autoAlpha: 0, duration: .55 }, at)
      .fromTo(word, { yPercent: 110, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: .65 }, at)
      .to(fins, { x: (i: number) => (i - 2.5) * (index ? 100 : 65), rotationZ: index ? 90 : 0, duration: .9 }, at)
      .to(q('.studio-sculpture'), { rotationZ: index ? 0 : 15, duration: .9 }, at);
  });
  tl.to(q('.identity'), { autoAlpha: 0, y: -35, duration: .65 }, 5.8)
    .to(q('.studio-sculpture'), { scale: 2.8, opacity: 0, duration: 1 }, 5.8)
    .to(stage, { backgroundColor: '#171719', duration: .8 }, 5.8)
    .fromTo(q('.film-outro'), { autoAlpha: 0, y: 35 }, { autoAlpha: 1, y: 0, duration: .75 }, 6.3)
    .from(q('.film-outro-line'), { scaleX: 0, duration: .6 }, 6.5)
    .to(q('.film-cue i'), { scaleX: 1, ease: 'none', duration: 7.4 }, 0)
    .to({}, { duration: .5 });
  return { timeline: tl, cleanup: () => stage.classList.remove('is-directed') };
}

export function directDisciplines(section: HTMLElement) {
  section.classList.add('is-directed');
  const q = gsap.utils.selector(section);
  const panels = q('.discipline');
  gsap.set(panels.slice(1), { autoAlpha: 0, yPercent: 70 });
  const tl = gsap.timeline({ scrollTrigger: { refreshPriority: 3, trigger: section, start: 'top top', end: '+=210%', pin: true, scrub: .65, invalidateOnRefresh: true } });
  tl.from(q('.discipline-frame'), { scale: .65, rotation: -45, duration: .7 });
  panels.slice(1).forEach((panel, i) => {
    const at = 1.2 + i * 1.5;
    tl.to(panels[i], { autoAlpha: 0, yPercent: -70, duration: .65 }, at)
      .to(panel, { autoAlpha: 1, yPercent: 0, duration: .75 }, at)
      .to(q('.discipline-frame'), { rotation: 90 * (i + 1), borderRadius: '0%', scale: i ? 1.15 : .85, duration: .9 }, at);
  });
  tl.to(q('.discipline-frame'), { scale: 3.5, borderWidth: 1, opacity: .15, duration: 1 }, 4.2)
    .to({}, { duration: .4 });
  return () => section.classList.remove('is-directed');
}

export function directProcess(section: HTMLElement) {
  section.classList.add('is-directed');
  const q = gsap.utils.selector(section);
  const steps = q('.process-row');
  gsap.set(steps.slice(1), { autoAlpha: 0, yPercent: 110 });
  const tl = gsap.timeline({ scrollTrigger: { refreshPriority: 1, trigger: section, start: 'top top', end: '+=220%', pin: true, scrub: .6, invalidateOnRefresh: true } });
  steps.slice(1).forEach((step, i) => {
    const at = .8 + i * 1.1;
    tl.to(steps[i], { autoAlpha: 0, yPercent: -110, duration: .5 }, at)
      .to(step, { autoAlpha: 1, yPercent: 0, duration: .65 }, at)
      .to(q('.process-rule'), { scaleX: (i + 2) / steps.length, ease: 'none', duration: .65 }, at);
  });
  tl.to({}, { duration: .8 });
  return () => section.classList.remove('is-directed');
}
