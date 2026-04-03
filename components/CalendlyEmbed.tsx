'use client';

import Script from 'next/script';
import { useEffect } from 'react';

// Replace this with the real Calendly URL when ready
const CALENDLY_URL = 'https://calendly.com/pauleens-catering';

export default function CalendlyEmbed() {
  // Load Calendly CSS
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section className="bg-surface py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="section-tag mb-4 inline-block">Schedule a Consultation</span>
          <h2 className="heading-section mb-5 text-balance">
            Book a <span className="text-primary">Free Call</span>
          </h2>
          <div className="divider-gold mx-auto mb-5" />
          <p className="mx-auto max-w-lg text-base text-primary/60">
            Pick a time that works for you. Chef Jimmie will personally walk you through
            your event vision and put together a custom proposal.
          </p>
        </div>

        {/* Calendly inline widget */}
        <div className="overflow-hidden rounded-2xl border border-primary/10 shadow-sm">
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
