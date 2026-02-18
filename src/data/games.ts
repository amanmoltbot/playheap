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

export const games: Game[] = [
  // PlayPager Games
  {
    id: '1',
    slug: 'chess',
    title: 'Chess',
    description: 'A classic game of strategy. Plan your moves, checkmate the opposing king, and prove your tactical genius against the computer.',
    category: 'strategy',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Chess',
    gameUrl: 'https://playpager.com/embed/chess/index.html',
    controls: 'Mouse to select and move pieces.',
    featured: true,
    isNew: false,
    plays: 285432,
  },
  {
    id: '2',
    slug: 'checkers',
    title: 'Checkers',
    description: 'A traditional board game where players jump over opponent pieces to capture them. The goal is to capture all of the opponent\'s pieces.',
    category: 'strategy',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Checkers',
    gameUrl: 'https://playpager.com/embed/checkers/index.html',
    controls: 'Mouse to select and move pieces.',
    featured: false,
    isNew: false,
    plays: 198765,
  },
  {
    id: '3',
    slug: 'solitaire',
    title: 'Solitaire',
    description: 'The classic card game of patience. Stack cards in descending order and alternating colors to clear the board and build your foundation piles.',
    category: 'arcade',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Solitaire',
    gameUrl: 'https://playpager.com/embed/solitaire/index.html',
    controls: 'Mouse to drag and drop cards.',
    featured: false,
    isNew: false,
    plays: 450123,
  },
  {
    id: '4',
    slug: 'sudoku',
    title: 'Sudoku',
    description: 'A logic-based number puzzle. Fill a 9x9 grid with numbers so that each row, column, and 3x3 section contains all of the digits from 1 to 9.',
    category: 'puzzle',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Sudoku',
    gameUrl: 'https://playpager.com/embed/sudoku/index.html',
    controls: 'Mouse to select cells and keyboard to enter numbers.',
    featured: true,
    isNew: true,
    plays: 312654,
  },
  {
    id: '5',
    slug: 'reversi',
    title: 'Reversi',
    description: 'Also known as Othello, this is a strategy board game where players try to have the majority of their colored pieces on the board at the end of the game.',
    category: 'strategy',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Reversi',
    gameUrl: 'https://playpager.com/embed/reversi/index.html',
    controls: 'Mouse to place pieces on the board.',
    featured: false,
    isNew: false,
    plays: 154321,
  },
  {
    id: '6',
    slug: 'word-puzzle',
    title: 'Word Puzzle',
    description: 'Find hidden words in a grid of letters. A fun and relaxing game to test your vocabulary and observation skills.',
    category: 'puzzle',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Word+Puzzle',
    gameUrl: 'https://playpager.com/embed/wordpuzzle/index.html',
    controls: 'Mouse to click and drag to select letters.',
    featured: false,
    isNew: false,
    plays: 234567,
  },
  {
    id: '7',
    slug: 'falling-cubes',
    title: 'Falling Cubes',
    description: 'A fast-paced puzzle game where you must arrange falling blocks of different shapes to form complete horizontal lines.',
    category: 'arcade',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Falling+Cubes',
    gameUrl: 'https://playpager.com/embed/cubes/index.html',
    controls: 'Arrow keys to move and rotate the cubes.',
    featured: false,
    isNew: true,
    plays: 187654,
  },
  // GitHub Pages Games
  {
    id: '8',
    slug: '2048',
    title: '2048',
    description: 'Join the numbers and get to the 2048 tile! Use your arrow keys to move the tiles. When two tiles with the same number touch, they merge into one!',
    category: 'puzzle',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=2048',
    gameUrl: 'https://play2048.co/',
    controls: 'Arrow keys to move tiles.',
    featured: true,
    isNew: false,
    plays: 489756,
  },
  {
    id: '9',
    slug: 'flappy-bird-clone',
    title: 'Flappy Bird Clone',
    description: 'A clone of the infamous Flappy Bird game. Navigate the bird through the pipes by tapping the screen to make it flap.',
    category: 'arcade',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Flappy+Bird',
    gameUrl: 'https://hczhcz.github.io/Flappy-2048/',
    controls: 'Mouse click or Spacebar to flap.',
    featured: false,
    isNew: false,
    plays: 376543,
  },
  {
    id: '10',
    slug: 'hexgl-racing',
    title: 'HexGL',
    description: 'A futuristic, fast-paced racing game. Control a ship and race on hexagonal tracks. Test your reflexes and driving skills.',
    category: 'racing',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=HexGL',
    gameUrl: 'https://hexgl.bkcore.com/play/',
    controls: 'Arrow keys for steering, A and D for strafing.',
    featured: true,
    isNew: false,
    plays: 298765,
  },
  {
    id: '11',
    slug: 'pacman',
    title: 'Pacman',
    description: 'The classic arcade game. Eat all the dots in the maze while avoiding the ghosts. Grab power pellets to turn the tables on your pursuers!',
    category: 'arcade',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Pacman',
    gameUrl: 'https://pacman.platzh1rsch.ch/',
    controls: 'Arrow keys to move.',
    featured: false,
    isNew: false,
    plays: 412345,
  },
  {
    id: '12',
    slug: 'radius-raid',
    title: 'Radius Raid',
    description: 'A space shooter with a unique circular gameplay area. Defend your core from waves of incoming enemies.',
    category: 'shooting',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Radius+Raid',
    gameUrl: 'https://jackrugile.com/radius-raid/',
    controls: 'Mouse to aim, Left-click to shoot.',
    featured: false,
    isNew: false,
    plays: 143210,
  },
  {
    id: '13',
    slug: 'hextris',
    title: 'Hextris',
    description: 'A fast-paced puzzle game where you must rotate a hexagon to catch falling blocks and create color matches.',
    category: 'puzzle',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Hextris',
    gameUrl: 'https://hextris.io/',
    controls: 'Left and Right arrow keys to rotate the hexagon.',
    featured: false,
    isNew: true,
    plays: 265432,
  },
  {
    id: '14',
    slug: 'clumsy-bird',
    title: 'Clumsy Bird',
    description: 'Another take on the Flappy Bird genre, this game features a clumsy bird trying to navigate through a series of obstacles.',
    category: 'arcade',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Clumsy+Bird',
    gameUrl: 'https://ellisonleao.github.io/clumsy-bird/',
    controls: 'Mouse click to make the bird jump.',
    featured: false,
    isNew: false,
    plays: 332109,
  },
  {
    id: '15',
    slug: 'astray',
    title: 'Astray',
    description: 'A maze game where you must find your way through a series of increasingly complex mazes. Can you escape the labyrinth?',
    category: 'adventure',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Astray',
    gameUrl: 'https://wwwtyro.github.io/Astray/',
    controls: 'Arrow keys to move.',
    featured: false,
    isNew: false,
    plays: 123456,
  },
  {
    id: '16',
    slug: 'underrun',
    title: 'Underrun',
    description: 'A retro-style shooter where you must fight off hordes of enemies in a confined space. Survive as long as you can!',
    category: 'shooting',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Underrun',
    gameUrl: 'https://phoboslab.org/underrun/',
    controls: 'Arrow keys to move, X to shoot.',
    featured: false,
    isNew: false,
    plays: 98765,
  },
  {
    id: '17',
    slug: 'particle-clicker',
    title: 'Particle Clicker',
    description: 'An incremental/clicker game where you perform particle physics research. Click to gain data, upgrade your equipment, and discover new particles.',
    category: 'strategy',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Particle+Clicker',
    gameUrl: 'https://particle-clicker.web.cern.ch/',
    controls: 'Mouse to click and navigate menus.',
    featured: false,
    isNew: false,
    plays: 176543,
  },
  {
    id: '18',
    slug: 'tower-game',
    title: 'Tower Game',
    description: 'A simple yet addictive tower-building game. Stack blocks as high as you can, but be careful not to let them topple over!',
    category: 'arcade',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Tower+Game',
    gameUrl: 'https://nickelm.github.io/tower-game/',
    controls: 'Mouse click to drop blocks.',
    featured: false,
    isNew: false,
    plays: 210987,
  },
  {
    id: '19',
    slug: 'minesweeper',
    title: 'Minesweeper',
    description: 'The classic logic puzzle. Use the numbers to uncover all the squares that do not contain mines. Be careful not to detonate any!',
    category: 'puzzle',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Minesweeper',
    gameUrl: 'https://xtrp.github.io/minesweeper/',
    controls: 'Left-click to reveal a square, Right-click to flag a mine.',
    featured: false,
    isNew: false,
    plays: 354321,
  },
  {
    id: '20',
    slug: 'breakout',
    title: 'Breakout',
    description: 'A classic arcade game where you control a paddle to bounce a ball and break blocks. Clear all the blocks to advance to the next level.',
    category: 'arcade',
    thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Breakout',
    gameUrl: 'https://nickelm.github.io/breakout/',
    controls: 'Mouse or Arrow keys to move the paddle.',
    featured: true,
    isNew: true,
    plays: 289012,
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

export const categoryEmoji: Record<string, string> = {
  action: '⚔️',
  puzzle: '🧩',
  racing: '🏎️',
  sports: '⚽',
  shooting: '🎯',
  adventure: '🗺️',
  strategy: '♟️',
  arcade: '👾',
  multiplayer: '👥',
  'io-games': '🌐',
};
