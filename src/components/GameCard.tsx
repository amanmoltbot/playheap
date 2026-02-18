import Link from 'next/link';
import Image from 'next/image';
import { Game } from '@/data/games';
import CategoryBadge from './CategoryBadge';

interface GameCardProps {
  game: Game;
  size?: 'normal' | 'large';
}

function formatPlays(plays: number): string {
  if (plays >= 1_000_000) return `${(plays / 1_000_000).toFixed(1)}M`;
  if (plays >= 1_000) return `${(plays / 1_000).toFixed(0)}K`;
  return plays.toString();
}

export default function GameCard({ game, size = 'normal' }: GameCardProps) {
  return (
    <Link
      href={`/game/${game.slug}`}
      className="group block rounded-xl overflow-hidden bg-[#1a1a2e] border border-gray-800 hover:border-[#8b5cf6]/60 shadow-lg hover:shadow-[#8b5cf6]/20 transition-all duration-300 hover:scale-105"
    >
      <div className={`relative overflow-hidden ${size === 'large' ? 'aspect-[4/3]' : 'aspect-[4/3]'}`}>
        <Image
          src={game.thumbnailUrl}
          alt={game.title}
          fill
          className="object-cover transition-all duration-300 group-hover:brightness-75 group-hover:scale-110"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          unoptimized
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-[#8b5cf6] text-white font-bold px-6 py-2.5 rounded-full flex items-center gap-2 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play Now
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-1.5">
          {game.featured && (
            <span className="bg-[#8b5cf6] text-white text-xs font-bold px-2 py-0.5 rounded-full">
              ⭐ Featured
            </span>
          )}
          {game.isNew && (
            <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              ✨ New
            </span>
          )}
        </div>
      </div>

      <div className="p-3">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="text-white font-semibold text-sm leading-tight line-clamp-1 group-hover:text-[#8b5cf6] transition-colors">
            {game.title}
          </h3>
        </div>
        <div className="flex items-center justify-between">
          <CategoryBadge category={game.category} />
          <span className="text-gray-500 text-xs flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
            {formatPlays(game.plays)}
          </span>
        </div>
      </div>
    </Link>
  );
}
