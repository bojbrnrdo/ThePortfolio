import { Arrow } from './ui/Arrow';
import { portfolio } from '../data/portfolio';

export function ProjectShowcase() {
  return <section className="projects" data-scene="06" aria-label="Featured projects">
    <div className="project-track">
      {portfolio.projects.map((project, i) => <article id={`project-${i + 1}`} className="project" key={project.title} aria-labelledby={`project-title-${i + 1}`}>
        <div className={`project-art ${project.visual}`}>
          <span className="art-label">CONCEPT COVER</span>
          <div className="art-object" aria-hidden="true">{i === 0 ? <><i/><i/><i/><i/><i/></> : <><span/><span/><span/></>}</div>
          <span className="art-title" aria-hidden="true">{project.title}</span>
          <span className="art-footer">PROJECT PREVIEW <span>{String(i+1).padStart(2,'0')} — {String(portfolio.projects.length).padStart(2,'0')}</span></span>
        </div>
        <div className="project-meta">
          <span className="project-index">/ {project.year}</span>
          <div><h3 id={`project-title-${i + 1}`} tabIndex={-1}>{project.title}</h3><p>{project.description}</p></div>
          <span className="project-category">{project.category}</span>
          <details><summary aria-label={`Read ${project.title} project information`}>Project notes <Arrow/></summary><p>{project.details}</p><p>{project.stack}</p>{project.repository && <a href={project.repository}>Repository ↗</a>}{project.demo && <a href={project.demo}>Live demo ↗</a>}{project.caseStudy && <a href={project.caseStudy}>Case study ↗</a>}</details>
        </div>
        <nav className="project-pagination" aria-label={`${project.title} project navigation`}>
          <span>SELECTED WORK / {String(i+1).padStart(2,'0')}</span>
          {i > 0 && <a href={`#project-${i}`} aria-label={`Previous project: ${portfolio.projects[i-1].title}`}><Arrow direction="left"/> Previous</a>}
          {i < portfolio.projects.length-1 ? <a href={`#project-${i+2}`} aria-label={`Next project: ${portfolio.projects[i+1].title}`}>Next project <Arrow/></a> : <a href="#skills">Continue exploring <Arrow direction="down"/></a>}
        </nav>
      </article>)}
    </div>
  </section>;
}
