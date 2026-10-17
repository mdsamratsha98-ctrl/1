import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Samrat — Full-Stack Developer',
  description: 'Premium portfolio of a full-stack developer building scalable digital products and exceptional web experiences.',
  openGraph: { title: 'Samrat — Full-Stack Developer', description: 'Full-stack engineering, product design and creative development.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
