import { useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';

const services = [
  'COMPUTER REPAIR',
  'CCTV INSTALLATION',
  'DSTV INSTALLATION',
  'SOLAR LIGHTS',
  'ELECTRICAL ACCESSORIES',
];

function TickerWord({ children }: { children: string }) {
  const wordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const rect = entry.boundingClientRect;
          const viewportCenter = window.innerWidth / 2;
          const elementCenter = rect.left + rect.width / 2;
          const distance = Math.abs(elementCenter - viewportCenter);
          const threshold = 250;

          if (distance < threshold) {
            el.classList.add('illuminated');
          } else {
            el.classList.remove('illuminated');
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={wordRef}
      className="font-display text-[clamp(48px,8vw,120px)] font-semibold uppercase text-txt-muted transition-all duration-300 flex-shrink-0 px-6"
    >
      {children}
    </span>
  );
}

export function ServicesTicker() {
  // Duplicate services for seamless loop
  const allServices = [...services, ...services, ...services];

  return (
    <section className="w-full overflow-hidden py-16 bg-void border-y border-border-subtle">
      <Marquee speed={60} gradient={false} autoFill={false}>
        {allServices.map((service, i) => (
          <div key={i} className="flex items-center">
            <TickerWord>{service}</TickerWord>
            <span className="w-2 h-2 rounded-full bg-neon-cyan/30 flex-shrink-0 mx-6" />
          </div>
        ))}
      </Marquee>

      <style>{`
        .illuminated {
          color: #30F5E0 !important;
          text-shadow: 0 0 40px rgba(48, 245, 224, 0.5);
        }
      `}</style>
    </section>
  );
}
