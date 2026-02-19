import Link from 'next/link';
import { games, getFeaturedGames, getPopularGames, getNewGames, categories, categoryEmoji } from '@/data/games';
import GameGrid from '@/components/GameGrid';
import RecentlyPlayed from '@/components/RecentlyPlayed';
import HeroSearch from '@/components/HeroSearch';

export default function HomePage() {
  const featured = getFeaturedGames();
  const popular = getPopularGames(8);
  const newGames = getNewGames().slice(0, 8);

  // Build category sections — only show categories with 3+ games
  const categorySections = categories
    .map(cat => ({
      slug: cat.slug,
      label: `${categoryEmoji[cat.slug] ?? '🎮'} ${cat.label} Games`,
      games: games.filter(g => g.category === cat.slug).slice(0, 4),
    }))
    .filter(section => section.games.length >= 3)
    .slice(0, 5); // Show up to 5 category sections on homepage

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#0d0d1a] to-[#0f0f0f] py-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#8b5cf6]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[#8b5cf6] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span>🎮</span> Free Online Games
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Play Free Games Online —<br />
            <span className="text-[#8b5cf6]">No Downloads, Just Play</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-2 max-w-2xl mx-auto">
            {games.length}+ free browser games. Click and play instantly — no installs, no sign-ups.
          </p>

          {/* Search bar — prominent in hero */}
          <HeroSearch />

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/games"
              className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold px-8 py-3 rounded-full text-lg transition-all hover:scale-105 shadow-lg shadow-[#8b5cf6]/30"
            >
              Browse All Games →
            </Link>
            <Link
              href="/games?sort=popular"
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-full text-lg transition-all hover:scale-105"
            >
              🔥 Hot Games
            </Link>
          </div>
        </div>
      </section>

      {/* Recently Played — shows only if user has played games */}
      <RecentlyPlayed />

      {/* Featured Games */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">⭐ Featured Games</h2>
          <Link href="/games" className="text-[#8b5cf6] hover:text-violet-400 text-sm font-medium transition-colors">
            View all →
          </Link>
        </div>
        <GameGrid games={featured} cols={3} />
      </section>

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

      {/* Category sections — only non-empty */}
      {categorySections.map(section => (
        <section key={section.slug} className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">{section.label}</h2>
            <Link
              href={`/category/${section.slug}`}
              className="text-[#8b5cf6] hover:text-violet-400 text-sm font-medium transition-colors"
            >
              More {section.slug.replace('-', ' ')} games →
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
