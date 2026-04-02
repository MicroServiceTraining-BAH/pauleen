import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { IMAGES, SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    "Browse Pauleen's Catering event gallery — real photos from real events including weddings, corporate gatherings, and private celebrations across Northern Virginia.",
};

export default function GalleryPage() {
  const allImages = [
    ...IMAGES.gallery,
    IMAGES.menu1,
    IMAGES.menu2,
    IMAGES.heroAlt,
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="relative overflow-hidden bg-primary pt-32 pb-20">
          <div className="absolute inset-0">
            <Image
              src={IMAGES.gallery[5]}
              alt="Gallery"
              fill
              className="object-cover opacity-25"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/95" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
            <span className="section-tag-light mb-4 block w-fit">Our Work</span>
            <h1 className="heading-display-light mb-4 text-balance">
              Every Event,{' '}
              <span className="text-gradient-warm">a Masterpiece</span>
            </h1>
            <p className="max-w-xl text-lg text-white/60">
              Real photos from real events. A window into the flavors, presentations,
              and memories we help create.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="bg-surface py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            {/* Masonry */}
            <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
              {allImages.map((src, i) => (
                <GalleryItem key={`${src}-${i}`} src={src} index={i} />
              ))}
            </div>

            <div className="mt-16 flex flex-col items-center text-center">
              <p className="mb-6 text-base text-primary/60">
                Want to see your event here? Let&apos;s create something beautiful together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">Request a Quote</Link>
                <Link href={SITE_CONFIG.phoneHref} className="btn-dark">
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

type GalleryItemProps = {
  src: string;
  index: number;
};

function GalleryItem({ src, index }: GalleryItemProps) {
  const heights = [
    'aspect-square',
    'aspect-[3/4]',
    'aspect-[4/5]',
    'aspect-video',
    'aspect-[3/4]',
    'aspect-square',
    'aspect-[4/5]',
  ];
  const aspectClass = heights[index % heights.length];

  return (
    <div className={`group relative mb-4 overflow-hidden rounded-xl ${aspectClass} break-inside-avoid`}>
      <Image
        src={src}
        alt={`Pauleen's Catering — event photo ${index + 1}`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
      />
      <div className="absolute inset-0 bg-primary/0 transition-all duration-500 group-hover:bg-primary/20" />
    </div>
  );
}
