import { useState, useEffect } from 'react';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { scrollTo } from '@/hooks/useLenis';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const direction = useScrollDirection(100);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY + 100;

      sections.forEach((section) => {
        const id = section.getAttribute('id');
        if (!id) return;
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    scrollTo(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          direction === 'down' && scrolled ? '-translate-y-full' : 'translate-y-0'
        } ${
          scrolled
            ? 'bg-void/90 backdrop-blur-xl border-b border-border-subtle'
            : 'bg-transparent'
        }`}
      >
        <div className="container-main flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5"
          >
            <svg width="36" height="36" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#30F5E0" opacity="0.9" />
              <circle cx="50" cy="50" r="40" fill="#0B0F14" />
              <line x1="20" y1="50" x2="35" y2="50" stroke="#30F5E0" strokeWidth="2" />
              <line x1="65" y1="50" x2="80" y2="50" stroke="#30F5E0" strokeWidth="2" />
              <circle cx="35" cy="50" r="3" fill="#30F5E0" />
              <circle cx="65" cy="50" r="3" fill="#30F5E0" />
              <path d="M 50 20 L 45 50 L 55 50 L 50 80" stroke="#30F5E0" strokeWidth="3" fill="none" strokeLinecap="round" />
              <text x="50" y="60" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#30F5E0" textAnchor="middle">ABS</text>
            </svg>
            <span className="font-display text-xl font-semibold text-txt-primary hidden sm:inline">
              Advanced Business System
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-sm font-body font-medium tracking-wide transition-colors duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-neon-cyan'
                    : 'text-txt-secondary hover:text-txt-primary'
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-cyan" />
                )}
              </a>
            ))}
            <a
              href="https://wa.me/27848905690"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-neon-cyan text-neon-cyan px-6 py-2.5 text-sm font-body font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-neon-cyan hover:text-void"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-txt-primary p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-void transition-all duration-500 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-display text-4xl font-semibold transition-all duration-500 ${
                mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              } ${
                activeSection === link.href.slice(1) ? 'text-neon-cyan' : 'text-txt-primary'
              }`}
              style={{ transitionDelay: mobileOpen ? `${i * 100}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/27848905690"
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-4 border border-neon-cyan text-neon-cyan px-8 py-3 text-lg font-body font-semibold uppercase tracking-wider transition-all duration-500 hover:bg-neon-cyan hover:text-void ${
              mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: mobileOpen ? '500ms' : '0ms' }}
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}
