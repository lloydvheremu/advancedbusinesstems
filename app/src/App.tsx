import { useLenisInit } from '@/hooks/useLenis';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { HeroSection } from '@/sections/HeroSection';
import { ServicesTicker } from '@/sections/ServicesTicker';
import { ServicesGrid } from '@/sections/ServicesGrid';
import { AboutSection } from '@/sections/AboutSection';
import { GallerySection } from '@/sections/GallerySection';
import { ContactSection } from '@/sections/ContactSection';

export default function App() {
  useLenisInit();

  return (
    <div className="bg-void min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesTicker />
        <ServicesGrid />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
