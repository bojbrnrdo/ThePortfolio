import { TechnologySpiral } from './graphics/TechnologySpiral';

export function TechnologyLandscape() {
  return <section id="skills" className="skills section-pad" data-scene="07" aria-labelledby="technology-title">
    <div className="section-label">05 / TOOLS</div>
    <div className="technology-heading"><h2 id="technology-title" className="reveal">Tools &amp;<br/>languages.</h2></div>
    <TechnologySpiral/>
  </section>;
}
