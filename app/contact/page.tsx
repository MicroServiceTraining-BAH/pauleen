import type { Metadata } from 'next';
import Image from 'next/image';

import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { IMAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact & Quote',
  description:
    "Request a catering quote from Pauleen's Catering & Events. Tell us about your event and Chef Jimmie Salonie will respond with a personalized proposal.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="relative overflow-hidden bg-primary pt-32 pb-20">
          <div className="absolute inset-0">
            <Image
              src={IMAGES.hero}
              alt="Contact Pauleen's Catering"
              fill
              className="object-cover opacity-20"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/95" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
            <span className="section-tag-light mb-4 block w-fit">Get a Quote</span>
            <h1 className="heading-display-light mb-4 text-balance">
              Let&apos;s Plan Your{' '}
              <span className="text-gradient-warm">Perfect Event</span>
            </h1>
            <p className="max-w-xl text-lg text-white/60">
              Fill out the form below and Chef Jimmie Salonie will be in touch
              with a personalized quote for your event.
            </p>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
