import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { IMAGES, SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About',
  description:
    "Learn the story behind Pauleen's Catering & Events — founded by Chef Jimmie Salonie (Chef Ji) in 2009, delivering authentic Caribbean cuisine to events across Northern Virginia.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="relative overflow-hidden bg-primary pt-32 pb-20">
          <div className="absolute inset-0">
            <Image
              src={IMAGES.heroAlt}
              alt="Catering event"
              fill
              className="object-cover opacity-20"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/90 to-primary" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
            <span className="section-tag-light mb-4 block w-fit">Our Story</span>
            <h1 className="heading-display-light mb-4 text-balance">
              Meet <span className="text-gradient-warm">Chef Ji</span>
            </h1>
            <p className="max-w-xl text-lg text-white/60">
              The passion, the person, and the philosophy behind Pauleen&apos;s Catering
              &amp; Events.
            </p>
          </div>
        </section>

        {/* Main story */}
        <section className="bg-surface py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid items-start gap-16 lg:grid-cols-2">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={IMAGES.about}
                      alt={`${SITE_CONFIG.chef} — Executive Chef`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                {/* Chef badge */}
                <div className="absolute -bottom-6 left-6 rounded-2xl bg-primary p-5 shadow-dark-lg">
                  <p className="font-display text-lg font-bold text-white">
                    {SITE_CONFIG.chef}
                  </p>
                  <p className="text-xs text-accent">Executive Chef &amp; Founder</p>
                  <p className="mt-1 text-xs text-white/40">Est. {SITE_CONFIG.founded}</p>
                </div>
              </div>

              <div className="lg:pt-4">
                <h2 className="heading-section mb-6">
                  Crafting Food{' '}
                  <span className="text-gradient-warm">
                    &ldquo;Often Imitated, Rarely Equalled&rdquo;
                  </span>
                </h2>
                <div className="divider-gold mb-8" />
                <div className="space-y-5 text-base leading-relaxed text-primary/65">
                  <p>
                    Pauleen&apos;s Catering &amp; Events was founded in {SITE_CONFIG.founded}
                    by {SITE_CONFIG.chef} — known throughout the culinary world as{' '}
                    <strong className="font-semibold text-primary">{SITE_CONFIG.chefAlias}</strong>.
                    What began as a deep passion for authentic Caribbean cuisine and a
                    commitment to quality has grown into one of Northern Virginia&apos;s
                    most trusted full-service catering companies.
                  </p>
                  <p>
                    As a modern artisan chef, {SITE_CONFIG.chefAlias} brings a philosophy
                    of dedication and craft to every event. His menus are rooted in
                    Caribbean tradition — bold, layered flavors built on fresh ingredients
                    and time-honored techniques — yet presented with the elegance and
                    precision of fine dining.
                  </p>
                  <p>
                    Beyond Pauleen&apos;s, Chef Ji has created a portfolio of culinary
                    ventures including Pauleen&apos;s Panini &amp; Pub Food and the
                    Pauleen&apos;s at The Dell Leesburg location, cementing his reputation
                    as a creative force in the Northern Virginia food scene.
                  </p>
                  <p>
                    Whether serving 10 guests at an intimate dinner or 500 at a grand
                    wedding reception, the Pauleen&apos;s standard never wavers: fresh
                    ingredients, meticulous preparation, and service that makes every
                    guest feel like the guest of honor.
                  </p>
                </div>

                {/* Highlights */}
                <div className="mt-10 grid grid-cols-2 gap-4">
                  {[
                    { icon: '🏝️', title: 'Caribbean Heritage', desc: 'Rooted in authentic island cuisine' },
                    { icon: '🌿', title: 'Fresh Ingredients', desc: 'Locally sourced when possible' },
                    { icon: '🎯', title: 'Detail-Oriented', desc: 'Precision in every plate' },
                    { icon: '🤝', title: 'Full-Service', desc: 'From planning to clean-up' },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} className="rounded-xl bg-white p-4 shadow-sm">
                      <span className="mb-2 block text-2xl">{icon}</span>
                      <p className="font-semibold text-primary text-sm">{title}</p>
                      <p className="mt-0.5 text-xs text-primary/50">{desc}</p>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="btn-primary mt-10">
                  Work With Chef Ji
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related ventures */}
        <section className="bg-primary py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mb-12 text-center">
              <span className="section-tag-light mb-4 block w-fit mx-auto">The Portfolio</span>
              <h2 className="heading-section-light">Chef Ji&apos;s <span className="text-gradient-warm">Culinary World</span></h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Pauleen's Catering & Events",
                  desc: 'Full-service Caribbean catering for weddings, corporate, and private events.',
                  active: true,
                },
                {
                  name: "Pauleen's Panini & Pub Food",
                  desc: "Casual, flavorful Caribbean-inspired pub fare with Chef Ji's signature touch.",
                  active: false,
                },
                {
                  name: "Pauleen's at The Dell Leesburg",
                  desc: 'A beloved local establishment bringing the Pauleen\'s experience to Leesburg, VA.',
                  active: false,
                },
              ].map(({ name, desc, active }) => (
                <div
                  key={name}
                  className={`rounded-2xl p-6 ${active ? 'bg-accent' : 'bg-dark-card'}`}
                >
                  {active && (
                    <span className="mb-3 inline-block rounded-full bg-white/20 px-3 py-0.5 text-xs font-semibold text-white">
                      You&apos;re here
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold text-white mb-2">{name}</h3>
                  <p className="text-sm text-white/70">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-xl px-6 text-center">
            <h2 className="heading-section mb-5">
              Ready to Plan <span className="text-gradient-warm">Your Event?</span>
            </h2>
            <p className="mb-8 text-base text-primary/60">
              Contact us today for a free consultation and custom menu proposal tailored
              to your event vision and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">Request a Quote</Link>
              <Link href={SITE_CONFIG.phoneHref} className="btn-dark">
                {SITE_CONFIG.phone}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
