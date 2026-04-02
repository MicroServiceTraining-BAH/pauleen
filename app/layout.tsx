import type { Metadata } from 'next';
import { Cormorant_Garamond, Poppins } from 'next/font/google';

import StickyMobileCTA from '@/components/StickyMobileCTA';

import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Pauleen's Catering & Events | Caribbean Catering in Leesburg, VA",
    template: "%s | Pauleen's Catering & Events",
  },
  description:
    "Authentic Caribbean and Jamaican-inspired catering for weddings, corporate events, and private celebrations. Chef Ji brings bold island flavors to your event in Leesburg, VA.",
  keywords: [
    'Caribbean catering',
    'Jamaican catering near me',
    'event catering services',
    'wedding catering Caribbean food',
    'catering Leesburg VA',
    'private chef Virginia',
    'corporate catering Northern Virginia',
  ],
  openGraph: {
    title: "Pauleen's Catering & Events | Caribbean Catering",
    description:
      'Authentic Caribbean flavors for weddings, events, and corporate gatherings.',
    type: 'website',
    locale: 'en_US',
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${cormorant.variable} ${poppins.variable}`}>
      <body className="antialiased">
        {children}
        <StickyMobileCTA />
      </body>
    </html>
  );
}
