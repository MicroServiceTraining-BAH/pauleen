import Image from 'next/image';
import Link from 'next/link';

import { IMAGES } from '@/lib/constants';

export default function GallerySection() {
  const galleryImages = IMAGES.gallery;

  return (
    <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
      {/* Background */}
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="section-tag-light mb-4">Our Work</span>
          <h2 className="heading-section-light mb-5 text-balance">
            Every Event, a{' '}
            <span className="text-gradient-warm">Masterpiece</span>
          </h2>
          <div className="divider-gold mb-5" />
          <p className="max-w-xl text-base leading-relaxed text-white/55">
            A glimpse into the events, spreads, and moments we&apos;ve had the honor of
            being part of. Real events, real food, real memories.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
          {galleryImages.map((src, i) => (
            <GalleryItem key={src} src={src} index={i} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link href="/gallery" className="btn-outline">
            View Full Gallery
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

type GalleryItemProps = {
  src: string;
  index: number;
};

function GalleryItem({ src, index }: GalleryItemProps) {
  // Vary heights for masonry feel
  const heights = ['aspect-square', 'aspect-[3/4]', 'aspect-[4/5]', 'aspect-video', 'aspect-[3/4]'];
  const aspectClass = heights[index % heights.length];

  return (
    <div className={`group relative mb-4 overflow-hidden rounded-xl ${aspectClass} break-inside-avoid`}>
      <Image
        src={src}
        alt={`Pauleen's Catering event — gallery image ${index + 1}`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
      />
      <div className="absolute inset-0 bg-primary/0 transition-all duration-500 group-hover:bg-primary/30" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
