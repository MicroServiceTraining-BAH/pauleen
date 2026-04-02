import Image from 'next/image';
import Link from 'next/link';

import { IMAGES, SITE_CONFIG } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={IMAGES.hero}
        alt="Elegant Caribbean catering spread by Pauleen's Catering"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
        quality={90}
      />

      {/* Layered Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/30" />

      {/* Decorative accent bar */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-accent via-gold to-accent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-6 py-32 lg:px-12">
        <div className="max-w-2xl">
          {/* Tag */}
          <div className="mb-6 animate-fade-in opacity-0-init" style={{ animationFillMode: 'forwards' }}>
            <span className="section-tag-light">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Est. {SITE_CONFIG.founded} · {SITE_CONFIG.city}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="heading-display-light mb-6 animate-fade-up opacity-0-init text-balance"
            style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}
          >
            Elevated{' '}
            <span className="text-gradient-warm">Caribbean</span>
            <br />
            Catering Experience
          </h1>

          {/* Subheadline */}
          <p
            className="mb-10 max-w-lg animate-fade-up text-lg leading-relaxed text-white/70 opacity-0-init"
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
          >
            Authentic island flavors crafted by {SITE_CONFIG.chefAlias} for weddings,
            corporate gatherings, and private celebrations throughout Northern Virginia.
          </p>

          {/* CTAs */}
          <div
            className="flex animate-fade-up flex-wrap gap-4 opacity-0-init"
            style={{ animationDelay: '450ms', animationFillMode: 'forwards' }}
          >
            <Link href="/contact" className="btn-primary">
              Request a Quote
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

          {/* Social proof strip */}
          <div
            className="mt-14 flex animate-fade-up items-center gap-4 opacity-0-init"
            style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-primary bg-gradient-to-br from-accent/40 to-secondary/40"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-3.5 w-3.5 fill-gold" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-white/60">
                Trusted by <span className="font-semibold text-white">500+ events</span> across VA
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 animate-bounce flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-widest text-white/40">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
