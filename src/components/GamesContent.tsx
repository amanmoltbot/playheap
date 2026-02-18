'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { games, categories } from '@/data/games';
import GameGrid from '@/components/GameGrid';
import AdSlot from '@/components/AdSlot';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function GamesInner() {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get('q') ?? '';
  const [query, setQuery] = useState(initialQ);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'new' | 'az'>('popular');

  const filtered = useMemo(() => {
    let result = [...games];

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(g => g.category === activeCategory);
    }

    // Filter by search
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(g =>
        g.title.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q) ||
        g.category.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === 'popular') result.sort((a, b) => b.plays - a.plays);
    else if (sortBy === 'new') result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    else if (sortBy === 'az') result.sort((a, b) => a.title.localeCompare(b.title));

    return result;
  }, [query, activeCategory, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-[#8b5cf6] transition-colors">Home</Link>
          <span>›</span>
          <span className="text-gray-300">All Games</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">All Games</h1>
        <p className="text-gray-400">{games.length}+ free HTML5 games — play instantly, no downloads</p>
      </div>

      {/* Ad slot */}
      <div className="mb-8 flex justify-center">
        <AdSlot width={728} height={90} />
      </div>

      {/* Search & filters */}
      <div className="bg-[#1a1a2e] border border-gray-800 rounded-xl p-4 mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search games..."
              className="w-full bg-gray-900 border border-gray-700 rounded-full pl-9 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-colors"
            />
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as typeof sortBy)}
            className="bg-gray-900 border border-gray-700 rounded-full px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#8b5cf6] cursor-pointer"
          >
            <option value="popular">Most Popular</option>
            <option value="new">Newest First</option>
            <option value="az">A–Z</option>
          </select>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mt-4">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-[#8b5cf6] text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.slug
                  ? 'bg-[#8b5cf6] text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-500 text-sm">
          {filtered.length} game{filtered.length !== 1 ? 's' : ''} found
          {query && ` for "${query}"`}
        </p>
        {(query || activeCategory !== 'all') && (
          <button
            onClick={() => { setQuery(''); setActiveCategory('all'); }}
            className="text-[#8b5cf6] hover:text-violet-400 text-sm"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Games grid */}
      <GameGrid
        games={filtered}
        cols={4}
        emptyMessage={`No games found${query ? ` for "${query}"` : ''}. Try a different search.`}
      />
    </div>
  );
}

export default function GamesContent() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center py-20 text-gray-500">Loading games...</div>
      </div>
    }>
      <GamesInner />
    </Suspense>
  );
}
