/** Six film chapters map to existing content; no separate site or invented biography. */
export const filmChapters = [
  { id: 'arrival', title: 'The Arrival', target: '.opening-film' },
  { id: 'identity', title: 'The Identity', target: '#about' },
  { id: 'creations', title: 'The Creations', target: '.work-sequence' },
  { id: 'craft', title: 'The Craft', target: '#skills' },
  { id: 'journey', title: 'The Journey', target: '#experience' },
  { id: 'final-frame', title: 'The Final Frame', target: '#contact' },
] as const;
export type FilmChapterId = typeof filmChapters[number]['id'];
