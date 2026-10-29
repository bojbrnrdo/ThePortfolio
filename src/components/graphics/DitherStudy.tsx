'use client';
import dynamic from 'next/dynamic';
import { useRef, type ComponentType } from 'react';
import { useInteractiveGraphics } from '../../hooks/useInteractiveGraphics';
import { GraphicsBoundary } from './GraphicsBoundary';

type DitherProps = {
  src: string; pattern: string; fit: string; pixelSize: number; levels: number;
  inkColor: string; paperColor: string; revealRadius: number; linger: number;
  wander: boolean; clickBurst: boolean;
};
const DitherVeil = dynamic<DitherProps>(() => import('../react-bits/DitherVeil').then(module => module.default as unknown as ComponentType<DitherProps>), { ssr: false });

export function DitherStudy() {
  const frame = useRef<HTMLElement>(null);
  const enabled = useInteractiveGraphics(frame);
  return <figure ref={frame} className="dither-study">
    <div className="dither-study-image">
      {/* This is an abstract illustration, never a portrait or project screenshot. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/art/perspective.svg" alt="An abstract orbital composition in vermilion and charcoal." width={1000} height={760} loading="lazy" decoding="async"/>
      {enabled && <div className="dither-study-effect" aria-hidden="true"><GraphicsBoundary><DitherVeil src="/art/perspective.svg" pattern="bayer" fit="contain" pixelSize={3} levels={2} inkColor="#0b0b0d" paperColor="#f4f2ed" revealRadius={140} linger={.5} wander={false} clickBurst={false}/></GraphicsBoundary></div>}
    </div>
    <figcaption><span>FIG. 02 / A CHANGE IN PERSPECTIVE</span><span>{enabled ? 'MOVE TO REVEAL ↗' : 'ABSTRACT VISUAL STUDY'}</span></figcaption>
  </figure>;
}
