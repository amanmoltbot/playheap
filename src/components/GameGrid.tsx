import { Game } from '@/data/games';
import GameCard from './GameCard';

interface GameGridProps {
  games: Game[];
  cols?: 2 | 3 | 4 | 5;
  size?: 'normal' | 'large';
  emptyMessage?: string;
}

const colClasses: Record<number, string> = {
  2: 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  3: 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3',
  4: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4',
  5: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
};

export default function GameGrid({ games, cols = 4, size = 'normal', emptyMessage = 'No games found.' }: GameGridProps) {
  if (games.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500">
        <div className="text-5xl mb-4">🎮</div>
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={`grid ${colClasses[cols] ?? colClasses[4]} gap-4`}>
      {games.map(game => (
        <GameCard key={game.id} game={game} size={size} />
      ))}
    </div>
  );
}
