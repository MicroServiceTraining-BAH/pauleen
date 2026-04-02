'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { IMAGES, NAV_LINKS, SITE_CONFIG } from '@/lib/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isHome = pathname === '/';

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-primary/95 shadow-dark-lg backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          {/* Logo */}
          <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })} className="relative z-10 flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src={IMAGES.logo}
                alt={SITE_CONFIG.name}
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold text-white">
                Pauleen&apos;s
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                Catering &amp; Events
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => { if (href === '/') window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  className={`relative text-sm font-medium uppercase tracking-widest transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:text-accent hover:after:scale-x-100 ${
                    pathname === href ? 'text-accent after:scale-x-100' : 'text-white/80'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href={SITE_CONFIG.phoneHref}
              className="text-sm font-medium text-white/70 transition-colors hover:text-accent"
            >
              {SITE_CONFIG.phone}
            </Link>
            <Link href="/contact" className="btn-primary py-2.5 text-xs">
              Request a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 lg:hidden"
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-primary transition-all duration-500 lg:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Background decoration */}
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute left-0 top-1/2 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

        <div className="flex flex-1 flex-col items-center justify-center gap-8 relative z-10 px-6">
          {NAV_LINKS.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => { if (href === '/') window.scrollTo({ top: 0, behavior: 'instant' }); }}
              className={`font-display text-4xl font-bold text-white/80 transition-all duration-300 hover:text-accent ${
                pathname === href ? 'text-accent' : ''
              }`}
              style={{ transitionDelay: isOpen ? `${i * 80}ms` : '0ms' }}
            >
              {label}
            </Link>
          ))}

          <div className="mt-6 flex flex-col items-center gap-4">
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
            <Link
              href={SITE_CONFIG.phoneHref}
              className="text-sm font-medium text-white/60 hover:text-accent"
            >
              {SITE_CONFIG.phone}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
