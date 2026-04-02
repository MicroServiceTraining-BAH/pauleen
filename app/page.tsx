import AboutSection from '@/components/AboutSection';
import CTABanner from '@/components/CTABanner';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import GallerySection from '@/components/GallerySection';
import Hero from '@/components/Hero';
import MenuHighlights from '@/components/MenuHighlights';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import TrustBar from '@/components/TrustBar';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ServicesSection />
        <AboutSection />
        <MenuHighlights />
        <GallerySection />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
