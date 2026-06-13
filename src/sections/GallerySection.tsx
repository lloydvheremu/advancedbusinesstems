import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeader } from '@/components/SectionHeader';
import { Laptop, Video, SatelliteDish, Lightbulb, Wrench, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  { 
    icon: Laptop, 
    label: 'Computer Repair', 
    image: '/assets/service-computer.jpg' 
  },
  { 
    icon: Video, 
    label: 'CCTV Setup', 
    image: '/assets/service-cctv.jpg' 
  },
  { 
    icon: SatelliteDish, 
    label: 'DSTV Install', 
    image: '/assets/service-dstv.jpg' 
  },
  { 
    icon: Lightbulb, 
    label: 'Solar Lighting', 
    image: '/assets/service-solar.jpg' 
  },
  { 
    icon: Wrench, 
    label: 'Electrical Work', 
    image: '/assets/service-electrical.jpg' 
  },
  { 
    icon: Shield, 
    label: 'Security System', 
    image: '/assets/service-cctv.jpg' 
  },
];

export function GallerySection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const items = el.querySelectorAll('.gallery-item');
    gsap.fromTo(
      items,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
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
    <section id="gallery" className="bg-void-deep py-24 lg:py-32">
      <div className="container-main">
        <SectionHeader label="OUR WORK" title="Projects Gallery" />

        <div
          ref={gridRef}
          className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          style={{ perspective: '1000px' }}
        >
          {galleryItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="gallery-item group relative aspect-[4/3] rounded overflow-hidden flex flex-col items-center justify-center cursor-pointer transition-all duration-500 border border-border-subtle"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-void/60 transition-colors duration-500 group-hover:bg-void/40" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-void/50 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-4 transition-all duration-500 group-hover:border-neon-cyan/50 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-white/90 group-hover:text-neon-cyan transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <span className="font-display text-xl text-white text-center font-medium tracking-wide">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .gallery-grid:hover .gallery-item:not(:hover) {
          opacity: 0.6;
        }
        .gallery-grid .gallery-item:hover {
          border-color: rgba(48, 245, 224, 0.5);
          box-shadow: 0 0 40px rgba(48, 245, 224, 0.2);
          z-index: 10;
        }
      `}</style>
    </section>
  );
}
