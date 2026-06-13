import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeader } from '@/components/SectionHeader';
import { Laptop, Video, SatelliteDish, Lightbulb, Wrench, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  { icon: Laptop, label: 'Computer Repair', gradient: 'linear-gradient(135deg, #0B3D4A 0%, #0B0F14 100%)' },
  { icon: Video, label: 'CCTV Setup', gradient: 'linear-gradient(135deg, #1A2A3A 0%, #0B0F14 100%)' },
  { icon: SatelliteDish, label: 'DSTV Install', gradient: 'linear-gradient(135deg, #0D2B2A 0%, #0B0F14 100%)' },
  { icon: Lightbulb, label: 'Solar Lighting', gradient: 'linear-gradient(135deg, #0B2A1A 0%, #0B0F14 100%)' },
  { icon: Wrench, label: 'Electrical Work', gradient: 'linear-gradient(135deg, #1A1A2A 0%, #0B0F14 100%)' },
  { icon: Shield, label: 'Security System', gradient: 'linear-gradient(135deg, #0A1A2A 0%, #0B0F14 100%)' },
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
                className="gallery-item relative aspect-[4/3] rounded overflow-hidden flex flex-col items-center justify-center cursor-pointer transition-all duration-300 border border-transparent"
                style={{ background: item.gradient }}
              >
                <Icon className="w-12 h-12 text-white/90 mb-4" strokeWidth={1.5} />
                <span className="font-display text-xl text-white text-center">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .gallery-grid:hover .gallery-item {
          opacity: 0.3;
        }
        .gallery-grid:hover .gallery-item:hover {
          opacity: 1;
          border-color: rgba(48, 245, 224, 0.5);
          box-shadow: 0 0 40px rgba(48, 245, 224, 0.3);
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
}
