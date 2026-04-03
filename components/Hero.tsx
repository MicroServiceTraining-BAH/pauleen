import Link from 'next/link';

import { SITE_CONFIG } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary">
      {/* Top accent bar */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Decorative large brand name */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-24 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)',
        }}
      >
        <p
          className="select-none text-center leading-none text-white/[0.08]"
          style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(48px, 13vw, 200px)', fontWeight: 900, letterSpacing: '-0.02em' }}
        >
          {SITE_CONFIG.shortName}
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-end px-6 pb-32 pt-24 lg:px-12">
        <div className="max-w-2xl">
          {/* Location tag */}
          <div className="mb-6 animate-fade-in opacity-0-init" style={{ animationFillMode: 'forwards' }}>
            <span className="section-tag-light">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {SITE_CONFIG.subTagline}
            </span>
          </div>

          {/* Tagline */}
          <blockquote
            className="mb-4 animate-fade-up opacity-0-init"
            style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}
          >
            <p className="text-balance font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              &ldquo;{SITE_CONFIG.tagline}&rdquo;
            </p>
            <footer className="mt-4 text-sm font-medium uppercase tracking-widest text-white/50">
              {SITE_CONFIG.taglineAttribution}
            </footer>
          </blockquote>

          {/* Sub copy */}
          <p
            className="mb-10 max-w-lg animate-fade-up text-lg leading-relaxed text-white/50 opacity-0-init"
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
          >
            Let us cater your next event!
          </p>

          {/* CTAs */}
          <div
            className="flex animate-fade-up flex-wrap gap-4 opacity-0-init"
            style={{ animationDelay: '450ms', animationFillMode: 'forwards' }}
          >
            <Link href="/contact" className="btn-primary">
              Get a Quote
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href={SITE_CONFIG.phoneHref} className="btn-outline">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 animate-bounce flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-widest text-white/30">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
