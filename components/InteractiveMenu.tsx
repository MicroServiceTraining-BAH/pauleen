'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { IMAGES, SITE_CONFIG } from '@/lib/constants';
import { MENU_CATEGORIES, type MenuCategory, type MenuItem } from '@/lib/menu-data';

export default function InteractiveMenu() {
  const [activeId, setActiveId] = useState(MENU_CATEGORIES[0].id);
  const [animating, setAnimating] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef(false);

  const activeCategory = MENU_CATEGORIES.find((c) => c.id === activeId)!;

  const switchTab = (id: string) => {
    if (id === activeId) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveId(id);
      setAnimating(false);
    }, 180);
  };

  // Scroll active tab into view on mobile — skip initial mount to avoid page scroll on load
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    const el = tabsRef.current?.querySelector(`[data-tab="${activeId}"]`) as HTMLElement;
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [activeId]);

  const menuImages = [IMAGES.menu1, IMAGES.menu2];

  return (
    <section className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="section-tag-light mb-4">Pauleen&apos;s at The Dell</span>
          <h2 className="heading-section-light mb-5 text-balance">
            Our <span className="text-gradient-warm">Menu</span>
          </h2>
          <div className="divider-gold mb-5" />
          <p className="max-w-lg text-base text-white/55">
            NYC-inspired panini and shareable platters with Mediterranean flair.
            If you don&apos;t see what you&apos;re craving — just ask!
          </p>
        </div>

        {/* Tab bar */}
        <div
          ref={tabsRef}
          className="mb-10 flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
          role="tablist"
        >
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              data-tab={cat.id}
              role="tab"
              aria-selected={activeId === cat.id}
              onClick={() => switchTab(cat.id)}
              className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                activeId === cat.id
                  ? 'bg-accent text-primary shadow-dark-lg'
                  : 'border border-white/15 bg-white/5 text-white/60 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat.label}
              <span
                className={`rounded-full px-2 py-0.5 text-xs tabular-nums ${
                  activeId === cat.id ? 'bg-white/20' : 'bg-white/10'
                }`}
              >
                {cat.items.length}
              </span>
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        <div
          role="tabpanel"
          className={`transition-opacity duration-200 ${animating ? 'opacity-0' : 'opacity-100'}`}
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {activeCategory.items.map((item, i) => (
              <MenuCard key={item.name} item={item} index={i} />
            ))}
          </div>

          {/* Category footer note */}
          {activeId === 'not-panini' && (
            <p className="mt-6 text-center text-xs italic text-white/35">
              * Items marked with * can be made cold or pressed hot
            </p>
          )}
          {activeId === 'panini' && (
            <p className="mt-6 text-center text-xs italic text-white/35">
              * Items marked with * can be made cold or pressed hot
            </p>
          )}
          {activeId === 'for-the-table' && (
            <p className="mt-6 text-center text-xs italic text-white/40">
              &ldquo;If you don&apos;t see what you&apos;re craving, just ask! You&apos;d be surprised what we&apos;d do for $20!!&rdquo;
            </p>
          )}
        </div>

        {/* View full menu images */}
        <div className="mt-14 flex flex-col items-center gap-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
            View Full Menu
          </p>
          <div className="flex gap-4">
            {menuImages.map((src, i) => (
              <button
                key={src}
                onClick={() => { setLightboxImg(i); setLightboxOpen(true); }}
                className="group relative h-28 w-20 overflow-hidden rounded-xl border border-white/10 transition-all duration-300 hover:border-accent hover:shadow-warm-lg md:h-36 md:w-24"
                aria-label={`View menu page ${i + 1}`}
              >
                <Image
                  src={src}
                  alt={`Pauleen's menu page ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="96px"
                />
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent pb-2">
                  <span className="text-xs font-medium text-white/80">Page {i + 1}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-white/50">
            Interested in catering? We customize menus for every event.
          </p>
          <Link href="/contact" className="btn-primary">
            Get a Quote!
          </Link>
        </div>
      </div>

      {/* Menu image lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Menu viewer"
        >
          {/* Close */}
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxImg((i) => (i - 1 + menuImages.length) % menuImages.length); }}
            aria-label="Previous"
            className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            className="relative mx-20 h-full max-h-[90vh] w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={lightboxImg}
              src={menuImages[lightboxImg]}
              alt={`Pauleen's menu page ${lightboxImg + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
              quality={95}
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxImg((i) => (i + 1) % menuImages.length); }}
            aria-label="Next"
            className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Counter + thumbnails */}
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
            {menuImages.map((src, i) => (
              <button
                key={src}
                onClick={(e) => { e.stopPropagation(); setLightboxImg(i); }}
                className={`relative h-14 w-10 overflow-hidden rounded-lg border-2 transition-all ${
                  i === lightboxImg ? 'border-accent' : 'border-white/20 opacity-50 hover:opacity-80'
                }`}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="40px" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <div
      className="group flex flex-col rounded-2xl border border-white/8 bg-white/5 p-5 transition-all duration-300 hover:border-accent/30 hover:bg-white/8"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold leading-tight text-white group-hover:text-accent transition-colors duration-200">
          {item.name}
        </h3>
        {item.price !== undefined && (
          <span className="shrink-0 rounded-full bg-accent/15 px-3 py-1 text-sm font-bold text-accent">
            ${item.price}
          </span>
        )}
      </div>

      {item.description && (
        <>
          <div className="my-3 h-px w-8 bg-white/10 transition-all duration-300 group-hover:w-12 group-hover:bg-accent/40" />
          <p className="flex-1 text-sm leading-relaxed text-white/50">
            {item.description}
          </p>
        </>
      )}

      {item.note && (
        <p className="mt-2 text-xs italic text-accent/60">{item.note}</p>
      )}
    </div>
  );
}
