import Image from 'next/image';
import Link from 'next/link';

import { SERVICES } from '@/lib/constants';

export default function ServicesSection() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="section-tag mb-4">What We Offer</span>
          <h2 className="heading-section mb-5 text-balance">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="divider-gold mb-5" />
          <p className="max-w-xl text-base leading-relaxed text-primary/60">
            From curated private dinners to full-scale event catering, we work with you
            to deliver fresh, delicious food with hospitality that leaves a lasting impression.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link href="/services" className="btn-dark">
            View All Services
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

type ServiceCardProps = {
  service: (typeof SERVICES)[number];
};

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-dark-lg">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.title} — Pauleen's Catering & Events`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 h-1 w-10 rounded-full bg-accent shadow-dark-lg" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-secondary">
          {service.headline}
        </p>
        <h3 className="mb-2 font-display text-xl font-bold text-primary">
          {service.title}
        </h3>
        <div className="mb-3 h-px w-10 bg-secondary transition-all duration-300 group-hover:w-16" />
        <p className="flex-1 text-sm leading-relaxed text-primary/60">
          {service.description}
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary transition-all duration-300 hover:gap-3"
        >
          {service.cta}
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
