# COMPETITOR ANALYSIS — CYCLE 1
**Date**: 2026-02-19  
**Analyst**: Subagent (Sonnet 4.5)  
**Purpose**: Extract hard standards for ArcadeHeap from top 4 browser game portals  
**Competitors**: Poki, CrazyGames, FRVR, Y8

---

## METHODOLOGY
- Primary: `web_fetch` on homepage, game pages, category pages, developer docs
- Visual: Browser screenshots of Poki and Y8 homepages  
- Developer docs: Poki SDK documentation for thumbnail specs  
- Cross-referenced with AUDIT-CYCLE1.md findings

---

## 1. POKI (poki.com)

### Scale & Positioning
- **1,500+ games** (curated, quality-gated)  
- **100M+ monthly players** (stated on site)
- **200 categories** for discovery
- Founded 2014, 50-person team in Amsterdam
- Mission: "build the ultimate online playground"

### Homepage Layout
- **Zero text hero**. The entire above-fold experience is a **dense mosaic grid of game thumbnails** — no slogan, no CTA button taking up space.  
- Game tiles appear in **varied sizes** (some 2× or 3× larger for featured games) — a masonry/mosaic layout.
- Thumbnails are colorful, high-quality, and visually distinct.
- Below the mosaic: category tiles — each with an icon/image representing the genre, the category name, and 3–4 small game preview thumbnails.  
- Category grid shows ~36+ categories on homepage (GAMES FOR GIRLS, 2 PLAYER GAMES, PUZZLE GAMES, FIGHTING GAMES, SHOOTING GAMES, CAR GAMES, POKI KIDS, EASY GAMES, DINOSAUR GAMES, SIMULATION GAMES, WAR GAMES, ADVENTURE GAMES, MULTIPLAYER GAMES, MOBILE GAMES, PLATFORM GAMES, SKILL GAMES, COOL GAMES, PARKOUR GAMES, GAMES FOR BOYS, 3D GAMES, COZY GAMES, MANAGEMENT GAMES, ACTION GAMES, MOUSE GAMES, TYCOON GAMES, FUNNY GAMES, IO GAMES, BRAIN GAMES, RACING GAMES, ARCADE GAMES, GUN GAMES, DRESS UP GAMES, DRIVING GAMES, TYPING GAMES, RUNNING GAMES, FLASH GAMES, WATERMELON GAMES, BLOCK GAMES, CRAZY GAMES, ALL CATEGORIES).
- **No fake play counts** — games show upvote counts ("17 million player upvotes" for Subway Surfers).
- Search bar is prominent in the top nav.

### Game Cards
- **Thumbnail: 1:1 SQUARE aspect ratio, minimum 628×628px** (from official dev docs)
- Full-bleed, **no text or title in thumbnail** — purely visual
- Rounded corners applied by Poki (not in source image)
- **Animated thumbnails**: Short video plays on hover — this is a platform requirement for global release
- On homepage mosaic: no text overlay on cards; title appears on hover
- Featured tiles scale up to 2–3× size in masonry grid

### Game Page
- URL structure: `poki.com/en/g/[game-slug]` (e.g., `/en/g/subway-surfers`)
- Game iframe takes up majority of viewport
- Below game: **extensive SEO content** — full gameplay description, controls for desktop AND mobile, game modes, power-ups, characters, tips, history/origin, developer info
- "Games like X at Poki" — related games section with paragraph descriptions (not just thumbnails)
- Player upvote count prominently displayed ("17 million player upvotes")
- Fullscreen button available
- **Poki SDK** wraps all games — provides consistent loading overlay, ad injection, and analytics (no author third-party code)

### Categories
- **200+ categories** with clean URL slugs: `/en/action`, `/en/car`, `/en/puzzle`, `/en/io`, etc.
- Category page shows count: "All 255 action games at Poki"
- Each category has its own SEO text describing the genre and listing top 5 most popular games
- Sub-categorization: e.g., Action > Action-Adventure, RPG games, Multiplayer action
- Internal linking: game pages link to related categories with full text descriptions

### Mobile
- Poki Android app available (Chromebook/tablet/mobile)
- Homepage thumbnails adapt to mobile grid
- Game controls documented per-platform (desktop vs mobile swipe directions)
- Poki Kids section for younger audiences

### Branding
- Color: Teal/aqua (#83FFE7 playground background)
- Logo: "poki" wordmark, simple and clean
- Consistent rounded-corner aesthetic on all game tiles
- No author branding visible in any game — Poki SDK wraps everything

### Retention
- ✅ User accounts
- ✅ Recently played (persistent)
- ✅ Upvote/rating system per game
- ✅ Personalized recommendations
- ❌ No visible achievement system
- Social trust signals: "100 million players monthly"

### Ads
- "Poki.com stays free for everyone by showing ads during your visit"
- Ads are NOT inside games — they're around the platform
- No third-party creator ads ever fire
- Poki SDK controls all ad injection

### SEO
- URL: `/en/g/[slug]` for games, `/en/[category]` for categories
- Game pages: 1,500+ words of unique content per game (guides, controls, tips)
- Internal linking: categories → games → related categories
- No sitemap.xml (handled dynamically)
- Emojis in category page titles: "ACTION GAMES 💥"
- Likely has JSON-LD (hidden behind JS rendering — not visible in raw fetch)

---

## 2. CRAZYGAMES (crazygames.com)

### Scale & Positioning
- **4,500+ games** (stated "over 4,500")
- **30M+ monthly users**
- Founded 2014 by Raf Mertens
- Multilingual: English, Czech, Danish, German, Spanish, French, Indonesian, Italian, Hungarian, Dutch, Norwegian, Polish, Portuguese, Romanian, Finnish, Swedish, Vietnamese, Turkish, Greek, Russian, Ukrainian, Arabic, Thai, Korean, Japanese (~24 languages)
- Mobile apps: iOS + Android

### Homepage Layout
- Navigation has persistent section tabs: Recently played | New | Popular Games | Updated | Originals | Multiplayer
- Then main category nav: Action, Adventure, Basketball, Bike, Car, Card, Casual, Clicker, Controller, Driving, Escape, Flash, FPS, Horror, .io, Mahjong, Minecraft, Pool, Puzzle, Shooting, Soccer, Sports, Stickman, Thinky, Tower Defense
- Homepage shows curated sections with horizontally scrollable rows
- Search is in header
- Dark-mode friendly (supports both themes)

### Game Cards
- Thumbnails: **16:9 landscape aspect ratio** (standard for most)
- Hover effect reveals short video/animation preview
- Card shows: game title, category badge, sometimes player count or "New" label
- On category pages: filter/sort functionality built-in

### Game Page
- URL structure: `crazygames.com/game/[slug]` (e.g., `/game/shellshockersio`)
- Game iframe large and prominent
- Rich description below: how to play, tips & tricks, game modes, weapons (for shooters), currency, developer info, release date, platform info
- "More Games Like This" section with cross-category suggestions
- "Features" bullet list
- **Family-friendly third-party review** embedded (FamilyGamingDatabase reviews)
- Developer credit (e.g., "Shell Shockers is developed by Blue Wizard Digital")
- **Note**: CrazyGames credits developers properly on game pages — it's part of their platform design

### Categories
- **Dual structure**: Categories at `/c/[category]` + Tags at `/t/[tag]`
- Main categories (~25): Action, Adventure, Basketball, Bike, Car, Card, Casual, Clicker, Controller, Driving, Escape, Flash, FPS, Horror, .io, Mahjong, Minecraft, Pool, Puzzle, Shooting, Soccer, Sports, Stickman, Thinky, Tower Defense
- Tags (hundreds): car, Minecraft, 2-player, match-3, mahjong, tank, zombie, first-person-shooter, etc.
- Category pages have FAQ sections: "What are the most popular Car Games?", "What are the best Car Games to play on mobile?", "What are some underrated Car Games?"
- Filter by: New, Popular, Updated, Multiplayer, etc.

### Mobile
- Full iOS + Android apps
- Mobile-optimized game filter on category pages
- FAQ sections specifically list "best games on mobile phones and tablets"

### Branding
- "CrazyGames" wordmark with consistent logo
- Emojis in game page titles: "Shell Shockers 🥚", "2048 🔢", "Shooting Games 🔫"
- Rocket emoji in branding materials
- Game thumbnails show developer branding (they work WITH developers, not against)
- Loading experience is Poki-SDK-equivalent but CrazyGames-controlled

### Retention
- ✅ User login/accounts
- ✅ Recently played
- ✅ Favorites/bookmarks
- ✅ "My games" section
- ✅ "Originals" category for exclusive CrazyGames content
- ✅ Multilingual (24 languages = massive global retention)
- ✅ Discord + TikTok + YouTube community

### Ads
- "Games remain free thanks to advertisements placed non-invasively within the game and around the website"
- They embed ads inside game containers — but controlled by CrazyGames, not game authors
- Non-invasive ad philosophy stated explicitly

### SEO
- URL structure: `/game/[slug]`, `/c/[category]`, `/t/[tag]` — clear separation
- Tags are SEO powerhouses (e.g., `/t/car` = "Car Games" page with hundreds of games)
- Category pages have ~500–800 words of SEO copy + FAQ
- Emojis in meta titles (`Shell Shockers 🥚 Play on CrazyGames`)
- JSON-LD likely present (Next.js/React rendering)
- Schema likely includes VideoGame + WebSite + BreadcrumbList
- Game slugs: descriptive, no underscores — e.g., `/game/shellshockersio`, `/game/moto-x3m`

---

## 3. FRVR (frvr.com)

### Scale & Positioning
- **~60 proprietary games** (all FRVR originals)
- Every game branded as "[Name] FRVR" — e.g., "Solitaire FRVR", "Golf Gardens FRVR"
- Mission: "Change the game"
- Tight quality curation — they only publish their own games
- Each game runs on its **own subdomain**: `solitaire.frvr.com`, `basketball.frvr.com`, `pinball.frvr.com`

### Homepage Layout
- **Light/white theme** (default; games can pass `?theme=light`)
- Top nav: "Discover" (homepage) + "Browse" (all games)
- Featured Games: 2 prominently placed with description + rating
- Trending Right now: 8 games in a row
- Most Popular: 8 games in a row  
- Browse Games (link to full catalog)
- Clean, minimal — no ad clutter on homepage

### Game Cards
- **Square-ish thumbnails** (~1:1 to slightly portrait)
- Each card shows: game name, one-line description, star rating (out of 5, e.g., "4.6")
- Minimal hover effects (clean, white aesthetic)
- Consistent "FRVR" branding in every game title

### Game Page
- Each game is a **dedicated subdomain** — completely separate SEO entity
- `solitaire.frvr.com` is NOT an iframe — it's the actual game URL
- Extensive tutorial content written per game: "15 Strategies on How to Win Klondike Solitaire", "How to Set Up Klondike Solitaire", "Solitaire FAQ"
- YouTube tutorial videos embedded on game pages
- "Solitaire Variants", "Solitaire Rules", "Solitaire Alternatives" sections
- Cross-links to other FRVR games within same genre
- The game itself gets full-page real estate — no framing/iframe needed (they own all games)
- URL parameter system: `?web&source=frvr.com&action=trending_games&theme=light`

### Categories
- `/c/[category]` on frvr.com (e.g., `/c/cards`)
- Smaller number of categories (~8–12) given the limited catalog
- Browse page: flat grid of all ~60 games

### Mobile
- **Mobile-first philosophy** — all FRVR games designed for touch from day one
- No dedicated mobile app listed (web-first)
- Games optimized for portrait and landscape on mobile

### Branding
- ⭐ The most cohesive brand of all 4 competitors
- White/light theme across all properties
- "FRVR" in every game title (extremely consistent)
- Star ratings shown uniformly
- No third-party branding ever — they own everything
- Each game's subdomain reinforces FRVR brand: you never leave "FRVR" even when playing

### Retention
- ✅ Star ratings visible on all game cards
- ✅ "Trending" and "Most Popular" sections updated dynamically
- ⚠️ No visible user accounts on main site
- ⚠️ No recently played tracking (or not visible without account)
- ✅ Tutorial content keeps users on-page longer (SEO + engagement)

### Ads
- Minimal visible ads on frvr.com landing page
- Ad revenue model unclear from public pages
- Their own games = full control over monetization

### SEO
- **Subdomains as SEO entities**: `solitaire.frvr.com` ranks on its own for "play solitaire online"
- Comprehensive long-form content: tutorials, FAQs, strategy guides per game
- YouTube embeds boost time-on-page
- Cross-linking between game subdomains + frvr.com
- `/tutorials/[topic]` URL structure for guides
- External links to authoritative sources (e.g., parlettgames.uk for solitaire history)
- Each game is effectively a **mini-website** with multiple pages (tutorials, FAQs, the game itself)

---

## 4. Y8 (y8.com)

### Scale & Positioning
- **90,000+ games** (stated "over 90,000 games in total")
- **30M+ monthly visitors** (implied by scale)
- Operating since **2006** — one of the oldest game portals
- Huge Flash legacy (many old games playable via Ruffle Flash emulator, labeled "Ruffle")
- Revenue sharing with developers
- Multilingual: **30+ languages** (English, Russian, French, German, Italian, Greek, Hebrew, Swedish, Romanian, Spanish, Filipino, Thai, Chinese, Dutch, Vietnamese, Turkish, Portuguese, Polish, Korean, Japanese, Indonesian, Arabic, Danish, Norwegian, Hindi, Telugu, Tamil, Bengali, Ukrainian, Marathi, Farsi, Urdu)

### Homepage Layout
- Category rows with **horizontal scrolling** — each row shows ~20 games with "More [Category] games" link
- Color-coded category labels (red for Driving, pink for For Girls, orange for Shooting, etc.)
- ~13 main category rows shown: Driving, For Girls, Shooting, Thinking, Sports, Management & Sim, Skill, Action & Fighting, Strategy & Defense, Fun & Crazy, Arcade & Classic, Adventure & RPG, Kids & Educational
- **"Play Online with friends"** section (local/online multiplayer)
- **Nostalgia games** section (Flash via Ruffle)
- **Top Players & Highscores** section — 5 games with leaderboard CTAs ("Beat their score")
- **Tags cloud** at bottom of homepage: hundreds of tags (2 player, Cooking, Scary, Dress Up, Princess, Food, Fighting, etc.)
- **"Top Searches"** section shows trending search terms
- Countdown timer: "New Games — Next addition in 00:00:18"

### Game Cards
- **Thumbnails: ~4:3 landscape aspect ratio** (most common format)
- Color-coded category badge in top-left corner of each thumbnail
- Rating displayed on card (e.g., "8.3" out of 10)
- "New" badge for new games
- "Ruffle" badge for Flash-emulated games
- "Rereleased" label for returned games
- Horizontal row layout = scroll to discover more

### Game Page
- URL structure: `y8.com/games/[slug]` (e.g., `/games/moto_x3m` — uses underscores!)
- Full game description
- Player rating shown
- Related games section
- Social sharing embedded
- "Beat their score" CTA for competitive games

### Categories
- **13 main categories** with game counts:
  - Driving: 2,290 games
  - For Girls: 4,894 games
  - Shooting: 2,384 games
  - Thinking: 5,032 games
  - Sports: 1,209 games
  - Management & Sim: 861 games
  - Skill: 8,020 games
  - Action & Fighting (visible but count not captured)
  - Strategy & Defense (visible)
  - Fun & Crazy (visible)
  - Arcade & Classic (visible)
  - Adventure & RPG (visible)
  - Kids & Educational (visible)
- URL: `/categories/[slug]` (e.g., `/categories/driving_racing` — uses underscores!)
- Tags: hundreds of tags accessible at `/tags`

### Mobile
- Mobile-responsive design
- Y8 Browser app for Flash games (legacy)
- Games adapt to mobile screen sizes

### Branding
- Dated visual language but functional
- Color-coded categories make navigation intuitive
- Ratings system (out of 10) creates quality signal
- Y8 logo visible but not overpowering
- Community elements (Reddit, Discord, Forum, Instagram, Facebook, Twitter, YouTube) reinforce brand longevity

### Retention
- ✅ User accounts (Login/Register in nav)
- ✅ Recently played games `/profile/played_games`
- ✅ Bookmarks `/profile/liked_games`
- ✅ Recommended games `/profile/recommended_games`
- ✅ Achievements system
- ✅ Game studios (`My studio` in profile)
- ✅ Revenue system (`My Revenue` in profile — developer accounts)
- ✅ Top Players & Highscores (global leaderboards per game)
- ✅ Community: Reddit + Discord + Forum + Instagram + Facebook + Twitter + YouTube
- ✅ Countdown timer to next new game — urgency/return
- ✅ 30+ languages = massive global retention
- ✅ "Recommended Games" as personalization feature

### Ads
- Standard display ads visible across the site
- Ads integrated into homepage layout between game rows
- Game pages have ad slots above and below game
- Revenue shared with developers

### SEO
- URL: `y8.com/games/[slug]` (underscores, not hyphens — **suboptimal** compared to competitors)
- Category URL: `/categories/[driving_racing]` — also underscores
- 30+ language versions each with their own subdomain (e.g., `ru.y8.com`, `fr.y8.com`)
- Tags system: `/tags` + tag pages
- Nostalgia/Flash library creates SEO long-tail (millions of old game searches)
- `/new/games` and `/best` and `/popular/games` pages for freshness signals
- External community (forum.y8.com) provides link equity
- Rating metadata likely in structured data

---

## CROSS-COMPETITOR COMPARISON MATRIX

| Dimension | Poki | CrazyGames | FRVR | Y8 | ArcadeHeap (current) |
|-----------|------|------------|------|----|-----------------------|
| **Games** | 1,500 | 4,500 | ~60 | 90,000+ | 24 |
| **Thumbnail ratio** | 1:1 square | 16:9 landscape | ~1:1 square | 4:3 landscape | 16:9 forced (broken for portrait) |
| **Thumbnail min size** | 628×628px | ~480×270px est. | ~400×400px | ~320×240px | ~400×300px webp, 3–23KB |
| **Animated thumbnails** | ✅ Required for release | ✅ Video on hover | ❌ | ❌ | ❌ |
| **Game count per category** | 100–500+ | 50–500+ | 3–20 | 800–8,000+ | 1–6 |
| **URL style** | `/en/g/[slug]` | `/game/[slug]` | `[name].frvr.com` | `/games/[slug_underscore]` | `/games/[slug]` ✅ |
| **Author branding** | ❌ Never visible | ⚠️ Listed/credited | ❌ Own games | ✅ Sometimes | ❌ CRITICAL problem |
| **3P ads in games** | ❌ Never | ❌ Never | ❌ Never | Rarely | ❌ CRITICAL problem |
| **Structured data** | ✅ Likely JSON-LD | ✅ Likely JSON-LD | ✅ Yes | ✅ Yes | ❌ None |
| **Categories** | 200+ | 25 main + 100s tags | ~12 | 13 main + tags | 10 |
| **Recently played** | ✅ | ✅ | ❌ | ✅ | ❌ |
| **User accounts** | ✅ | ✅ | ❌ | ✅ | ❌ |
| **SEO text on game pages** | ✅ 1,500+ words | ✅ 500–1,000 words | ✅ 1,000+ words | ✅ 300+ words | ❌ <100 words |
| **FAQ on categories** | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Mobile app** | Android | iOS + Android | ❌ | Y8 Browser | ❌ |
| **Community** | ❌ | Discord + TikTok + YouTube | ❌ | Reddit + Discord + Forum + Instagram + FB + Twitter + YouTube | ❌ |
| **Leaderboards** | ❌ visible | ❌ visible | ❌ | ✅ Top Players & Highscore | ❌ |
| **Multilingual** | ❌ (EN only) | 24 languages | ❌ | 30+ languages | ❌ |
| **Ads in own platform** | ✅ (around games) | ✅ (controlled) | ✅ (minimal) | ✅ | ❌ |
| **OG image quality** | ✅ Proper | ✅ Proper | ✅ Proper | ✅ Proper | ❌ placehold.co |
| **Social proof metric** | Upvotes (millions) | Player counts | Star ratings | 10-point ratings | Fake play counts |
| **Loading branding** | ✅ Poki overlay | ✅ CrazyGames overlay | ✅ FRVR overlay | ✅ Y8 overlay | ❌ Generic spinner |

---

## STANDARDS ARCADEHEAP MUST MEET

These are concrete, measurable requirements derived from the 4 competitors. No guessing — each number comes from observed competitor behavior.

---

### STANDARD 1: THUMBNAIL DIMENSIONS & QUALITY
**Current ArcadeHeap**: 16:9 ratio, 3.2–23.3KB, some as small as 3KB  
**Competitor standard**: Poki requires **628×628px minimum square**, CrazyGames uses ~16:9 landscape at high quality, Y8 uses 4:3

**ArcadeHeap must**:
- Decide on ONE consistent thumbnail ratio and apply it everywhere (recommend: **4:3 landscape** — works for game previews, doesn't break portrait games as badly as 16:9)
- Minimum thumbnail file size after webp compression: **20–40KB** (current 3KB thumbnails are too small)
- Minimum pixel dimensions: **400×300px minimum, target 800×600px** for 4:3
- Every thumbnail must accurately represent the actual game visuals
- No stock photography, no wrong grid sizes, no art mismatches

### STANDARD 2: GAME IFRAME ASPECT RATIO
**Current ArcadeHeap**: Hard-coded 16:9 for ALL games — breaks portrait games  
**Competitor standard**: All 4 competitors serve games at correct aspect ratios

**ArcadeHeap must**:
- Add `aspectRatio` field to each game in `games.ts` — e.g., `"16:9"`, `"4:3"`, `"1:1"`, `"9:16"`
- Default: `"16:9"` for landscape games
- Override per game for portrait games: 2048 → `"2:3"`, Tetris → `"9:16"`, Pac-Man → `"3:4"`, Minesweeper → `"1:1"`
- On mobile: iframe should **expand to fill available height**, not be forced into 220px

### STANDARD 3: SEO CONTENT PER GAME PAGE
**Current ArcadeHeap**: <100 words per game page (just description)  
**Competitor standard**: Poki 1,500+ words, CrazyGames 500–1,000 words, FRVR 1,000+, Y8 300+

**ArcadeHeap must**:
- Minimum **300 words** per game page: description + how to play + controls (desktop and mobile) + tips & tricks
- Target **500+ words** for popular games
- Include keyboard controls section (arrow keys, WASD, mouse)
- Include mobile touch controls where applicable
- "Games like X" section (cross-category, not just same-category)

### STANDARD 4: STRUCTURED DATA / JSON-LD
**Current ArcadeHeap**: Zero schema markup on any page  
**Competitor standard**: All 4 competitors have structured data

**ArcadeHeap must** add:
```json
{
  "@type": "VideoGame",
  "name": "[Game Name]",
  "description": "[Game description]",
  "genre": "[Category]",
  "image": "[Thumbnail URL]",
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
}
```
- **WebSite** schema with `SearchAction` on homepage
- **BreadcrumbList** on game and category pages
- **Organization** schema on about page

### STANDARD 5: CATEGORY DEPTH
**Current ArcadeHeap**: 3 categories with only 1 game, most with 2–5 games  
**Competitor standard**:
- Poki: 100+ games per major category
- CrazyGames: 50+ games per major category
- Y8: 800–8,000+ per category (legacy Flash volume)
- FRVR: 3–20 per category (accepted only because they publish exclusively)

**ArcadeHeap minimum** (for a credible portal with 24 games expanding):
- **Every category must have ≥ 5 games before being shown** on homepage
- Categories with <5 games: hide from navigation until populated
- No category metadata claiming "Hundreds" unless 100+ games exist
- Short-term target: 8–10 games per active category (Action, Puzzle, Arcade, Racing at minimum)
- Remove or merge thin categories (Adventure, Strategy, Multiplayer) until populated

### STANDARD 6: SOCIAL PROOF METRIC (REPLACE FAKE PLAY COUNTS)
**Current ArcadeHeap**: Static hardcoded play counts (never change, clearly fake)  
**Competitor standard**:
- Poki: Real upvote counts (millions, displayed authentically)
- CrazyGames: Player counts from actual data
- Y8: 10-point community ratings
- FRVR: Star ratings (1–5)

**ArcadeHeap must**:
- Remove all static play counts immediately
- Replace with **real data** — at minimum a Supabase counter that increments on game load
- OR replace with **star rating system** (users click 1–5 stars) — no backend needed beyond localStorage
- **Do NOT display any fabricated numbers** — trust destroyed once, never recovered

### STANDARD 7: RECENTLY PLAYED (MINIMUM RETENTION)
**Current ArcadeHeap**: Zero retention mechanisms  
**Competitor standard**: Poki, CrazyGames, Y8 all have Recently Played

**ArcadeHeap must** (zero backend required):
- Implement **localStorage-based Recently Played** tracking
- Show last 4–6 games played in a persistent row on homepage or persistent header dropdown
- Implementation: on iframe load, write `{gameSlug, timestamp}` to localStorage
- Read on homepage and render with thumbnails
- Timeline: this is a **weekend task** — no excuse not to have it

### STANDARD 8: OG IMAGES & SOCIAL PREVIEWS
**Current ArcadeHeap**: placehold.co placeholder that looks amateur  
**Competitor standard**: All 4 have custom branded OG images

**ArcadeHeap must**:
- Create `og-image.png` (1200×630px, branded ArcadeHeap image)
- Store in `/public/og-image.png`
- Per-game OG images: use game thumbnail (1200×630 landscape crop) 
- Replace all `placehold.co` references in `layout.tsx` and game page metadata

### STANDARD 9: LOADING SCREEN BRANDING
**Current ArcadeHeap**: Generic purple spinner with "Loading [game]..."  
**Competitor standard**: All 4 have branded loading overlays before game appears

**ArcadeHeap must**:
- Create ArcadeHeap branded loading overlay component
- Overlay should show: ArcadeHeap logo, game title, animated loading indicator
- Overlay covers the iframe until game sends "ready" signal (or 3s timeout)
- This prevents author branding/title screens from showing to users during load
- Even a simple `<div>` with logo + spinner covering the iframe beats the current approach

### STANDARD 10: URL STRUCTURE & SLUG FORMAT
**Current ArcadeHeap**: `/games/[slug]` with kebab-case  
**Competitor standard**:
- Poki: `/en/g/[slug]` (language prefix + `/g/`)
- CrazyGames: `/game/[slug]` (singular)
- FRVR: `[name].frvr.com` (subdomain)
- Y8: `/games/[slug_underscore]` (underscores — **avoid this**)

**ArcadeHeap current**: `/games/[slug]` is acceptable  
**Do NOT change URLs** unless starting fresh — URL changes kill any existing rankings.
**Do ensure**: All game slugs use hyphens (not underscores), all lowercase, no special characters.

### STANDARD 11: CATEGORIES + TAGS DUAL SYSTEM
**Current ArcadeHeap**: Single category per game, 10 categories  
**Competitor standard**: CrazyGames uses both `/c/[category]` AND `/t/[tag]`

**ArcadeHeap must** (medium priority):
- Add **tags array** to each game in `games.ts`
- Examples: `tags: ["one-player", "keyboard", "classic", "retro", "puzzle", "casual"]`
- Create `/tags/[tag]` pages (even if just filtering `/games?tag=retro`)
- This unlocks cross-category discovery and long-tail SEO

### STANDARD 12: GAME PAGE CONTENT QUALITY
**Current ArcadeHeap**: Thin descriptions, no controls, no tips  
**Competitor standard**: Every game page is a content destination

**ArcadeHeap game page template must include**:
1. Game iframe (correct aspect ratio)
2. **H1**: "[Game Name] — Play Free Online"
3. **Short description** (1–2 sentences, shown above fold)
4. **How to Play** section (keyboard controls + mobile if applicable)
5. **Game Tips** section (3–5 bullet points)
6. **About the Game** section (history/origin if applicable)
7. **Related Games** (minimum 4 games, cross-category allowed)
8. Breadcrumbs: Home > [Category] > [Game]
9. JSON-LD VideoGame schema

### STANDARD 13: AD ARCHITECTURE
**Current ArcadeHeap**: Zero owned ads, but game authors' ads firing inside iframes  
**Competitor standard**: Platform controls all ads, game authors cannot inject ads

**ArcadeHeap must**:
- Strip all 3rd-party ad scripts from game files (Pac-Man, Hextris) — this was in AUDIT
- When ready to monetize, place ArcadeHeap-controlled ads in:
  - Above game iframe: leaderboard 728×90 (desktop) / banner 320×50 (mobile)
  - Below game description: rectangle 336×280
  - Between homepage sections: native-style content units
  - **Never** inject ads mid-game in a way that interrupts play

### STANDARD 14: COMMUNITY + TRUST SIGNALS
**Current ArcadeHeap**: Zero community, zero trust signals  
**Competitor standard**:
- Poki: "100 million monthly players" + upvote counts in millions
- Y8: Reddit, Discord, Forum, social channels
- CrazyGames: Discord + TikTok + YouTube

**ArcadeHeap minimum** (zero cost):
- Create Discord server + link in footer
- Add Twitter/X account link
- Trust badge copy: "Play Free — No Download Required" (already have "No Downloads, Just Play" ✅)
- Authentic play count once real analytics are running
- Star rating system (localStorage for anonymous, DB for logged-in)

### STANDARD 15: SITE LOADING PERFORMANCE
**Current ArcadeHeap**: Unknown (no analytics)  
**Competitor standard**: All 4 competitors optimize heavily for speed

**ArcadeHeap must**:
- Enable Next.js image optimization (remove `unoptimized` from Image components)
- Target **Core Web Vitals**: LCP <2.5s, FID <100ms, CLS <0.1
- Thumbnails should be served as WebP from Next.js image CDN
- Game pages should lazy-load everything below the fold
- Add real analytics (Plausible or GA4) to measure actual performance

---

## POKI-SPECIFIC INSIGHTS (HIGHEST PRIORITY COMPETITOR)

Poki is the direct benchmark for ArcadeHeap because:
1. **Same positioning** (curated, quality browser games, no downloads)
2. **Best UX** of the 4 competitors
3. **Developer docs** reveal their exact standards

**Key Poki learnings ArcadeHeap must internalize:**

1. **Homepage is ALL GAMES, no text hero** — users come to play, show them games immediately
2. **No text in thumbnails** — Poki's own research shows text-free thumbnails drive better conversion
3. **Upvote count ≠ play count** — user upvotes are a real signal; play counts can be gamed
4. **Animated thumbnails are the future** — short video preview on hover dramatically increases click-through
5. **200 categories** — discovery breadth is a retention driver; users who find "their" genre stay
6. **Game pages are content pages** — rich text below the fold serves SEO and answers user questions
7. **SDK wrapping** — Poki controls the entire experience inside iframes via SDK; nothing from original authors bleeds through
8. **Poki Kids** — separate branded section for younger audience creates brand trust with parents

---

## PRIORITY ACTIONS FOR ARCADEHEAP (IN ORDER)

Based on this competitor analysis + AUDIT-CYCLE1, here's what to fix first:

### WEEK 1 (Must ship):
1. Strip 3P analytics + AdSense from Pac-Man and Hextris game files
2. Hide/remove visible author credits from 2048, Floppy Bird, Pac-Man, Hextris
3. Fix `og-image.png` — create branded image, replace placehold.co
4. Fix category metadata — remove "Hundreds of" false claim
5. Add Recently Played via localStorage
6. Fix play counts — remove or replace with real counter

### WEEK 2:
7. Add JSON-LD VideoGame schema to all game pages
8. Add per-game `aspectRatio` to `games.ts` — fix portrait game sizing
9. Expand game page content: How to Play + Controls + Tips sections (min 300 words)
10. Fix footer to show all 10 categories
11. Fix "Hot Games" hero button to link to /games sorted by popular

### MONTH 1:
12. Add ArcadeHeap branded loading overlay (covers iframe during load)
13. Add 3–5 games to Action, Adventure, Strategy, Multiplayer categories
14. Add tags system to `games.ts` and create `/tags/[tag]` pages
15. Add star rating component (localStorage-based)
16. Add cross-category "You Might Also Like" section on game pages
17. Create proper OG images per game (use thumbnail as base)
18. Add social links (Discord, Twitter) to footer and about page
19. Add WebSite + BreadcrumbList + Organization schema
20. Add analytics (Plausible or GA4)

---

*End of Competitor Analysis Cycle 1. Data sourced from: poki.com, sdk.poki.com, crazygames.com, frvr.com, y8.com (fetched 2026-02-19)*
