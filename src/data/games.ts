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
  // ─── Puzzle ───────────────────────────────────────────────────────────────
  {
    id: '1',
    slug: '2048',
    title: '2048',
    description: 'Join the numbers and get to the 2048 tile! Slide tiles with arrow keys — when two tiles with the same number touch, they merge. Can you reach 2048?',
    category: 'puzzle',
    thumbnailUrl: '/thumbnails/2048.png',
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
    thumbnailUrl: '/thumbnails/tetris.png',
    gameUrl: '/games/tetris/index.html',
    controls: '← → to move, ↑ to rotate, ↓ soft drop, Space for hard drop, P to pause.',
    featured: true,
    isNew: false,
    plays: 412345,
  },
  {
    id: '5',
    slug: 'minesweeper',
    title: 'Minesweeper',
    description: 'The classic logic puzzle. Use numbers to deduce mine positions and safely clear the entire board. Three difficulty levels available!',
    category: 'puzzle',
    thumbnailUrl: '/thumbnails/minesweeper.png',
    gameUrl: '/games/minesweeper/index.html',
    controls: 'Left-click to reveal, Right-click to flag a mine.',
    featured: false,
    isNew: false,
    plays: 354321,
  },
  {
    id: '7',
    slug: 'memory-game',
    title: 'Memory Match',
    description: 'Flip cards to find matching emoji pairs. Test your memory and concentration. Multiple difficulty levels — from a 4×4 grid up to a challenging 6×4!',
    category: 'puzzle',
    thumbnailUrl: '/thumbnails/memory-game.png',
    gameUrl: '/games/memory-game/index.html',
    controls: 'Click cards to flip them. Match all pairs to win!',
    featured: false,
    isNew: true,
    plays: 187654,
  },
  {
    id: '11',
    slug: 'hextris',
    title: 'Hextris',
    description: 'A fast-paced hexagonal puzzle game. Rotate the hexagon to catch falling colored blocks and line up 3 or more of the same color to clear them!',
    category: 'puzzle',
    thumbnailUrl: '/thumbnails/hextris.png',
    gameUrl: '/games/hextris/index.html',
    controls: '← → arrow keys to rotate the hexagon.',
    featured: false,
    isNew: true,
    plays: 265432,
  },
  // ─── Arcade ───────────────────────────────────────────────────────────────
  {
    id: '3',
    slug: 'snake',
    title: 'Snake',
    description: 'Guide your hungry snake to eat food and grow longer. Avoid hitting the walls or your own tail! How long can you make your snake?',
    category: 'arcade',
    thumbnailUrl: '/thumbnails/snake.png',
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
    thumbnailUrl: '/thumbnails/breakout.png',
    gameUrl: '/games/breakout/index.html',
    controls: 'Mouse or ← → arrow keys to move the paddle. Click to launch.',
    featured: true,
    isNew: true,
    plays: 289012,
  },
  {
    id: '9',
    slug: 'tower-game',
    title: 'Tower Stack',
    description: 'Drop blocks precisely to build the tallest tower you can! Each block you land on the previous one — miss and the stack gets smaller. How high can you go?',
    category: 'arcade',
    thumbnailUrl: '/thumbnails/tower-game.png',
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
    thumbnailUrl: '/thumbnails/pacman.png',
    gameUrl: '/games/pacman/index.html',
    controls: 'Arrow keys to move Pac-Man.',
    featured: false,
    isNew: false,
    plays: 412345,
  },
  {
    id: '12',
    slug: 'flappy-bird',
    title: 'Floppy Bird',
    description: 'Navigate your bird through an endless series of pipe obstacles. One tap to flap — time it perfectly to avoid the pipes. Can you beat your high score?',
    category: 'arcade',
    thumbnailUrl: '/thumbnails/flappy-bird.png',
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
    thumbnailUrl: '/thumbnails/clumsy-bird.png',
    gameUrl: '/games/clumsy-bird/index.html',
    controls: 'Click or tap to make the bird jump.',
    featured: false,
    isNew: false,
    plays: 332109,
  },
  // ─── Shooting ─────────────────────────────────────────────────────────────
  {
    id: '6',
    slug: 'space-invaders',
    title: 'Space Invaders',
    description: 'Defend Earth from waves of descending alien invaders! Shoot them down before they reach you. Take cover behind barriers and survive as long as possible.',
    category: 'shooting',
    thumbnailUrl: '/thumbnails/space-invaders.png',
    gameUrl: '/games/space-invaders/index.html',
    controls: '← → to move, Space to shoot.',
    featured: true,
    isNew: true,
    plays: 298765,
  },
  {
    id: '15',
    slug: 'radius-raid',
    title: 'Radius Raid',
    description: 'An intense space shooter set in a circular arena. Defend your core from waves of incoming enemies. Build up combos to maximize your score!',
    category: 'shooting',
    thumbnailUrl: '/thumbnails/radius-raid.png',
    gameUrl: '/games/radius-raid/index.html',
    controls: 'Mouse to aim, Left-click to shoot.',
    featured: false,
    isNew: false,
    plays: 143210,
  },
  // ─── Adventure ────────────────────────────────────────────────────────────
  {
    id: '14',
    slug: 'astray',
    title: 'Astray Maze',
    description: 'A beautiful 3D maze game. Navigate through procedurally generated mazes from an overhead perspective. Find the exit before you get lost!',
    category: 'adventure',
    thumbnailUrl: '/thumbnails/astray.png',
    gameUrl: '/games/astray/index.html',
    controls: 'Arrow keys to move through the maze.',
    featured: false,
    isNew: false,
    plays: 123456,
  },
  // ─── Strategy ─────────────────────────────────────────────────────────────
  {
    id: '8',
    slug: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    description: 'The classic 3-in-a-row game. Play against a friend or challenge the AI — including a perfect unbeatable Hard AI using the minimax algorithm!',
    category: 'strategy',
    thumbnailUrl: '/thumbnails/tic-tac-toe.png',
    gameUrl: '/games/tic-tac-toe/index.html',
    controls: 'Click on a cell to place your mark.',
    featured: false,
    isNew: false,
    plays: 265432,
  },
  // ─── Action (NEW) ─────────────────────────────────────────────────────────
  {
    id: '16',
    slug: 'ninja-slash',
    title: 'Ninja Slash',
    description: 'Slash enemies before they reach the center! Swipe across enemies to destroy them. Build up combo multipliers to maximize your score across endless waves.',
    category: 'action',
    thumbnailUrl: '/thumbnails/ninja-slash.png',
    gameUrl: '/games/ninja-slash/index.html',
    controls: 'Click and drag / swipe across enemies to slash them.',
    featured: true,
    isNew: true,
    plays: 98234,
  },
  {
    id: '17',
    slug: 'zombie-survivor',
    title: 'Zombie Survivor',
    description: 'Top-down survival shooter. Mow down waves of zombies while managing your ammo. WASD to move, mouse to aim and shoot — how long can you survive?',
    category: 'action',
    thumbnailUrl: '/thumbnails/zombie-survivor.png',
    gameUrl: '/games/zombie-survivor/index.html',
    controls: 'WASD to move, Mouse to aim, Left-click to shoot, R to reload.',
    featured: false,
    isNew: true,
    plays: 76543,
  },
  // ─── Racing (NEW) ─────────────────────────────────────────────────────────
  {
    id: '18',
    slug: 'speed-racer',
    title: 'Speed Racer',
    description: 'High-speed vertical scrolling car game. Dodge oncoming traffic as your speed increases. How far can you go before you crash?',
    category: 'racing',
    thumbnailUrl: '/thumbnails/speed-racer.png',
    gameUrl: '/games/speed-racer/index.html',
    controls: '← → arrow keys or swipe to change lanes.',
    featured: true,
    isNew: true,
    plays: 112345,
  },
  {
    id: '19',
    slug: 'drift-king',
    title: 'Drift King',
    description: 'Top-down racing on a challenging oval track. Master the perfect drift to score points. Stay on the track and rack up lap bonuses!',
    category: 'racing',
    thumbnailUrl: '/thumbnails/drift-king.png',
    gameUrl: '/games/drift-king/index.html',
    controls: 'Arrow keys to steer and accelerate.',
    featured: false,
    isNew: true,
    plays: 87654,
  },
  // ─── Sports (NEW) ─────────────────────────────────────────────────────────
  {
    id: '20',
    slug: 'ping-pong',
    title: 'Ping Pong',
    description: 'Classic Pong for one or two players. First to 7 points wins! Challenge the AI or go head-to-head with a friend on the same keyboard.',
    category: 'sports',
    thumbnailUrl: '/thumbnails/ping-pong.png',
    gameUrl: '/games/ping-pong/index.html',
    controls: 'W/S = Left paddle, ↑/↓ = Right paddle (AI auto-plays P2 if idle).',
    featured: true,
    isNew: true,
    plays: 134567,
  },
  {
    id: '21',
    slug: 'basketball-shoot',
    title: 'Basketball Shoot',
    description: 'Click and drag to aim, then release to shoot! The hoop keeps moving so you have to time your shots. Build combos for big points. 5 balls per round!',
    category: 'sports',
    thumbnailUrl: '/thumbnails/basketball-shoot.png',
    gameUrl: '/games/basketball-shoot/index.html',
    controls: 'Click and drag away from the ball to aim, release to shoot.',
    featured: false,
    isNew: true,
    plays: 95432,
  },
  // ─── Multiplayer (NEW) ────────────────────────────────────────────────────
  {
    id: '22',
    slug: 'tank-battle',
    title: 'Tank Battle',
    description: 'Local 2-player tank combat! Navigate a maze of walls, ricochet bullets off surfaces, and destroy your opponent. First tank to lose all HP loses!',
    category: 'multiplayer',
    thumbnailUrl: '/thumbnails/tank-battle.png',
    gameUrl: '/games/tank-battle/index.html',
    controls: 'P1: WASD move, Space shoot. P2: Arrow keys move, Enter shoot.',
    featured: true,
    isNew: true,
    plays: 67890,
  },
  // ─── IO Games (NEW) ───────────────────────────────────────────────────────
  {
    id: '23',
    slug: 'dot-eater',
    title: 'Dot Eater',
    description: 'Agar.io-style growth game! Move your circle to eat glowing dots and grow bigger. Devour smaller AI circles but flee from larger ones!',
    category: 'io-games',
    thumbnailUrl: '/thumbnails/dot-eater.png',
    gameUrl: '/games/dot-eater/index.html',
    controls: 'Move mouse to steer your circle.',
    featured: true,
    isNew: true,
    plays: 89012,
  },
  {
    id: '24',
    slug: 'slither-solo',
    title: 'Slither Solo',
    description: 'Snake.io-style game! Grow your snake by eating food and take down AI snakes. Cut off enemy snakes to defeat them and steal their score. How big can you get?',
    category: 'io-games',
    thumbnailUrl: '/thumbnails/slither-solo.png',
    gameUrl: '/games/slither-solo/index.html',
    controls: 'Move mouse to steer your snake.',
    featured: false,
    isNew: true,
    plays: 72345,
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
