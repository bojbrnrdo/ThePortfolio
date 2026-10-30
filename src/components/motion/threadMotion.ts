/** GSAP writes these uniforms; the renderer reads them without React renders per frame. */
export const threadMotion = { amplitude: 1.1, distance: .32, angle: 24, waves: .85, split: .12, fray: .18, speed: .35 };
export const threadBeats = [
  { amplitude: 1.5, distance: .5, angle: -18, waves: 1.1, split: .18, fray: .15, speed: .42 },
  { amplitude: .7, distance: .22, angle: 10, waves: .6, split: .1, fray: .1, speed: .24 },
  { amplitude: 1.65, distance: .46, angle: 32, waves: 1.2, split: .22, fray: .25, speed: .4 },
  { amplitude: .9, distance: .35, angle: -12, waves: .9, split: .15, fray: .2, speed: .3 },
  { amplitude: 1.3, distance: .4, angle: 16, waves: 1, split: .12, fray: .2, speed: .35 },
  { amplitude: .5, distance: .2, angle: 0, waves: .5, split: .05, fray: .08, speed: .18 },
];
