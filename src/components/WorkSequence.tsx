import { Arrow } from './ui/Arrow';
import { ProjectBrowser } from './graphics/ProjectBrowser';
import { portfolio } from '../data/portfolio';
import { ProjectShowcase } from './ProjectShowcase';

export function WorkSequence() {
  return <div className="work-sequence">
    <div className="work-stage">
      <ProjectBrowser/>
      <div className="work-aperture" aria-hidden="true"><span/><span/><span/><span/></div>
      <section id="work" className="work-intro section-pad" data-scene="05">
        <div className="section-label">04 / PROJECTS</div>
        <h2><span className="work-title-line">SELECTED</span><span className="work-title-line"><em>WORK</em><span className="accent">.</span></span><sup>({String(portfolio.projects.length).padStart(2, '0')})</sup></h2>
        <div className="work-caption"><a href="#project-1" aria-label="View the first selected project">View projects <span><Arrow direction="down-right"/></span></a></div>
      </section>
      <ProjectShowcase/>
      <div className="work-playhead" aria-hidden="true"><span>SELECTED WORK</span><i/><span>{String(portfolio.projects.length).padStart(2,'0')} PROJECTS</span></div>
    </div>
  </div>;
}
