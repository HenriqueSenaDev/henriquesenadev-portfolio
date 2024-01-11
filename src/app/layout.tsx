import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'HenriqueSenaDev - Portfolio',
  description: 'Software Developer Portfolio',
};

const outfit = Outfit({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <body className={`${outfit.className}`}>{children}</body>
    </html>
  );
}
