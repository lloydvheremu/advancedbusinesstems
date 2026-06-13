import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function OrbitGraphic() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      svg,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: svg,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <svg
      ref={svgRef}
      className="w-full max-w-[400px] animate-slow-rotate"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="orbitGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#30F5E0" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#30F5E0" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ring layers */}
      <circle cx="200" cy="200" r="180" fill="none" stroke="#30F5E0" strokeWidth="1" opacity="0.2" />
      <circle cx="200" cy="200" r="130" fill="none" stroke="#30F5E0" strokeWidth="1" opacity="0.35" />
      <circle cx="200" cy="200" r="80" fill="none" stroke="#30F5E0" strokeWidth="1.5" opacity="0.5" />

      {/* Crosshair */}
      <line x1="40" y1="200" x2="360" y2="200" stroke="#30F5E0" strokeWidth="0.5" opacity="0.2" />
      <line x1="200" y1="40" x2="200" y2="360" stroke="#30F5E0" strokeWidth="0.5" opacity="0.2" />

      {/* Center dot */}
      <circle cx="200" cy="200" r="4" fill="#30F5E0" className="animate-center-pulse" />

      {/* Orbiting dots */}
      <circle cx="200" cy="20" r="6" fill="#30F5E0" className="animate-orbit-pulse" style={{ animationDelay: '0s' }} />
      <circle cx="380" cy="200" r="6" fill="#30F5E0" className="animate-orbit-pulse" style={{ animationDelay: '0.5s' }} />
      <circle cx="200" cy="380" r="6" fill="#30F5E0" className="animate-orbit-pulse" style={{ animationDelay: '1s' }} />
      <circle cx="20" cy="200" r="6" fill="#30F5E0" className="animate-orbit-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Gradient overlay */}
      <circle cx="200" cy="200" r="180" fill="url(#orbitGrad)" />
    </svg>
  );
}
