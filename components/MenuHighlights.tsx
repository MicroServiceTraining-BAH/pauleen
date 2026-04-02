import Image from 'next/image';
import Link from 'next/link';

import { IMAGES } from '@/lib/constants';

const MENU_ITEMS = [
  {
    category: 'Seafood',
    items: [
      'Fresh Local Oysters on the Half Shell',
      'Jumbo Shrimp Cocktail',
      'King Crab Legs',
      'Lobster Tails',
      'Coconut Shrimp with Mango Dipping Sauce',
      'Shrimp Scampi on Angel Hair Pasta',
    ],
  },
  {
    category: 'Caribbean Classics',
    items: [
      'Jerk Chicken with Festival Dumplings',
      'Oxtail with Butter Beans',
      'Curried Goat',
      'Rice & Peas',
      'Escovitch Fish',
      'Ackee & Saltfish',
    ],
  },
  {
    category: 'Appetizers & Starters',
    items: [
      'Shrimp Spring Rolls with Sweet &amp; Sour Sauce',
      'Jerk Chicken Wings',
      'Plantain Cups with Ceviche',
      'Caribbean Bruschetta',
      'Mini Beef Patties',
      'Veggie Spring Rolls',
    ],
  },
] as const;

export default function MenuHighlights() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="section-tag mb-4">Our Cuisine</span>
          <h2 className="heading-section mb-5 text-balance">
            Bold Flavors, Island{' '}
            <span className="text-gradient-warm">Soul</span>
          </h2>
          <div className="divider-gold mb-5" />
          <p className="max-w-xl text-base leading-relaxed text-primary/60">
            Every menu is crafted with fresh ingredients and authentic Caribbean techniques
            passed down through generations. Customized to your event, always memorable.
          </p>
        </div>

        {/* Two-column layout: Images + Menu */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 overflow-hidden rounded-2xl">
              <div className="relative aspect-video w-full">
                <Image
                  src={IMAGES.menu1}
                  alt="Caribbean seafood catering spread by Pauleen's"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-lg bg-primary/80 px-3 py-1.5 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                    Seafood Bar
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <div className="relative aspect-square w-full">
                <Image
                  src={IMAGES.menu2}
                  alt="Caribbean dishes plated by Pauleen's Catering"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-green-deep p-6 flex flex-col justify-between">
              <div>
                <p className="font-display text-3xl font-bold text-white leading-tight">
                  100+
                </p>
                <p className="mt-1 text-sm text-white/70">Menu items available</p>
              </div>
              <p className="text-xs text-white/50 leading-relaxed">
                All menus are fully customizable to your dietary needs and preferences.
              </p>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-6">
            {MENU_ITEMS.map(({ category, items }) => (
              <div
                key={category}
                className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-1 w-6 rounded-full bg-accent" />
                  <h3 className="font-display text-lg font-bold text-primary">
                    {category}
                  </h3>
                </div>
                <ul className="grid grid-cols-1 gap-2">
                  {items.map((item) => (
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
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5">
              <p className="text-sm font-medium text-primary/70">
                <span className="font-bold text-accent">Custom menus available.</span>{' '}
                All menus are tailored to your event size, dietary requirements, and
                personal taste. We accommodate vegetarian, vegan, gluten-free, and
                allergen-specific needs.
              </p>
            </div>

            <Link href="/contact" className="btn-primary self-start">
              Request a Custom Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
