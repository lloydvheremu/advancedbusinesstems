import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BlurRevealProps {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  blur?: number;
  stagger?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  className?: string;
  scrollTrigger?: boolean;
  scrollStart?: string;
}

export function BlurReveal({
  children,
  as: Tag = 'p',
  blur = 8,
  stagger = 0.03,
  duration = 0.8,
  delay = 0,
  ease = 'power2.out',
  className = '',
  scrollTrigger = true,
  scrollStart = 'top 80%',
}: BlurRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const words = el.querySelectorAll('.word');
    if (words.length === 0) return;

    gsap.set(words, { opacity: 0, filter: `blur(${blur}px)` });

    const anim = gsap.to(words, {
      opacity: 1,
      filter: 'blur(0px)',
      duration,
      stagger,
      ease,
      delay,
      scrollTrigger: scrollTrigger
        ? {
            trigger: el,
            start: scrollStart,
            toggleActions: 'play none none none',
          }
        : undefined,
    });

    return () => {
      anim.kill();
    };
  }, [blur, stagger, duration, delay, ease, scrollTrigger, scrollStart]);

  const words = children.split(' ').map((word, i) => (
    <span key={i} className="word">
      {word}
    </span>
  ));

  return (
    <Tag ref={containerRef as React.Ref<HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement>} className={className}>
      {words}
    </Tag>
  );
}
