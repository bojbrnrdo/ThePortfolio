import gsap from 'gsap';
import { ribbonFormCount, ribbonPath } from './ribbonForms';

export function directContinuousField() {
  const ribbons = gsap.utils.toArray<SVGPathElement>('.motion-ribbon');
  const field = gsap.timeline({ defaults: { ease: 'sine.inOut' }, scrollTrigger: {
    id: 'continuous-field', trigger: 'main', start: 'top top', end: 'bottom bottom', scrub: 1,
    invalidateOnRefresh: true,
  }});
  for (let form = 1; form < ribbonFormCount; form++) {
    field.to(ribbons, { attr: { d: (index: number) => ribbonPath(form, index) }, duration: 1 }, form - 1)
      .to('.ribbon-tracer', { attr: { d: ribbonPath(form, 4) }, duration: 1 }, form - 1);
  }
}
