'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { categories } from '@/data/games';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/games?q=${encodeURIComponent(searchQuery.trim())}`);
      setMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main nav row */}
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0" onClick={() => setMenuOpen(false)}>
            <span className="text-2xl">🎮</span>
            <span className="text-xl font-extrabold text-white tracking-tight">
              Arcade<span className="text-[#8b5cf6]">Heap</span>
            </span>
          </Link>

          {/* Search bar (desktop) */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search games..."
              className="w-full bg-gray-900 border border-gray-700 rounded-full pl-9 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-colors"
            />
          </form>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href="/games"
              className="hidden md:inline-flex items-center gap-1.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
            >
              All Games
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Category nav (desktop) */}
        <nav className="hidden md:flex items-center gap-1 pb-3 overflow-x-auto scrollbar-hide">
          {categories.map(cat => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="flex-shrink-0 text-gray-400 hover:text-white hover:bg-gray-800 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200"
            >
              {cat.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-gray-800 bg-[#0a0a0a]">
          {/* Mobile search */}
          <div className="px-4 pt-4 pb-3">
            <form onSubmit={handleSearch} className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search games..."
                className="w-full bg-gray-900 border border-gray-700 rounded-full pl-9 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6]"
              />
            </form>
          </div>

          {/* Mobile category links */}
          <nav className="grid grid-cols-2 gap-1 px-4 pb-4">
            <Link
              href="/games"
              onClick={() => setMenuOpen(false)}
              className="text-[#8b5cf6] font-semibold text-sm px-3 py-2 rounded-lg bg-[#8b5cf6]/10 text-center"
            >
              🎮 All Games
            </Link>
            {categories.map(cat => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white text-sm px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors text-center"
              >
                {cat.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
