import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import { scrollTo } from '@/hooks/useLenis';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    // Label fade in
    if (labelRef.current) {
      gsap.set(labelRef.current, { opacity: 0 });
      tl.to(labelRef.current, { opacity: 1, duration: 0.6 }, 0.5);
    }

    // Headline word blur reveal
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll('.word');
      gsap.set(words, { opacity: 0, filter: 'blur(12px)' });
      tl.to(
        words,
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.2,
          stagger: 0.15,
        },
        0.8
      );
    }

    // Subtitle fade up
    if (subtitleRef.current) {
      gsap.set(subtitleRef.current, { opacity: 0, y: 20 });
      tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.8 }, 1.5);
    }

    // Buttons fade up
    if (buttonsRef.current) {
      gsap.set(buttonsRef.current, { opacity: 0, y: 20 });
      tl.to(buttonsRef.current, { opacity: 1, y: 0, duration: 0.6 }, 2);
    }

    return () => {
      tl.kill();
    };
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href);
  };

  const headlineWords = 'Technology \u0026 Electrical Solutions You Can Trust'.split(' ');

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-highway.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(11,15,20,0.3) 0%, rgba(11,15,20,0.7) 60%, rgba(11,15,20,0.95) 100%)',
        }}
      />

      {/* Scanline texture */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(48,245,224,0.015) 2px, rgba(48,245,224,0.015) 4px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-[800px] px-6">
        <span
          ref={labelRef}
          className="text-neon-cyan text-xs font-body font-medium uppercase tracking-[0.15em] block mb-6 opacity-0"
        >
          Queenstown, South Africa
        </span>

        <h1
          ref={headlineRef}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-semibold text-txt-primary leading-[0.95] tracking-tight mb-6"
        >
          {headlineWords.map((word, i) => (
            <span key={i} className="word inline-block whitespace-nowrap mr-[0.3em]">
              {word}
            </span>
          ))}
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg text-txt-secondary font-body max-w-[600px] mx-auto mb-10 opacity-0"
        >
          Professional computer repair, CCTV, DSTV, solar lighting, and electrical services
        </p>

        <div ref={buttonsRef} className="flex flex-wrap justify-center gap-4 opacity-0">
          <a
            href="#services"
            onClick={(e) => handleScrollTo(e, '#services')}
            className="bg-neon-cyan text-void px-9 py-3.5 text-sm font-body font-semibold uppercase tracking-wider transition-all duration-300 hover:shadow-neon-md hover:scale-[1.02]"
          >
            View Our Services
          </a>
          <a
            href="https://wa.me/27848905690"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-neon-cyan text-neon-cyan px-9 py-3.5 text-sm font-body font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-neon-cyan hover:text-void"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
