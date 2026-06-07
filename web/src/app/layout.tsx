import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Geist_Mono, Plus_Jakarta_Sans } from 'next/font/google';

import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'EngageVision — Analisis Engagement Foto',
  description:
    'Upload foto dan cek potensi engagement-nya dalam hitungan detik.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={cn('font-sans', plusJakarta.variable)}>
      <body className={`${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
