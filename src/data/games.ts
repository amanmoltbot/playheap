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
    aspectRatio: '3/4',
    mobileSupported: true,
  },
  {
    id: '2',
    slug: 'tetris',
    title: 'Tetris',
    description: `Tetris is the undisputed king of puzzle games — a game so perfectly designed that it has been played by over a billion people and remains just as compelling today as when it was invented in 1984. The premise is timeless: geometric pieces called tetrominoes fall from the top of the screen, and you must rotate and position them to create complete horizontal lines. When a line fills completely with no gaps, it clears from the board and scores you points. If the stack of pieces reaches the top, the game ends.

There are seven unique tetrominoes, each named after letters they resemble: the I-piece (a straight line of four), the O-piece (a 2×2 square), the T-piece, S-piece, Z-piece, J-piece, and L-piece. Each falls in a random sequence, and the art of Tetris is figuring out where to place each piece to keep your stack low, flat, and full of clean lines. Placing pieces awkwardly leaves gaps that become increasingly difficult to fill as the game speeds up.

Tetris is famous for being "easy to learn, impossible to master." The first few levels crawl along, giving you plenty of time to think. By level 10, pieces are screaming down the screen and you're relying on pure muscle memory. Advanced players chase "Tetrises" — clearing four lines at once with the I-piece for maximum points — and maintain ultra-thin stacks that leave a single-column gap for the I-piece to drop down and clean house. The "T-spin" maneuver, where you twist a T-piece into a tight space at the last moment, is one of gaming's most satisfying advanced techniques.

The psychological phenomenon of "the Tetris effect" — where players see falling blocks in their dreams and start mentally fitting objects into spaces in real life — speaks to how deeply the game embeds itself in your brain. Scientists have actually used Tetris to study memory formation and spatial cognition.

Our browser version of Tetris captures the classic experience faithfully: the familiar color-coded pieces, increasing speed as you level up, and the relentless pressure that keeps you coming back for just one more game. Soft drop, hard drop, and wall kicks are all supported. Whether you're chasing a personal best score or playing Tetris for the very first time, this is the real deal.

**Controls:** ← → to move, ↑ to rotate, ↓ for soft drop, Space for instant hard drop, P to pause. On mobile, use the on-screen buttons.`,
    category: 'puzzle',
    thumbnailUrl: '/thumbnails/tetris.webp',
    gameUrl: '/games/tetris/index.html',
    controls: '← → to move, ↑ rotate, ↓ soft drop, Space hard drop, P pause. Mobile: on-screen controls.',
    featured: true,
    isNew: false,
    plays: 412345,
    aspectRatio: '9/16',
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
    aspectRatio: '9/16',
    mobileSupported: true,
  },
  {
    id: '10',
    slug: 'pacman',
    title: 'Pac-Man',
    description: `Pac-Man is arguably the most recognizable video game character in history — a yellow, chomping circle that devoured his way into global pop culture when Namco released the original arcade cabinet in 1980. Designed by Toru Iwatani, Pac-Man was the first game to target a broad audience beyond typical arcade-goers, and it succeeded spectacularly, becoming the highest-grossing arcade game of all time. Forty-five years later, the game is as fun, tense, and satisfying as ever.

The concept is elegantly simple: guide Pac-Man through a maze, eating every pellet (dot) while avoiding four colorful ghosts — Blinky (red), Pinky (pink), Inky (cyan), and Clyde (orange). Each ghost has a distinct AI behavior: Blinky relentlessly chases Pac-Man directly, Pinky tries to get ahead of him, Inky takes an unpredictable wide arc, and Clyde alternates between chasing and retreating. Understanding and exploiting these behaviors is the key to advanced play.

Scattered around the maze are four Power Pellets — large flashing dots in the corners. Eating one turns all four ghosts blue and vulnerable for a brief window. Chase them down and eat them for bonus points (200, 400, 800, then 1600 per ghost in a single power-up). The pressure game of staying alive while hunting blue ghosts — knowing the timer is counting down — is one of gaming's most intense experiences.

As you progress through levels, ghosts move faster, power-ups last shorter, and the maze dynamics intensify. Experienced Pac-Man players learn "ghost patterns" — the precise routes each ghost follows in specific situations — and exploit them to navigate safely even without power-ups. The fruit bonuses that appear in the center of the maze mid-level (cherry, strawberry, orange, apple…) reward risky positioning with escalating bonus scores.

Our browser version is a faithful HTML5 recreation with authentic maze layout, true ghost AI behaviors, all four ghost personalities, power pellets, fruit bonuses, and progressive level difficulty. Play it on desktop with keyboard controls or switch to mobile with virtual directional input.

Pac-Man is more than nostalgia — it's a genuinely brilliant game that rewards study and practice. Waka waka.`,
    category: 'arcade',
    thumbnailUrl: '/thumbnails/pacman.webp',
    gameUrl: '/games/pacman/index.html',
    controls: 'Arrow keys to move Pac-Man through the maze. Mobile: use virtual D-pad.',
    featured: false,
    isNew: false,
    plays: 412345,
    aspectRatio: '4/3',
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
    aspectRatio: '4/3',
    mobileSupported: true,
  },
  // ─── Shooting ─────────────────────────────────────────────────────────────
  {
    id: '6',
    slug: 'space-invaders',
    title: 'Space Invaders',
    description: `Space Invaders is the game that created the modern video game industry. Released by Taito in 1978, it was the first fixed shooter and the first game to feature a high score system. It caused a nationwide coin shortage in Japan, where arcades bought so many of the machines that entire amusement centers were devoted to nothing else. In the United States, it quadrupled the revenue of the Atari 2600 console when it became an exclusive title. Space Invaders didn't just succeed — it defined what a video game could be.

The setup is iconic: rows of alien invaders descend slowly toward Earth, marching back and forth and stepping lower with each pass. You control a laser cannon at the bottom of the screen, moving left and right to shoot the aliens one by one while four defensive barriers offer brief cover. The aliens shoot back. Shoot all 55 aliens before they reach the bottom, or die trying.

What made Space Invaders revolutionary — and still makes it brilliant — is one mechanical detail: as you kill aliens, the remaining ones move faster. A full formation crawls along; five survivors race back and forth at terrifying speed. This means the game always gets more intense as you succeed, creating a terrifying endgame where a handful of fast-moving aliens dodge your shots with maddening efficiency. The game constantly accelerates toward maximum tension.

The UFO saucer that flies across the top of the screen occasionally awards massive bonus points — but the value depends on how many shots you've fired, creating a hidden depth that reward precision shooting over spray-and-pray. Veterans of the game "count shots" to maximize saucer value, adding a layer of strategy beneath the frantic shooting.

Our HTML5 version faithfully recreates the classic Space Invaders experience: authentic alien formation, descending march, barrier erosion, UFO bonuses, and the brutal speed escalation. Play it with arrow keys and space bar on desktop, or use on-screen mobile controls. How many waves can you survive?

**Tips:** Target the far-right column first (they march the shortest distance to your edge). Use the barriers strategically — they protect you from above but you can also shoot through them to hit aliens directly. Save shots for when invaders are nearly overhead.`,
    category: 'shooting',
    thumbnailUrl: '/thumbnails/space-invaders.webp',
    gameUrl: '/games/space-invaders/index.html',
    controls: '← → to move, Space to shoot. Mobile: on-screen buttons.',
    featured: true,
    isNew: true,
    plays: 298765,
    aspectRatio: '4/3',
    mobileSupported: true,
  },
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
    aspectRatio: '16/9',
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
