import FooterSection from '@/components/sections/FooterSection';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/sections/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PMN Web Solutions - Top Web Development & Digital Marketing Services',
  description: 'Professional web development, SEO, and digital marketing solutions at affordable prices. We deliver quality websites 40% below market rates.',
  keywords: 'web development, SEO, digital marketing, affordable websites, React, Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
      <Header/>
        {children}
        <FooterSection />
      </body>
    </html>
  );
}