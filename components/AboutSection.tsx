import Image from 'next/image';
import Link from 'next/link';

import { IMAGES, SITE_CONFIG } from '@/lib/constants';

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={IMAGES.about}
                  alt={`${SITE_CONFIG.chef} — ${SITE_CONFIG.chefAlias}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating name card */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-dark-card p-5 shadow-dark-lg lg:-right-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
                  <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-base font-bold text-white">
                    {SITE_CONFIG.chefAlias}
                  </p>
                  <p className="text-xs text-white/50">Executive Chef &amp; Owner</p>
                  <p className="mt-0.5 text-xs text-accent">Est. {SITE_CONFIG.founded}</p>
                </div>
              </div>
            </div>

            {/* Founded badge */}
            <div className="absolute -left-4 top-8 rounded-xl bg-accent px-4 py-3 shadow-dark-lg lg:-left-6">
              <p className="text-center font-display text-2xl font-bold text-primary leading-none">
                {SITE_CONFIG.founded}
              </p>
              <p className="text-center text-[10px] font-medium uppercase tracking-wider text-primary/70">
                Est.
              </p>
            </div>
          </div>

          {/* Content side */}
          <div className="flex flex-col">
            <span className="section-tag-light mb-6 w-fit">Our Story</span>

            <h2 className="heading-section-light mb-6 text-balance">
              Meet <span className="text-gradient-warm">{SITE_CONFIG.chefAlias}</span>
            </h2>

            <div className="divider-gold mb-8" />

            {/* Real bio from pauleenscatering.com */}
            <div className="space-y-4 text-base leading-relaxed text-white/65">
              <p>
                Chef Jimmie was born and raised in New York City in a very tight-knit
                Greek family. This is where he was exposed to a style of cooking that
                blended unique multi-cultural cuisines and traditional American influences,
                which he developed into a culinary style that pays homage to his roots.
              </p>
              <p>
                Honing his talents in some of the best kitchens on the East Coast, he,
                alongside partner and Hospitality Director,{' '}
                <strong className="font-semibold text-white">{SITE_CONFIG.partner}</strong>,
                launched their full-service catering company, Pauleen&apos;s, in{' '}
                {SITE_CONFIG.founded}, which focuses on regional American cuisine. The brand
                is an ode to Jimmie and Michael&apos;s mothers, Paula and Maureen, who
                gave them the foundation to become who they are today.
              </p>
              <p>
                Chef Jimmie has developed a reputation for executing highly curated
                private dinners, corporate events, and culinary classes, as well as
                catering for various events throughout life that are to be celebrated.
              </p>
            </div>

            {/* Related concepts */}
            <div className="mt-8 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
                Also by Chef Jimmie
              </p>
              {[
                { name: 'HandleBarHKNY', desc: 'Bespoke cocktail concept' },
                { name: 'Ela', desc: 'Pop-up — traditional dishes inspired by his Greek heritage' },
                { name: "Pauleen's at The Dell", desc: 'Food & Brew Hall, Village at Leesburg' },
              ].map(({ name, desc }) => (
                <div
                  key={name}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-white">{name}</span>
                    <span className="ml-2 text-sm text-white/50">{desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/about" className="btn-primary">
                Full Story
              </Link>
              <Link href="/contact" className="btn-outline">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
