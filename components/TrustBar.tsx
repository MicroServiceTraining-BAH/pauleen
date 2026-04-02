import { SITE_CONFIG } from '@/lib/constants';

// Facts sourced directly from pauleenscatering.com
const FACTS = [
  { value: 'Est. 2009', label: 'Founded in New York City' },
  { value: 'DMV', label: 'Serving Northern Virginia & the DMV' },
  { value: '3', label: 'Services Offered' },
  { value: 'Full-Service', label: 'In-Home & Drop-Off Available' },
] as const;

export default function TrustBar() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-widest text-white/30">
          {SITE_CONFIG.brandName}
        </p>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {FACTS.map(({ value, label }, i) => (
            <div
              key={label}
              className={`group flex flex-col items-center text-center ${
                i < FACTS.length - 1 ? 'lg:border-r lg:border-white/10' : ''
              }`}
            >
              <span className="font-display text-3xl font-bold text-gradient-warm lg:text-4xl">
                {value}
              </span>
              <div className="mt-2 h-px w-8 bg-accent/40 transition-all duration-300 group-hover:w-16 group-hover:bg-accent" />
              <span className="mt-3 text-xs font-medium uppercase tracking-widest text-white/50">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
}
