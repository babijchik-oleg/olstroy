import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import Header from '@/components/Header/Header';
import './globals.css';
import { Footer } from '@/components/Footer/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'OlStroy',
  description: 'OlStroy - Construction Company',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
