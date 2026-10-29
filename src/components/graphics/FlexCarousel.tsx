'use client';
import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

export type CarouselItem = { src: string; title: string; alt: string; subtitle?: string };
export type FlexCarouselProps = {
  items: CarouselItem[];
  captureWheel: boolean;
  autoplay: boolean;
  focusOnClick: boolean;
  captions: boolean;
  cardHeight: number;
  gap: number;
  fit: string;
  intro: string;
  bend: number;
  dispersion: number;
  onSelect: (index: number) => void;
  onChange?: (index: number) => void;
};

/** Typed application adapter around the requested upstream JS/CSS source. */
export const FlexCarousel = dynamic<FlexCarouselProps>(
  () => import('../react-bits/FlexCarousel').then(module => module.default as unknown as ComponentType<FlexCarouselProps>),
  { ssr: false },
);
