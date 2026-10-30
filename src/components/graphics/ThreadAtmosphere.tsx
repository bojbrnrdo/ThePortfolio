'use client';
import dynamic from 'next/dynamic';
import { createPortal } from 'react-dom';
import { useEffect, useRef, useState, type ComponentType } from 'react';
import { useInteractiveGraphics } from '../../hooks/useInteractiveGraphics';
import { threadMotion } from '../motion/threadMotion';
import { GraphicsBoundary } from './GraphicsBoundary';

type ThreadsProps = {
  motionState: typeof threadMotion; color: number[]; accentColor: number[];
  lineCount: number; thickness: number; softness: number; brightness: number; opacity: number;
  taper: number; enableMouseInteraction: boolean; onReady: () => void; onUnavailable: () => void;
};
const Threads = dynamic<ThreadsProps>(() => import('../react-bits/Threads').then(module => module.default as unknown as ComponentType<ThreadsProps>), { ssr: false });

export function ThreadAtmosphere() {
  const root = useRef<HTMLDivElement>(null);
  const enhanced = useInteractiveGraphics(root);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [paused, setPaused] = useState(false);
  useEffect(() => { if (!enhanced) setReady(false); }, [enhanced]);
  useEffect(() => {
    document.documentElement.classList.toggle('ambient-paused', paused);
    return () => document.documentElement.classList.remove('ambient-paused');
  }, [paused]);
  return <>
    <div ref={root} className="thread-enhancement" data-ready={ready && enhanced && !paused && !failed} aria-hidden="true">
      {enhanced && !paused && !failed && <GraphicsBoundary><Threads motionState={threadMotion}
        color={[.65,.7,.8]} accentColor={[.93,.22,.27]} lineCount={42} thickness={.8} softness={.7}
        brightness={1.05} opacity={.8} taper={.8} enableMouseInteraction={false}
        onReady={() => setReady(true)} onUnavailable={() => { setReady(false); setFailed(true); }}/></GraphicsBoundary>}
    </div>
    {mounted && createPortal(<button className="ambient-toggle" aria-pressed={paused} onClick={() => { setReady(false); setPaused(value => !value); }}>{paused ? 'Resume ambient motion' : 'Pause ambient motion'}<span aria-hidden="true">{paused ? '＋' : '−'}</span></button>, document.body)}
  </>;
}
