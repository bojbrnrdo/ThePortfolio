'use client';
import { useEffect, useRef, useState } from 'react';
import { Arrow } from './ui/Arrow';
import { portfolio } from '../data/portfolio';

const sections = [
  ['About', '#about'], ['Disciplines', '#disciplines'], ['Selected work', '#work'], ['Tools', '#skills'],
  ['Experience', '#experience'], ['Certificates', '#certificates'], ['Process', '#process'], ['Contact', '#contact'],
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const element = dialog.current;
    if (!element || !open) return;
    element.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
      if (element.open) element.close();
    };
  }, [open]);

  function close() { dialog.current?.close(); }

  return <>
    <a className="skip" href="#work">Skip to selected work</a>
    <header className="nav">
      <a href="#beginning" className="monogram" aria-label="Job Matthew Bernardo, beginning">JMB<span>®</span></a>
      <a className="nav-caption" href="#about">Independent mind.<br/>Multiple perspectives.</a>
      <nav className="desktop-nav" aria-label="Main navigation"><a href="#work">Selected work <span>{String(portfolio.projects.length).padStart(2, '0')}</span></a><a href="#certificates">Certificates</a><a href="#contact">Let’s talk <Arrow/></a></nav>
    </header>
    <button ref={trigger} className="menu-button" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open} aria-controls="menu">Menu +</button>
    <dialog ref={dialog} id="menu" className="menu menu-dialog" aria-label="Explore the portfolio" data-lenis-prevent onClose={() => { setOpen(false); trigger.current?.focus({ preventScroll: true }); }} onClick={event => { if (event.target === event.currentTarget) close(); }}>
      <div className="menu-top"><span>JOB MATTHEW BERNARDO</span><button onClick={close} aria-label="Close navigation">Close −</button></div>
      <div className="menu-composition"><div className="menu-aside"><div className="menu-mark" aria-hidden="true"/><p>Different disciplines.<br/>One connected perspective.</p></div>
        <nav aria-label="Section navigation">{sections.map(([label, url], i) => <a key={url} href={url} onClick={close}><small>0{i+1}</small><span>{label}</span><span aria-hidden="true"><Arrow/></span></a>)}</nav>
      </div>
      <div className="menu-bottom"><span>CREATIVITY / TECHNOLOGY / CURIOSITY</span><span>ESC TO CLOSE</span></div>
    </dialog>
    <div className="scroll-progress" aria-hidden="true"/>
    <div className="chapter" aria-hidden="true"><span className="chapter-current">01</span><span className="chapter-line"/>10</div>
  </>;
}
