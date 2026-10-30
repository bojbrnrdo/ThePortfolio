'use client';
import dynamic from 'next/dynamic';
import { useEffect, useMemo, useRef, useState, type ComponentType } from 'react';
import { technologies, technologyDisciplines } from '../../data/technologies';
import { useInteractiveGraphics } from '../../hooks/useInteractiveGraphics';
import { GraphicsBoundary } from './GraphicsBoundary';

type SpiralProps = {
  items: { id: string; src: string; alt: string }[];
  speed: number; animationMode: string; radius: number; cardWidth: number; cardHeight: number;
  verticalSpacing: number; cardsPerTurn: number; edgeBlur: number; edgeFade: number;
  centerScale: number; pauseOnHover: boolean; imageFit: string;
};
const InfiniteSpiral = dynamic<SpiralProps>(() => import('../react-bits/InfiniteSpiral').then(module => module.default as unknown as ComponentType<SpiralProps>), { ssr: false });

export function TechnologySpiral() {
  const root = useRef<HTMLDivElement>(null);
  const enhanced = useInteractiveGraphics(root, false);
  const [discipline, setDiscipline] = useState('all');
  const [paused, setPaused] = useState(false);
  const filtered = useMemo(() => technologies.filter(technology => discipline === 'all' || technology.discipline === discipline), [discipline]);
  const items = useMemo(() => filtered.map(technology => ({ id: technology.id, src: technology.icon, alt: technology.name })), [filtered]);
  useEffect(() => {
    if (!root.current) return;
    const observer = new ResizeObserver(() => window.dispatchEvent(new Event('portfolio:layout')));
    observer.observe(root.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={root} className={`technology-panel${enhanced ? ' is-enhanced' : ''}`}>
    <div className="technology-filters" role="group" aria-label="Filter technology icons">{technologyDisciplines.map(group => <button key={group.id} aria-pressed={discipline === group.id} onClick={() => setDiscipline(group.id)}>{group.label}<span>{group.id === 'all' ? technologies.length : technologies.filter(technology => technology.discipline === group.id).length}</span></button>)}</div>
    <div className="technology-viewport">
      <ul className="technology-static" aria-hidden={enhanced || undefined}>{filtered.map(technology => <li key={technology.id}><img src={technology.icon} alt="" width={40} height={40} loading="lazy"/><span>{technology.name}</span></li>)}</ul>
      {enhanced && <div className="technology-spiral" aria-hidden="true"><GraphicsBoundary><InfiniteSpiral key={discipline} items={items} speed={.38} animationMode={paused ? 'drag' : 'all'} radius={200} cardWidth={78} cardHeight={78} verticalSpacing={68} cardsPerTurn={9} edgeBlur={0} edgeFade={.55} centerScale={1.08} pauseOnHover imageFit="contain"/></GraphicsBoundary></div>}
    </div>
    <div className="technology-footer"><p>{enhanced ? 'Drag to explore. Hover to pause.' : ''}</p>{enhanced && <button onClick={() => setPaused(value => !value)} aria-pressed={paused}>{paused ? 'Resume spiral' : 'Pause spiral'}<svg className="technology-play-icon" aria-hidden="true" viewBox="0 0 24 24"><path d={paused ? 'M8 5l11 7-11 7Z' : 'M8 5v14M16 5v14'}/></svg></button>}</div>
    {enhanced && <ul className="technology-accessible-names">{filtered.map(technology => <li key={technology.id}>{technology.name}</li>)}</ul>}
    <p className="technology-context">Reference tools, not a claim of proficiency.</p>
  </div>;
}
