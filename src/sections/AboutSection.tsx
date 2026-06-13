import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeader } from '@/components/SectionHeader';
import { BlurReveal } from '@/components/BlurReveal';
import { OrbitGraphic } from '@/components/OrbitGraphic';
import { AnimatedCounter } from '@/components/AnimatedCounter';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 500, suffix: '+', label: 'CLIENTS SERVED' },
  { value: 5, suffix: '+', label: 'YEARS EXPERIENCE' },
  { value: 24, suffix: '/7', label: 'SUPPORT AVAILABLE' },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    if (!section || !left) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Left column entrance
    const leftChildren = left.querySelectorAll('.animate-in');
    gsap.fromTo(
      leftChildren,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="about" className="bg-void py-24 lg:py-32">
      <div className="container-main">
        <SectionHeader label="ABOUT US" title="Advanced Business System" />

        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 items-center">
          {/* Left — Text */}
          <div ref={leftRef}>
            <div className="animate-in">
              <BlurReveal
                as="p"
                blur={8}
                stagger={0.03}
                duration={0.8}
                className="text-txt-secondary font-body text-base leading-relaxed mb-5"
              >
                Advanced Business System Pty Ltd is your trusted partner for comprehensive technology and electrical solutions in Queenstown, South Africa. We combine technical expertise with reliable service to meet all your technology needs.
              </BlurReveal>
            </div>

            <div className="animate-in">
              <BlurReveal
                as="p"
                blur={8}
                stagger={0.03}
                duration={0.8}
                className="text-txt-secondary font-body text-base leading-relaxed mb-5"
              >
                With years of experience serving both residential and commercial clients, we pride ourselves on delivering quality workmanship, transparent pricing, and exceptional customer service. Our team of certified technicians is committed to solving your technology challenges efficiently and professionally.
              </BlurReveal>
            </div>

            <div className="animate-in">
              <BlurReveal
                as="p"
                blur={8}
                stagger={0.03}
                duration={0.8}
                className="text-txt-secondary font-body text-base leading-relaxed mb-10"
              >
                Whether you need computer repairs, security installations, satellite services, or electrical work, we're here to help. We understand the importance of technology in your daily life and business operations, which is why we offer prompt, reliable service you can count on.
              </BlurReveal>
            </div>

            {/* Stats */}
            <div className="animate-in flex flex-wrap gap-12">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-display text-5xl lg:text-[56px] font-semibold text-neon-cyan tracking-tight">
                    {stat.label === 'SUPPORT AVAILABLE' ? (
                      <>
                        <AnimatedCounter target={stat.value} duration={2} />
                        <span className="text-3xl lg:text-4xl">{stat.suffix}</span>
                      </>
                    ) : (
                      <>
                        <AnimatedCounter target={stat.value} duration={2} />
                        {stat.suffix}
                      </>
                    )}
                  </div>
                  <span className="text-txt-muted text-sm font-body uppercase tracking-[0.08em] mt-2 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Graphic */}
          <div className="flex justify-center">
            <OrbitGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
