'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { SITE_CONFIG } from '@/lib/constants';

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 lg:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="border-t border-white/10 bg-primary/95 px-4 py-3 backdrop-blur-md">
        <div className="flex gap-3">
          <Link
            href="/contact"
            className="btn-primary flex-1 justify-center py-3 text-xs"
          >
            Request a Quote
          </Link>
          <Link
            href={SITE_CONFIG.phoneHref}
            aria-label="Call Pauleen's Catering"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border-2 border-white/20 text-white transition-colors hover:border-accent hover:text-accent"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
