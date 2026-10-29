import { Arrow } from './ui/Arrow';
import { portfolio } from '../data/portfolio';
import { ProjectShowcase } from './ProjectShowcase';

export function WorkSequence() {
  return <div className="work-sequence">
    <div className="work-stage">
      <div className="work-aperture" aria-hidden="true"><span/><span/><span/><span/></div>
      <section id="work" className="work-intro section-pad" data-scene="05">
        <div className="section-label">04 / IDEAS INTO FORM</div>
        <h2><span className="work-title-line">SELECTED</span><span className="work-title-line"><em>WORK</em><span className="accent">.</span></span><sup>({String(portfolio.projects.length).padStart(2, '0')})</sup></h2>
        <div className="work-caption"><span>A COLLECTION IN PROGRESS</span><p>Two projects. New perspectives.<br/>Room for what comes next.</p><a href="#project-1" aria-label="View the first selected project">Explore the work <span><Arrow direction="down-right"/></span></a></div>
      </section>
      <ProjectShowcase/>
      <div className="work-playhead" aria-hidden="true"><span>SELECTED WORK</span><i/><span>{String(portfolio.projects.length).padStart(2,'0')} PROJECTS</span></div>
    </div>
  </div>;
}
