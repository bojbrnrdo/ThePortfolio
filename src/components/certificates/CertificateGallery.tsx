'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { type Certificate } from '../../data/certificates';
import { useInteractiveGraphics } from '../../hooks/useInteractiveGraphics';
import { FlexCarousel } from '../graphics/FlexCarousel';
import { GraphicsBoundary } from '../graphics/GraphicsBoundary';
import { Arrow } from '../ui/Arrow';

type Props = { certificates: Certificate[] };
const filters = [
  ['All documents', 'all'], ['Certifications', 'Professional certification'],
  ['Courses', 'Course completion'], ['Membership', 'Membership'],
] as const;

function printedDate(date: string) {
  return new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));
}
function DocumentDetails({ certificate }: { certificate: Certificate }) {
  return <>
    <p>{certificate.issuer}</p>
    <p className="certificate-kind">{certificate.kind}</p>
    {certificate.issuedOn && <p>Issued <time dateTime={certificate.issuedOn}>{printedDate(certificate.issuedOn)}</time></p>}
    {certificate.expiresOn && <p>Valid until <time dateTime={certificate.expiresOn}>{printedDate(certificate.expiresOn)}</time></p>}
    {certificate.note && <p className="certificate-note">{certificate.note}</p>}
  </>;
}

export function CertificateGallery({ certificates }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const enhanced = useInteractiveGraphics(root);
  const [filter, setFilter] = useState<string>('all');
  const [active, setActive] = useState(0);
  const filtered = useMemo(() => certificates.filter(certificate => filter === 'all' || certificate.kind === filter), [certificates, filter]);
  const items = useMemo(() => filtered.map(certificate => ({ src: certificate.carouselPreview, alt: certificate.previewAlt, title: certificate.title, subtitle: certificate.issuer })), [filtered]);
  const selected = filtered[active] ?? filtered[0];
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const observer = new ResizeObserver(() => window.dispatchEvent(new Event('portfolio:layout')));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  // The upstream default is demo imagery; never mount an empty carousel.
  if (!certificates.length) return null;

  function move(key: string) {
    const carousel = root.current?.querySelector<HTMLElement>('.flex-carousel');
    if (carousel) {
      carousel.focus();
      carousel.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
    } else {
      setActive(index => (index + (key === 'ArrowRight' ? 1 : -1) + filtered.length) % filtered.length);
    }
  }
  function openOriginal(index: number) {
    const certificate = filtered[index];
    if (certificate) window.open(certificate.original, '_blank', 'noopener,noreferrer');
  }

  return <div ref={root} className={`certificate-gallery${enhanced ? ' is-enhanced' : ''}`}>
    <div className="certificate-filters" role="group" aria-label="Filter certificate documents">{filters.map(([label, value]) => {
      const count = value === 'all' ? certificates.length : certificates.filter(certificate => certificate.kind === value).length;
      return <button key={value} aria-pressed={filter === value} onClick={() => { setFilter(value); setActive(0); }}>{label} <span>{count}</span></button>;
    })}</div>
    {selected && <>
      <div className="certificate-canvas">
        <img className="certificate-featured-preview" src={selected.preview} alt={selected.previewAlt} width={selected.previewWidth} height={selected.previewHeight} loading="lazy" decoding="async"/>
        {enhanced && <div className="certificate-webgl"><GraphicsBoundary><FlexCarousel key={filter}
        items={items} captureWheel={false} autoplay={false} focusOnClick={false} captions={false}
        cardHeight={.76} gap={64} fit="natural" intro="fade" bend={.035} dispersion={0}
        onChange={setActive} onSelect={openOriginal}
      /></GraphicsBoundary></div>}
      </div>
      <div className="certificate-selected">
        <div><span>{String(active+1).padStart(2,'0')} / {String(filtered.length).padStart(2,'0')}</span><h3>{selected.title}</h3><DocumentDetails certificate={selected}/><a className="certificate-original" href={selected.original} target="_blank" rel="noopener noreferrer">Open original <Arrow/></a></div>
        {filtered.length > 1 && <div className="certificate-controls"><button onClick={() => move('ArrowLeft')} aria-label="Previous certificate"><Arrow direction="left"/></button><button onClick={() => move('ArrowRight')} aria-label="Next certificate"><Arrow direction="left"/></button></div>}
      </div>
      <p className="certificate-gesture">{enhanced ? 'Drag or use arrow keys.' : 'Use the arrows to browse.'}</p>
    </>}
    <noscript><ul>{filtered.map(certificate => <li key={certificate.id}><a href={certificate.original} target="_blank" rel="noopener noreferrer">{certificate.title}</a></li>)}</ul></noscript>
    <p className="certificate-dates-note">Dates match the original documents.</p>
  </div>;
}
