import type { Metadata } from 'next';
import Link from 'next/link';
import { games, categories } from '@/data/games';
import GamesContent from '@/components/GamesContent';

export const metadata: Metadata = {
  title: 'All Games | ArcadeHeap',
  description: 'Browse all free HTML5 games on ArcadeHeap. Filter by category, search, and sort by popularity. No downloads required — play instantly in your browser.',
};

export default function GamesPage() {
  return (
    <>
      {/* Interactive client-side filtered view */}
      <GamesContent />

      {/* SSR fallback for search engines — hidden when JS is active */}
      <noscript>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-white mb-6">All Games</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {games.map(game => (
              <div key={game.slug} className="bg-[#1a1a2e] border border-gray-800 rounded-xl p-4">
                <Link href={`/game/${game.slug}`} className="text-[#8b5cf6] hover:text-violet-400 font-medium">
                  {game.title}
                </Link>
                <p className="text-gray-500 text-xs mt-1">
                  {categories.find(c => c.slug === game.category)?.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </noscript>
    </>
  );
}
