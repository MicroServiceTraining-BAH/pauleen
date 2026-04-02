import Image from 'next/image';
import Link from 'next/link';

import { IMAGES, SITE_CONFIG } from '@/lib/constants';

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image side */}
          <div className="relative">
            {/* Main image */}
            <div className="relative overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={IMAGES.about}
                  alt={`${SITE_CONFIG.chef} — ${SITE_CONFIG.chefAlias} of Pauleen's Catering`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-dark-card p-5 shadow-dark-lg lg:-right-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
                  <span className="text-2xl">👨‍🍳</span>
                </div>
                <div>
                  <p className="font-display text-base font-bold text-white">
                    {SITE_CONFIG.chefAlias}
                  </p>
                  <p className="text-xs text-white/50">Executive Chef &amp; Founder</p>
                  <div className="mt-1 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-3 w-3 fill-gold" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Year badge */}
            <div className="absolute -left-4 top-8 rounded-xl bg-accent px-4 py-3 shadow-warm-lg lg:-left-6">
              <p className="text-center font-display text-2xl font-bold text-white leading-none">
                {SITE_CONFIG.founded}
              </p>
              <p className="text-center text-[10px] font-medium uppercase tracking-wider text-white/80">
                Est.
              </p>
            </div>
          </div>

          {/* Content side */}
          <div className="flex flex-col">
            <span className="section-tag-light mb-6 w-fit">Our Story</span>

            <h2 className="heading-section-light mb-6 text-balance">
              More Than a Meal —<br />
              <span className="text-gradient-warm">An Experience</span>
            </h2>

            <div className="divider-gold mb-8" />

            <div className="space-y-4 text-base leading-relaxed text-white/65">
              <p>
                Founded in {SITE_CONFIG.founded} by {SITE_CONFIG.chef}, Pauleen&apos;s
                Catering &amp; Events was born from a deep love of Caribbean cuisine and
                a commitment to sharing its bold, authentic flavors with the world.
              </p>
              <p>
                Known as {SITE_CONFIG.chefAlias}, Chef {SITE_CONFIG.chef.split(' ')[1]} is a modern artisan
                dedicated to crafting food, drink, and service that is &ldquo;often
                imitated but rarely equalled.&rdquo; Every event is an opportunity to
                create a memorable culinary journey rooted in island tradition.
              </p>
              <p>
                From intimate private dinners to grand weddings and corporate galas,
                the Pauleen&apos;s team brings the same passion, precision, and care
                to every plate — whether serving 10 or 500 guests.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { icon: '🌿', label: 'Fresh Ingredients' },
                { icon: '🏝️', label: 'Authentic Flavors' },
                { icon: '✨', label: 'Flawless Service' },
                { icon: '🤝', label: 'Trusted Partner' },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
                >
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-medium text-white/70">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/about" className="btn-primary">
                Our Full Story
              </Link>
              <Link href="/contact" className="btn-outline">
                Plan Your Event
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
