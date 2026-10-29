'use client';
import { useRef, useState } from 'react';
import { type Certificate } from '../../data/certificates';
import { useInteractiveGraphics } from '../../hooks/useInteractiveGraphics';
import { FlexCarousel } from '../graphics/FlexCarousel';
import { GraphicsBoundary } from '../graphics/GraphicsBoundary';
import { Arrow } from '../ui/Arrow';

type Props = { certificates: Certificate[] };

export function CertificateGallery({ certificates }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const enhanced = useInteractiveGraphics(root);
  const [active, setActive] = useState(0);
  const selected = certificates[active] ?? certificates[0];
  // An empty array makes the upstream component show stock images: do not mount it.
  if (!certificates.length) return null;

  function move(key: string) {
    const carousel = root.current?.querySelector<HTMLElement>('.flex-carousel');
    carousel?.focus();
    carousel?.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
  }
  function openOriginal(index: number) {
    root.current?.querySelector<HTMLAnchorElement>(`[data-certificate-index="${index}"]`)?.click();
  }

  return <div ref={root} className={`certificate-gallery${enhanced ? ' is-enhanced' : ''}`}>
    {enhanced && <>
      <div className="certificate-canvas"><GraphicsBoundary><FlexCarousel
        items={certificates.map(certificate => ({ src: certificate.preview, alt: certificate.previewAlt, title: certificate.title, subtitle: certificate.issuer }))}
        captureWheel={false} autoplay={false} focusOnClick={false} captions={false}
        cardHeight={.84} gap={35} fit="natural" intro="fade" bend={.12} dispersion={0}
        onChange={setActive} onSelect={openOriginal}
      /></GraphicsBoundary></div>
      <div className="certificate-selected">
        <div><span>{String(active+1).padStart(2,'0')} / {String(certificates.length).padStart(2,'0')}</span><h3>{selected.title}</h3>{selected.issuer && <p>{selected.issuer}</p>}</div>
        <div className="certificate-controls"><button onClick={() => move('ArrowLeft')} aria-label="Previous certificate"><Arrow direction="left"/></button><button onClick={() => move('ArrowRight')} aria-label="Next certificate"><Arrow direction="left"/></button></div>
      </div>
      <p className="certificate-gesture">DRAG OR USE ARROW KEYS / SELECT A CERTIFICATE TO OPEN THE ORIGINAL</p>
    </>}
    <ul className="certificate-list">{certificates.map((certificate, index) => <li key={certificate.id}>
      <a data-certificate-index={index} href={certificate.original} target="_blank" rel="noopener noreferrer" aria-label={`Open original certificate: ${certificate.title} (new tab)`}>
        <img src={certificate.preview} alt={certificate.previewAlt} width={1200} height={850} loading="lazy" decoding="async"/>
        <div><span className="certificate-number">{String(index+1).padStart(2,'0')}</span><div><h3>{certificate.title}</h3>{certificate.issuer && <p>{certificate.issuer}</p>}{certificate.issuedOn && <p>{certificate.issuedOn}</p>}</div><Arrow/></div>
      </a>
    </li>)}</ul>
  </div>;
}
