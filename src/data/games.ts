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
  aspectRatio?: string; // e.g. '16/9', '1/1', '3/4', '9/16', '4/3'
  mobileSupported?: boolean; // true = works great on mobile, false = desktop recommended
  license?: string; // e.g. 'MIT', 'GPL-3.0', 'Apache-2.0', 'Custom', 'Public Domain'
  author?: string; // Original author/creator
  sourceUrl?: string; // Link to original source/repo
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
    description: `2048 is one of the most iconic and addictive single-player number puzzle games ever made. Created in 2014, it took the internet by storm and has been played billions of times worldwide. The concept is elegantly simple: on a 4×4 grid of tiles, you slide numbered blocks in four directions — up, down, left, or right — causing identical numbers to merge and double. Your mission: reach the legendary 2048 tile before your board fills up with unmergeable numbers.

Every move shifts all tiles simultaneously across the board. When two tiles carrying the same number collide, they fuse into one tile worth their sum — two 2s make a 4, two 4s make an 8, and so on. After every move, a new tile (valued at 2 or 4) spawns in a random empty space. The challenge escalates quickly: getting to 256 feels manageable, but reaching 512, 1024, and especially 2048 requires genuine skill, foresight, and a solid strategy.

The key to mastering 2048 lies in controlling chaos. Beginners move tiles randomly and watch their board dissolve into disorder. Experienced players develop systems — the "corner strategy" anchors your highest tile in one corner and builds a snake-like chain of descending values toward it, ensuring you always have merges available. The "edge strategy" keeps high-value tiles along one wall, creating predictable merge lanes. Every decision matters: one careless swipe can isolate a high-value tile in a corner and end your run.

Beyond reaching 2048, the game has no true ending. The board keeps going, and players chase tiles of 4096, 8192, 16384 — and theoretically all the way to 131,072, though achieving that requires a perfect game with zero wasted moves. The mathematics behind 2048 are fascinating: every tile you see is a power of 2, and the entire game is a meditation on exponential growth and positional planning.

2048 is the perfect brain-training game. It strengthens spatial reasoning, pattern recognition, and strategic planning. Whether you have five minutes or five hours, a game of 2048 always feels satisfying — and one more try is always just a click away. Play free, no download required, right in your browser.

**Tips:** Keep your highest tile in a corner. Never move away from that corner. Build a descending sequence along the edges. Prioritize merges that give you space.`,
    category: 'puzzle',
    thumbnailUrl: '/thumbnails/2048.webp',
    gameUrl: '/games/2048/index.html',
    controls: 'Arrow keys to slide tiles. Works on mobile with swipe gestures.',
    featured: true,
    isNew: false,
    plays: 489756,
    license: 'MIT',
    author: 'Gabriele Cirulli',
    sourceUrl: 'https://github.com/gabrielecirulli/2048',
    aspectRatio: '3/4',
    mobileSupported: true,
  },

  {
    id: '5',
    slug: 'minesweeper',
    title: 'Minesweeper',
    description: `Minesweeper is the classic logic deduction game that has shipped with Windows operating systems since 1990, converting millions of casual users into puzzle-solving devotees. The objective is straightforward but increasingly tense: uncover every safe cell on a minefield grid without triggering a hidden mine. Every cell you reveal shows a number indicating how many of its eight neighboring cells contain mines — and from these numbers, you must deduce with perfect logical certainty which squares are safe and which harbor hidden explosives.

The game begins with a blank grid of covered squares. Click any cell to reveal it; if it's safe, it shows a number (1-8) or goes blank if none of its neighbors contain mines (revealing a flood-fill of safe cells automatically). Right-click to plant a flag on any cell you're certain contains a mine. The challenge is using the numerical clues in combination to reason out which covered cells are definitely safe and which are definitely mines.

Minesweeper is a game of pure logical deduction. At its core, it's constraint satisfaction — each number constrains which of its neighbors can be mines, and combining overlapping constraints eliminates possibilities until you know for certain what to click. The famous "1-2-1" pattern reveals a mine between the two 2s; the "1-2-2-1" pattern along an edge is deterministic. Learning these patterns transforms Minesweeper from guesswork into an elegant exercise in Boolean logic.

Our version offers three difficulty levels: Beginner (9×9 grid, 10 mines), Intermediate (16×16, 40 mines), and Expert (30×16, 99 mines). Expert Minesweeper is a sport — top players complete the expert board in under 40 seconds and compete on global leaderboards. But even at Beginner level, clearing a fresh board cleanly with perfect logic is deeply satisfying.

A note on the "guessing problem": Minesweeper's standard rule set means roughly 20% of games at Expert level require a 50/50 guess at some point. Experienced players minimize the number of forced guesses through careful opening moves and pattern recognition. True no-guess Minesweeper variants exist, but the tension of that final uncertain click is part of the game's enduring charm.

Play Minesweeper free in your browser — choose a difficulty, click your first cell, and let the deductive dominoes fall.`,
    category: 'puzzle',
    thumbnailUrl: '/thumbnails/minesweeper.webp',
    gameUrl: '/games/minesweeper/index.html',
    controls: 'Left-click to reveal a cell. Right-click to place or remove a flag. Best played on desktop.',
    featured: false,
    isNew: false,
    plays: 354321,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '4/3',
    mobileSupported: false,
  },
  {
    id: '7',
    slug: 'memory-game',
    title: 'Memory Match',
    description: `Memory Match is the classic concentration card game that has been used for centuries to train recall and mental focus. The premise is beautifully simple: a set of cards is laid face-down on a grid, each card having one matching partner somewhere on the board. Flip two cards per turn — if they match, they stay face-up and you score a pair. If they don't match, they flip back over and you must remember where they were for your next attempt. Clear all pairs to win.

Despite its seemingly simple rules, Memory Match is a genuine cognitive workout. The game directly exercises your working memory — the mental scratchpad your brain uses to temporarily hold and manipulate information. Research shows that regular memory training games like this one can improve recall speed, attention span, and concentration in players of all ages. Children especially benefit, as the game builds foundational memory skills in an engaging, pressure-free environment.

Our version features multiple grid sizes scaling from a manageable 4×4 (8 pairs) all the way to a challenging 6×4 layout (12 pairs). The emoji theme means every card has a distinctive, memorable symbol that rewards visual association. You can play casually — just enjoying the satisfaction of finding matches — or compete for minimum-flip completions, keeping meticulous track of which card hides where and never making an unnecessary flip.

Strategy matters more than it first appears. Veteran Memory Match players develop a systematic scanning approach: flip new cards in predictable positions so you always know approximately where you've been, building a mental grid map of what you've seen. When you flip an unmatched card, mentally tag its position with its symbol. When its partner turns up somewhere else, you'll know exactly where to go. Experienced players can complete even large grids with surprisingly few wasted turns.

Memory Match is perfect for all ages — young children developing their memory, adults maintaining cognitive fitness, or anyone looking for a satisfying, relaxing puzzle experience. It works beautifully on both desktop and mobile, and each game takes only a few minutes to complete. Play free, right in your browser, with zero downloads required.

**Tips:** Start by revealing cards in a systematic order rather than random clicks. Build a mental map. Try to match by visual similarity before flipping the second card.`,
    category: 'puzzle',
    thumbnailUrl: '/thumbnails/memory-game.webp',
    gameUrl: '/games/memory-game/index.html',
    controls: 'Click or tap cards to flip them. Match all pairs to complete the board.',
    featured: false,
    isNew: true,
    plays: 187654,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '4/3',
    mobileSupported: true,
  },
  {
    id: '11',
    slug: 'hextris',
    title: 'Hextris',
    description: `Hextris is a breathtaking, fast-paced puzzle game that takes the classic line-clearing concept pioneered by Tetris and reinvents it on a hexagonal playing field. Instead of falling blocks dropping into a rectangular well, colored blocks cascade toward a central hexagon from all six sides. Rotate the hexagon left and right to bring matching colors together — line up three or more blocks of the same color in a row, and they vanish in a satisfying chain reaction, earning you points and precious space.

The twist that makes Hextris uniquely compelling is that blocks approach from every direction simultaneously. While you're managing incoming blocks from the right, the top-left might be stacking dangerously. The hexagonal geometry creates combinations and patterns impossible in a rectangular game — blocks approaching at 60° angles create color chains across multiple faces, and a single well-timed rotation can trigger massive cascading clears across the entire hexagon.

Combos are the key to high scores. When a cleared row causes blocks above it to drop and create another match, that's a combo — and Hextris rewards combos with a multiplier timer that escalates rapidly. String together three, four, five clears in quick succession and watch your score explode. Top players plan their rotations several steps ahead, deliberately setting up "bomb" arrangements where clearing one row will inevitably cause a cascading chain of five or six more.

The game starts at a comfortable pace that lets newcomers learn the rotation mechanics and color-matching logic. Within a minute, the tempo increases noticeably; within five minutes, blocks are flying in so fast that you're making split-second decisions purely on pattern recognition. The final, frantic phase of any good Hextris run — where the hexagon is bulging on every face and one wrong rotation means game over — is pulse-pounding.

Hextris is one of the most innovative browser puzzle games available. It runs entirely in HTML5 Canvas with silky-smooth animations, and it works beautifully on both desktop and mobile. Whether you're chasing a personal best score or experiencing it for the first time, Hextris delivers a puzzle experience unlike anything else.

**Strategy tip:** Keep one face of the hexagon relatively clear as an "escape route." Never let any single face overflow while managing the others.`,
    category: 'puzzle',
    thumbnailUrl: '/thumbnails/hextris.webp',
    gameUrl: '/games/hextris/index.html',
    controls: '← → arrow keys to rotate the hexagon. Mobile: swipe left/right.',
    featured: false,
    isNew: true,
    plays: 265432,
    license: 'GPL-3.0',
    author: 'Hextris Team',
    sourceUrl: 'https://github.com/Hextris/hextris',
    aspectRatio: '1/1',
    mobileSupported: true,
  },
  // ─── Arcade ───────────────────────────────────────────────────────────────
  {
    id: '3',
    slug: 'snake',
    title: 'Snake',
    description: `Snake is one of the most universally beloved arcade games of all time — a game so iconic that it became the default pre-installed game on Nokia phones in the late 1990s and introduced millions of people worldwide to mobile gaming before smartphones existed. The concept couldn't be simpler: guide a growing snake around the screen to eat food, making the snake longer with every piece consumed. Avoid hitting the walls or your own body. Survive as long as possible.

What begins as a trivially easy game — steer a short snake toward a single dot — evolves into a tense spatial puzzle as your snake grows. With a snake of 10 segments, navigating is relaxed. At 30 segments, you're threading through your own tail. At 50+, the entire screen is a minefield of your own body, and every move requires planning several turns ahead to avoid boxing yourself in. The brilliant geometric tension of maneuvering an ever-growing line in a closed space creates a natural difficulty curve that feels earned rather than arbitrary.

Snake has deep strategic depth despite its simplicity. The optimal survival strategy isn't to go straight for food — it's to control the space on your board. Experienced players hug the edges, create systematic sweeping patterns, and leave deliberate escape corridors. The "coil" technique — spiraling inward in a structured grid pattern — is the ultimate endgame strategy for achieving maximum length without fatal self-collision.

Our version features clean pixel-art visuals, a glowing snake with particle effects, multiple speed settings to match your skill level, and a high score system so you can compete with yourself across sessions. The controls are responsive and tight — every turn you input registers instantly, giving you precise control right up to the moment the snake gets too long to maneuver safely.

Snake is perfect for short sessions (a few minutes while waiting) and marathon high-score chases alike. It's one of those games where "just one more" turns into thirty minutes without noticing. Play free in your browser — no downloads, no registration.

**Tips:** Don't chase food directly — position yourself to collect it efficiently. Hug edges early game to preserve central space. Once your snake is long, switch to systematic sweeping patterns.`,
    category: 'arcade',
    thumbnailUrl: '/thumbnails/snake.webp',
    gameUrl: '/games/snake/index.html',
    controls: 'Arrow keys or WASD to change direction. P to pause. Mobile: use on-screen D-pad.',
    featured: false,
    isNew: false,
    plays: 376543,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '16/9',
    mobileSupported: true,
  },
  {
    id: '4',
    slug: 'breakout',
    title: 'Breakout',
    description: `Breakout is the foundational arcade game that launched an entire genre — and directly inspired the creation of one of the most important companies in tech history. Originally designed by Nolan Bushnell and Steve Jobs for Atari in 1976 (with Steve Wozniak doing the engineering), Breakout took Pong's ball-and-paddle concept and turned it into a solo game where you bounce a ball upward to destroy rows of colorful bricks. The profits from the original arcade cabinet, the story goes, helped fund the early Apple Computer.

The mechanics are timeless: control a paddle at the bottom of the screen, keeping a ball bouncing against the wall of bricks above. Every brick you destroy earns points. Miss the ball and you lose a life. Clear all the bricks to advance to the next level, where the ball moves faster and the brick formations grow more complex.

What seems simple at first reveals impressive depth. The ball's trajectory changes based on where it strikes your paddle — hitting the center sends it straight up, while hitting the edges puts English on it for sharper angles. Controlling this angle is crucial for targeting specific bricks and directing the ball into hard-to-reach corners. When the ball finally breaks through the top row and gets trapped between the remaining bricks and the ceiling, bouncing furiously and clearing dozens of bricks in seconds, it's one of gaming's most satisfying moments — the "tunnel run."

Our version features six colorful brick rows across 10 columns, multilevel progression with increasing ball speed, and smooth paddle controls via both mouse and keyboard. A lives system keeps tension high: three lives per attempt, and the damage of a missed ball accumulates with each level. Glowing brick visuals and dynamic ball effects give the classic game a modern neon aesthetic.

Breakout is the perfect casual game — easy enough to start playing instantly, challenging enough to keep you reaching for one more run. Whether you're a first-timer or a Breakout veteran chasing a high score, our browser version delivers the complete classic experience.

**Tips:** Control ball angle deliberately using paddle edges. Target the same column repeatedly to create a channel to the top. Catching the ball on the paddle's edge creates unpredictable angles that clear bricks faster.`,
    category: 'arcade',
    thumbnailUrl: '/thumbnails/breakout.webp',
    gameUrl: '/games/breakout/index.html',
    controls: 'Mouse or ← → arrow keys to move paddle. Click or Space to launch. Mobile: touch-drag the paddle.',
    featured: true,
    isNew: true,
    plays: 289012,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '16/9',
    mobileSupported: true,
  },
  {
    id: '9',
    slug: 'tower-game',
    title: 'Tower Stack',
    description: `Tower Stack is a beautifully simple but deceptively challenging precision game with an irresistible "just one more try" quality. A platform swings back and forth across the screen, and your sole objective is to drop each block as accurately as possible onto the one below. Any part that overhangs the lower block gets sliced off — only the overlapping section survives. Stack precisely and your tower stays wide and stable. Stack sloppily and your platform shrinks with each layer until it's a sliver too narrow to land on.

The genius of Tower Stack lies in how it converts a pure reflex test into a growing anxiety spiral. Early blocks are wide and easy to land with decent overlap. As the tower grows and blocks get thinner from accumulated imprecision, the timing window for a "good" drop narrows dramatically. A block that started at full width might be half that by layer 10, and a quarter by layer 20. Eventually you're dropping a razor-thin sliver onto another razor-thin sliver while the platform oscillates mercilessly — and then it's over.

The game has attracted millions of players across platforms for a reason: it captures the perfect sweet spot of skill and accessibility. No special knowledge required, no complex mechanics to learn. Just timing. But executing under pressure, when you can see your tower getting thinner and know one bad drop ends everything, requires genuine focus and nerve control. The gap between "playing" Tower Stack and "mastering" it is vast.

Our version features smooth animated platforms with satisfying slicing effects, a particle explosion when pieces fall away, and a progressive speed increase as you climb higher. The clean, minimalist aesthetic — colored blocks against a dark background — keeps all attention on the task at hand. The game runs silently or with light sound effects, making it perfect for focused sessions or background play.

Tower Stack is one of the best tap/click games available — pure, distilled, ruthless. It works flawlessly on mobile (tap to drop) and desktop (space or click), making it accessible anywhere. How high can you stack?

**Tips:** Watch the platform's rhythm before dropping — find the oscillation midpoint. Aim slightly early, as your reaction adds latency. Accept some imprecision early to build momentum.`,
    category: 'arcade',
    thumbnailUrl: '/thumbnails/tower-game.webp',
    gameUrl: '/games/tower-game/index.html',
    controls: 'Click, Space, or tap to drop the block. Works perfectly on mobile.',
    featured: false,
    isNew: false,
    plays: 210987,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '9/16',
    mobileSupported: true,
  },

  {
    id: '12',
    slug: 'flappy-bird',
    title: 'Floppy Bird',
    description: `Floppy Bird is a lovingly faithful recreation of Flappy Bird — the viral phenomenon that spent two weeks as the #1 downloaded app in the world before its creator famously pulled it from app stores in February 2014. Dong Nguyen's original was criticized for being "too addictive," and he removed it out of genuine concern for players. The legend only made the game more mythologized, and today countless clones and spiritual successors keep the Flappy Bird spirit alive — this one among the best of them.

The game could not be simpler: tap or click to make your bird flap its wings and gain altitude. Stop tapping and gravity pulls the bird down. Navigate through an endless series of vertical pipe obstacles, each pair with a gap you must thread through precisely. One wrong move — hitting a pipe, the floor, or the ceiling — and it's over. Each pipe you pass scores you one point. The world record is in the hundreds. Most players struggle to reach 10.

What Floppy Bird accomplishes that almost no other game does is delivering genuine, earned difficulty through pure, minimal mechanics. There are no power-ups, no unlocks, no progression system, no story. Just you, a bird, and pipes. The physics engine is finely tuned to that cruel sweet spot where success feels achievable but failure feels deserved — you're never wondering if the game cheated you, only if your timing was perfect enough. This accountability is addictive.

The psychological loop is powerful: fail, restart instantly, try again. Each death takes milliseconds to recover from. The barrier to "one more try" is zero. This immediacy — no loading screens, no menus, no delay between death and restart — creates a hypnotic rhythm of attempt, failure, and re-attempt that can consume an hour before you realize it.

Our version is a pixel-perfect HTML5 implementation with responsive physics, authentic animation, and that signature style of punishing-but-fair one-tap gameplay. It runs at 60fps for the smooth motion that proper Flappy Bird judgment requires. Play free in your browser, on desktop or mobile.

**Tip:** Don't look at the bird — watch the gap you're aiming for. Consistent tap rhythm beats frantic clicking every time.`,
    category: 'arcade',
    thumbnailUrl: '/thumbnails/flappy-bird.webp',
    gameUrl: '/games/flappy-bird/index.html',
    controls: 'Space or click to flap. Mobile: tap anywhere on screen.',
    featured: false,
    isNew: false,
    plays: 376543,
    license: 'MIT',
    author: 'Nebez Briefkani',
    sourceUrl: 'https://github.com/nebez/flern',
    aspectRatio: '4/3',
    mobileSupported: true,
  },
  {
    id: '13',
    slug: 'clumsy-bird',
    title: 'Clumsy Bird',
    description: `Clumsy Bird is a charming, polished Flappy Bird tribute built using MelonJS, a professional-grade HTML5 game engine. While the DNA is unmistakably Flappy Bird — tap to flap, dodge pipes, one hit kills — Clumsy Bird brings its own distinct personality through smoother animations, a character with comedic flair, and a slightly more forgiving feel that makes it accessible to players who find the original brutally unforgiving.

The "clumsy" in the title isn't accidental — this bird flaps with an endearing lack of grace, tumbling slightly with each failed attempt in a way that feels funny rather than frustrating. It's a small design choice that completely changes the emotional tone. Where Flappy Bird feels tense and merciless, Clumsy Bird feels playful and lighthearted, making failure feel like a punchline rather than a punishment.

Under the hood, Clumsy Bird showcases what MelonJS can do: fluid sprite animation, smooth parallax scrolling backgrounds that create a sense of depth, proper physics simulation, and audio that fires reliably without browser compatibility issues. The game loads fast, runs at consistent frame rates on any modern browser, and scales cleanly for different screen sizes.

For players who want to explore the Flappy Bird formula with a fresh coat of paint — or who want a game that's just slightly kinder to beginners — Clumsy Bird delivers. The core challenge is identical: precise timing, consistent rhythm, and the iron discipline to stop tapping at exactly the right moment. But the mood is warmer, the stakes feel lower, and the "just one more try" pull is just as strong.

Our browser version plays identically to the original Clumsy Bird web game — no modifications, no ads injected, just pure gameplay. Click or tap to play, beat your high score, and share your record with friends.

**Difference from Floppy Bird:** Clumsy Bird has slightly more forgiving hitboxes and smoother animation; Floppy Bird is a closer recreation of Dong Nguyen's original with pixel-art aesthetics. Try both and pick your favorite!`,
    category: 'arcade',
    thumbnailUrl: '/thumbnails/clumsy-bird.webp',
    gameUrl: '/games/clumsy-bird/index.html',
    controls: 'Click or tap anywhere to make the bird jump.',
    featured: false,
    isNew: false,
    plays: 332109,
    license: 'MIT',
    author: 'ellisonleao',
    sourceUrl: 'https://github.com/ellisonleao/clumsy-bird',
    aspectRatio: '4/3',
    mobileSupported: true,
  },
  // ─── Shooting ─────────────────────────────────────────────────────────────

  {
    id: '15',
    slug: 'radius-raid',
    title: 'Radius Raid',
    description: `Radius Raid is a stylish, intense browser-based space shooter that reimagines the genre within a circular arena. Instead of scrolling levels or a traditional rectangular battlefield, you defend a central core from waves of enemies that pour in from all directions simultaneously. Your ship orbits the core, and enemies approach from every angle — requiring constant rotation, quick targeting, and ruthless priority management to survive.

Built as a submission for the js13kGames competition (where the entire game must fit within 13 kilobytes of JavaScript), Radius Raid is a technical marvel of compressed design. Every visual effect, enemy behavior, and audio cue was crafted under extreme code size constraints, yet the result is a fluid, polished shooter that punches well above its weight. The tight code forces elegant design decisions: clean geometry, minimal but effective particle effects, and AI patterns that are simple to implement but challenging to survive against.

The game's circular arena mechanic changes shooter fundamentals in fascinating ways. In traditional shooters, threats come from in front or above; in Radius Raid, they come from all sides simultaneously. There's no safe direction — the defensive perimeter is 360 degrees. You must constantly scan the entire arena, prioritizing fast enemies over slow ones and protecting the weakest section of your perimeter at any given moment.

Combos drive the scoring system: each consecutive enemy you destroy without a break increases your multiplier, and devastating combo chains against clustered enemy waves can multiply your score by 10x or more. Building and maintaining combos while managing a deteriorating perimeter is the game's central tension.

Radius Raid features multiple difficulty waves that introduce new enemy types — some that move in formation, some that scatter on approach, some that spawn smaller sub-units on destruction. The escalating variety keeps the experience fresh across multiple sessions.

This is a game for players who love old-school arcade shooters but want something that feels genuinely fresh. It's visually striking with its glowing vector aesthetic and requires genuine skill to master. Best played on desktop with mouse controls for precise aiming.`,
    category: 'shooting',
    thumbnailUrl: '/thumbnails/radius-raid.webp',
    gameUrl: '/games/radius-raid/index.html',
    controls: 'Mouse to aim, Left-click to shoot. Best on desktop — requires precise mouse control.',
    featured: false,
    isNew: false,
    plays: 143210,
    license: 'MIT',
    author: 'Matt Hackmann',
    sourceUrl: 'https://github.com/mattbdean/radius-raid',
    aspectRatio: '1/1',
    mobileSupported: false,
  },
  // ─── Adventure ────────────────────────────────────────────────────────────
  {
    id: '14',
    slug: 'astray',
    title: 'Astray Maze',
    description: `Astray Maze is a stunning 3D maze exploration game built with Three.js, a professional-grade WebGL rendering library. Unlike flat 2D top-down mazes, Astray renders its labyrinths in genuine 3D with proper lighting, shadows, and perspective — creating the atmospheric sense of being inside a real three-dimensional maze rather than looking down at one. Navigate from overhead (or tilt the camera for dramatic low angles) through procedurally generated maze layouts, hunting for the exit while the clock counts down.

The game's use of Three.js and Box2D physics creates an experience that feels closer to a full-featured game than a typical browser experiment. The ball that represents your character rolls realistically through the maze corridors, responding to the physics of the environment rather than snapping to grid positions. This physics-based movement adds an extra layer of challenge: momentum means you can overshoot turns, and correcting course requires anticipating the ball's trajectory.

Each maze is procedurally generated using standard maze algorithms, ensuring every playthrough presents a fresh layout. The generation guarantees a valid path from start to exit exists, but the maze's complexity varies — some runs will present relatively direct routes while others weave through the entire labyrinth before reaching the exit. The sense of discovery as you explore unmapped corridors and follow promising paths that turn out to be dead ends captures exactly the disorientation of being genuinely lost in a maze.

Astray is a showcase of what's possible with HTML5 and modern JavaScript game engines. It runs entirely in your browser without any plugins or downloads, yet delivers graphics and physics simulation that would have required a dedicated game engine just a decade ago.

**Note:** Astray uses keyboard controls (arrow keys) for precise navigation. Touch/mobile play is not supported — a keyboard is required for the best experience.

**Tips:** Adopt a systematic wall-following strategy — keep your right hand on the right wall and follow it consistently to find the exit in any simply-connected maze. This algorithm works 100% of the time, though it may take longer than direct exploration.`,
    category: 'adventure',
    thumbnailUrl: '/thumbnails/astray.webp',
    gameUrl: '/games/astray/index.html',
    controls: 'Arrow keys to navigate the maze. Desktop only — requires keyboard.',
    featured: false,
    isNew: false,
    plays: 123456,
    license: 'MIT',
    author: 'wwwtyro',
    sourceUrl: 'https://github.com/wwwtyro/astray',
    aspectRatio: '16/9',
    mobileSupported: false,
  },
  {
    id: '28',
    slug: 'cave-runner',
    title: 'Cave Runner',
    description: `Cave Runner is an endless side-scrolling adventure game where you guide a daring explorer through an infinitely extending underground cavern. Tap or click to jump over obstacles — boulders, gaps, and falling stalactites — as the cave scrolls ever-faster to the right. How far can you run before the cave claims you?

The game captures the essence of the "endless runner" genre made famous by titles like Temple Run and Subway Surfers, distilled to its purest browser-playable form. Every run starts the same: a manageable pace through a relatively clear cave. But the environment accelerates gradually and never relents — what felt comfortable at 100 meters becomes frantic at 500, and by 1000 meters you're reacting on pure instinct, trusting muscle memory over conscious decision-making.

Cave Runner's obstacle system is carefully tuned to feel fair. The timing windows for jumps are readable rather than pixel-perfect — you can see obstacles coming with enough notice to react. But the escalating speed compresses that reaction time, and the increasing density of obstacles means you can never fully relax. The cave always has one more rock, one more gap, one more challenge waiting just off-screen.

Visually, Cave Runner uses a moody pixel-art aesthetic: dark stone walls with flickering torch light, glowing gems scattered throughout as bonus pickups, and a protagonist whose animation communicates momentum and urgency. The distant cave layers scroll at different speeds, creating convincing parallax depth that makes the environment feel genuinely three-dimensional despite its 2D gameplay.

It's a game that anyone can pick up instantly — one button, infinite obstacles, climb the leaderboard. Perfect for mobile (tap to jump) and desktop alike.

**Tips:** Focus on the rhythm of the scrolling rather than individual obstacles. Anticipate obstacle clusters by looking as far ahead as possible. Jump early — it's better to jump slightly too early than to react too late.`,
    category: 'adventure',
    thumbnailUrl: '/thumbnails/cave-runner.webp',
    gameUrl: '/games/cave-runner/index.html',
    controls: 'Click, Space, or tap to jump. Double-tap for double jump.',
    featured: false,
    isNew: true,
    plays: 54321,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '16/9',
    mobileSupported: true,
  },
  // ─── Strategy ─────────────────────────────────────────────────────────────
  {
    id: '8',
    slug: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    description: `Tic Tac Toe is one of humanity's oldest strategy games — a two-player contest traced back to ancient Rome and Egypt, where versions were played on carved stone surfaces. Despite its apparent simplicity, Tic Tac Toe has been a subject of serious mathematical study. Game theorists have proven that with perfect play, Tic Tac Toe always ends in a draw — yet the vast majority of casual players never discover this through intuition alone.

The rules are universal: players alternate placing their symbol (X or O) on a 3×3 grid. The first to place three in a row — horizontally, vertically, or diagonally — wins. Simple. But the strategic depth lies in understanding that perfect play means controlling the center, forcing two-way wins (forks), and recognizing the opponent's fork setups before they happen.

Our version features three modes: Human vs Human (play against a friend on the same device), Easy AI (a random-move opponent suitable for children and beginners), and Hard AI (an unbeatable opponent powered by the minimax algorithm with alpha-beta pruning). The Hard AI plays the mathematically optimal game at every move — it genuinely cannot be beaten, only drawn. Challenging it is less about winning and more about discovering whether you can force a draw consistently.

The minimax algorithm that powers our Hard AI is fascinating in itself: it recursively evaluates every possible game state, assuming both players play optimally, and chooses the move that maximizes its own minimum outcome. This means the AI "thinks" many moves ahead and always plays the theoretically best available option — the same approach used in chess computers, scaled to Tic Tac Toe's compact state space.

For children, Tic Tac Toe is an ideal introduction to strategy, planning ahead, and thinking from an opponent's perspective. For adults, the challenge is to defeat the Easy AI consistently before trying to draw against the Hard AI. And for everyone, the Human vs Human mode provides a quick, competitive experience anywhere.

**Optimal first move:** Always play center on your first turn — it maximizes your winning and drawing potential. If center is taken, a corner is the next best option.`,
    category: 'strategy',
    thumbnailUrl: '/thumbnails/tic-tac-toe.webp',
    gameUrl: '/games/tic-tac-toe/index.html',
    controls: 'Click or tap a cell to place your mark. Works on all devices.',
    featured: false,
    isNew: false,
    plays: 265432,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '1/1',
    mobileSupported: true,
  },
  {
    id: '25',
    slug: 'checkers',
    title: 'Checkers',
    description: `Checkers (also known as Draughts in the UK) is a classic two-player strategy board game played on an 8×8 grid, with each player controlling 12 pieces that move diagonally. It's one of the world's most studied strategy games — in 2007, a team of computer scientists at the University of Alberta spent 18 years of computing time to "solve" Checkers, proving that perfect play from both sides always results in a draw. Despite being theoretically solved, Checkers remains a deeply engaging tactical challenge for human players.

The rules are straightforward: your pieces (red) move diagonally forward on dark squares. Capture an opponent's piece by jumping over it to an empty square beyond. If a jump is available, it must be taken — you cannot decline a capture. Chain multiple jumps together in a single turn to clear multiple enemy pieces. When a piece reaches the far end of the board, it becomes a King, gaining the ability to move diagonally in any direction — backward or forward — making Kings dramatically more powerful than regular pieces.

Strategy in Checkers centers on position and tempo. Controlling the center of the board gives your pieces more mobility and forces your opponent to play defensively. Trading pieces is only advantageous if the resulting position favors you — experienced players avoid captures that give the opponent positional advantage even when winning a piece in the exchange. King promotion is powerful but overcommitting to a king run can leave your back rank weak.

Our browser Checkers features a smart AI opponent that plays at a genuinely challenging level, suitable for both beginners learning the game and experienced players looking for a solid casual opponent. The AI uses standard game tree search to look ahead multiple moves, avoid obvious blunders, and pursue positional advantages. Forced jumps are automatically detected and highlighted so you never accidentally violate the rules.

Visual feedback makes the game accessible: selected pieces glow to show they're active, valid moves are highlighted on the board, and captured pieces are animated off the board cleanly.

Play Checkers free in your browser — no downloads, no registration needed.`,
    category: 'strategy',
    thumbnailUrl: '/thumbnails/checkers.webp',
    gameUrl: '/games/checkers/index.html',
    controls: 'Click a piece to select it, then click the destination to move. Forced captures are highlighted.',
    featured: false,
    isNew: true,
    plays: 42100,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '1/1',
    mobileSupported: true,
  },
  // ─── Action (NEW) ─────────────────────────────────────────────────────────
  {
    id: '16',
    slug: 'ninja-slash',
    title: 'Ninja Slash',
    description: `Ninja Slash is a fast-paced action game that puts your reflexes and precision to the ultimate test. Enemies charge toward the center of the screen from all directions, and your only weapon is a slash — drawn by clicking and dragging (or swiping on mobile) across enemies to slice them down. Build combo multipliers by slashing multiple enemies in a single stroke, but let any enemy reach the center and the game ends.

The swipe/slash mechanic is immediately intuitive — it's the satisfying sword-swing gesture that touch screens were made for. But what starts as a relaxed introduction quickly escalates into frantic multi-enemy management. At high levels, enemies approach from five different directions simultaneously, and you're drawing slash lines across the screen at maximum speed, constantly rotating attention to whichever threat is closest to the center.

The combo system is the key to high scores. A single slash that catches one enemy earns base points; catching three in one motion multiplies your score, and chains of five or more trigger a point explosion. Expert players scan the battlefield for cluster formations — enemies that are grouped such that a single diagonal slash line can cut through all of them. Setting up and executing these multi-kill slashes while managing solo threats on the flanks is the game's deepest strategic layer.

Visually, Ninja Slash delivers the cinematic fantasy of being a blade-wielding assassin in the middle of a battle: enemy silhouettes, dramatic slash lines, particle effects on impact, and escalating music tempo as the action intensifies. The dark color palette with glowing orange slash trails creates a distinctive look that feels like a stylish action anime.

Ninja Slash works on both desktop (click-drag) and mobile (swipe), making it one of the most comfortable action games in the library to play on a phone or tablet. The gesture controls feel natural and responsive.

**Tip:** Don't just slash the nearest enemy — scan for cluster formations that let you hit 3+ enemies in one stroke. Patience for the right moment beats frantic individual cuts.`,
    category: 'action',
    thumbnailUrl: '/thumbnails/ninja-slash.webp',
    gameUrl: '/games/ninja-slash/index.html',
    controls: 'Click and drag or swipe across enemies to slash them. Works on mobile.',
    featured: true,
    isNew: true,
    plays: 98234,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '16/9',
    mobileSupported: true,
  },
  {
    id: '17',
    slug: 'zombie-survivor',
    title: 'Zombie Survivor',
    description: `Zombie Survivor is a top-down survival shooter that pits you alone against endless waves of the undead. Armed with whatever weapons you can scavenge, you must eliminate zombies faster than they pour in — managing your ammo, your positioning, and your nerves as the horde grows denser with each passing wave.

The top-down perspective gives Zombie Survivor a tactical dimension beyond pure shooting: you see the full battlefield, can choose engagement angles, and must decide when to push aggressively versus when to kite the horde in a circle while conserving ammo. Zombies don't just rush straight at you — they pathfind around obstacles, flank exposed positions, and overwhelm players who hold stationary rather than continuously moving and repositioning.

Ammo management is the game's central resource puzzle. Each weapon has finite rounds, and pickups appear at random on the map. A player who sprays bullets without accuracy runs dry at the worst possible moment. Careful players aim before firing, collect pickups strategically, and know when to reload — balancing the risk of reloading in the middle of a horde versus the certainty of running dry without reloading.

Zombie Survivor escalates through increasingly challenging waves, introducing new zombie types as you progress: shambling standard zombies, fast runners, armored variants that absorb more hits, and occasional boss-type hordes that test the limits of your survival strategy. The map design channels zombies through certain corridors, creating natural chokepoints where a skilled player can maximize kills per second.

**Note:** Zombie Survivor uses WASD movement + mouse aim, making it a keyboard-and-mouse game best played on desktop. Mobile play is not supported due to the dual-stick control scheme.

A love letter to classic overhead survival shooters, Zombie Survivor delivers addictive "one more wave" gameplay that will keep you loading up and fighting back until the ammunition runs out.`,
    category: 'action',
    thumbnailUrl: '/thumbnails/zombie-survivor.webp',
    gameUrl: '/games/zombie-survivor/index.html',
    controls: 'WASD to move, Mouse to aim, Left-click to shoot, R to reload. Desktop only.',
    featured: false,
    isNew: true,
    plays: 76543,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '16/9',
    mobileSupported: false,
  },
  // ─── Racing (NEW) ─────────────────────────────────────────────────────────
  {
    id: '18',
    slug: 'speed-racer',
    title: 'Speed Racer',
    description: `Speed Racer is a vertical-scrolling arcade car game in the tradition of classic highway runners — games where your only job is to drive as fast as possible while weaving through oncoming traffic on an endlessly scrolling road. Simple premise, pure execution, and an escalating speed curve that goes from relaxed drive to hair-raising reflex test within minutes.

Your car occupies the bottom third of the screen while traffic pours down from above: sedans, trucks, buses, and sporty rivals moving at varying speeds across multiple lanes. Dodge left and right to avoid collisions. The longer you survive, the faster traffic moves and the denser it becomes. The scoring is distance-based — pure survival, counting meters traveled before your first crash.

Speed Racer captures the hypnotic quality of great driving games: the visual sensation of motion as lane markings blur past, the peripheral processing of multiple threats simultaneously, and the zen state that experienced players enter when the conscious mind steps back and muscle memory takes over. At low speeds, you consciously choose which gaps to thread. At high speeds, you're reacting before you've processed what you saw.

The game introduces occasional "tight corridor" situations — moments where all lanes are occupied except one narrow gap — that require precise lateral positioning. These high-density moments are where the game separates skilled players from lucky ones: a player with refined control can consistently find the gap; a player relying on instinct alone may clip a corner.

Mobile play is well-supported: swipe left and right to change lanes, or use the on-screen buttons. The vertical orientation makes Speed Racer a natural phone game.

**Tips:** Stay in the center lane whenever possible — it gives you the most escape options. Avoid committing to an edge lane for extended periods. Look two or three car lengths ahead rather than at your own vehicle.`,
    category: 'racing',
    thumbnailUrl: '/thumbnails/speed-racer.webp',
    gameUrl: '/games/speed-racer/index.html',
    controls: '← → arrow keys or swipe to change lanes. Mobile-friendly.',
    featured: true,
    isNew: true,
    plays: 112345,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '9/16',
    mobileSupported: true,
  },
  {
    id: '19',
    slug: 'drift-king',
    title: 'Drift King',
    description: `Drift King is a top-down racing game that rewards the art of the controlled drift — that exhilarating, tire-smoking slide that separates precision drivers from timid ones. Set on a challenging oval circuit, you must balance your car on the edge of control, carrying speed through corners while accumulating drift points. The more stylishly you slide, the higher your score.

The physics engine models tire friction and inertia, meaning you can't just steer through corners — you need to manage oversteer, countersteer to catch slides, and find the delicate throttle balance that keeps your car drifting rather than spinning out or gripping back up. Learning this feel takes a few runs; mastering it takes many more.

Drift King is a game about the pursuit of the perfect lap. Not the fastest lap — the most stylish lap, where every corner entry is precisely judged, every drift is carried as long as possible without losing momentum, and every exit is clean. Players develop intuitive knowledge of the track: which corners reward early entry, which need late braking, which offer the longest drift zones for maximum score.

The game features a lap bonus system: complete a full lap without hitting the walls and earn a multiplier that stacks with your drift score. This creates a satisfying risk/reward tension between aggressive drifting (higher scores but greater crash risk) and conservative clean laps (fewer drift points but sustained multipliers).

Drift King's top-down view gives you full situational awareness of the track and your car's attitude, making it easier to read oversteer developing before it becomes a spin. The simplified top-down perspective makes the physics legible rather than chaotic.

**Tips:** Trail brake into corners to initiate drift, then apply throttle to sustain it. Steer opposite to the direction of slide (countersteer) to control the angle. Longer drifts score more than multiple short ones.`,
    category: 'racing',
    thumbnailUrl: '/thumbnails/drift-king.webp',
    gameUrl: '/games/drift-king/index.html',
    controls: 'Arrow keys to steer, accelerate, and brake. Mobile: on-screen controls.',
    featured: false,
    isNew: true,
    plays: 87654,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '16/9',
    mobileSupported: true,
  },
  // ─── Sports ───────────────────────────────────────────────────────────────
  {
    id: '20',
    slug: 'ping-pong',
    title: 'Ping Pong',
    description: `Ping Pong (Pong) is where it all began. Released by Atari in 1972, Pong was the first commercially successful video game — a simple digital table tennis simulation that sparked an industry. Two paddles, a ball, and a score counter: the original video game distilled to its absolute essence. Fifty years later, it's still satisfying, still competitive, and still undeniably fun.

The rules are simple: move your paddle to return the ball past your opponent's paddle. First to 7 points wins. The physics simulation adds depth beyond the apparent simplicity: the ball's angle of deflection depends on where it strikes the paddle — center contact sends it straight across, edge contact angles it sharply. Expert Pong players use this angle control deliberately, directing shots to the corners of the court where the opponent is weakest.

Our version supports three modes: Single Player (you vs. an AI opponent at adjustable difficulty), Two Player (local multiplayer on the same keyboard — classic couch competition), and Pure AI (watch two AI players face off). The AI scales from a novice opponent who misses easy returns to an expert that tracks the ball perfectly and returns everything cleanly.

Pong's genius lies in how it encapsulates competitive tension without any complexity. Two people, shared screen, instant stakes. Every point matters. Every rally builds momentum. The "game point" moment in Pong — where one player has 6 points and needs one more — creates genuine pressure despite the abstract nature of paddles and a moving square.

The game has been reimplemented thousands of times across every platform imaginable since 1972, but the browser version has a special charm: instant access, no setup, perfect for a quick competition with whoever is nearby. Challenge a friend to 10 games of Pong and see who wins the series.

**Tip:** Don't just react to the ball — try to predict where it will be based on its current trajectory and plan your paddle position in advance. Anticipation beats reaction.`,
    category: 'sports',
    thumbnailUrl: '/thumbnails/ping-pong.webp',
    gameUrl: '/games/ping-pong/index.html',
    controls: 'W/S = Left paddle, ↑/↓ = Right paddle. Desktop only — requires keyboard.',
    featured: true,
    isNew: true,
    plays: 134567,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '16/9',
    mobileSupported: false,
  },
  {
    id: '21',
    slug: 'basketball-shoot',
    title: 'Basketball Shoot',
    description: `Basketball Shoot is a satisfying, physics-based browser basketball game that challenges you to sink as many shots as possible in each round. The hoop moves dynamically across the screen — sliding left and right, occasionally bobbing up and down — keeping the challenge fresh and requiring you to time and aim each shot rather than relying on a fixed shooting formula.

The shooting mechanic is intuitive but rewarding to master: click and drag away from the ball (or touch and drag on mobile) to set your shooting trajectory, then release to launch. The drag direction and distance control both the angle and power of your shot. Too weak and the ball falls short; too strong and it bounces off the backboard and away. Finding the right power and arc for each shot requires reading the distance to the hoop and adjusting your drag accordingly.

You get five balls per round, and each successful basket earns points — with a combo multiplier that increases as you chain consecutive makes without a miss. Three in a row starts a combo; five in a row triggers maximum multiplier. Managing the pressure of maintaining a combo streak while the hoop keeps moving is the game's primary tension loop.

The physics simulation is genuine rather than just visual decoration: the ball arcs realistically, bounces off the rim with proper deflection, and swishes through the net in a way that delivers real satisfaction. Near-misses that rattle off the rim before falling in (or out) make every shot feel meaningful.

Basketball Shoot is one of the most mobile-optimized games in the library — the drag-and-release shooting mechanic translates naturally to touch screens, and the game plays equally well on a phone or tablet as on desktop. It's a perfect five-minute game — short rounds, instant replay, and that "just one more basket" feel.

**Tips:** Aim for the center of the basket rather than the rim. When the hoop is moving, lead your shot to where it will be when the ball arrives. A consistent shot power beats constantly adjusting technique.`,
    category: 'sports',
    thumbnailUrl: '/thumbnails/basketball-shoot.webp',
    gameUrl: '/games/basketball-shoot/index.html',
    controls: 'Click and drag away from the ball to aim, release to shoot. Works great on mobile.',
    featured: false,
    isNew: true,
    plays: 95432,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '9/16',
    mobileSupported: true,
  },
  // ─── Multiplayer ──────────────────────────────────────────────────────────
  {
    id: '22',
    slug: 'tank-battle',
    title: 'Tank Battle',
    description: `Tank Battle is a local two-player combat game that turns any keyboard into a battle arena. Two tanks face off in a maze of walls and obstacles, lobbing shells at each other with one goal: destroy the enemy before they destroy you. With ricochet physics that bounce bullets off walls, the battlefield becomes a lethal geometry puzzle — your own shots can circle back and hit you if you're not careful.

The ricochet mechanic is Tank Battle's defining feature. Unlike most shooter games where missing means harmlessly losing a bullet, in Tank Battle every shot continues to live on the screen, bouncing off walls until it hits something or dissipates. A perfectly aimed ricochet shot can catch an opponent hiding behind a wall who thought they were safe. Trap opponents in corridors, then bounce shots off multiple walls to reach them in their cover.

Tank controls feel deliberately weighty and tactical rather than frantic: tanks rotate to aim, then drive forward and back. This creates a positional chess element — getting your tank into a favorable firing angle while denying the opponent the same. Two tanks dancing around the same corner of a wall, each trying to rotate into a firing position without exposing their side, is one of gaming's most satisfying local multiplayer micro-moments.

The maze-style maps are designed to reward positional play: narrow corridors that favor defensive holds but leave you vulnerable to ricochets, open central areas where the tank with better aim wins, and corner positions that offer protection from direct fire but create ricochet traps.

Tank Battle requires two players on the same keyboard — P1 uses WASD to move and Space to shoot; P2 uses arrow keys to move and Enter to shoot. This makes it purely a couch/same-device multiplayer experience, which is exactly where the game shines: competitive, close-range, and endlessly replayable.

No screen peeking — the map is fully visible to both players, so strategy is everything.`,
    category: 'multiplayer',
    thumbnailUrl: '/thumbnails/tank-battle.webp',
    gameUrl: '/games/tank-battle/index.html',
    controls: 'P1: WASD move, Space shoot. P2: Arrow keys move, Enter shoot. Desktop only.',
    featured: true,
    isNew: true,
    plays: 67890,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '16/9',
    mobileSupported: false,
  },
  {
    id: '26',
    slug: 'connect-four',
    title: 'Connect Four',
    description: `Connect Four is the brilliant strategic falling-piece game invented by Howard Wexler and Ned Scheidt in 1974. Two players take turns dropping colored discs into a vertical 7×6 grid, with gravity pulling each disc to the lowest available position in the chosen column. The first player to connect four of their discs in a row — horizontally, vertically, or diagonally — wins. First to four in a row takes the game.

While Connect Four appears simpler than Chess or Checkers, it has surprising strategic depth. In 1988, mathematicians proved that the first player can always force a win with perfect play — but that solution requires following a complex sequence of moves that is impossible to memorize in practice. Against a real opponent, the game feels genuinely balanced and competitive.

The strategic vocabulary of Connect Four is rich. "Threats" are positions where a player has three in a row with one open space — a single move from winning. "Double threats" (two simultaneous threats) are unblockable and form the basis of most winning strategies. Setting up a double threat while preventing your opponent from doing the same is the game's central tactical challenge.

Column control matters: the center column offers the most connectivity (connections can extend left, right, and diagonally), making it the most valuable real estate. Players who control the center and one adjacent column early in the game consistently have more strategic options. However, being too predictable in column preference allows your opponent to build threats on your neglected side.

Our version features two modes: two-player (local) and single-player against an AI opponent that plays at a solid intermediate level — it will set up threats and block obvious winning moves, but can be beaten with planning. The clean grid interface highlights your winning connection when you achieve it with a satisfying animation.

**Strategy tip:** The first player's power move is center column. Follow up by building diagonal threats in both directions. Force your opponent to block in one direction, then complete the other.`,
    category: 'multiplayer',
    thumbnailUrl: '/thumbnails/connect-four.webp',
    gameUrl: '/games/connect-four/index.html',
    controls: 'Click a column to drop your disc. Play against a friend or the AI.',
    featured: false,
    isNew: true,
    plays: 38900,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '4/3',
    mobileSupported: true,
  },
  // ─── IO Games ──────────────────────────────────────────────────────────────
  {
    id: '23',
    slug: 'dot-eater',
    title: 'Dot Eater',
    description: `Dot Eater is an agar.io-inspired browser game that captures the core loop of the viral multiplayer genre: grow your circle by consuming smaller things, flee from larger things, and try to dominate the arena. In our version, you play against a roster of AI-controlled circles rather than human opponents — giving the feel of the classic io-game formula without needing an internet connection or server.

The mechanics are elegant: your circle moves toward your cursor. Eat the glowing food particles scattered across the arena to grow larger and heavier. Eat AI circles smaller than you to absorb their mass in one collision. But the moment you touch a circle larger than yours, you're instantly consumed — and it's back to the start. The entire game runs on this predator-prey food chain, where your status (predator or prey) relative to every other entity changes continuously as sizes shift.

What makes agar.io-style games psychologically compelling is the tactile sense of growth and the constant reassessment of risk. Early in a run, when you're tiny, almost everything on the map is a threat. After a few minutes of careful eating, you've grown large enough to challenge mid-sized opponents. At maximum size, you're the apex predator — but also the most visible, slowest target on the map, and nimbler small circles can evade you indefinitely.

The AI opponents behave with enough variety to keep the game interesting: aggressive circles that pursue smaller targets persistently, cautious circles that flee quickly, and territorial circles that patrol fixed areas. Understanding each AI's behavioral pattern lets you set up ambushes and strategic approaches.

Dot Eater runs in your browser, needs no download or account, and a full session takes 10-20 minutes. It works well on mobile (touch to move) and delivers the addictive growth loop of the io genre in a clean, self-contained package.

**Tips:** Use corners and edges to trap smaller circles. Avoid the center of the arena when you're small — too many large threats. Split only when you have a clear escape route for the separated half.`,
    category: 'io-games',
    thumbnailUrl: '/thumbnails/dot-eater.webp',
    gameUrl: '/games/dot-eater/index.html',
    controls: 'Move mouse or touch to steer your circle. Works on mobile.',
    featured: true,
    isNew: true,
    plays: 89012,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '16/9',
    mobileSupported: true,
  },
  {
    id: '24',
    slug: 'slither-solo',
    title: 'Slither Solo',
    description: `Slither Solo is a slither.io-inspired snake growth game where you navigate a glowing snake through an arena filled with food and rival AI snakes. Eat glowing food orbs to grow longer, and — crucially — cut off AI snakes to force them into crashing into your body, absorbing their score. The more aggressively you play, the faster you grow; the more recklessly, the sooner you die.

The cutting mechanic is what elevates Slither-style games above traditional Snake. In classic Snake, you just grow and avoid yourself. In Slither Solo, you actively weaponize your own body: by positioning yourself across the path of a smaller snake, you force a collision that eliminates them and deposits their score as collectible food in the arena. Every snake you eliminate is a triple win — you remove a threat, you collect their mass, and you assert dominance in a region of the arena.

But the cutting strategy has risks. Setting up a cut requires getting close to another snake, which means being near something that can kill you too. Larger snakes can cut you. The chaotic arena dynamics — where multiple snakes are moving and growing simultaneously — create emergent situations that no amount of planning fully anticipates.

The AI snakes have distinct personalities: aggressive hunters that chase smaller snakes, food-focused growers that ignore combat, and defensive spirallers that coil their body as a shield. Learning to exploit each behavioral type — trapping hunters, ambushing spirallers, racing food-focused snakes to high-density food zones — is the game's depth.

Slither Solo sessions typically run 5-15 minutes, scaling with your skill and luck. The game runs in your browser with no download, accounts, or installations needed. Mobile play is supported via touch controls.

**Tips:** Never sprint (boost) unless you have a clear escape path. Use boost to cut an opponent, then immediately redirect to avoid the resulting body obstacle. Stay in food-rich zones but always maintain an exit route.`,
    category: 'io-games',
    thumbnailUrl: '/thumbnails/slither-solo.webp',
    gameUrl: '/games/slither-solo/index.html',
    controls: 'Move mouse or touch to steer. Left-click or tap to boost.',
    featured: false,
    isNew: true,
    plays: 72345,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '16/9',
    mobileSupported: true,
  },
  // ─── Cycle 3 Games ────────────────────────────────────────────────────────

  {
    id: '51',
    slug: 'sudoku',
    title: 'Sudoku',
    description: `Sudoku is the world's most popular number puzzle, played by hundreds of millions of people in newspapers, apps, and online every single day. Despite its name sounding Japanese, Sudoku has mathematical roots in 18th-century Europe and was popularized globally in its modern form in the 1980s. The objective is elegantly simple: fill a 9×9 grid with digits 1 through 9 such that each row, each column, and each of the nine 3×3 subgrids contains every digit exactly once.

No arithmetic is involved — Sudoku is pure logic. You don't add, multiply, or measure anything. You reason: if this row already contains digits 1, 2, 3, 4, 5, 6, 7, and 8, then the empty cell must be 9. If this 3×3 box already has a 7 in three of its cells, then the remaining six cells cannot contain 7. Layer these simple deductions across 81 cells and the puzzle reveals itself — or stubbornly resists, demanding ever more sophisticated techniques.

Beginner players start with "naked singles" — cells where only one digit can possibly fit given the current state of the puzzle. Intermediate players use "hidden singles," where a digit can only go in one cell within a row, column, or box even if that cell has multiple possibilities. Advanced players employ "naked pairs," "X-wings," "swordfish," and "coloring" techniques that feel like mathematical magic once you see them snap into place.

Our Sudoku features three difficulty levels. Easy puzzles are solved almost entirely with basic deductions. Medium requires occasional backtracking and multi-step logic chains. Hard puzzles are genuinely challenging and may require the kind of advanced techniques competitive Sudoku solvers study for years.

The game includes a notes mode — tap any cell and enter multiple candidate digits — plus a hint system for when you're truly stuck. A timer tracks your solve time, which is the standard metric for Sudoku improvement.

**Tips:** Start by scanning each 3×3 box for missing digits. Look for rows or columns with 7-8 filled digits first — they're easiest to complete. Use pencil marks (Notes mode) for hard puzzles. Never guess — every Sudoku has a logical solution.`,
    category: 'puzzle',
    thumbnailUrl: '/thumbnails/sudoku.webp',
    gameUrl: '/games/sudoku/index.html',
    controls: 'Click a cell to select it, then click a number or press keyboard 1-9. Arrow keys to navigate. N for notes mode.',
    featured: false,
    isNew: true,
    plays: 341000,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '3/4',
    mobileSupported: true,
  },
  {
    id: '52',
    slug: 'sliding-puzzle',
    title: 'Sliding Puzzle',
    description: `The Sliding Puzzle — also known as the 15-puzzle, gem puzzle, or boss puzzle — is one of the oldest and most enduring logic puzzles in history. Invented in the 1870s, it swept the world in a craze that predated both chess and crossword puzzles as a mass entertainment phenomenon. The premise is timeless: a grid of numbered tiles with one space missing. Slide tiles into the empty space to rearrange them into numerical order.

Our version offers three grid sizes — 3×3 (8 tiles), 4×4 (15 tiles), and 5×5 (24 tiles) — each dramatically different in difficulty. The 3×3 puzzle can typically be solved in under 30 moves by a beginner. The 4×4 puzzle is where the real challenge begins: the minimum possible solution for a scrambled 15-puzzle can exceed 80 moves, and finding an efficient path requires systematic thinking. The 5×5 is a beast — a puzzle that can humble even experienced solvers.

The mathematics of the sliding puzzle are fascinating. Not every scrambled arrangement is solvable — exactly half of all configurations are impossible to solve. Our game generates only solvable puzzles, verified by counting inversions. The minimum number of moves to solve any 15-puzzle (the "God's Number" equivalent) can be surprisingly large, making optimization a worthy challenge for perfectionist solvers.

Strategies range from informal (work from top to bottom, left to right, placing the top row first then the left column) to formal algorithms used in competitive speedsolving. The "human" approach focuses on inserting individual tiles into position without disrupting already-placed tiles — a skill that develops through practice and pattern recognition.

The game tracks your move count and time, making every solve a new personal best opportunity. Can you beat the 4×4 in under 100 moves? Under 60? The puzzle scales infinitely with skill level.

**Tips:** Solve top row first, then left column, then repeat for the remaining grid. Don't try to "force" individual tiles into position — cycle them around carefully. The last two tiles in a row require a special rotation move.`,
    category: 'puzzle',
    thumbnailUrl: '/thumbnails/sliding-puzzle.webp',
    gameUrl: '/games/sliding-puzzle/index.html',
    controls: 'Click tiles adjacent to the empty space to slide them. Keyboard arrow keys move the blank space. Swipe on mobile.',
    featured: false,
    isNew: true,
    plays: 156000,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '3/4',
    mobileSupported: true,
  },
  {
    id: '53',
    slug: 'whack-a-mole',
    title: 'Whack-a-Mole',
    description: `Whack-a-Mole is one of the most beloved arcade games ever created — a perfect blend of reaction speed, hand-eye coordination, and pure, unfiltered fun. The concept is delightfully simple: moles pop up from holes in the ground, and you need to whack them back down before they retreat. Miss too many, and the round ends. Hit as many as you can in 30 seconds to build your high score.

Originally a physical arcade cabinet game in the 1970s, Whack-a-Mole has since become a cultural touchstone. It's the game everyone has played at a fair, arcade, or birthday party. Our digital version captures that same frantic energy: nine holes, moles popping up at increasing speed, and your score climbing with every successful whack.

The game features three difficulty modes. Easy gives you plenty of time to react — the moles peek out slowly and linger long enough for comfortable targeting. Normal matches a classic arcade experience with moderate speed and timing. Hard is the true test: moles flash in and out so quickly that even seasoned players struggle to maintain 80% hit rate. At Hard difficulty, the game becomes as much about pattern recognition as raw speed — experienced players learn to anticipate where moles tend to cluster and position their attention accordingly.

The difficulty ramping within a single round adds another layer. Even on Easy mode, the moles speed up as the clock ticks down, so the final 10 seconds are always a frantic scramble. This dynamic progression ensures the game never feels static, building genuine tension toward the end of each round.

Your best score is saved locally so every session is a personal best attempt. Each mole type — hamsters, mice, rats, badgers — has slightly different peek timing, rewarding players who notice the behavioral patterns.

**Tips:** Don't fixate on a single hole after a miss — immediately scan the whole grid. Peripheral vision is key. Position your cursor in the center of the grid for fastest average reach. Watch for "double pops" where two moles appear simultaneously.`,
    category: 'arcade',
    thumbnailUrl: '/thumbnails/whack-a-mole.webp',
    gameUrl: '/games/whack-a-mole/index.html',
    controls: 'Click or tap moles to whack them. Works great on touchscreen devices.',
    featured: false,
    isNew: true,
    plays: 218000,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '3/4',
    mobileSupported: true,
  },
  {
    id: '54',
    slug: 'simon-says',
    title: 'Simon Says',
    description: `Simon Says is the iconic electronic memory game that has challenged and delighted players since 1978. Named after the children's game of the same name, the electronic version — the classic round device with four colored buttons — became one of the best-selling games of the late 20th century. Our digital recreation faithfully captures the essence of the original: watch the sequence of flashing lights and sounds, then reproduce it exactly.

The game starts simply. One button flashes and plays a tone. You repeat it. Then two in sequence. Then three. Each round adds one more step to the growing pattern. The catch: you must remember the entire sequence from the beginning every single time, not just the new addition. By round 10, you're replaying a 10-step sequence from memory. By round 20, it's a genuine feat of concentration.

Simon Says is primarily a test of sequential working memory — your brain's ability to hold an ordered list of items in mind and reproduce them accurately. Research has shown that the game genuinely improves short-term memory capacity with regular practice. The combination of visual (colored flashes) and auditory (distinct tones for each color) cues engages multiple memory systems simultaneously, which is why the game feels different from, say, memorizing a number list.

Different players develop different strategies. Some focus purely on visual patterns, watching the sequence like a dance. Others listen to the tones and internalize the melody (each color has a fixed musical pitch). The most effective players combine both, creating a multisensory memory trace that's harder to forget under pressure.

Our version features full audio with authentic tones — each color produces a distinct musical note, just like the original device. The game tracks your best score (highest sequence achieved) and plays a satisfying celebratory sequence when you hit milestones.

**Tips:** Say each color aloud as it flashes (or subvocalize it). Creating a verbal label for each step dramatically improves recall. Try to hear the "melody" of the sequence rather than individual notes.`,
    category: 'arcade',
    thumbnailUrl: '/thumbnails/simon-says.webp',
    gameUrl: '/games/simon-says/index.html',
    controls: 'Click or tap the colored buttons in the correct sequence. Watch and listen carefully!',
    featured: false,
    isNew: true,
    plays: 189000,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '1/1',
    mobileSupported: true,
  },

  {
    id: '56',
    slug: 'air-hockey',
    title: 'Air Hockey',
    description: `Air Hockey brings the fast-paced excitement of the classic arcade table game directly to your browser. Two paddles, one puck, and a frictionless table: the first player to score 7 goals wins. Simple in concept, endlessly thrilling in execution. You control the bottom paddle with your mouse or finger, trying to slam the puck past your AI opponent while defending your own goal.

The original air hockey table, invented in the early 1970s, works by blowing air through tiny holes in the table surface, creating a cushion that allows the puck to glide with minimal friction. This friction-free environment creates extraordinarily fast gameplay — professional air hockey tournaments feature pucks traveling at over 80 mph on physical tables. Our digital version captures that speed, with puck physics that feel genuinely snappy and satisfying.

Playing against the AI reveals the game's strategic depth. A raw power game — just hammering the puck as hard as possible — works on Easy mode but gets read and blocked at higher difficulty. Skilled play involves positioning: keeping your paddle slightly forward of center to cut off angles, using bank shots off the side rails to approach from unexpected directions, and baiting the AI into an aggressive position before quickly redirecting.

Bank shots — where you intentionally bounce the puck off a side wall to send it around the opponent's paddle — are the most satisfying advanced technique. A well-executed bank shot gives the puck a trajectory the AI didn't anticipate, sliding around an outstretched paddle and into the net. Learning to read the geometry of bank shots — imagining the reflection angle before you hit — is the skill that separates casual players from consistent winners.

Three difficulty levels provide a complete progression path. Easy lets you practice offensive patterns. Normal gives a fair fight. Hard requires genuine strategic play, as the AI reacts quickly and positions itself intelligently.

**Tips:** Don't chase the puck to the opponent's side — stay near your goal. Use controlled hits rather than maximum power. Bank shots work best when the AI is positioned centrally. Watch the puck's trajectory, not the AI's paddle.`,
    category: 'sports',
    thumbnailUrl: '/thumbnails/air-hockey.webp',
    gameUrl: '/games/air-hockey/index.html',
    controls: 'Move mouse or drag finger to control your paddle. First to 7 goals wins.',
    featured: false,
    isNew: true,
    plays: 198000,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '9/16',
    mobileSupported: true,
  },
  {
    id: '57',
    slug: 'crossy-frog',
    title: 'Crossy Frog',
    description: `Crossy Frog is a modern take on the classic Frogger arcade game — one of the most recognizable and beloved game concepts in history. Your mission: guide a determined little frog across a dangerous road filled with speeding vehicles, hopping one tile at a time until you reach safety on the other side. Each successful crossing scores points and increases the challenge.

Frogger, the original, was released by Konami in 1981 and became one of the top-grossing arcade games of its era. The concept resonated because it's universally relatable — we've all seen a frog (or squirrel, or turtle) trying to cross a road. The game distilled that moment into pure tension: wait for a gap, commit to the hop, don't get hit. The elegance of the design has made it endlessly remakeable.

Our version features a colorful emoji-based aesthetic with frogs, cars, buses, and race cars creating genuinely varied traffic patterns. Each lane moves at a different speed and in a different direction, requiring you to track multiple simultaneous threats and find windows through the chaos. The road alternates with grassy safe zones — strip malls and medians where your frog can pause, breathe, and plan the next crossing.

The game progressively increases difficulty. Level 1 has modest traffic with generous gaps. Higher levels add more vehicles per lane, faster speeds, and shorter safe windows. Reaching high levels requires reading traffic flow patterns in advance — learning to anticipate where gaps will be two or three moves ahead rather than reacting moment-to-moment.

Lives give you breathing room but not much. Three failed crossings and it's back to square one. The simple grid-based movement (one hop per button press) makes the game accessible on both mobile and desktop, with responsive touch controls for on-screen directional buttons.

**Tips:** Don't rush. Wait for gaps rather than dashing between cars. Move horizontally on safe zones to align with better lanes. Look ahead, not just at the immediate lane. Cars come in patterns — watch the rhythm and hop between volleys.`,
    category: 'adventure',
    thumbnailUrl: '/thumbnails/crossy-frog.webp',
    gameUrl: '/games/crossy-frog/index.html',
    controls: 'Arrow keys or WASD to move the frog. On mobile: use on-screen directional buttons.',
    featured: false,
    isNew: true,
    plays: 234000,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '9/16',
    mobileSupported: true,
  },
  {
    id: '58',
    slug: 'fruit-catcher',
    title: 'Fruit Catcher',
    description: `Fruit Catcher is a fast-paced reflex game where you control a basket at the bottom of the screen, catching falling fruit while dodging bombs. As you catch more fruit, the falling speed increases and the variety of items multiplies — plus bombs appear more frequently, threatening to steal your lives. Simple to learn, increasingly frantic, and impossible to stop playing once you start.

The core appeal of catch-style games is their primal satisfaction: things fall, you catch them, you score. The basket movement — smooth and momentum-based — creates a satisfying feel that makes the act of catching itself pleasurable. Every piece of fruit caught registers as a small win. The game becomes a flow state machine, where your attention fully locks onto the falling items and your hands respond automatically.

The real tension arrives with the bombs. Each bomb that lands in your basket costs a life, and you only have three. This forces split-second triage decisions: catch the apple, dodge the bomb, position for the next cluster. When multiple items are falling simultaneously — two fruits and a bomb — you have to quickly evaluate trajectories and make a snap decision that maximizes catches while avoiding penalties.

Fruit Catcher scales through a level system. Every 100 points earned advances you one level. Each level increases falling speed, adds more simultaneous items, and slightly increases bomb frequency. Early levels are approachable; late levels create genuine chaos that tests both your reaction time and strategic composure.

The game tracks your best score locally, creating a personal best progression system. Chasing your own record is the primary long-term motivation — can you beat 500 points? 1000? The skill ceiling is high enough that there's always room to improve.

**Tips:** Keep your basket in the middle of the screen by default — it gives you the fastest reach to either side. Watch the top of the screen for incoming items early, not just when they're halfway down. Priority: avoid bombs over catching fruit when both are incoming simultaneously.`,
    category: 'action',
    thumbnailUrl: '/thumbnails/fruit-catcher.webp',
    gameUrl: '/games/fruit-catcher/index.html',
    controls: 'Move mouse or drag finger to move the basket. Arrow keys also work.',
    featured: false,
    isNew: true,
    plays: 177000,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '9/16',
    mobileSupported: true,
  },
  {
    id: '59',
    slug: 'endless-runner',
    title: 'Endless Runner',
    description: `Endless Runner is a pure, distilled version of one of gaming's most beloved genres — the side-scrolling infinite runner. You play as a nimble character sprinting through an ever-accelerating obstacle course, jumping over barriers with a tap, click, or spacebar press. The world rushes past at increasing speed, and the goal is deceptively simple: survive as long as possible.

The endless runner genre exploded in the early 2010s with games like Temple Run and Subway Surfers on mobile, but its roots trace back much further — to classic platformers and even the T-Rex runner hidden in Google Chrome's offline mode. That iconic dino game proved the concept's brilliance: no tutorial needed, instant to understand, yet requiring genuine skill to master.

What makes our Endless Runner special is the double-jump mechanic. Your first jump clears ground-level obstacles. The second jump — activated mid-air — lets you hurdle tall barriers or chains of sequential obstacles. Knowing when to save your double jump versus spending it early is a key decision point that adds depth beyond pure reaction time.

The game features procedurally generated obstacle placement: cactus-style barriers appear in variable patterns and heights, ensuring no two runs are identical. Early in a run, obstacles are spaced generously, allowing comfortable reaction time. As speed increases, the spacing tightens and obstacle clusters appear — groups of barriers that require careful jump timing to navigate.

The scoring system rewards longevity. Every second of survival translates directly to points, with multipliers kicking in at higher levels. Your best score is saved locally, creating a personal benchmark that drives improvement. The "just one more run" compulsion loop is strong with this one — a failed run at 300 meters immediately motivates another attempt.

**Tips:** Stay calm rather than jumping preemptively — wait until an obstacle is close before committing to a jump. Save your double jump for emergencies. Watch the horizon for clusters of obstacles coming in sequence. Rhythm matters: the obstacle patterns have subtle timing you can internalize.`,
    category: 'action',
    thumbnailUrl: '/thumbnails/endless-runner.webp',
    gameUrl: '/games/endless-runner/index.html',
    controls: 'Space bar or click/tap to jump. Double-tap/press for a second jump mid-air.',
    featured: false,
    isNew: true,
    plays: 312000,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '16/9',
    mobileSupported: true,
  },
  {
    id: '60',
    slug: 'blackjack',
    title: 'Blackjack',
    description: `Blackjack is the world's most popular casino card game — a compelling combination of luck, strategy, and psychology that has been played in casinos and card rooms for over three centuries. The goal is elegantly simple: build a hand value closer to 21 than the dealer's without going over (busting). Number cards are worth their face value, face cards (Jack, Queen, King) are worth 10, and Aces are worth either 1 or 11 — whichever is more beneficial.

Each round begins with you placing a bet and receiving two cards, both face up. The dealer also receives two cards but keeps one face down (the "hole card"). You then choose: Hit (take another card), Stand (keep your current hand), or Double Down (double your bet and take exactly one more card). The dealer then reveals their hole card and must hit until reaching 17 or higher.

The strategic depth of Blackjack comes from the extensive "basic strategy" — a mathematically derived chart that specifies the optimal decision for every possible player hand versus dealer upcard combination. Following basic strategy reduces the house edge to under 0.5%, making Blackjack the casino game with the best odds for the player. Deviating from basic strategy — hitting when you should stand, standing when you should double — is where most players give away their edge.

Our version features a real chip-based betting system with denominations from $1 to $500. You start with $1,000 and can bet freely. The double-down option is available on any two-card hand. Blackjack — an Ace plus a 10-value card — pays 1.5x your bet, just like real casinos.

The dealer follows house rules: stands on all 17s, including soft 17. This is the most player-favorable rule variant and gives you the best possible odds.

**Tips:** Always hit when your total is 11 or less (you can't bust). Always stand on 17 or higher. Double down on 11 when the dealer shows 2-10. Never take insurance — it's a losing bet over time. Learn basic strategy for the best long-term results.`,
    category: 'strategy',
    thumbnailUrl: '/thumbnails/blackjack.webp',
    gameUrl: '/games/blackjack/index.html',
    controls: 'Click chip buttons to place bets. Click Deal, Hit, Stand, or Double to play your hand.',
    featured: false,
    isNew: true,
    plays: 298000,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '3/4',
    mobileSupported: true,
  },
  {
    id: '61',
    slug: 'word-search',
    title: 'Word Search',
    description: `Word Search is one of the most universally beloved word puzzles in the world — a staple of newspapers, puzzle books, waiting rooms, and educational classrooms for over 50 years. A grid of letters conceals a list of hidden words, arranged horizontally, vertically, or diagonally (and sometimes backwards). Your job: find every word before the timer runs out, circling each discovery with a satisfying drag.

The Word Search puzzle was invented in 1968 and immediately became a mass-market success. Unlike crosswords that demand vocabulary knowledge, Word Search is accessible to anyone who can recognize letter patterns. Yet there's genuine skill involved: experienced solvers develop pattern-recognition abilities that let them spot words almost automatically, scanning grid sections in seconds rather than letter-by-letter.

Our version features themed word sets — from programming languages and ocean life to animals, foods, sports, and space. Each puzzle uses a 10×10 grid with 7 hidden words, a difficulty level that's challenging without being overwhelming. Words can run in any of eight directions (including diagonals and backwards), and the grid is filled with random letters to obscure the targets.

The drag-to-select interface makes finding words satisfying and intuitive. Click (or tap) the first letter of a word, drag to the last letter, and the word highlights and locks in if correct. Incorrect selections simply deselect, letting you try again. Correct finds are crossed off the word list, giving you clear progress feedback throughout the puzzle.

A timer tracks your solve time, making each puzzle a speed challenge. Can you find all seven words in under 2 minutes? Under 90 seconds? Word Search is also a surprisingly effective vocabulary and focus exercise — the sustained attention required to scan letter grids is good mental practice.

**Tips:** Start by looking for the shortest words — they're easiest to spot. Scan each row and column methodically rather than randomly. Look for unusual letter combinations (double letters, Q, X, Z) that stand out from the filler letters. Diagonal words are hardest to spot — check those last.`,
    category: 'puzzle',
    thumbnailUrl: '/thumbnails/word-search.webp',
    gameUrl: '/games/word-search/index.html',
    controls: 'Click and drag to select words in the grid. Works great on touchscreen.',
    featured: false,
    isNew: true,
    plays: 143000,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '3/4',
    mobileSupported: true,
  },
  {
    id: '62',
    slug: 'bubble-shooter',
    title: 'Bubble Shooter',
    description: `Bubble Shooter is one of the most played casual games in history — a genre with billions of plays across Flash, mobile, and browser platforms since the late 1990s. The mechanics are intuitive: colored bubbles fill the top of the screen, and you shoot colored bubbles from the bottom, aiming to create groups of three or more matching colors. When a group forms, it pops and the bubbles above may cascade down. Clear the entire board to win.

The magic of Bubble Shooter lies in its trajectory system. Bubbles don't just travel in straight lines — they bounce off the side walls. This creates a rich geometry puzzle layered beneath the color-matching gameplay. A direct shot might not reach a difficult cluster, but a precise bank shot off the left wall can thread the needle perfectly. Learning to calculate these reflection angles — imagining where the bubble will end up after bouncing — is the defining skill of the game.

Combo chains are the second major skill layer. Popping a large cluster often detaches bubbles hanging below it, causing them to fall and clear additional space. Skilled players deliberately set up these chain reactions, shooting strategically to maximize cascades rather than just matching the nearest available group. A well-orchestrated chain that clears half the board in one shot is genuinely thrilling.

Our version features six colors, with the variety expanding at higher levels. The physics-based trajectory system includes a visual aim guide showing where your bubble will travel — including bounced paths. A "next bubble" preview lets you plan two shots ahead.

The game progressively adds new rows as you play (if you take too long) and increases the color variety at higher levels, making late-game decisions more complex. Unlike some puzzle games, Bubble Shooter rewards both quick decision-making and careful deliberate play.

**Tips:** Aim for large clusters, not isolated bubbles. Use bank shots to reach awkward positions. Try to pop bubbles in ways that detach hanging clusters beneath them. Save "rare" colored bubbles for when they're most needed — use them to pop clusters that are otherwise unreachable.`,
    category: 'arcade',
    thumbnailUrl: '/thumbnails/bubble-shooter.webp',
    gameUrl: '/games/bubble-shooter/index.html',
    controls: 'Move mouse to aim, click to shoot. Bubbles bounce off walls. On mobile: touch to aim and release to shoot.',
    featured: true,
    isNew: true,
    plays: 456000,
    license: 'MIT',
    author: 'ArcadeHeap',
    aspectRatio: '9/16',
    mobileSupported: true,
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
