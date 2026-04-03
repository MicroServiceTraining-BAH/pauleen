import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Footer from '@/components/Footer';
import InteractiveMenu from '@/components/InteractiveMenu';
import Navbar from '@/components/Navbar';
import { IMAGES, SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    "Browse Pauleen's at The Dell full menu — NYC-inspired panini, shareable platters, dips, and more in Leesburg, VA.",
};

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="relative overflow-hidden bg-primary pt-24 pb-12 md:pt-32 md:pb-20">
          <div className="absolute inset-0">
            <Image
              src={IMAGES.menu1}
              alt="Pauleen's at The Dell menu"
              fill
              className="object-cover opacity-20"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/95" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
            <span className="section-tag-light mb-4 block w-fit">
              Pauleen&apos;s at The Dell
            </span>
            <h1 className="heading-display-light mb-4 text-balance">
              Our <span className="text-gradient-warm">Menu</span>
            </h1>
            <p className="max-w-xl text-lg text-white/60">
              NYC-inspired panini and shareable platters with a Mediterranean twist.
              Dine in at the Village at Leesburg or let us cater your next event.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Cater My Event
              </Link>
              <Link href={SITE_CONFIG.phoneHref} className="btn-outline">
                {SITE_CONFIG.phone}
              </Link>
            </div>
          </div>
        </section>

        <InteractiveMenu />
      </main>
      <Footer />
    </>
  );
}
