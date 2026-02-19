'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface RecentGame {
  slug: string;
  title: string;
  thumbnailUrl: string;
  ts: number;
}

export default function RecentlyPlayed() {
  const [recent, setRecent] = useState<RecentGame[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = JSON.parse(localStorage.getItem('ah_recent') || '[]');
      setRecent(stored.slice(0, 6));
    } catch {
      setRecent([]);
    }
  }, []);

  // Don't render on server or when no recent games
  if (!mounted || recent.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">🕹️ Recently Played</h2>
        <button
          onClick={() => {
            localStorage.removeItem('ah_recent');
            setRecent([]);
          }}
          className="text-gray-600 hover:text-gray-400 text-xs transition-colors"
        >
          Clear
        </button>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {recent.map(game => (
          <Link
            key={game.slug}
            href={`/game/${game.slug}`}
            className="group block rounded-xl overflow-hidden bg-[#1a1a2e] border border-gray-800 hover:border-[#8b5cf6]/60 transition-all hover:scale-105"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={game.thumbnailUrl}
                alt={game.title}
                fill
                className="object-cover group-hover:brightness-75 transition-all"
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-[#8b5cf6] text-white text-xs font-bold px-3 py-1 rounded-full">
                  ▶ Play
                </div>
              </div>
            </div>
            <div className="p-2">
              <p className="text-white text-xs font-medium line-clamp-1 group-hover:text-[#8b5cf6] transition-colors">
                {game.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
