import { ContinuousBackdrop } from '../components/graphics/ContinuousBackdrop';
import { TechnologyLandscape } from '../components/TechnologyLandscape';
import { Certificates } from '../components/certificates/Certificates';
import { OpeningSequence } from '../components/OpeningSequence';
import { Navigation } from '../components/Navigation';
import { MotionDirector } from '../components/MotionDirector';
import { WorkSequence } from '../components/WorkSequence';
import { portfolio as p } from '../data/portfolio';
export default function Home(){return <><ContinuousBackdrop/><Navigation/><MotionDirector/><main>
<OpeningSequence/>
<section id="about" className="about section-pad" data-scene="03"><div className="section-label">02 / ABOUT</div><div className="about-grid"><div className="about-visual-column"><h2 className="reveal">About me.</h2></div><div className="about-copy"><span className="asterisk" aria-hidden="true"><svg viewBox="0 0 64 64"><path d="M32 5v54M5 32h54M13 13l38 38M13 51l38-38"/></svg></span><h3 className="reveal">{p.introduction}</h3><p>{p.about}</p>{p.background && <p>{p.background}</p>}<a className="text-link" href="#disciplines">My focus <span>↘</span></a></div></div></section>
<section id="disciplines" className="disciplines section-pad" data-scene="04"><div className="section-label">03 / FOCUS</div><div className="discipline-frame" aria-hidden="true"/>{p.disciplines.map((d,i)=><article className="discipline" key={d.title}><span className="discipline-number">0{i+1}</span><div><h2>{d.title}</h2><div className="discipline-copy">{d.short && <h3>{d.short}</h3>}<p>{d.description}{d.tools && <small>{d.tools}</small>}</p><a href="#work" aria-label={`Explore selected work for ${d.title}`}>Explore work ↗</a></div></div></article>)}</section>
<WorkSequence/>
<TechnologyLandscape/>
<section id="experience" className="experience section-pad" data-scene="08"><div className="section-label">06 / EXPERIENCE</div><div className="experience-grid"><h2 className="reveal">Experience.</h2><div className="timeline">{p.experience.length?p.experience.map(e=><article key={e.position}><small>{e.dates}</small><h3>{e.position}</h3><p>{e.organization}</p><p>{e.description}</p></article>):<article><span className="timeline-dot"/><h3>Details coming soon.</h3></article>}</div></div></section>
<Certificates/>
<section id="process" className="process section-pad" data-scene="09"><div className="section-label">07 / PROCESS</div><div className="process-heading"><h2>How I work.</h2></div><div className="process-rule" aria-hidden="true"/>{p.process.map(([title,copy],i)=><article className="process-row" key={title}><span>0{i+1}</span><h3>{title}<span>.</span></h3><p>{copy}</p></article>)}</section>
<section id="contact" className="contact section-pad" data-scene="10"><div className="section-label">08 / CONTACT</div><h2 className="reveal">LET’S TALK<span className="accent">.</span></h2><div className="contact-links">{p.contact.email?<a href={`mailto:${p.contact.email}`}>Say hello ↗</a>:<span className="contact-placeholder">Find me on GitHub.</span>}<a href={p.contact.github} target="_blank" rel="noreferrer">GitHub ↗</a>{p.contact.linkedin&&<a href={p.contact.linkedin}>LinkedIn ↗</a>}{p.contact.resume&&<a href={p.contact.resume}>Résumé ↗</a>}</div><footer><span>© {new Date().getFullYear()} {p.name}</span><a href="#beginning">Back to beginning ↑</a></footer></section>
</main></>;}
