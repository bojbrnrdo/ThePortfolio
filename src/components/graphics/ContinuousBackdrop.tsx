import { ribbonCount, ribbonPath } from '../motion/ribbonForms';

/** One fixed composition, shared by the entire portfolio rather than individual sections. */
export function ContinuousBackdrop() {
  return <div className="continuous-backdrop" aria-hidden="true">
    <svg className="ribbon-field" viewBox="0 0 1440 1000" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs><linearGradient id="ribbon-silver" x1="0" y1="1000" x2="1440" y2="0" gradientUnits="userSpaceOnUse"><stop stopColor="#7c879b" stopOpacity=".05"/><stop offset=".4" stopColor="#bfc9db" stopOpacity=".48"/><stop offset=".68" stopColor="#f0f3f8" stopOpacity=".85"/><stop offset="1" stopColor="#7c879b" stopOpacity=".12"/></linearGradient></defs>
      <g className="ribbon-composition">{Array.from({ length: ribbonCount }, (_, i) => <path key={i} className={`motion-ribbon${i === 4 ? ' motion-ribbon-accent' : ''}`} d={ribbonPath(0, i)} stroke={i === 4 ? '#ed3945' : 'url(#ribbon-silver)'} strokeWidth={i === 4 ? 2 : 1} vectorEffect="non-scaling-stroke"/>)}</g>
      <path className="ribbon-tracer" d={ribbonPath(0, 4)} stroke="#fff" strokeWidth="2" strokeDasharray="50 1800" vectorEffect="non-scaling-stroke"/>
    </svg>
    <div className="backdrop-shade"/>
  </div>;
}
