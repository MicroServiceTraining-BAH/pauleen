import Image from 'next/image';
import Link from 'next/link';

import { IMAGES, NAV_LINKS, SITE_CONFIG } from '@/lib/constants';

const SERVICE_LINKS = [
  { href: '/services#wedding', label: 'Wedding Catering' },
  { href: '/services#corporate', label: 'Corporate Events' },
  { href: '/services#private', label: 'Private Events' },
  { href: '/services#custom', label: 'Custom Menus' },
  { href: '/services#chef', label: 'Private Chef' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-primary">
      {/* Top accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-secondary/8 blur-[120px]" />
      <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={IMAGES.logo}
                  alt={SITE_CONFIG.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-bold text-white">
                  Pauleen&apos;s
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-white/50">
              Authentic Caribbean cuisine for unforgettable events. Est. {SITE_CONFIG.founded}
              , Leesburg, VA.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <SocialIconLink href={SITE_CONFIG.social.instagram} label="Instagram">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </SocialIconLink>
              <SocialIconLink href={SITE_CONFIG.social.facebook} label="Facebook">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </SocialIconLink>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/40">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/40">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/40">
              Contact
            </h3>
            <div className="space-y-3">
              <p className="text-sm text-white/60">
                <span className="block text-xs text-white/30">Phone</span>
                <Link
                  href={SITE_CONFIG.phoneHref}
                  className="transition-colors hover:text-accent"
                >
                  {SITE_CONFIG.phone}
                </Link>
              </p>
              <p className="text-sm text-white/60">
                <span className="block text-xs text-white/30">Email</span>
                <Link
                  href={SITE_CONFIG.emailHref}
                  className="transition-colors hover:text-accent"
                >
                  {SITE_CONFIG.email}
                </Link>
              </p>
              <p className="text-sm text-white/60">
                <span className="block text-xs text-white/30">Address</span>
                {SITE_CONFIG.address}
                <br />
                {SITE_CONFIG.city}
              </p>
            </div>

            <Link href="/contact" className="btn-primary mt-6 py-2.5 text-xs">
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Made by{' '}
            <a
              href="https://lvluplocal.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent/70 transition-colors hover:text-accent"
            >
              Level Up Local
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

type SocialIconLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

function SocialIconLink({ href, label, children }: SocialIconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/50 transition-all duration-300 hover:border-accent hover:text-accent md:h-9 md:w-9"
    >
      {children}
    </a>
  );
}
