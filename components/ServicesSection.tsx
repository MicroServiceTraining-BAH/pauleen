import Image from 'next/image';
import Link from 'next/link';

import { SERVICES } from '@/lib/constants';

export default function ServicesSection() {
  return (
    <section className="bg-surface py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header — split layout, left-aligned heading + right description */}
        <div className="mb-16 grid items-end gap-6 md:grid-cols-2 md:mb-20">
          <div>
            <span className="section-tag mb-4 block w-fit">What We Offer</span>
            <h2 className="heading-section text-balance">
              Our <span className="text-primary">Services</span>
            </h2>
            <div className="divider-gold mt-5" />
          </div>
          <p className="text-base leading-relaxed text-primary/60 md:max-w-sm md:pb-1">
            From curated private dinners to full-scale event catering — fresh food and
            hospitality that leaves a lasting impression.
          </p>
        </div>

        {/* Zig-zag editorial layout — no equal 3-col cards */}
        <div className="space-y-16 md:space-y-24">
          {SERVICES.map((service, i) => (
            <ServiceRow key={service.id} service={service} index={i} />
          ))}
        </div>

        <div className="mt-16 flex justify-start">
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

type ServiceRowProps = {
  service: (typeof SERVICES)[number];
  index: number;
};

function ServiceRow({ service, index }: ServiceRowProps) {
  const imageFirst = index % 2 === 0;

  return (
    <article
      className="group grid items-center gap-8 md:grid-cols-2 md:gap-16"
      style={{ '--index': index } as React.CSSProperties}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden rounded-2xl ${imageFirst ? 'md:order-1' : 'md:order-2'}`}
      >
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={service.image}
            alt={`${service.title} — Pauleen's`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
          {/* Inner refraction edge — glassmorphism rule */}
          <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
        </div>
        {/* Index label */}
        <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
          <span className="font-mono text-xs font-semibold text-white/80">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`flex flex-col ${imageFirst ? 'md:order-2' : 'md:order-1'}`}>
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-secondary">
          {service.headline}
        </p>
        <h3 className="mb-4 font-display text-3xl font-bold leading-tight text-primary md:text-4xl">
          {service.title}
        </h3>
        <div className="mb-5 h-px w-10 bg-secondary/40 transition-all duration-500 group-hover:w-20 group-hover:bg-secondary" />
        <p className="text-base leading-relaxed text-primary/60" style={{ maxWidth: '52ch' }}>
          {service.description}
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary transition-all duration-300 hover:gap-4"
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
