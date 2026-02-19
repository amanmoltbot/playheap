import Link from 'next/link';
import Image from 'next/image';
import { Game } from '@/data/games';
import CategoryBadge from './CategoryBadge';

interface GameCardProps {
  game: Game;
  size?: 'normal' | 'large';
}

export default function GameCard({ game, size = 'normal' }: GameCardProps) {
  return (
    <Link
      href={`/game/${game.slug}`}
      className="group block rounded-xl overflow-hidden bg-[#1a1a2e] border border-gray-800 hover:border-[#8b5cf6]/60 shadow-lg hover:shadow-[#8b5cf6]/20 transition-all duration-300 hover:scale-105"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={game.thumbnailUrl}
          alt={game.title}
          fill
          className="object-cover transition-all duration-300 group-hover:brightness-75 group-hover:scale-110"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
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
        {/* Mobile badge */}
        {game.mobileSupported === false && (
          <div className="absolute top-2 right-2">
            <span className="bg-black/60 text-gray-400 text-xs px-1.5 py-0.5 rounded backdrop-blur-sm" title="Best on desktop">
              🖥️
            </span>
          </div>
        )}
      </div>

      <div className="p-3">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="text-white font-semibold text-sm leading-tight line-clamp-1 group-hover:text-[#8b5cf6] transition-colors">
            {game.title}
          </h3>
        </div>
        <div className="flex items-center justify-between">
          <CategoryBadge category={game.category} />
        </div>
      </div>
    </Link>
  );
}
