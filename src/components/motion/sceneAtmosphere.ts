import gsap from 'gsap';

/** Supporting motion uses native document flow, on both touch and desktop. */
export function directSceneAtmosphere() {
  gsap.from('.about-copy > :not(.reveal)', {
    y: 35, opacity: 0, stagger: .12, duration: .85, ease: 'power3.out',
    scrollTrigger: { trigger: '.about-copy', start: 'top 85%', toggleActions: 'play none none reverse' },
  });
  gsap.utils.toArray<HTMLElement>('.technology-filters button, .certificate-filters button').forEach(button => {
    gsap.from(button, { y: 18, duration: .6, ease: 'power3.out', scrollTrigger: { trigger: button, start: 'top 95%', toggleActions: 'play none none reverse' } });
  });
  gsap.utils.toArray<HTMLElement>('.certificate-canvas, .technology-viewport').forEach(frame => {
    gsap.from(frame, { scale: .94, opacity: .25, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: frame, start: 'top 90%', toggleActions: 'play none none reverse' } });
  });
  gsap.from('.contact-links > *', { y: 25, opacity: 0, stagger: .13, duration: .7, scrollTrigger: { trigger: '.contact-links', start: 'top 95%', toggleActions: 'play none none reverse' } });
}

/** Short and touch viewports retain motion without tall pinned scroll sections. */
export function directCompactScenes() {
  gsap.from('.film-character', { yPercent: 105, rotation: 5, stagger: .025, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.hero', start: 'top 80%', toggleActions: 'play none none reverse' } });
  gsap.utils.toArray<HTMLElement>('.identity-word').forEach((word, index) => {
    gsap.from(word, { xPercent: index % 2 ? 20 : -20, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: word, start: 'top 90%', toggleActions: 'play none none reverse' } });
  });
  gsap.utils.toArray<HTMLElement>('.discipline, .process-row').forEach(row => {
    gsap.from(row, { y: 45, duration: .85, ease: 'power3.out', scrollTrigger: { trigger: row, start: 'top 92%', toggleActions: 'play none none reverse' } });
  });
  gsap.utils.toArray<HTMLElement>('.project-art').forEach(frame => {
    gsap.fromTo(frame, { clipPath: 'inset(12% 8% 12% 8%)', scale: .96 }, { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: frame, start: 'top 90%', toggleActions: 'play none none reverse' } });
  });
}
