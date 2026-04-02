import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { IMAGES, SERVICES, SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Services',
  description:
    "Explore Pauleen's Catering full-service offerings: wedding catering, corporate events, private chef services, and custom Caribbean menus for events of all sizes.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="relative overflow-hidden bg-primary pt-32 pb-20">
          <div className="absolute inset-0">
            <Image
              src={IMAGES.services}
              alt="Catering services"
              fill
              className="object-cover opacity-25"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/95" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
            <span className="section-tag-light mb-4 block w-fit">What We Do</span>
            <h1 className="heading-display-light mb-4 text-balance">
              Full-Service{' '}
              <span className="text-gradient-warm">Caribbean Catering</span>
            </h1>
            <p className="max-w-xl text-lg text-white/60">
              From intimate dinners to grand weddings — we bring authentic island
              flavors and flawless execution to every event we serve.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="bg-surface py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="space-y-24">
              {SERVICES.map((service, i) => (
                <ServiceDetail key={service.id} service={service} reverse={i % 2 !== 0} />
              ))}
            </div>
          </div>
        </section>

        {/* Process section */}
        <section className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mb-14 flex flex-col items-center text-center">
              <span className="section-tag-light mb-4">How It Works</span>
              <h2 className="heading-section-light mb-5">
                Simple,{' '}
                <span className="text-gradient-warm">Seamless Process</span>
              </h2>
              <p className="max-w-lg text-base text-white/55">
                We handle every detail so you can focus on what matters — enjoying your event.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: '01',
                  title: 'Consultation',
                  desc: 'We discuss your vision, event details, guest count, and budget.',
                },
                {
                  step: '02',
                  title: 'Custom Menu',
                  desc: 'Chef Ji designs a personalized Caribbean menu tailored to your preferences.',
                },
                {
                  step: '03',
                  title: 'Event Day',
                  desc: 'We arrive early, set up, and deliver flawless service from start to finish.',
                },
                {
                  step: '04',
                  title: 'Clean-Up',
                  desc: 'We handle everything post-event, leaving you stress-free.',
                },
              ].map(({ step, title, desc }) => (
                <div
                  key={step}
                  className="relative rounded-2xl bg-dark-card p-6"
                >
                  <span className="font-display text-6xl font-bold text-accent/15">
                    {step}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">{title}</h3>
                  <div className="my-3 h-px w-10 bg-accent" />
                  <p className="text-sm leading-relaxed text-white/55">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-xl px-6 text-center">
            <h2 className="heading-section mb-5">
              Ready to <span className="text-gradient-warm">Get Started?</span>
            </h2>
            <p className="mb-8 text-base text-primary/60">
              Contact us today for a free consultation and let&apos;s create the perfect
              Caribbean catering experience for your event.
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

type ServiceDetailProps = {
  service: (typeof SERVICES)[number];
  reverse: boolean;
};

function ServiceDetail({ service, reverse }: ServiceDetailProps) {
  return (
    <div
      id={service.id}
      className={`grid items-center gap-12 lg:grid-cols-2 ${reverse ? '' : ''}`}
    >
      <div className={`relative ${reverse ? 'lg:order-2' : ''}`}>
        <div className="relative overflow-hidden rounded-2xl">
          <div className="relative aspect-[4/3]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-2xl shadow-warm-lg">
              {service.icon}
            </div>
          </div>
        </div>
      </div>

      <div className={reverse ? 'lg:order-1' : ''}>
        <h2 className="heading-section mb-4">{service.title}</h2>
        <div className="divider-gold mb-6" />
        <p className="mb-6 text-base leading-relaxed text-primary/65">
          {service.description}
        </p>
        <p className="mb-8 text-base leading-relaxed text-primary/65">
          Our team handles every aspect of your catering needs — from menu consultation
          and ingredient sourcing to setup, service, and clean-up. We accommodate
          dietary restrictions, cultural preferences, and event-specific requirements
          to ensure your guests are delighted from the first bite to the last.
        </p>
        <Link href="/contact" className="btn-primary">
          Book This Service
        </Link>
      </div>
    </div>
  );
}
