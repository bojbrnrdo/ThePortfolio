'use client';
import { useState } from 'react';
export function Navigation(){
 const [open,setOpen]=useState(false);
 return <><a className="skip" href="#work">Skip to selected work</a><header className="nav"><a href="#beginning" className="monogram" aria-label="Job Matthew Bernardo, beginning">JMB<span>®</span></a><a className="nav-caption" href="#about">Independent mind.<br/>Multiple perspectives.</a><nav className="desktop-nav" aria-label="Main navigation"><a href="#work">Selected work <span>02</span></a><a href="#contact">Let’s talk ↗</a></nav><button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="menu">{open?'Close −':'Menu +'}</button></header>{open&&<nav id="menu" className="menu" aria-label="Section navigation">{[['About','#about'],['Disciplines','#disciplines'],['Work','#work'],['Experience','#experience'],['Contact','#contact']].map(([label,url],i)=><a key={url} href={url} onClick={()=>setOpen(false)}><small>0{i+1}</small>{label} ↗</a>)}</nav>}<div className="scroll-progress" aria-hidden="true"/><div className="chapter" aria-hidden="true"><span className="chapter-current">01</span><span className="chapter-line"/>10</div></>;
}
