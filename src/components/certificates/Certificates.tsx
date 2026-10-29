import { certificateCollection } from '../../data/certificates';
import { Arrow } from '../ui/Arrow';
import { CertificateGallery } from './CertificateGallery';

export function Certificates() {
  const { items, sourceFolder } = certificateCollection;
  return <section id="certificates" className="certificates section-pad" data-scene="08" aria-labelledby="certificates-title">
    <div className="section-label">LEARNING / CERTIFICATE COLLECTION</div>
    <div className="certificates-heading"><h2 id="certificates-title" className="reveal">Learning,<br/><em>in motion.</em></h2><div><p>Curiosity, documented.<br/>{items.length} documents. A continuing pursuit of knowledge.</p><a href={sourceFolder} target="_blank" rel="noopener noreferrer">View certificate folder <Arrow/></a></div></div>
    {items.length > 0 && <CertificateGallery certificates={items}/>}
  </section>;
}
