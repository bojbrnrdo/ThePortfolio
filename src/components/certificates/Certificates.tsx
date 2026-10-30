import { certificateCollection } from '../../data/certificates';
import { Arrow } from '../ui/Arrow';
import { CertificateGallery } from './CertificateGallery';

export function Certificates() {
  const { items, sourceFolder } = certificateCollection;
  return <section id="certificates" className="certificates section-pad" data-scene="08" aria-labelledby="certificates-title">
    <div className="section-label">CERTIFICATES</div>
    <div className="certificates-heading"><h2 id="certificates-title" className="reveal">Certificates.</h2><div><p>{items.length} documents.</p><a href={sourceFolder} target="_blank" rel="noopener noreferrer">Open folder <Arrow/></a></div></div>
    {items.length > 0 && <CertificateGallery certificates={items}/>}
  </section>;
}
