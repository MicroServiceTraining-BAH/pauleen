import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { IMAGES, SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About',
  description:
    "Learn the story behind Pauleen's Catering & Events — founded in 2009 by Chef Jimmie Salonie, a modern artisan chef dedicated to crafting food, drink, and service that is often imitated but rarely equalled.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="relative overflow-hidden bg-primary pt-24 pb-12 md:pt-32 md:pb-20">
          <div className="absolute inset-0">
            <Image
              src={IMAGES.heroAlt}
              alt="Catering event by Pauleen's"
              fill
              className="object-cover opacity-20"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/90 to-primary" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
            <span className="section-tag-light mb-4 block w-fit">Our Story</span>
            <h1 className="heading-display-light mb-4 text-balance">
              Meet <span className="text-gradient-warm">{SITE_CONFIG.chefAlias}</span>
            </h1>
            <p className="max-w-xl text-lg text-white/60">
              A modern artisan chef dedicated to crafting food, drink, and service that
              is &ldquo;often imitated but rarely equalled.&rdquo;
            </p>
          </div>
        </section>

        {/* Main story */}
        <section className="bg-surface py-14 md:py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid items-start gap-16 lg:grid-cols-2">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={IMAGES.about}
                      alt={`${SITE_CONFIG.chef} — Executive Chef & Owner`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-6 left-6 rounded-2xl bg-primary p-5 shadow-dark-lg">
                  <p className="font-display text-lg font-bold text-white">{SITE_CONFIG.chef}</p>
                  <p className="text-xs text-accent">Executive Chef &amp; Owner</p>
                  <p className="mt-1 text-xs text-white/40">Est. {SITE_CONFIG.founded}</p>
                </div>
              </div>

              <div className="lg:pt-4">
                <h2 className="heading-section mb-6">
                  <span className="text-primary">{SITE_CONFIG.brandName}</span>
                </h2>
                <div className="divider-gold mb-8" />

                {/* Real bio — verbatim from pauleenscatering.com/about-5 */}
                <div className="space-y-5 text-base leading-relaxed text-primary/65">
                  <p>
                    Chef Jimmie was born and raised in New York City in a very tight-knit
                    Greek family. This is where he was exposed to a style of cooking that
                    blended unique multi-cultural cuisines and traditional American influences,
                    which he developed into a culinary style that pays homage to his roots.
                  </p>
                  <p>
                    Honing his talents in some of the best kitchens on the East Coast, he,
                    alongside partner and Hospitality Director,{' '}
                    <strong className="text-primary">{SITE_CONFIG.partner}</strong>, launched
                    their full-service catering company, Pauleen&apos;s, in{' '}
                    {SITE_CONFIG.founded}, which focuses on regional American cuisine. The brand
                    is an ode to Jimmie and Michael&apos;s mothers, Paula and Maureen, who
                    gave them the foundation to become who they are today.
                  </p>
                  <p>
                    Chef Jimmie has developed a reputation for executing highly curated
                    private dinners, corporate events, and culinary classes, as well as
                    catering for various events throughout life that are to be celebrated.
                  </p>
                  <p>
                    In addition to Pauleen&apos;s, Chef Jimmie expanded his repertoire to
                    create HandleBarHKNY, a bespoke cocktail concept, and Ela, a pop-up
                    concept with a menu that consists of traditional dishes inspired by his
                    Greek heritage.
                  </p>
                  <p>
                    Currently, you can enjoy Pauleen&apos;s at The Dell: Food &amp; Brew Hall
                    in the Village at Leesburg serving NYC-inspired panini and shareable
                    platters, including &ldquo;Mezeterranean&rdquo; offerings — a nod to his
                    Greek heritage. Pauleen&apos;s also serves weekend brunch every Saturday
                    &amp; Sunday.
                  </p>
                </div>

                <Link href="/contact" className="btn-dark mt-10">
                  Work With {SITE_CONFIG.chefAlias}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related ventures — real info from site */}
        <section className="bg-primary py-14 md:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mb-12 text-center">
              <span className="section-tag-light mb-4 block w-fit mx-auto">The Portfolio</span>
              <h2 className="heading-section-light">
                Also by <span className="text-gradient-warm">Chef Jimmie</span>
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Pauleen's Catering & Events",
                  desc: 'Full-service catering company focusing on regional American cuisine. Private dinners, corporate events, and culinary classes.',
                  active: true,
                },
                {
                  name: 'HandleBarHKNY',
                  desc: 'A bespoke cocktail concept.',
                  active: false,
                },
                {
                  name: 'Ela',
                  desc: "A pop-up concept featuring traditional dishes inspired by Chef Jimmie's Greek heritage.",
                  active: false,
                },
              ].map(({ name, desc, active }) => (
                <div
                  key={name}
                  className={`rounded-2xl p-6 ${active ? 'bg-white/10 border border-white/15' : 'bg-dark-card'}`}
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
        <section className="bg-surface py-14 md:py-20">
          <div className="mx-auto max-w-xl px-6 text-center">
            <h2 className="heading-section mb-5">
              Ready to <span className="text-primary">Get Started?</span>
            </h2>
            <p className="mb-8 text-base text-primary/60">
              If you have questions regarding any of our services, or if you would simply
              like to chat, please feel free to reach out today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-dark">Get a Quote!</Link>
              <Link href={SITE_CONFIG.phoneHref} className="btn-outline-dark">{SITE_CONFIG.phone}</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
