import { STATS } from '@/lib/constants';

export default function TrustBar() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              className={`group flex flex-col items-center text-center ${
                i < STATS.length - 1 ? 'lg:border-r lg:border-white/10' : ''
              }`}
            >
              <span className="font-display text-5xl font-bold text-gradient-warm lg:text-6xl">
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

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
}
