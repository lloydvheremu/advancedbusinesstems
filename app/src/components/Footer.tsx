import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollTo } from '@/hooks/useLenis';

gsap.registerPlugin(ScrollTrigger);

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Computer Repair',
  'CCTV Installation',
  'DSTV Installation',
  'Solar Lights',
  'Electrical Accessories',
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const cols = el.querySelectorAll('.footer-col');
    gsap.fromTo(
      cols,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <footer ref={footerRef} className="bg-void-deep border-t border-neon-dim">
      <div className="container-main pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="footer-col">
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="#30F5E0" opacity="0.9" />
                <circle cx="50" cy="50" r="40" fill="#0B0F14" />
                <line x1="20" y1="50" x2="35" y2="50" stroke="#30F5E0" strokeWidth="2" />
                <line x1="65" y1="50" x2="80" y2="50" stroke="#30F5E0" strokeWidth="2" />
                <circle cx="35" cy="50" r="3" fill="#30F5E0" />
                <circle cx="65" cy="50" r="3" fill="#30F5E0" />
                <path d="M 50 20 L 45 50 L 55 50 L 50 80" stroke="#30F5E0" strokeWidth="3" fill="none" strokeLinecap="round" />
                <text x="50" y="60" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#30F5E0" textAnchor="middle">ABS</text>
              </svg>
              <span className="font-display text-xl font-semibold text-txt-primary">ABS</span>
            </div>
            <p className="text-txt-muted text-sm font-body">
              Your Trusted Technology & Electrical Solutions Partner
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="text-neon-cyan text-xs font-body font-medium uppercase tracking-[0.15em] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-txt-secondary text-sm font-body hover:text-neon-cyan transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="text-neon-cyan text-xs font-body font-medium uppercase tracking-[0.15em] mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-txt-secondary text-sm font-body">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-col">
            <h4 className="text-neon-cyan text-xs font-body font-medium uppercase tracking-[0.15em] mb-5">
              Connect With Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://wa.me/27848905690"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center text-txt-secondary hover:border-neon-cyan hover:text-neon-cyan hover:shadow-neon-sm transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="mailto:lastvheremu1@gmail.com"
                className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center text-txt-secondary hover:border-neon-cyan hover:text-neon-cyan hover:shadow-neon-sm transition-all duration-300"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border-subtle pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-txt-muted text-xs font-body">
            &copy; 2025 Advanced Business System Pty Ltd. All rights reserved.
          </p>
          <p className="text-txt-muted text-xs font-body">
            Proudly serving Queenstown, South Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
