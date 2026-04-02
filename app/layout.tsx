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
    default: "Pauleen's Catering & Events | Chef Jimmie Salonie — Northern Virginia & DMV",
    template: "%s | Pauleen's Catering & Events",
  },
  description:
    "Pauleen's Catering & Events by Chef Jimmie Salonie — a modern artisan chef dedicated to crafting food, drink, and service that is often imitated but rarely equalled. Serving Northern Virginia & the DMV.",
  keywords: [
    'catering Northern Virginia',
    'catering DMV',
    'private chef Virginia',
    'event catering Leesburg VA',
    'corporate catering Northern Virginia',
    'private dinner catering',
    'culinary classes Northern Virginia',
  ],
  openGraph: {
    title: "Pauleen's Catering & Events | Chef Jimmie Salonie",
    description:
      "A modern artisan chef dedicated to crafting food, drink, and service that is often imitated but rarely equalled. Serving Northern Virginia & the DMV.",
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
