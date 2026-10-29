'use client';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState, type ComponentType } from 'react';
import { portfolio } from '../../data/portfolio';
import { Arrow } from '../ui/Arrow';
import { GraphicsBoundary } from './GraphicsBoundary';
import { useInteractiveGraphics } from '../../hooks/useInteractiveGraphics';

type Item = { src: string; title: string; alt: string; subtitle?: string };
type CarouselProps = {
  items: Item[]; captureWheel: boolean; autoplay: boolean; focusOnClick: boolean;
  captions: boolean; cardHeight: number; gap: number; fit: string; intro: string;
  bend: number; dispersion: number; onSelect: (index: number) => void;
};
const FlexCarousel = dynamic<CarouselProps>(() => import('../react-bits/FlexCarousel').then(module => module.default as unknown as ComponentType<CarouselProps>), { ssr: false });
const items: Item[] = portfolio.projects.map(project => ({ src: project.preview, title: project.title, alt: project.previewAlt, subtitle: 'Conceptual cover / details pending' }));

function BrowserContents({ close }: { close: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const enhanced = useInteractiveGraphics(root);
  function select(index: number) {
    // Follow the same real anchors as the main presentation and keep one navigation owner.
    root.current?.querySelector<HTMLAnchorElement>(`a[href="#project-${index+1}"]`)?.click();
  }
  function step(key: string) {
    const carousel = root.current?.querySelector<HTMLElement>('.flex-carousel');
    carousel?.focus();
    carousel?.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
  }
  return <div ref={root} className={`project-browser-content${enhanced ? ' is-enhanced' : ''}`}>
    {enhanced && <div className="project-browser-canvas"><GraphicsBoundary><FlexCarousel items={items} captureWheel={false} autoplay={false} focusOnClick={false} captions={false} cardHeight={.83} gap={30} fit="landscape" intro="fade" bend={.2} dispersion={.1} onSelect={select}/></GraphicsBoundary></div>}
    <div className="project-browser-instructions">{enhanced ? <><span>DRAG TO EXPLORE / ARROW KEYS TO NAVIGATE</span><div><button aria-label="Previous preview" onClick={() => step('ArrowLeft')}><Arrow direction="left"/></button><button aria-label="Next preview" onClick={() => step('ArrowRight')}><Arrow direction="left"/></button></div></> : <span>SELECT A PROJECT TO EXPLORE</span>}</div>
    <ul className="project-browser-list">{portfolio.projects.map((project, i) => <li key={project.title}>
      <a href={`#project-${i+1}`} onClick={close}>
        <img src={project.preview} alt={project.previewAlt} width={1000} height={760} loading="lazy"/>
        <span><small>0{i+1} / PROJECT</small><strong>{project.title}</strong><span>Explore project <Arrow/></span></span>
      </a>
    </li>)}</ul>
    <p className="project-browser-note">Conceptual covers. Project screenshots and details are still to be added.</p>
  </div>;
}

export function ProjectBrowser() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const element = dialog.current;
    if (!open || !element) return;
    element.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; if (element.open) element.close(); };
  }, [open]);
  return <>
    <button ref={trigger} className="work-browser-trigger" aria-haspopup="dialog" aria-controls="project-browser" aria-expanded={open} onClick={() => setOpen(true)}>Browse projects <Arrow/></button>
    <dialog id="project-browser" ref={dialog} className="project-browser" aria-label="Browse selected projects" data-lenis-prevent onClose={() => { setOpen(false); trigger.current?.focus({ preventScroll: true }); }}>
      <div className="project-browser-top"><div><span>SELECTED WORK / INDEX</span><h2>A different point of view.</h2></div><button onClick={() => dialog.current?.close()}>Close −</button></div>
      {open && <BrowserContents close={() => dialog.current?.close()}/>}
    </dialog>
  </>;
}
