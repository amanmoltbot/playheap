# GAP ANALYSIS — CYCLE 1
**ArcadeHeap vs Competitor Standards**  
**Date**: 2026-02-19  
**Analyst**: Subagent (Sonnet 4.5)  
**Input**: AUDIT-CYCLE1.md (34 issues) + COMPETITORS-CYCLE1.md (15 standards) + live code inspection  

---

## METHODOLOGY

All "Current State" entries verified against actual code files, not just the audit report. Every code reference includes file path and exact location.

---

## PART 1: THE 15 STANDARDS — HEAD-TO-HEAD

---

### STANDARD 1: THUMBNAIL DIMENSIONS & QUALITY

**What Competitors Do**  
Poki requires 628×628px minimum square thumbnails, no text, full-bleed. CrazyGames uses 16:9 high-quality previews. Y8 uses 4:3 landscape. All competitors use minimum 20–40KB file size. Thumbnails are pixel-perfect and accurately represent the game.

**ArcadeHeap Current State**  
`GameCard.tsx` line 25 uses `aspect-[4/3]` — this is actually the right call. But then `unoptimized` is passed to every `<Image>` component (line 30), disabling Next.js's optimization pipeline entirely. File sizes confirmed in audit: Ping Pong = 3.2KB, Breakout = 3.7KB, Basketball Shoot = 3.5KB, Zombie Survivor = 3.3KB — critically undersized. Multiple thumbnails are flat-out wrong:
- `ping-pong.webp`: Stock photo of real ping-pong paddles (not the Pong game)
- `2048.webp`: Shows a 5×5 grid (the game is 4×4)
- `flappy-bird.webp`: Polished cartoon bird (actual game is pixel-art "Floppy Bird")
- `breakout.webp`: Tiny 3.7KB file, barely visible on retina screens

Additionally, `sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"` is set but ignored because `unoptimized` bypasses responsive image generation.

**Gap Severity**: HIGH  

**Specific Fix Required**:  
1. `GameCard.tsx` line 30: Remove `unoptimized` prop — let Next.js optimize  
2. Replace 4 wrong thumbnails: ping-pong, 2048, flappy-bird (or rename accurately), breakout  
3. Minimum target dimensions: 800×600px 4:3 ratio at 20–40KB after WebP compression  
4. Verify all thumbnails are ≥ 400×300px source before serving  

**Effort Estimate**: Medium (1–4 hours) — thumbnail creation is the bottleneck, code fix is 2 minutes

---

### STANDARD 2: GAME IFRAME ASPECT RATIO

**What Competitors Do**  
All 4 competitors serve each game at its native correct aspect ratio. Poki's SDK detects and applies the game's natural dimensions. Portrait games play in portrait. Square games play square. No letterboxing. On mobile, games expand to fill available height.

**ArcadeHeap Current State**  
`GameEmbed.tsx` line 74 (in JSX):
```tsx
style={{ aspectRatio: '16/9' }}
```
Hard-coded globally. The `Game` interface in `games.ts` (lines 1–13) has no `aspectRatio` field at all. Every single game plays inside a 16:9 box regardless of its natural proportions.

Effect on specific games:
- **2048** (portrait ~1:1.2): Gets wide black bars left/right; game UI is compressed and unreadable on mobile (iframe = ~390×219px on iPhone — the 4×4 grid and score header are crushed)
- **Tetris** (portrait tall): Playing area is cramped; the playfield gets squeezed
- **Pac-Man** (portrait ~3:4 with UI header): Gets letterboxed; at 219px height the maze is unplayable
- **Minesweeper** (square): Letterboxed with black bars
- **Hextris** (square): Letterboxed with black bars

This is arguably the single biggest gameplay quality failure.

**Gap Severity**: CRITICAL  

**Specific Fix Required**:  
1. `games.ts` Game interface: Add `aspectRatio?: string` field (default `'16/9'`)  
2. Add per-game values:
   ```ts
   // 2048: '3/4'
   // Tetris: '9/16'  
   // Pac-Man: '3/4'
   // Minesweeper: '1/1'
   // Hextris: '1/1'
   // Memory Match: '4/3'
   // Floppy Bird: '4/3'
   // Tower Stack: '9/16'
   ```
3. `GameEmbed.tsx` line 74: Change `style={{ aspectRatio: '16/9' }}` to `style={{ aspectRatio: aspectRatio ?? '16/9' }}`  
4. Pass `aspectRatio={game.aspectRatio}` from `game/[slug]/page.tsx` line 53  
5. On mobile: add `min-h-[400px]` to the container so portrait games don't collapse below usable height  

**Effort Estimate**: Quick (< 1 hour) — data entry + one prop change

---

### STANDARD 3: SEO CONTENT PER GAME PAGE

**What Competitors Do**  
Poki: 1,500+ words per game page. CrazyGames: 500–1,000 words with How to Play, tips, developer info, FAQs. FRVR: 1,000+ words with strategy guides and YouTube tutorials. Y8: 300+ words minimum. Every competitor's game page is a content destination, not just a game wrapper.

**ArcadeHeap Current State**  
`game/[slug]/page.tsx` lines 68–87 show the game info section:
- "About [title]" heading
- `game.description` (1–2 sentences, ~30–80 words from `games.ts`)
- "Controls" section: `game.controls` (single line, e.g., "Arrow keys to slide tiles.")

That is the entirety of the text content. Total word count per game page: **30–100 words** depending on game. No "How to Play" section. No tips. No desktop vs. mobile controls differentiation. No history/origin section. No FAQ. No strategy content.

The `generateMetadata` function in `game/[slug]/page.tsx` (lines 15–27) uses `game.description` as the meta description — meaning duplicate metadata across similar games, and no unique long-tail keywords per page.

**Gap Severity**: HIGH  

**Specific Fix Required**:  
1. Add to `Game` interface in `games.ts`:
   ```ts
   howToPlay?: string;      // 2–3 sentence instructions
   tips?: string[];         // 3–5 bullet points
   mobileControls?: string; // touch controls description
   history?: string;        // 1 paragraph origin/history
   ```
2. Populate these fields in `games.ts` for all 24 games (start with top 8 by plays)  
3. Update `game/[slug]/page.tsx` to render new sections:
   - "How to Play" section (below controls)
   - "Tips & Tricks" section (bullet list)
   - "About the Game" section (history) where applicable
4. Target 300 words minimum per game page, 500+ for top games  
5. Update `generateMetadata` to compose richer, unique descriptions combining description + how-to-play preview  

**Effort Estimate**: Heavy (4+ hours) — content writing for 24 games is the bottleneck

---

### STANDARD 4: STRUCTURED DATA / JSON-LD

**What Competitors Do**  
All 4 competitors have structured data. Poki/CrazyGames likely use VideoGame + WebSite + BreadcrumbList schemas. Google uses these for rich results: breadcrumbs in SERPs, game ratings, enhanced preview cards. Absence = invisible to Google's enhanced display.

**ArcadeHeap Current State**  
Verified zero schema markup across all pages:
- `layout.tsx`: No JSON-LD script tag anywhere  
- `game/[slug]/page.tsx`: No schema, only basic OpenGraph metadata  
- `category/[slug]/page.tsx`: No schema  
- No `/app/head.tsx` or structured data utility file exists  

**Gap Severity**: HIGH  

**Specific Fix Required**:  
1. Create `/src/lib/schema.ts` utility file with schema generators  
2. In `game/[slug]/page.tsx`, add to the returned JSX:
   ```tsx
   <script
     type="application/ld+json"
     dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
       "@type": "VideoGame",
       "name": game.title,
       "description": game.description,
       "genre": categoryLabel,
       "image": `https://arcadeheap.com${game.thumbnailUrl}`,
       "playMode": "SinglePlayer",
       "applicationCategory": "Game",
       "operatingSystem": "Web Browser",
       "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
     })}}
   />
   ```
3. In `layout.tsx`, add WebSite schema with SearchAction:
   ```json
   {
     "@type": "WebSite",
     "url": "https://arcadeheap.com",
     "potentialAction": {
       "@type": "SearchAction",
       "target": "https://arcadeheap.com/games?q={search_term_string}",
       "query-input": "required name=search_term_string"
     }
   }
   ```
4. In `game/[slug]/page.tsx` breadcrumb nav: Add BreadcrumbList JSON-LD  

**Effort Estimate**: Medium (1–4 hours) — boilerplate heavy but not conceptually hard

---

### STANDARD 5: CATEGORY DEPTH

**What Competitors Do**  
Poki: 100–500+ games per major category. CrazyGames: 50–500+ per category, hides thin ones. FRVR: Accepted at 3–20 ONLY because they publish exclusively. Y8: 800–8,000+ (Flash legacy). Minimum viable: no competitor shows a category page with fewer than ~10 games.

**ArcadeHeap Current State**  
From `games.ts` — exact counts per category:

| Category | Count | Notes |
|----------|-------|-------|
| Puzzle | 5 | 2048, Tetris, Minesweeper, Memory Match, Hextris |
| Arcade | 6 | Snake, Breakout, Tower Stack, Pac-Man, Floppy Bird, Clumsy Bird |
| Shooting | 2 | Space Invaders, Radius Raid |
| Adventure | **1** | Astray Maze only |
| Strategy | **1** | Tic Tac Toe only |
| Action | 2 | Ninja Slash, Zombie Survivor |
| Racing | 2 | Speed Racer, Drift King |
| Sports | 2 | Ping Pong, Basketball Shoot |
| Multiplayer | **1** | Tank Battle only |
| IO Games | 2 | Dot Eater, Slither Solo |

Three categories with 1 game. Five categories with 2 games. Category metadata in `category/[slug]/page.tsx` line 20 says `"Hundreds of ${cat.label.toLowerCase()} games"` — literally false for every single category.

Additionally, `page.tsx` (homepage) `categorySections` slice (line 12) shows only `categories.slice(0, 4)` — which translates to Action, Puzzle, Racing, Sports on homepage. Arcade — the site's namesake — is not in its own homepage section despite having 6 games (most of any category).

**Gap Severity**: HIGH  

**Specific Fix Required**:  
1. `category/[slug]/page.tsx` line 20: Replace `"Hundreds of..."` with `"Play ${catGames.length} free ${cat.label.toLowerCase()} games..."` (already done in the page body but NOT in metadata — fix the metadata)  
2. `page.tsx` line 12: Change from fixed `slice(0, 4)` to showing categories with ≥ 3 games (or remove category sections and replace with "Browse by Category" grid only)  
3. Immediate content need: Add 3–5 more games to Adventure, Strategy, Multiplayer — these are effectively empty categories  
4. Hide thin categories from header nav until ≥ 3 games  

**Effort Estimate**: Medium-Heavy (finding/building games is 4+ hours; code fix is Quick)

---

### STANDARD 6: SOCIAL PROOF METRIC (REPLACE FAKE PLAY COUNTS)

**What Competitors Do**  
Poki shows real upvote counts from actual user voting — Subway Surfers shows "17 million player upvotes." CrazyGames shows real player counts from analytics. Y8 shows community ratings (1–10 scale). FRVR shows star ratings (1–5). All numbers are derived from actual user behavior, not hardcoded.

**ArcadeHeap Current State**  
`games.ts` lines 35, 55, 70, etc. — every `plays` value is a static hardcoded integer:
```ts
plays: 489756,  // 2048 — never changes
plays: 412345,  // Tetris — never changes
plays: 67890,   // Tank Battle — never changes since launch
```

`GameCard.tsx` lines 11–16: `formatPlays()` renders these as "489K", "412K" etc.  
`game/[slug]/page.tsx` line 81: `🎮 {game.plays.toLocaleString()} plays` displayed on game page.

These numbers: (a) never increment, (b) are visibly identical for Tetris and Pac-Man (both 412,345), (c) were assigned arbitrarily with no basis. Any returning visitor will notice the count is identical on visit 2.

**Gap Severity**: CRITICAL  

**Specific Fix Required**:  
Option A (Immediate, no backend):  
- Remove play count display entirely from `GameCard.tsx` and `game/[slug]/page.tsx`  
- Replace with category badge only in card footer  

Option B (Real data, Supabase, proper fix):  
1. Create Supabase table: `game_plays(slug TEXT, plays INT, updated_at TIMESTAMP)`  
2. Seed with current static values  
3. Create API route `/api/play/[slug]` that increments on game load  
4. Call from `GameEmbed.tsx` `handleLoad` callback  
5. Display real count from Supabase on game page (SSR or ISR with revalidate)  

Option C (Star ratings, no backend needed):  
- Replace play count with star rating (localStorage for anonymous)  
- 5-star click component, stores rating in localStorage per slug  

**Recommendation**: Do Option A immediately (hide fake counts), implement Option B properly in a future cycle.  

**Effort Estimate**: Quick for Option A (remove display, 10 minutes); Heavy for Option B (Supabase setup, 4+ hours)

---

### STANDARD 7: RECENTLY PLAYED (MINIMUM RETENTION)

**What Competitors Do**  
Poki, CrazyGames, Y8 all have "Recently Played" sections — persistent, shows last 4–8 games with thumbnails. No login required on CrazyGames/Poki for basic recently played. Returns users to games they were playing; dramatically improves session depth and return visit rate.

**ArcadeHeap Current State**  
Zero. No localStorage writes anywhere. No "recently played" component. No tracking in `GameEmbed.tsx`. No section on homepage or header.

The entire `GameEmbed.tsx` component (onLoad callback, line 19–21) does nothing but set loading state — there is no hook to write game data anywhere.

**Gap Severity**: HIGH  

**Specific Fix Required**:  
1. `GameEmbed.tsx`: In `handleLoad` callback, add:
   ```ts
   const recentKey = 'ah_recent';
   const recent = JSON.parse(localStorage.getItem(recentKey) || '[]');
   const updated = [{ slug: gameSlug, title, thumb: thumbnailUrl, ts: Date.now() }, 
     ...recent.filter((g: {slug: string}) => g.slug !== gameSlug)
   ].slice(0, 6);
   localStorage.setItem(recentKey, JSON.stringify(updated));
   ```
   (Pass `gameSlug` and `thumbnailUrl` as props to `GameEmbed`)  

2. Create `/src/components/RecentlyPlayed.tsx` — reads localStorage, renders horizontal scrollable row of game cards with thumbnails  

3. `page.tsx` (homepage): Add `<RecentlyPlayed />` section above Featured Games section (hidden if empty)  

4. Alternative: Add to Header as dropdown from a "Recent" icon  

**Effort Estimate**: Quick (< 1 hour) — localStorage is trivial, component is simple

---

### STANDARD 8: OG IMAGES & SOCIAL PREVIEWS

**What Competitors Do**  
All 4 competitors have custom branded OG images. When shared on Discord/Twitter/WhatsApp, they show polished game artwork or platform branding. Per-game OG images use high-quality game art. Never a placeholder service.

**ArcadeHeap Current State**  
`layout.tsx` lines 13–19:
```ts
images: [{
  url: 'https://placehold.co/1200x630/0f0f0f/8b5cf6?text=ArcadeHeap+-+Free+Online+Games',
  width: 1200,
  height: 630,
}]
```

`game/[slug]/page.tsx` lines 22–25:
```ts
images: [game.thumbnailUrl],
```
This passes a relative path like `/thumbnails/2048.webp` directly as the OG image. Without a full absolute URL, this will fail on many platforms (WhatsApp, Telegram, some Discord unfurlers). Also, the thumbnail is 400×300px at best — well below the 1200×630px optimal OG size.

Twitter card uses the same placehold.co URL in `layout.tsx` line 20.

**Gap Severity**: HIGH  

**Specific Fix Required**:  
1. Generate `/public/og-image.png` — 1200×630px branded ArcadeHeap image (use Nano Banana Pro: dark background, ArcadeHeap logo/wordmark, "Free Online Games" tagline, game thumbnails collage)  
2. `layout.tsx`: Replace placehold.co URL with `https://arcadeheap.com/og-image.png`  
3. `game/[slug]/page.tsx` lines 22–25: Fix to absolute URL:
   ```ts
   images: [{
     url: `https://arcadeheap.com${game.thumbnailUrl}`,
     width: 400,
     height: 300,
   }]
   ```
4. Future: Generate per-game 1200×630 OG images (thumbnail + game title overlay)  

**Effort Estimate**: Quick (< 1 hour) for site-level OG image; Medium for per-game images

---

### STANDARD 9: LOADING SCREEN BRANDING

**What Competitors Do**  
All 4 competitors show a branded loading overlay before any game content appears. Poki shows its teal overlay with the Poki logo. CrazyGames shows their loader. FRVR shows their white-themed loader. Y8 has a branded loader. This serves three functions: (1) brand reinforcement, (2) hides author title screens, (3) creates unified platform feel.

**ArcadeHeap Current State**  
`GameEmbed.tsx` lines 64–70:
```tsx
{isLoading && (
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0f0f1a] z-10">
    <div className="relative w-16 h-16 mb-4">
      <div className="absolute inset-0 border-4 border-gray-800 rounded-full" />
      <div className="absolute inset-0 border-4 border-t-[#8b5cf6] rounded-full animate-spin" />
    </div>
    <p className="text-gray-400 text-sm animate-pulse">Loading {title}…</p>
  </div>
)}
```

This is a minimal purple spinner with zero branding. No ArcadeHeap logo. No tagline. Nothing that says "you are on ArcadeHeap." Also note: the `isLoading` state is set to `false` by `handleLoad` (onLoad event) — but for some games with title screens (Pac-Man, Floppy Bird), the iframe loads and `onLoad` fires before the game's own title screen appears. So the ArcadeHeap loader disappears and is immediately replaced by the game author's branding.

The fix also needs a 2-second minimum display time to cover game title screens.

**Gap Severity**: MEDIUM  

**Specific Fix Required**:  
1. `GameEmbed.tsx`: Add ArcadeHeap logo mark to the loading overlay:
   ```tsx
   <div className="...">
     <span className="text-4xl mb-2">🎮</span>
     <span className="text-xl font-extrabold text-white mb-6">
       Arcade<span className="text-[#8b5cf6]">Heap</span>
     </span>
     {/* existing spinner */}
     <p className="text-gray-400 text-sm mt-4 animate-pulse">Loading {title}…</p>
   </div>
   ```
2. Add minimum display duration (2s) so game author title screens are hidden:
   ```ts
   const handleLoad = useCallback(() => {
     setTimeout(() => setIsLoading(false), 2000);
   }, []);
   ```
3. Future: Add a real SVG logo to replace emoji once custom logo exists  

**Effort Estimate**: Quick (< 1 hour)

---

### STANDARD 10: URL STRUCTURE & SLUG FORMAT

**What Competitors Do**  
Poki: `/en/g/[slug]`. CrazyGames: `/game/[slug]`. FRVR: subdomain. Y8: `/games/[slug]` with underscores (bad). All use hyphens, lowercase, no special characters.

**ArcadeHeap Current State**  
`/game/[slug]` with kebab-case slugs. Checking `games.ts` slugs:
- `2048` ✅
- `tetris` ✅  
- `minesweeper` ✅  
- `memory-game` ✅  
- `hextris` ✅  
- `snake` ✅  
- `flappy-bird` ✅ (note: game is called "Floppy Bird" but slug is `flappy-bird` — SEO mismatch but changing slugs now would break any existing traffic)
- All others: kebab-case ✅

**Gap Severity**: LOW  

**Specific Fix Required**:  
No changes needed. Current `/game/[slug]` structure is clean. The `flappy-bird` slug vs "Floppy Bird" title discrepancy is an SEO issue but not a structural one.  
Minor: Note that CrazyGames uses singular `/game/` not `/games/` — ArcadeHeap uses `/game/` for individual games and `/games` for the listing, which is correct.

**Effort Estimate**: N/A (already compliant)

---

### STANDARD 11: CATEGORIES + TAGS DUAL SYSTEM

**What Competitors Do**  
CrazyGames uses both `/c/[category]` (25 main categories) AND `/t/[tag]` (hundreds of tags like "zombie", "2-player", "retro", "match-3"). Tags create cross-category discovery paths and massive long-tail SEO. Y8 has a `/tags` system. Even Poki effectively does this via its 200-category system.

**ArcadeHeap Current State**  
`games.ts` `Game` interface (lines 1–13): Has only `category: string` — a single category per game. No tags. No secondary categorization.

There are no tag routes anywhere in `/src/app/`. No `/tags` page. No `/tags/[tag]` pages. No way to find "all multiplayer games" (beyond the one game in the Multiplayer category) or "all keyboard games" or "all retro games."

The single-category system creates invisible walls: a player who likes 2048 might also love Hextris and Tetris (all puzzle), but there's no way to discover that Snake or Tower Stack are also great keyboard/casual games without navigating away from Puzzle.

**Gap Severity**: MEDIUM  

**Specific Fix Required**:  
1. Add to `Game` interface in `games.ts`:
   ```ts
   tags: string[];
   ```
2. Populate tags for all 24 games — examples:
   ```ts
   // 2048: ['puzzle', 'keyboard', 'numbers', 'casual', 'one-player']
   // Tetris: ['puzzle', 'keyboard', 'classic', 'retro', 'one-player']
   // Pac-Man: ['arcade', 'classic', 'retro', 'keyboard', 'maze']
   // Tank Battle: ['multiplayer', 'two-player', 'keyboard', 'action']
   ```
3. Create `/src/app/tags/[tag]/page.tsx` — static generated tag pages that filter games  
4. Add tag links below game description on game pages  
5. Add tag cloud to homepage "Browse by Category" section  

**Effort Estimate**: Medium (1–4 hours) — data tagging + route creation

---

### STANDARD 12: GAME PAGE CONTENT QUALITY

**What Competitors Do**  
All competitors treat game pages as content destinations with multiple sections. CrazyGames has: description, features, how to play, tips, developer credit, release date, related games paragraph descriptions. FRVR has tutorials, FAQs, strategy guides. Poki has 1,500+ words of unique content. Even Y8 has 300+ word descriptions.

**ArcadeHeap Current State**  
`game/[slug]/page.tsx` renders this content for each game:

```
[H1: game.title — just the title, not "Play [Title] Free Online"]
[GameEmbed]
[About {game.title}]
  - category badge, featured badge, isNew badge, play count
  - game.description (1–2 sentences)
  - Controls: game.controls (one line)
[More {category} Games — only if related.length > 0]
```

The H1 is just `{game.title}` (line 57 in page.tsx) — not keyword-optimized. "Play Tetris Free Online" ranks better than just "Tetris".

No "How to Play" section. No tips. No desktop vs. mobile controls differentiation. No developer info section. No history/origin.

The related games section (line 88–100) only shows games in the same category, and disappears entirely for thin-category games (Adventure, Strategy, Multiplayer). That means the Tic Tac Toe page has NO related games section at all.

**Gap Severity**: HIGH  

**Specific Fix Required**:  
1. `game/[slug]/page.tsx` line 57: Change `<h1>` to:
   ```tsx
   <h1 className="...">{game.title} — Play Free Online</h1>
   ```
2. Add structured "How to Play" section with desktop + mobile controls separately  
3. Add "Tips & Tricks" section (3–5 bullets)  
4. Update `getRelatedGames()` in `games.ts` to fall back to cross-category games when same-category count < 4  
5. Add "You Might Also Like" section below related games (3 cross-category picks)  
6. Add game metadata row: Developer, Platform, Controls type, Players  

**Effort Estimate**: Heavy (4+ hours) — content + code

---

### STANDARD 13: AD ARCHITECTURE

**What Competitors Do**  
Zero competitor allows game authors' ad code to fire on their platform. Poki uses its own SDK that wraps everything. CrazyGames controls all ad injection. Y8 controls all ads. The rule is absolute: the platform controls ads, authors never inject code.

**ArcadeHeap Current State**  
As documented in AUDIT-CYCLE1.md:
- `public/games/pacman/index.html` line 169–176: Author's AdSense (`ca-pub-???`) + Google Analytics (`UA-28993174-1`) firing
- `public/games/hextris/index.html` line 68: Author's AdSense (`ca-pub-9107422120987163`) + Analytics (`UA-51272720-2`) firing
- Pac-Man has canonical tag pointing to `pacman.platzh1rsch.ch`

ArcadeHeap has **zero** of its own ad placements. The `game/[slug]/page.tsx` layout shows no ad slots. The homepage `page.tsx` has no ad slots. There is literally no monetization at all — while simultaneously serving another person's ads for free.

**Gap Severity**: CRITICAL (for the 3P ads) / HIGH (for missing own ads)  

**Specific Fix Required**:  
Immediate (Pre-launch):
1. `public/games/pacman/index.html`: Remove lines with `pagead2.googlesyndication.com` script, `adsbygoogle` div, and GA `_setAccount('UA-28993174-1')` code. Remove `<link rel="canonical" href="http://pacman.platzh1rsch.ch/">`.
2. `public/games/hextris/index.html`: Remove `ca-pub-9107422120987163` AdSense script and `UA-51272720-2` GA code.
3. Add `sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-forms"` to iframe in `GameEmbed.tsx` (prevents future code from escaping)

Future (Monetization phase):
4. `game/[slug]/page.tsx`: Add ad slot `<div>` above and below GameEmbed for future ad placement
5. `page.tsx`: Add ad slot between homepage sections
6. Do NOT add ads until play counts are real and UX is polished — ad revenue at 24 games with zero traffic is zero anyway  

**Effort Estimate**: Quick (< 1 hour) for removing 3P code; Medium for adding own ad slots

---

### STANDARD 14: COMMUNITY + TRUST SIGNALS

**What Competitors Do**  
Y8: Reddit, Discord, Forum, Instagram, Facebook, Twitter, YouTube — massive community presence. CrazyGames: Discord + TikTok + YouTube. Poki: "100 million monthly players" trust badge everywhere. FRVR: Cohesive brand identity across all properties. All show authentic social proof, not fabricated numbers.

**ArcadeHeap Current State**  
`Footer.tsx`: The footer has 4 columns — Brand, Pages, Categories, Legal. Zero social links. No Discord. No Twitter. No YouTube. No community signals.

`layout.tsx`: No "X monthly players" trust badge. No social meta tags beyond basic OpenGraph.

`page.tsx` hero section (line 28): Has `"Over {games.length} free browser games"` — which renders as "Over 24 free browser games." This is not a trust signal; it's a statement of inadequacy compared to competitors showing "Over 4,500 games."

There are no trust signals on game pages. No verified ratings. No player counts (fake ones don't count). No "Safe for all ages" badge. Nothing that communicates ArcadeHeap is a legitimate platform.

**Gap Severity**: MEDIUM  

**Specific Fix Required**:  
1. `Footer.tsx`: Add social column or social icons row:
   - Create Twitter/X: @ArcadeHeap (placeholder link)
   - Create Discord server
   - Add links: `{href: 'https://discord.gg/...', label: 'Discord Community'}`  
2. `page.tsx` hero: Change count claim or remove — "24 games" is weak. Consider: "Play Free — No Download, No Sign-Up" instead.  
3. Add trust badge row below hero: "🔒 No Login Required • 🆓 Always Free • 📱 Mobile Friendly • 🎮 24 Games"  
4. Future: Add player count badge once analytics are running ("X players today")  

**Effort Estimate**: Quick (< 1 hour) for social links and trust badges

---

### STANDARD 15: SITE LOADING PERFORMANCE

**What Competitors Do**  
All 4 competitors have heavily optimized performance. Poki uses CDN-served assets, lazy loading, and their own infrastructure. CrazyGames targets fast Core Web Vitals. FRVR's games are their own so they control everything. All use proper image optimization pipelines.

**ArcadeHeap Current State**  
`GameCard.tsx` line 30: `unoptimized` prop on every `<Image>` — disables Next.js's image optimization. Next.js can serve WebP at the exact required size (responsive), but `unoptimized` bypasses all of this. Thumbnails are served at original size regardless of display size.

`layout.tsx`: No analytics script. No performance monitoring. Zero data on actual user experience.

There are no lazy-loading hints below the fold. The homepage renders all game sections (Featured: 10 games, Popular: 8 games, New: 8 games, 4 category sections: ~16 games) — approximately 42 game card images loaded on homepage, all without optimization.

`sitemap.ts`: Every page has `lastModified: now` — will cause Google to re-crawl everything on every deploy.

**Gap Severity**: MEDIUM  

**Specific Fix Required**:  
1. `GameCard.tsx`: Remove `unoptimized` prop — Next.js image optimization should work on Vercel  
2. `layout.tsx`: Add analytics (Plausible recommended — privacy-friendly, no cookie banner needed):
   ```tsx
   <Script defer data-domain="arcadeheap.com" src="https://plausible.io/js/script.js" />
   ```
3. `GameCard.tsx`: Add `priority` prop to first 4 images, lazy for rest (pass a `priority` prop from `GameGrid`)  
4. `sitemap.ts`: Replace `lastModified: now` with actual modification tracking (use a date constant per game/page)  
5. Audit and set `sizes` attribute correctly in `GameCard.tsx` for responsive image delivery  

**Effort Estimate**: Quick (< 1 hour) for image optimization + analytics; Medium for sitemap dates

---

## PART 2: ADDITIONAL GAP ANALYSIS

---

### WHERE ARCADEHEAP LOOKS AMATEUR

**1. The Logo is a Gamepad Emoji**  
`Header.tsx` line 28: `<span className="text-2xl">🎮</span>` + "Arcade**Heap**" text. The emoji is just the standard game controller emoji — no custom design, no wordmark, no SVG. Compare to Poki (clean custom wordmark), CrazyGames (stylized logo), FRVR (distinctive letter treatment). This is the #1 visual signal that screams "starter project."

**2. Fake Play Counts with Identical Numbers**  
`games.ts`: Tetris and Pac-Man both have `plays: 412345` — exactly the same number. Any user who notices this across two games will immediately distrust the entire site. These numbers have decimal precision that real analytics would never produce (real numbers look like "412,891" not "412,345").

**3. The Hero Says "Over 24 Free Games"**  
`page.tsx` line 23: `"Over {games.length} free browser games"` → "Over 24 free browser games." Poki says "100 million monthly players." CrazyGames says "over 4,500 games." "Over 24" is a factual claim that communicates the opposite of scale.

**4. Category Pages with 1–2 Games**  
A user who clicks "Adventure" from the header nav lands on a page with one game: Astray Maze. One. The competitor experience is 50–8,000 games per category. This is a trust-destroying discovery dead-end.

**5. Fake "Play Now" Hover State but No Animated Preview**  
`GameCard.tsx` shows a "Play Now" button on hover — this is fine. But every competitor of note (Poki, CrazyGames) shows animated game preview video on hover. Static thumbnails feel like 2015 design. Not a must-fix today, but visually dated compared to what users see on competitor sites.

**6. No Social Links Anywhere**  
`Footer.tsx` has zero social links. A professional game portal without a single social presence looks like an abandoned project. Even a single Twitter/X link and Discord invite would communicate "real team behind this."

**7. `placehold.co` in Social Previews**  
When someone shares `arcadeheap.com` on Discord or Telegram, the preview shows a gray rectangle with "ArcadeHeap - Free Online Games" as text. Placehold.co is a mock-up service used in prototypes. Seeing it in production tells developers (and anyone technical) this site is unfinished.

**8. Author Credits Visible in Multiple Games**  
2048 shows "Created by Gabriele Cirulli" in the game footer. Floppy Bird shows "original game by dong nguyen / recreated by nebez briefkani / view github project" persistently on screen. Pac-Man shows "PACMAN CANVAS" and credits at title screen. Hextris post-game shows Twitter/Google Play/iTunes links. This makes ArcadeHeap feel like a directory of other people's projects, not a platform.

---

### WHERE USERS WILL BOUNCE

**1. Mobile Game Pages — The 219px Iframe Disaster**  
iPhone 14 Pro (393px width). Homepage looks fine — card grid is readable. User taps a game. Game page loads. The `GameEmbed` iframe has `aspectRatio: '16/9'`, so at 393px content width (minus padding): `393 - 32px = 361px` wide → height = `361 / (16/9) = 203px`. 203px tall iframe. For Pac-Man, 2048, Tetris, Minesweeper — this is genuinely unplayable. User immediately closes the tab. This is the highest-probability bounce point on mobile.

Competitor experience: On CrazyGames mobile, the game fills most of the screen. On Poki mobile, portrait games show in full height. On ArcadeHeap, users see a 200px-tall game window.

**2. "Hot Games" Links to 2-Game Action Category**  
Hero CTA: "🔥 Hot Games" links to `/category/action` — which has Ninja Slash and Zombie Survivor. That's it. User who clicks this expecting "hot games" gets 2 games and a back button. On Poki, "Hot" sections have 30+ curated games. This button should link to `/games?sort=popular`.

**3. Single-Game Category Pages**  
User explores, finds "Adventure" in the header. Clicks it. Lands on `/category/adventure` with one game: Astray Maze. No "More Adventure Games Coming Soon" explanation. No cross-suggestions. Just one game and then "More Categories" at the bottom. Bounce rate here will be near 100%.

**4. No Return Mechanism After Playing**  
User plays 2048 for 10 minutes. Game ends. They close or navigate away. ArcadeHeap has no: recently played section to pull them back, no email capture, no "play again" suggestions, no favorites to save the game. The user is gone forever. Poki and CrazyGames would show the user 4 more games immediately post-session.

**5. Author Exit Doors in Hextris**  
In Hextris, the post-game score screen shows "Google Play" and "iTunes App Store" buttons — actual working links that take the user OFF ArcadeHeap to download the original game. This is the only game portal in the world that actively helps users leave.

**6. Author Credits as Exit Doors in Floppy Bird**  
Floppy Bird shows "view github project" as a persistent link in the game UI. Curious users who click this go to GitHub, then read about the original creator, then play the original. Done.

**7. Search Bar Invisible on Mobile**  
`Header.tsx`: The search form is `hidden md:flex` — invisible on mobile. Mobile users get no search on the homepage. The mobile menu has a search form, but it's inside the hamburger menu — hidden behind an interaction step. Poki has search prominently in the mobile header.

---

### MOBILE UX GAPS

**1. Forced 16:9 Aspect Ratio Murders Portrait Games on Mobile** (repeated — most critical)  
Specific numbers: On iPhone SE (375px), 16:9 iframe height = 211px. On Samsung Galaxy S21 (360px), 16:9 iframe height = 202px. Pac-Man's maze is ~260px native height — it's literally cropped.

**2. No Touch Control Instructions**  
`game/[slug]/page.tsx`: The "Controls" section shows only keyboard controls (e.g., "Arrow keys or WASD"). No mobile swipe/tap instructions exist in `games.ts` for ANY game. A mobile user playing Snake is expected to use arrow keys on a touchscreen — which is impossible.

Every game in the library except Memory Match, Basketball Shoot, Tower Stack, and Dot Eater/Slither Solo has keyboard-only controls in the data. For racing games (Speed Racer, Drift King) the control says "← → arrow keys or swipe" — the swipe part exists, but this isn't communicated for all mobile-playable games.

**3. No Mobile-Specific Game Controls Overlay**  
There's no D-pad overlay, no on-screen buttons, no touch control system. Competitors handle this via their SDK or game-specific controls. Games like Snake and Space Invaders are completely uncontrollable on mobile as currently deployed.

**4. Hero Buttons Wrap on Small Screens**  
`page.tsx` lines 37–46: Two buttons (`Browse All Games →` and `🔥 Hot Games`) in a flex-wrap row. On screens < 360px (or with large font sizes), these can stack awkwardly. Minor but visible.

**5. Related Game Thumbnails Too Small in Sidebar**  
`game/[slug]/page.tsx` lines 110–121: The sidebar related games list uses `w-10 h-10` (40×40px) thumbnails. On mobile, the sidebar doesn't show (it's in the `lg:w-[300px]` section that collapses on small screens). But the related games below the iframe use `GameGrid cols={4}` which renders 4 columns at small sizes — each card is tiny. On 390px screen, each card is ~90px wide. Thumbnails become nearly unrecognizable.

---

## PART 3: PRIORITIZED FIX LIST FOR SESSION 4

---

### SESSION 4: MUST-FIX (Highest Impact, Quick/Medium Effort)

These have the highest ratio of user perception impact to implementation effort. Do all of these in Session 4.

#### 🔴 P1: Fix Game Iframe Aspect Ratios [CRITICAL IMPACT / QUICK FIX]
**File**: `src/data/games.ts` + `src/components/GameEmbed.tsx` + `src/app/game/[slug]/page.tsx`  
**What**: Add `aspectRatio` field to Game interface, populate per-game, pass to GameEmbed, apply in CSS  
**Why first**: The mobile iframe at 202px high is the most likely reason any mobile user bounces immediately. This is the biggest UX failure and takes under an hour.  
**Specific changes**:
- `games.ts`: Add `aspectRatio?: string` to interface + set per-game values (2048→`3/4`, Tetris→`9/16`, Pac-Man→`3/4`, Minesweeper→`1/1`, Hextris→`1/1`, Tower Stack→`9/16`)
- `GameEmbed.tsx`: Replace `style={{ aspectRatio: '16/9' }}` → `style={{ aspectRatio: aspectRatio ?? '16/9' }}`, add `min-h-[300px]` on mobile
- `game/[slug]/page.tsx`: Pass `aspectRatio={game.aspectRatio}` to `<GameEmbed>`

#### 🔴 P2: Strip Third-Party Ads + Analytics from Pac-Man + Hextris [CRITICAL RISK / QUICK FIX]
**Files**: `public/games/pacman/index.html`, `public/games/hextris/index.html`  
**What**: Delete AdSense script tags, GA script tags, canonical pointing to platzh1rsch.ch  
**Why second**: Legal liability (AdSense ToS), privacy violation (GDPR), plus serving competitor's ads for free  
**Specific changes**:
- Pac-Man: Remove lines 169–176 (AdSense div + script), remove GA `_gaq` code, remove canonical `<link rel="canonical" href="http://pacman.platzh1rsch.ch/">`
- Hextris: Remove `ca-pub-9107422120987163` AdSense script line 68, remove `UA-51272720-2` GA initialization
- Add `sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-forms"` to GameEmbed iframe

#### 🔴 P3: Remove App Store Links + Author Exit Doors from Games [CRITICAL UX / QUICK FIX]
**Files**: `public/games/hextris/` (JS/HTML), `public/games/flappy-bird/` (HTML/CSS), `public/games/2048/` (HTML)  
**What**: Hide or remove Google Play/iTunes buttons in Hextris post-game screen, remove/hide "view github project" in Floppy Bird, hide "Created by Gabriele Cirulli" footer in 2048  
**Why third**: These are active exit doors that send users off ArcadeHeap permanently  

#### 🟠 P4: Hide Fake Play Counts [HIGH TRUST IMPACT / QUICK FIX]
**Files**: `src/components/GameCard.tsx` (lines 12–16, 54–59), `src/app/game/[slug]/page.tsx` (line 81)  
**What**: Remove the play count display entirely. Replace with a star/rating placeholder or just category badge  
**Why fourth**: Tetris and Pac-Man showing identical 412,345 plays is immediately detectable and destroys credibility  
**Quick implementation**: Comment out `formatPlays()` usage and the plays display span in GameCard + game page

#### 🟠 P5: Create Branded OG Image [HIGH SOCIAL IMPACT / QUICK FIX]
**Files**: `/public/og-image.png` (create), `src/app/layout.tsx` (line 14)  
**What**: Generate 1200×630px branded ArcadeHeap OG image, replace placehold.co URL  
**Why fifth**: Every link share on Discord/Telegram/Twitter shows a placeholder. Highest-visibility trust signal fix for zero effort  
**Quick implementation**: Use Nano Banana Pro to generate a dark-themed 1200×630 image with ArcadeHeap branding + game thumbnails collage, save to `/public/og-image.png`

#### 🟠 P6: Fix "Hot Games" Hero Button + Category Metadata Lie [HIGH SEO + UX / QUICK FIX]
**Files**: `src/app/page.tsx` (line 43), `src/app/category/[slug]/page.tsx` (line 20)  
**What**:
- Change "Hot Games" href from `/category/action` to `/games?sort=popular`
- Change metadata description from `"Hundreds of ${cat.label.toLowerCase()} games"` to `"Play ${catGames.length} free ${cat.label.toLowerCase()} games online."`  
**Why sixth**: "Hot Games → 2 games" is actively embarrassing and misleading metadata can cause search penalties

#### 🟠 P7: Add Recently Played [HIGH RETENTION / QUICK FIX]
**Files**: `src/components/GameEmbed.tsx`, `src/components/RecentlyPlayed.tsx` (create), `src/app/page.tsx`  
**What**: localStorage-based recently played tracking, shown as horizontal row on homepage (above Featured)  
**Why seventh**: Zero retention mechanism today. Recently Played is the single highest-ROI retention feature (no backend needed)  

#### 🟠 P8: Fix Footer Categories + Add Social Links [MEDIUM TRUST / QUICK FIX]  
**Files**: `src/components/Footer.tsx`  
**What**:
- Replace `categories.slice(0, 6)` with full `categories` list
- Add social links column: Discord (create free server), Twitter/X (@ArcadeHeap)
**Why eighth**: Missing 4 categories from footer hurts SEO internal linking; zero social signals = zero trust

#### 🟠 P9: Add JSON-LD VideoGame Schema to Game Pages [HIGH SEO / MEDIUM EFFORT]
**Files**: `src/app/game/[slug]/page.tsx`, `src/lib/schema.ts` (create)  
**What**: VideoGame structured data on every game page + WebSite SearchAction on layout  
**Why ninth**: Direct ranking improvement, rich result eligibility in Google. Single template implementation covers all 24 games

#### 🟠 P10: Remove Image `unoptimized` Prop + Add Analytics [MEDIUM PERFORMANCE / QUICK FIX]
**Files**: `src/components/GameCard.tsx` (line 30), `src/app/layout.tsx`  
**What**: Remove `unoptimized`, enable Next.js image CDN optimization. Add Plausible Analytics script  
**Why tenth**: Flying blind with no data. And 42 unoptimized images on homepage = slow load

---

### FUTURE CYCLES (Important but Not Session 4)

**Cycle 2 — Content & Discovery:**
- Expand game library: Target 5+ games per category minimum (currently impossible for Adventure/Strategy/Multiplayer)
- Write 300+ word game page content: How to Play, Tips, Controls per game  
- Add `tags` system to `games.ts` + create `/tags/[tag]` pages  
- Add cross-category related games (update `getRelatedGames()`)  
- Fix thumbnail mismatches (Ping Pong stock photo, 2048 wrong grid)  
- Add mobile controls instructions to all games  

**Cycle 2 — Branding:**
- Commission/design real logo (SVG wordmark) to replace emoji + text  
- Create per-game OG images (1200×630 with game art + ArcadeHeap branding)  
- Add ArcadeHeap splash to loading overlay (when logo exists)  

**Cycle 3 — Retention & Monetization:**
- Implement real play counters via Supabase  
- Add star rating system (localStorage first, DB second)  
- Add social sharing buttons on game pages  
- Set up own AdSense/ad network (after traffic justifies it)  
- BreadcrumbList + Organization schema  

**Cycle 4 — Platform Features:**
- User accounts (Supabase Auth)  
- Favorites/bookmarks  
- Mobile touch controls overlay for keyboard games (D-pad component)  
- On-screen mobile controls for Snake, Space Invaders, Breakout  

---

## SUMMARY SCORECARD: ArcadeHeap vs Standards

| Standard | Competitor Requirement | ArcadeHeap Status | Gap Severity | Session 4? |
|----------|----------------------|-------------------|--------------|------------|
| 1. Thumbnail quality | 20–40KB, accurate, correct ratio | ⚠️ Sub-5KB files, 3 wrong thumbs | HIGH | ⚠️ Partial |
| 2. Game iframe aspect ratio | Per-game correct ratio | ❌ All games 16:9 forced | CRITICAL | ✅ Yes |
| 3. SEO content per game | 300–1,500+ words | ❌ 30–100 words | HIGH | ❌ Future |
| 4. Structured data / JSON-LD | VideoGame + WebSite + Breadcrumb | ❌ Zero schema | HIGH | ✅ Yes |
| 5. Category depth | ≥10 games per shown category | ❌ 1–6 games, 3 categories with 1 | HIGH | ⚠️ Partial |
| 6. Social proof (real numbers) | Real ratings/counts | ❌ Static fake counts | CRITICAL | ✅ Yes (remove) |
| 7. Recently played | localStorage tracking | ❌ Zero retention features | HIGH | ✅ Yes |
| 8. OG images | Branded 1200×630 | ❌ placehold.co placeholder | HIGH | ✅ Yes |
| 9. Loading screen branding | Platform-branded overlay | ⚠️ Spinner only, no branding | MEDIUM | ✅ Yes (quick) |
| 10. URL structure | Kebab-case hyphens | ✅ `/game/[slug]` clean | LOW | N/A |
| 11. Tags dual system | Category + tags | ❌ Category only | MEDIUM | ❌ Future |
| 12. Game page content | How to Play, Tips, Dev info | ❌ 1 sentence + controls | HIGH | ⚠️ Partial |
| 13. Ad architecture | Platform controls all ads | ❌ 3P ads in games, no own ads | CRITICAL | ✅ Yes (strip 3P) |
| 14. Community + trust | Social links, trust signals | ❌ Zero social presence | MEDIUM | ✅ Yes (add links) |
| 15. Site performance | Core Web Vitals, analytics | ⚠️ `unoptimized` images, no analytics | MEDIUM | ✅ Yes |

**Standards Met**: 1/15 (URL structure)  
**Standards Partially Met**: 2/15 (thumbnails, game page content)  
**Standards Failed**: 12/15

---

*End of Gap Analysis Cycle 1. Session 4 implementation targets: 10 specific fixes, all with exact file paths and code changes specified above.*
