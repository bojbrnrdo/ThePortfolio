import { Arrow } from './ui/Arrow';
import { portfolio } from '../data/portfolio';

function Characters({ text }: { text: string }) {
  return <span aria-hidden="true">{Array.from(text).map((letter, i) => <span className="film-character" key={i}>{letter === ' ' ? '\u00a0' : letter}</span>)}</span>;
}

/** A single stage, shared geometry, and semantic scenes; static until enhanced. */
export function OpeningSequence() {
  return <div className="opening-film">
    <div className="film-stage">
      <section id="beginning" className="hero" data-scene="01">
        <div className="hero-eyebrow"><span className="status-dot"/> JOB MATTHEW BERNARDO / PERSONAL PORTFOLIO <span>GAME / WEB / SECURITY</span></div>
        <h1 className="hero-title" aria-label={portfolio.name}><span className="mask"><span className="word"><Characters text="JOB MATTHEW"/></span></span><span className="mask second-line"><span className="word"><Characters text="BERNARDO"/><span className="title-period">.</span></span></span></h1>
        <div className="hero-composition"><p className="hero-tagline">{portfolio.tagline}</p><a className="hero-work-link" href="#work">Discover my work <span><Arrow/></span></a></div>
        <div className="hero-bottom"><span>GAME DEVELOPMENT<br/>WEB DEVELOPMENT / CYBERSECURITY</span><a href="#identity">EXPLORE THE STORY <span>↓</span></a><span>CREATIVITY MEETS<br/>TECHNICAL CURIOSITY</span></div>
      </section>
      <section id="identity" className="identity" data-scene="02">
        <div className="section-label">01 / THE WAY I THINK</div>
        <div className="identity-stage"><div className="identity-words">{['I CREATE.','I BUILD.','I SOLVE.'].map((word, i) => <h2 className="identity-word" key={word} aria-label={word}><span className="identity-prefix" aria-hidden="true">I</span><span className="identity-verb" aria-hidden="true">{word.slice(2)}</span><small aria-hidden="true">0{i+1} / 03</small></h2>)}</div></div>
        <p className="identity-caption">THROUGH CREATIVITY,<br/>TECHNOLOGY, AND CURIOSITY.</p>
      </section>
      <div className="film-outro" aria-hidden="true"><span>A CURIOUS MIND.</span><em>A considered approach.</em><span className="film-outro-line"/></div>
      <div className="film-cue" aria-hidden="true"><span>IDEA</span><span className="film-cue-track"><i/></span><span>EXPERIENCE</span></div>
    </div>
  </div>;
}
