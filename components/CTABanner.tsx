import Image from 'next/image';
import Link from 'next/link';

import { IMAGES, SITE_CONFIG } from '@/lib/constants';

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <Image
        src={IMAGES.heroAlt}
        alt="Catering event setup"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/98 via-primary/90 to-primary/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute right-16 top-16 h-48 w-48 rounded-full border border-accent/20 opacity-50" />
      <div className="absolute right-24 top-24 h-32 w-32 rounded-full border border-accent/15 opacity-50" />
      <div className="absolute -left-8 bottom-8 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl">
          <span className="section-tag-light mb-6 block w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Ready to Plan Your Event?
          </span>

          <h2 className="heading-section-light mb-6 text-balance">
            Planning an Event?{' '}
            <span className="text-gradient-warm">Let Us Handle the Food.</span>
          </h2>

          <p className="mb-10 max-w-lg text-base leading-relaxed text-white/65">
            From the first consultation to the final bite, Pauleen&apos;s Catering handles
            every detail. Request a quote today and let&apos;s create something unforgettable.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Request a Free Quote
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href={SITE_CONFIG.phoneHref} className="btn-outline">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {SITE_CONFIG.phone}
            </Link>
          </div>

          {/* Trust items */}
          <div className="mt-12 flex flex-wrap gap-6">
            {[
              'Free Consultation',
              'Custom Menus',
              'Full-Service Setup',
              'Reliable & Professional',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-white/60">
                <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
