import Link from 'next/link';

import GalleryViewer from '@/components/GalleryViewer';
import { IMAGES } from '@/lib/constants';

export default function GallerySection() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 md:py-24 lg:py-32">
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header — asymmetric split */}
        <div className="mb-14 grid items-end gap-6 md:grid-cols-2">
          <div>
            <span className="section-tag-light mb-4 block w-fit">Our Work</span>
            <h2 className="heading-section-light text-balance">
              Bon Appétit —{' '}
              <span className="text-gradient-warm">Real Events</span>
            </h2>
            <div className="divider-gold mt-5" />
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end md:pb-1">
            <p className="text-base leading-relaxed text-white/55 md:text-right md:max-w-xs">
              A glimpse into the events, spreads, and moments we&apos;ve had the honor of being part of.
            </p>
            <span className="font-mono text-xs tracking-widest text-white/25">
              {11} photos
            </span>
          </div>
        </div>

        {/* Uniform grid — first 8 photos, lightbox opens all 11 */}
        <GalleryViewer
          images={IMAGES.gallery}
          limit={8}
          columns="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
        />

        <div className="mt-10 flex justify-center">
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
