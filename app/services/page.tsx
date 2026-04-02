import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { IMAGES, SERVICES, SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Services',
  description:
    "Pauleen's by Chef Ji offers Event Catering, Private Chef, and Recipe Development services throughout Northern Virginia and the DMV area.",
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
              alt="Pauleen's catering services"
              fill
              className="object-cover opacity-25"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/95" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
            <span className="section-tag-light mb-4 block w-fit">What We Offer</span>
            <h1 className="heading-display-light mb-4 text-balance">
              Our <span className="text-gradient-warm">Services</span>
            </h1>
            <p className="max-w-xl text-lg text-white/60">
              {SITE_CONFIG.subTagline}
            </p>
          </div>
        </section>

        {/* Services detail */}
        <section className="bg-surface py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="space-y-28">
              {SERVICES.map((service, i) => (
                <ServiceDetail key={service.id} service={service} reverse={i % 2 !== 0} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-20">
          <div className="mx-auto max-w-xl px-6 text-center">
            <h2 className="heading-section-light mb-5">
              Have a great idea for an event?{' '}
              <span className="text-gradient-warm">We&apos;d love to help.</span>
            </h2>
            <p className="mb-8 text-base text-white/60">
              We&apos;d love to help you curate an unforgettable experience. Contact us
              today for a complimentary consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">Get a Quote!</Link>
              <Link href={SITE_CONFIG.phoneHref} className="btn-outline">{SITE_CONFIG.phone}</Link>
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
    <div id={service.id} className="grid items-center gap-12 lg:grid-cols-2">
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
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
          {service.headline}
        </p>
        <h2 className="heading-section mb-4">{service.title}</h2>
        <div className="divider-gold mb-6" />
        {/* Real description from pauleenscatering.com */}
        <p className="mb-8 text-base leading-relaxed text-primary/65">
          {service.description}
        </p>
        <Link href="/contact" className="btn-primary">
          {service.cta}
        </Link>
      </div>
    </div>
  );
}
