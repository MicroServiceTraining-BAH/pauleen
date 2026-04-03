import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Footer from '@/components/Footer';
import GalleryViewer from '@/components/GalleryViewer';
import Navbar from '@/components/Navbar';
import { IMAGES, SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    "Browse Pauleen's Catering event gallery — real photos from real events and catering spreads across Northern Virginia.",
};

// All real images from pauleenscatering.com
const ALL_IMAGES = [
  ...IMAGES.gallery,
  IMAGES.menu1,
  IMAGES.menu2,
  IMAGES.heroAlt,
] as const;

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="relative overflow-hidden bg-primary pt-24 pb-12 md:pt-32 md:pb-20">
          <div className="absolute inset-0">
            <Image
              src={IMAGES.gallery[5]}
              alt="Pauleen's Catering event"
              fill
              className="object-cover opacity-25"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/95" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
            <span className="section-tag-light mb-4 block w-fit">Bon Appétit</span>
            <h1 className="heading-display-light mb-4 text-balance">
              Our <span className="text-gradient-warm">Gallery</span>
            </h1>
            <p className="max-w-xl text-lg text-white/60">
              Real photos from real events. Click any image to view full screen
              and browse with the carousel.
            </p>
          </div>
        </section>

        {/* Full gallery */}
        <section className="bg-surface py-14 md:py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <GalleryViewer
              images={ALL_IMAGES}
              columns="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
            />

            <div className="mt-16 flex flex-col items-center gap-4 text-center">
              <p className="text-base text-primary/60">
                Want your event featured here? Let&apos;s create something beautiful.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-dark">Get a Quote!</Link>
                <Link href={SITE_CONFIG.phoneHref} className="btn-outline-dark">
                  {SITE_CONFIG.phone}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
