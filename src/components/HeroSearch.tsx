'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export default function HeroSearch() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      router.push(`/games?q=${encodeURIComponent(q)}`);
    }
  }, [query, router]);

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-xl mx-auto mt-8 mb-6">
      <div className="relative flex items-center">
        <svg
          className="absolute left-4 w-5 h-5 text-gray-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search games… try Tetris, Snake, Wordle…"
          className="w-full bg-[#1a1a2e] border border-gray-700 focus:border-[#8b5cf6] text-white placeholder-gray-500 text-base rounded-full py-3 pl-12 pr-24 outline-none transition-all focus:shadow-lg focus:shadow-[#8b5cf6]/20"
        />
        <button
          type="submit"
          className="absolute right-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold text-sm px-5 py-2 rounded-full transition-all hover:scale-105"
        >
          Search
        </button>
      </div>
    </form>
  );
}
