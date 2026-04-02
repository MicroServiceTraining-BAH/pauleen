import Image from 'next/image';
import Link from 'next/link';

import { IMAGES, VERIFIED_MENU_ITEMS } from '@/lib/constants';

export default function MenuHighlights() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="section-tag mb-4">Our Menus</span>
          <h2 className="heading-section mb-5 text-balance">
            Fresh, Delicious,{' '}
            <span className="text-gradient-warm">Detail-Oriented</span>
          </h2>
          <div className="divider-gold mb-5" />
          <p className="max-w-xl text-base leading-relaxed text-primary/60">
            We take great pride in offering fresh, delicious food. Every menu is
            customized to fit your event and dietary needs.
          </p>
        </div>

        {/* Layout: Images + Items */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 overflow-hidden rounded-2xl">
              <div className="relative aspect-video w-full">
                <Image
                  src={IMAGES.menu1}
                  alt="Pauleen's Catering menu spread"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <div className="relative aspect-square w-full">
                <Image
                  src={IMAGES.menu2}
                  alt="Pauleen's Catering plated dishes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <div className="relative aspect-square w-full">
                <Image
                  src={IMAGES.gallery[7]}
                  alt="Pauleen's Catering food presentation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>

          {/* Menu items — verified from real site */}
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-1 w-6 rounded-full bg-accent" />
                <h3 className="font-display text-lg font-bold text-primary">
                  Featured Menu Items
                </h3>
              </div>
              <ul className="space-y-3">
                {VERIFIED_MENU_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-primary/65">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5">
              <p className="text-sm font-medium text-primary/70">
                <span className="font-bold text-accent">Fully customizable.</span>{' '}
                We understand that no two events are the same, and we strive to customize
                our services to fit whatever needs you may have, including specific
                dietary guidelines.
              </p>
            </div>

            <Link href="/contact" className="btn-primary self-start">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
