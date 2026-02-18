import type { Metadata } from 'next';
import Link from 'next/link';
import { games, getFeaturedGames, getPopularGames, getNewGames, categories } from '@/data/games';
import GameGrid from '@/components/GameGrid';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'Free Online Games - Play Now | PlayHeap',
  description: 'Play thousands of free HTML5 games online. No downloads, no installs. Action, puzzle, racing, shooting, and more — all free at PlayHeap.io',
};

export default function HomePage() {
  const featured = getFeaturedGames();
  const popular = getPopularGames(8);
  const newGames = getNewGames().slice(0, 8);

  // Pick a couple category sections
  const actionGames = games.filter(g => g.category === 'action').slice(0, 4);
  const puzzleGames = games.filter(g => g.category === 'puzzle').slice(0, 4);
  const ioGames = games.filter(g => g.category === 'io-games').slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#0d0d1a] to-[#0f0f0f] py-16 px-4 text-center overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#8b5cf6]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[#8b5cf6] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span>🎮</span> 1000+ Free HTML5 Games
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Play Free Games Online —<br />
            <span className="text-[#8b5cf6]">Thousands of HTML5 Games</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            No downloads. No installs. Just click and play hundreds of free browser games instantly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/games"
              className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold px-8 py-3 rounded-full text-lg transition-all hover:scale-105 shadow-lg shadow-[#8b5cf6]/30"
            >
              Browse All Games →
            </Link>
            <Link
              href="/category/action"
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-full text-lg transition-all hover:scale-105"
            >
              🔥 Hot Games
            </Link>
          </div>
        </div>
      </section>

      {/* Top ad slot */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-center">
        <AdSlot width={728} height={90} />
      </div>

      {/* Featured Games */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">⭐ Featured Games</h2>
          <Link href="/games" className="text-[#8b5cf6] hover:text-violet-400 text-sm font-medium transition-colors">
            View all →
          </Link>
        </div>
        <GameGrid games={featured} cols={3} />
      </section>

      {/* Ad between sections */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center">
        <AdSlot width={728} height={90} label="Advertisement" />
      </div>

      {/* Popular Games */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">🔥 Popular Games</h2>
          <Link href="/games" className="text-[#8b5cf6] hover:text-violet-400 text-sm font-medium transition-colors">
            View all →
          </Link>
        </div>
        <GameGrid games={popular} cols={4} />
      </section>

      {/* Ad between sections */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center">
        <AdSlot width={728} height={90} />
      </div>

      {/* New Games */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">✨ New Games</h2>
          <Link href="/games" className="text-[#8b5cf6] hover:text-violet-400 text-sm font-medium transition-colors">
            View all →
          </Link>
        </div>
        <GameGrid games={newGames} cols={4} />
      </section>

      {/* Category sections */}
      {[
        { label: '⚔️ Action Games', games: actionGames, category: 'action' },
        { label: '🧩 Puzzle Games', games: puzzleGames, category: 'puzzle' },
        { label: '🌐 IO Games', games: ioGames, category: 'io-games' },
      ].map(section => (
        <section key={section.category} className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">{section.label}</h2>
            <Link
              href={`/category/${section.category}`}
              className="text-[#8b5cf6] hover:text-violet-400 text-sm font-medium transition-colors"
            >
              More {section.category.replace('-', ' ')} games →
            </Link>
          </div>
          <GameGrid games={section.games} cols={4} />
        </section>
      ))}

      {/* Category browse */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map(cat => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="flex flex-col items-center gap-2 bg-[#1a1a2e] hover:bg-[#1e1e3a] border border-gray-800 hover:border-[#8b5cf6]/50 rounded-xl p-5 text-center transition-all hover:scale-105 group"
            >
              <span className="text-3xl">{categoryEmoji[cat.slug] ?? '🎮'}</span>
              <span className="text-white text-sm font-semibold group-hover:text-[#8b5cf6] transition-colors">{cat.label}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

const categoryEmoji: Record<string, string> = {
  action: '⚔️',
  puzzle: '🧩',
  racing: '🏎️',
  sports: '⚽',
  shooting: '🎯',
  adventure: '🗺️',
  strategy: '♟️',
  arcade: '👾',
  multiplayer: '👥',
  'io-games': '🌐',
};
