import { TechnologySpiral } from './graphics/TechnologySpiral';

export function TechnologyLandscape() {
  return <section id="skills" className="skills section-pad" data-scene="07" aria-labelledby="technology-title">
    <div className="section-label">05 / AN EVOLVING TECHNOLOGY LANDSCAPE</div>
    <div className="technology-heading"><h2 id="technology-title" className="reveal">Many tools.<br/><em>One perspective.</em></h2><p>Web development.<br/>Game development.<br/>Cybersecurity.<span>Connected through curiosity.</span></p></div>
    <TechnologySpiral/>
  </section>;
}
