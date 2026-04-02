'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

type GalleryViewerProps = {
  images: readonly string[];
  /** Tailwind grid-cols classes. Defaults to 2 / 3 / 4 col responsive. */
  columns?: string;
  /** Cap how many thumbnails to show (lightbox still sees all). */
  limit?: number;
};

export default function GalleryViewer({
  images,
  columns = 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
  limit,
}: GalleryViewerProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const isOpen = activeIndex !== null;
  const total = images.length;
  const visibleImages = limit ? images.slice(0, limit) : images;

  const close = useCallback(() => setActiveIndex(null), []);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setActiveIndex((i) => (i === null ? null : (i + dir + total) % total));
      setTimeout(() => setIsAnimating(false), 200);
    },
    [total, isAnimating]
  );

  const prev = useCallback(() => go(-1), [go]);
  const next = useCallback(() => go(1), [go]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close, prev, next]);

  return (
    <>
      {/* Uniform grid */}
      <div className={`grid gap-2 ${columns} md:gap-3`}>
        {visibleImages.map((src, i) => (
          <button
            key={src}
            onClick={() => setActiveIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            aria-label={`Open photo ${i + 1} of ${total}`}
          >
            <Image
              src={src}
              alt={`Pauleen's Catering — event photo ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/40" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm ring-1 ring-white/20">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/97 backdrop-blur-sm"
          onClick={close}
        >
          {/* Top bar */}
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 py-4">
            {/* Counter */}
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium tabular-nums text-white/80 backdrop-blur-sm">
              {activeIndex + 1} / {total}
            </span>

            {/* Close */}
            <button
              onClick={close}
              aria-label="Close photo viewer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Prev arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous photo"
            className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:left-6 md:h-14 md:w-14"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Main image — object-contain so nothing is cropped */}
          <div
            className="relative mx-20 h-full w-full max-h-[82vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
            // Touch swipe
            onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStartX === null) return;
              const delta = touchStartX - e.changedTouches[0].clientX;
              if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
              setTouchStartX(null);
            }}
          >
            <Image
              key={activeIndex} // remount on change for clean transition
              src={images[activeIndex]}
              alt={`Pauleen's Catering — photo ${activeIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
              quality={95}
            />
          </div>

          {/* Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next photo"
            className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-6 md:h-14 md:w-14"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot strip — bottom nav */}
          <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 overflow-hidden">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setActiveIndex(i); }}
                aria-label={`Go to photo ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'h-2 w-6 bg-accent'
                    : 'h-2 w-2 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
