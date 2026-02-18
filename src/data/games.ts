export interface Game {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  thumbnailUrl: string;
  gameUrl: string;
  controls: string;
  featured: boolean;
  isNew: boolean;
  plays: number;
}

export const categories = [
  { slug: 'action', label: 'Action' },
  { slug: 'puzzle', label: 'Puzzle' },
  { slug: 'racing', label: 'Racing' },
  { slug: 'sports', label: 'Sports' },
  { slug: 'shooting', label: 'Shooting' },
  { slug: 'adventure', label: 'Adventure' },
  { slug: 'strategy', label: 'Strategy' },
  { slug: 'arcade', label: 'Arcade' },
  { slug: 'multiplayer', label: 'Multiplayer' },
  { slug: 'io-games', label: 'IO Games' },
];

export const categoryEmoji: Record<string, string> = {
  action: '⚔️',
  puzzle: '🧩',
  racing: '🏎️',
  sports: '⚽',
  shooting: '🎯',
  adventure: '🗺️',
  strategy: '♟️',
  arcade: '🕹️',
  multiplayer: '👥',
  'io-games': '🌐',
};

export const games: Game[] = [
  {
    id: '1',
    slug: '2048',
    title: '2048',
    description: 'Join the numbers and get to the 2048 tile! Slide tiles with arrow keys — when two tiles with the same number touch, they merge. Can you reach 2048?',
    category: 'puzzle',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=2048',
    gameUrl: '/games/2048/index.html',
    controls: 'Arrow keys to slide tiles.',
    featured: true,
    isNew: false,
    plays: 489756,
  },
  {
    id: '2',
    slug: 'tetris',
    title: 'Tetris',
    description: 'The legendary block-stacking puzzle game. Arrange falling tetrominoes to complete horizontal lines. Clear multiple lines at once for bonus points!',
    category: 'puzzle',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Tetris',
    gameUrl: '/games/tetris/index.html',
    controls: '← → to move, ↑ to rotate, ↓ soft drop, Space for hard drop, P to pause.',
    featured: true,
    isNew: false,
    plays: 412345,
  },
  {
    id: '3',
    slug: 'snake',
    title: 'Snake',
    description: 'Guide your hungry snake to eat food and grow longer. Avoid hitting the walls or your own tail! How long can you make your snake?',
    category: 'arcade',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Snake',
    gameUrl: '/games/snake/index.html',
    controls: 'Arrow keys or WASD to change direction, P to pause.',
    featured: false,
    isNew: false,
    plays: 376543,
  },
  {
    id: '4',
    slug: 'breakout',
    title: 'Breakout',
    description: 'Control a paddle to bounce a ball and smash through rows of colorful bricks. Multiple levels of increasing difficulty — clear them all!',
    category: 'arcade',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Breakout',
    gameUrl: '/games/breakout/index.html',
    controls: 'Mouse or ← → arrow keys to move the paddle. Click to launch.',
    featured: true,
    isNew: true,
    plays: 289012,
  },
  {
    id: '5',
    slug: 'minesweeper',
    title: 'Minesweeper',
    description: 'The classic logic puzzle. Use numbers to deduce mine positions and safely clear the entire board. Three difficulty levels available!',
    category: 'puzzle',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Minesweeper',
    gameUrl: '/games/minesweeper/index.html',
    controls: 'Left-click to reveal, Right-click to flag a mine.',
    featured: false,
    isNew: false,
    plays: 354321,
  },
  {
    id: '6',
    slug: 'space-invaders',
    title: 'Space Invaders',
    description: 'Defend Earth from waves of descending alien invaders! Shoot them down before they reach you. Take cover behind barriers and survive as long as possible.',
    category: 'shooting',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Space+Invaders',
    gameUrl: '/games/space-invaders/index.html',
    controls: '← → to move, Space to shoot.',
    featured: true,
    isNew: true,
    plays: 298765,
  },
  {
    id: '7',
    slug: 'memory-game',
    title: 'Memory Match',
    description: 'Flip cards to find matching emoji pairs. Test your memory and concentration. Multiple difficulty levels — from a 4×4 grid up to a challenging 6×4!',
    category: 'puzzle',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Memory+Match',
    gameUrl: '/games/memory-game/index.html',
    controls: 'Click cards to flip them. Match all pairs to win!',
    featured: false,
    isNew: true,
    plays: 187654,
  },
  {
    id: '8',
    slug: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    description: 'The classic 3-in-a-row game. Play against a friend or challenge the AI — including a perfect unbeatable Hard AI using the minimax algorithm!',
    category: 'strategy',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Tic+Tac+Toe',
    gameUrl: '/games/tic-tac-toe/index.html',
    controls: 'Click on a cell to place your mark.',
    featured: false,
    isNew: false,
    plays: 265432,
  },
  {
    id: '9',
    slug: 'tower-game',
    title: 'Tower Stack',
    description: 'Drop blocks precisely to build the tallest tower you can! Each block you land on the previous one — miss and the stack gets smaller. How high can you go?',
    category: 'arcade',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Tower+Stack',
    gameUrl: '/games/tower-game/index.html',
    controls: 'Click, Space, or tap to drop the block.',
    featured: false,
    isNew: false,
    plays: 210987,
  },
  {
    id: '10',
    slug: 'pacman',
    title: 'Pac-Man',
    description: 'The legendary arcade classic! Eat all the pellets while dodging colorful ghosts. Grab power-ups to turn the tables and eat the ghosts for bonus points!',
    category: 'arcade',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Pac-Man',
    gameUrl: '/games/pacman/index.html',
    controls: 'Arrow keys to move Pac-Man.',
    featured: false,
    isNew: false,
    plays: 412345,
  },
  {
    id: '11',
    slug: 'hextris',
    title: 'Hextris',
    description: 'A fast-paced hexagonal puzzle game. Rotate the hexagon to catch falling colored blocks and line up 3 or more of the same color to clear them!',
    category: 'puzzle',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Hextris',
    gameUrl: '/games/hextris/index.html',
    controls: '← → arrow keys to rotate the hexagon.',
    featured: false,
    isNew: true,
    plays: 265432,
  },
  {
    id: '12',
    slug: 'flappy-bird',
    title: 'Floppy Bird',
    description: 'Navigate your bird through an endless series of pipe obstacles. One tap to flap — time it perfectly to avoid the pipes. Can you beat your high score?',
    category: 'arcade',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Floppy+Bird',
    gameUrl: '/games/flappy-bird/index.html',
    controls: 'Space or click to make the bird flap.',
    featured: false,
    isNew: false,
    plays: 376543,
  },
  {
    id: '13',
    slug: 'clumsy-bird',
    title: 'Clumsy Bird',
    description: 'A charming Flappy Bird clone built with MelonJS. Guide the clumsy bird through pipes — timing and precision are everything!',
    category: 'arcade',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Clumsy+Bird',
    gameUrl: '/games/clumsy-bird/index.html',
    controls: 'Click or tap to make the bird jump.',
    featured: false,
    isNew: false,
    plays: 332109,
  },
  {
    id: '14',
    slug: 'astray',
    title: 'Astray Maze',
    description: 'A beautiful 3D maze game. Navigate through procedurally generated mazes from an overhead perspective. Find the exit before you get lost!',
    category: 'adventure',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Astray+Maze',
    gameUrl: '/games/astray/index.html',
    controls: 'Arrow keys to move through the maze.',
    featured: false,
    isNew: false,
    plays: 123456,
  },
  {
    id: '15',
    slug: 'radius-raid',
    title: 'Radius Raid',
    description: 'An intense space shooter set in a circular arena. Defend your core from waves of incoming enemies. Build up combos to maximize your score!',
    category: 'shooting',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Radius+Raid',
    gameUrl: '/games/radius-raid/index.html',
    controls: 'Mouse to aim, Left-click to shoot.',
    featured: false,
    isNew: false,
    plays: 143210,
  },
];

export function getGameBySlug(slug: string): Game | undefined {
  return games.find(g => g.slug === slug);
}

export function getGamesByCategory(category: string): Game[] {
  return games.filter(g => g.category === category);
}

export function getFeaturedGames(): Game[] {
  return games.filter(g => g.featured);
}

export function getNewGames(): Game[] {
  return games.filter(g => g.isNew);
}

export function getPopularGames(limit = 8): Game[] {
  return [...games].sort((a, b) => b.plays - a.plays).slice(0, limit);
}

export function getRelatedGames(game: Game, limit = 4): Game[] {
  return games
    .filter(g => g.category === game.category && g.id !== game.id)
    .slice(0, limit);
}
