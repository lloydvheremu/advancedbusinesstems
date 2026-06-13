import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ScrollIndicator() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      el.style.opacity = '0';
      return;
    }

    gsap.to(el, {
      opacity: 0,
      scrollTrigger: {
        trigger: el,
        start: 'top top',
        end: '+=100',
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
      <div className="relative w-px h-10 bg-neon-cyan/30 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-neon-cyan rounded-full animate-scroll-dot" />
      </div>
      <span className="text-txt-muted text-[10px] font-body uppercase tracking-[0.2em]">
        Scroll
      </span>
    </div>
  );
}
