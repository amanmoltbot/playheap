import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://playheap.vercel.app'),
  title: 'Free Online Games - Play Now | PlayHeap',
  description: 'Play free HTML5 games online. No downloads, no installs. Action, puzzle, racing, shooting, and more — all free at PlayHeap.io',
  keywords: 'free online games, HTML5 games, browser games, play now, no download games',
  openGraph: {
    siteName: 'PlayHeap',
    type: 'website',
    url: 'https://playheap.vercel.app',
    images: [
      {
        url: 'https://placehold.co/1200x630/0f0f0f/8b5cf6?text=PlayHeap+-+Free+Online+Games',
        width: 1200,
        height: 630,
        alt: 'PlayHeap - Free Online Games',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://placehold.co/1200x630/0f0f0f/8b5cf6?text=PlayHeap+-+Free+Online+Games'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0f0f0f] text-gray-200 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
