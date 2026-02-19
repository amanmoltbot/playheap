import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { webSiteSchema } from '@/lib/schema';

export const metadata: Metadata = {
  metadataBase: new URL('https://arcadeheap.com'),
  title: 'Free Online Games - Play Now | ArcadeHeap',
  description: 'Play free HTML5 games online. No downloads, no installs. Action, puzzle, racing, shooting, and more — all free at ArcadeHeap.com',
  keywords: 'free online games, HTML5 games, browser games, play now, no download games',
  openGraph: {
    siteName: 'ArcadeHeap',
    type: 'website',
    url: 'https://arcadeheap.com',
    images: [
      {
        url: 'https://arcadeheap.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ArcadeHeap - Free Online Games',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://arcadeheap.com/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema()) }}
        />
      </head>
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
