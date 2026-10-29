'use client';
import { useEffect, useState, type RefObject } from 'react';

let webglAvailable: boolean | undefined;
function supportsWebGL() {
  if (webglAvailable !== undefined) return webglAvailable;
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2');
    webglAvailable = Boolean(gl);
    gl?.getExtension('WEBGL_lose_context')?.loseContext();
  } catch { webglAvailable = false; }
  return webglAvailable;
}

/** Heavy previews mount only while visible on a capable, motion-enabled desktop. */
export function useInteractiveGraphics(ref: RefObject<HTMLElement | null>, requireWebGL = true) {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const media = matchMedia('(min-width: 900px) and (min-height: 700px) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let visible = false;
    const update = () => setEnabled(visible && media.matches && !document.hidden && (!requireWebGL || supportsWebGL()));
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); }, { rootMargin: '100px' });
    observer.observe(element);
    media.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    return () => {
      observer.disconnect();
      media.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', update);
    };
  }, [ref, requireWebGL]);
  return enabled;
}
