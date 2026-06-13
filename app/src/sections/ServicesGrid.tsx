import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeader } from '@/components/SectionHeader';
import { scrollTo } from '@/hooks/useLenis';
import { Laptop, Video, SatelliteDish, Sun, Plug, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Laptop,
    title: 'Computer Repair',
    description:
      'Expert diagnostics and repairs for all computer issues. We fix hardware problems, remove viruses, upgrade systems, and restore your devices to peak performance.',
    image: '/images/service-computer.jpg',
  },
  {
    icon: Video,
    title: 'CCTV Installation',
    description:
      'Professional security camera installation for homes and businesses. Complete surveillance solutions with remote monitoring capabilities to keep your property safe.',
    image: '/images/service-cctv.jpg',
  },
  {
    icon: SatelliteDish,
    title: 'DSTV Installation',
    description:
      'Expert DSTV installation and signal optimization services. We ensure perfect reception and help you get the most out of your satellite TV experience.',
    image: '/images/service-dstv.jpg',
  },
  {
    icon: Sun,
    title: 'Solar Lights',
    description:
      'Energy-efficient solar lighting solutions for indoor and outdoor spaces. Eco-friendly, cost-effective lighting that keeps your property illuminated day and night.',
    image: '/images/service-solar.jpg',
  },
  {
    icon: Plug,
    title: 'Electrical Accessories',
    description:
      'Quality electrical accessories and installation services. From outlets and switches to complete electrical fittings for your home or business needs.',
    image: '/images/service-electrical.jpg',
  },
];

export function ServicesGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const cards = el.querySelectorAll('.service-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section id="services" className="bg-void-deep py-24 lg:py-32">
      <div className="container-main">
        <SectionHeader label="WHAT WE DO" title="Our Services" />

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="service-card group relative bg-surface-dark border border-border-subtle p-8 lg:p-10 overflow-hidden transition-all duration-300 hover:bg-surface-navy hover:border-neon-dim hover:-translate-y-1 hover:shadow-card-lift"
              >
                {/* Hover image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
                  }}
                />

                <div className="relative z-10">
                  <Icon className="w-10 h-10 text-neon-cyan mb-6" strokeWidth={1.5} />

                  <h3 className="font-display text-2xl font-medium text-txt-primary mb-3">
                    {service.title}
                  </h3>

                  <p className="text-txt-secondary font-body text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('#contact');
                    }}
                    className="inline-flex items-center gap-2 text-neon-cyan text-sm font-body font-medium group/link"
                  >
                    <span className="relative">
                      Get a Quote
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-neon-cyan transition-all duration-300 group-hover/link:w-full" />
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
