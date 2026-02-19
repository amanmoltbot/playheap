# AUDIT CYCLE 1 — ArcadeHeap.com Baseline Audit
**Date**: 2026-02-19  
**Auditor**: Subagent (Sonnet 4.5)  
**Site**: https://arcadeheap.com  
**Codebase**: `/Users/molt/Projects/playheap/`  
**Games**: 24 across 10 categories

---

## EXECUTIVE SUMMARY

ArcadeHeap is a functional but deeply flawed game portal. The site has a decent dark-themed UI with solid structure, but is riddled with critical issues that would immediately disqualify it from competing with Poki, CrazyGames, or FRVR. The most severe problems: third-party ads and analytics from original game creators are firing inside the iframes (legal and financial liability), author branding is visible inside multiple games, play counts are entirely fabricated, and the mobile game experience is largely unplayable due to forced 16:9 aspect ratios on portrait-oriented games.

---

## SEVERITY LEGEND
- 🔴 **CRITICAL** — Must fix immediately. Legal risk, major UX failure, or credibility destroyer.
- 🟠 **HIGH** — Significant problem affecting core user experience or trust.
- 🟡 **MEDIUM** — Noticeable quality issue that degrades professionalism.
- 🟢 **LOW** — Polish/cleanup item.

---

## SECTION 1: INDIVIDUAL GAME AUDIT — Author Credits & Third-Party Leakage

### 🔴 CRITICAL: Third-Party AdSense Ads Firing Inside ArcadeHeap

**Pac-Man** (`/games/pacman/index.html`, line 169-176):
```html
<div id="adsense">
  <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <ins class="adsbygoogle" ...>
  (adsbygoogle = window.adsbygoogle || []).push({});
```

**Hextris** (`/games/hextris/index.html`, line 68):
```html
<script data-ad-client="ca-pub-9107422120987163" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
```

**Impact**: The original creators' AdSense accounts are generating ad impressions inside ArcadeHeap. You are serving ads that pay someone else while hurting your UX. This also violates AdSense ToS (serving another publisher's ads on your domain without permission). **Legal liability.**

---

### 🔴 CRITICAL: Third-Party Google Analytics Tracking Inside Games

**Pac-Man** fires to `UA-28993174-1` (platzh1rsch's personal GA account):
```javascript
_gaq.push(['_setAccount', 'UA-28993174-1']);
_gaq.push(['_setDomainName', 'pacman.platzh1rsch.ch']);
```

**Hextris** fires to `UA-51272720-2` (hextris' GA account):
```javascript
ga('create', 'UA-51272720-2', 'auto');
ga('send', 'pageview');
```

**Impact**: Every time someone plays Pac-Man or Hextris on ArcadeHeap, analytics data is sent to the original author's Google Analytics — without your users' consent and without your knowledge. GDPR/privacy violation risk, and you're giving free traffic insights to someone else.

---

### 🔴 CRITICAL: Visible Author Branding in Multiple Games

**Game-by-game breakdown of visible author credits:**

| Game | Author Credit Visible | Location |
|------|----------------------|----------|
| **2048** | "Created by Gabriele Cirulli. Based on 1024 by Veewo Studio..." | Footer of game iframe (bottom section) |
| **Floppy Bird** | "original game/concept/art by dong nguyen" + "recreated by nebez briefkani" + "view github project" | Persistent UI at bottom of game screen |
| **Pac-Man** | "PACMAN CANVAS" title on loading screen + "Pacman Canvas is Open Source, written by platzh1rsch" | Title screen + credits screen |
| **Hextris** | Twitter share button (@hextris), Facebook share, Google Play download link, iTunes App Store link | Post-game score screen |
| **Clumsy Bird** | `og:url` points to `ellisonleao.github.io/clumsy-bird/` (meta tags) | Not visible to users but leaks referrer |
| **Radius Raid** | "CREDITS" menu option in the game | In-game menu |

**Clean games** (no visible author credits in UI): Tetris, Minesweeper, Snake, Breakout, Astray, Memory Match, Tic Tac Toe, Tower Stack, Space Invaders, Dot Eater, Slither Solo, Basketball Shoot, Ping Pong, Speed Racer, Drift King, Ninja Slash, Tank Battle, Zombie Survivor

---

### 🔴 CRITICAL: Hextris Has App Store Download Links In-Game

In the Hextris score screen, players see:
- Google Play download button (links to `com.hextris.hextris`)  
- Apple App Store button (links to `itunes.apple.com/us/app/id903769553`)

Users can click these **inside your game** and leave to download the app, permanently losing them from your site. This is an active user exit door you're hosting.

---

### 🔴 CRITICAL: Pac-Man Canonical Tag Points to External Domain

```html
<link rel="canonical" href="http://pacman.platzh1rsch.ch/" />
```

When Google crawls ArcadeHeap's hosted copy of Pac-Man, this canonical tag signals the "real" source is platzh1rsch's domain. Combined with the external Google Analytics domain config, Google knows this is a copy. SEO impact may be severe.

---

## SECTION 2: UI/UX AUDIT

### 🟠 HIGH: Homepage Is Excessively Long with Redundant Sections

The homepage has 8 content sections:
1. Hero
2. ⭐ Featured Games (10 games, 3-col grid)
3. 🔥 Popular Games (8 games, 4-col grid)
4. ✨ New Games (8 games, 4-col grid)
5. ⚔️ Action Games (2 games)
6. 🧩 Puzzle Games (5 games)
7. 🏎️ Racing Games (2 games)
8. ⚽ Sports Games (2 games)
9. Browse by Category (grid)

**Problem**: Many games appear in 3+ sections simultaneously. Ninja Slash appears in Featured, Popular, and Action. Repetition makes the homepage feel like a single game set with different headers rather than a curated experience. The page is extremely scroll-heavy.

**Compare to Poki**: Clean hero → search → curated row → categories. Tight, purposeful sections.

---

### 🟠 HIGH: "Hot Games" Hero Button Goes to /category/action

The homepage hero CTA "🔥 Hot Games" links to `/category/action` — which has only **2 games** (Ninja Slash, Zombie Survivor). This is:
- Arbitrary (Action ≠ Hot/Popular)
- Disappointing landing (user clicks "Hot Games" and sees 2 games)
- Misleading

---

### 🟠 HIGH: No Engagement or Retention Mechanisms

Zero retention features:
- ❌ No "Recently Played" history
- ❌ No favorites/bookmarks
- ❌ No user accounts
- ❌ No high scores/leaderboards
- ❌ No notifications ("new games available")
- ❌ No sharing buttons on game pages
- ❌ No newsletter/email capture
- ❌ No comment section

Once a user leaves, there is absolutely nothing to bring them back. Poki has Recently Played, favorites, and accounts. Without ANY retention mechanism, the site is a leaky bucket.

---

### 🟡 MEDIUM: No Search Prominence on Homepage

Search is only in the header bar — small, easy to miss. There is no prominent search experience on the homepage or category pages. Poki puts search front-and-center. Users arriving wanting to find a specific game have no immediate obvious search path from the homepage.

---

### 🟡 MEDIUM: Category Section on Homepage Only Shows 4 Categories

The homepage shows category sections for the first 4 non-empty categories (Action, Puzzle, Racing, Sports). Arcade — the site's name — doesn't appear in its own homepage section. Shooting, Adventure, Strategy, Multiplayer, IO Games are all invisible on the homepage.

---

### 🟡 MEDIUM: Plays Counter Icon Is Confusing

GameCard uses a video ▶ play button icon next to the play count (e.g., "▶ 412K"). This icon looks like a "play" action button, not a play count indicator. An eye icon 👁️ or a controller icon would be less ambiguous.

---

### 🟡 MEDIUM: Footer Only Shows 6 of 10 Categories

`categories.slice(0, 6)` — the footer omits Adventure, Strategy, Arcade, Multiplayer. All categories should be in the footer for SEO internal linking and UX completeness.

---

### 🟡 MEDIUM: No Social Sharing on Game Pages

Game pages have no share buttons (Twitter, Discord, WhatsApp). Players who want to share a fun game with friends have no easy mechanism. This kills organic viral growth.

---

### 🟢 LOW: "Browse All Games" Button Layout Awkward on Mobile Hero

The hero has two side-by-side buttons that wrap awkwardly on small screens. The gap-4 flex wrap works but the "Hot Games" button can end up alone on a new row.

---

## SECTION 3: GAME DISCOVERY FLOW

### 🟠 HIGH: Category Depth Is Embarrassingly Thin

| Category | Game Count |
|----------|-----------|
| Arcade | 6 |
| Puzzle | 5 |
| Action | 2 |
| Racing | 2 |
| Sports | 2 |
| Shooting | 2 |
| IO Games | 2 |
| Adventure | **1** |
| Strategy | **1** |
| Multiplayer | **1** |

Three categories have exactly 1 game. When a user navigates to Strategy, they see 1 game (Astray Maze). When they click "More Strategy Games" from a game page — they get nothing. This is actively embarrassing.

Minimum viable per category: 4-6 games. Priority: Adventure, Strategy, Multiplayer need 3-5 more each.

---

### 🟠 HIGH: Category Page Description Falsely Claims "Hundreds of Games"

The category page `generateMetadata` says:
```ts
description: `Hundreds of ${cat.label.toLowerCase()} games at ArcadeHeap.com`
```

**Puzzle has 5 games.** "Hundreds of puzzle games" is a lie that could get the site penalized by search engines for misleading metadata. Fix immediately.

---

### 🟡 MEDIUM: Related Games Are Broken for Thin Categories

`getRelatedGames()` only returns games in the same category (excluding current game). For categories with 1-2 games:
- Strategy (Astray Maze): 0 related games — the "More Strategy Games" section disappears
- Multiplayer (Tank Battle): 0 related games
- Shooting (Space Invaders, Radius Raid): only 1 related game each

This leaves sidebar and bottom sections empty or nearly empty.

---

### 🟡 MEDIUM: No "You Might Also Like" Cross-Category Suggestions

Related games are strictly by category. A player finishing 2048 sees only Puzzle games. They could love action or arcade games too. No cross-category discovery exists.

---

### 🟡 MEDIUM: No Tag System

Games have no tags (e.g., "one-player", "keyboard", "mouse", "classic", "retro", "multiplayer", "casual"). Tags would enable discovery paths that cut across categories.

---

## SECTION 4: INDIVIDUAL GAME QUALITY & EMBEDDING

### 🔴 CRITICAL: All Games Forced Into 16:9 Aspect Ratio

The `GameEmbed` component hardcodes `style={{ aspectRatio: '16/9' }}`.

**Problem**: Most of the library are classic browser games designed for portrait or square layouts:
- 2048: ~500×600+ (portrait)
- Tetris: portrait
- Pac-Man: portrait (canvas + header UI)
- Minesweeper: square
- Hextris: square

**Result**: Portrait games get letterboxed/cropped inside a 16:9 container, with either wasted black space on sides or game content cut off top/bottom. On a 1280×900 desktop, the iframe is 916×515px — Pac-Man's game canvas gets cut.

**On mobile (390px wide)**: iframe height = ~219px. Games like 2048, Tetris, Pac-Man become unplayable at this height.

**Fix needed**: Per-game aspect ratio setting, or a dynamic iframe that expands to fit the game's actual proportions.

---

### 🟠 HIGH: No ArcadeHeap Loading Screen

The loading state is just a purple spinner on a dark background with "Loading [game title]…" text. There is no ArcadeHeap-branded loading screen. Compare to CrazyGames/Poki which have their own loading overlays.

More critically: there is no ArcadeHeap splash screen that appears BEFORE the game loads, which would:
1. Reinforce branding
2. Cover author credits during game load
3. Give the impression of a unified platform rather than iframe wrapping

---

### 🟡 MEDIUM: Splash Screen Inconsistency Across Games

Each game has its own loading/title screen:
- Floppy Bird: simple animated bird
- Pac-Man: "PACMAN CANVAS" text screen
- Tetris: game-specific screen
- Hextris: stylized hex screen
- Custom games (Ninja Slash, etc.): no title screen, just starts

Zero consistency. There's no "ArcadeHeap" wrapper around any game loading experience.

---

### 🟡 MEDIUM: Thumbnail Quality Varies Wildly

| Thumbnail | Quality | Issue |
|-----------|---------|-------|
| Ping Pong | ⚠️ Wrong | Stock photo of REAL ping pong paddles — doesn't match Pong game at all |
| 2048 | ⚠️ Wrong | Shows 5×5 grid; actual game is 4×4 |
| Breakout | 🟡 Bland | Simple black+colored blocks screenshot, no text/branding |
| Flappy Bird | 🟠 Mismatch | Shows polished cartoon bird; actual game (Floppy Bird) is a pixel-art retro version |
| Minesweeper | ⚠️ Potentially | Shows "MINESWEEPER" title; verify this matches actual game's style |
| Clumsy Bird | ✅ Good | High-quality art that matches the game |
| Snake | ✅ Good | Consistent pixel art with glow |
| Ninja Slash | ✅ Good | Dramatic silhouette style |
| Tic Tac Toe | ✅ Good | Neon aesthetic |
| Astray | ✅ Good | Actual game screenshot |

**Thumbnail sizes**: Range from 3.2KB (Ping Pong) to 23.3KB (Clumsy Bird). At 400×300 rendered size, sub-5KB WebP thumbnails may look pixelated/blurry. Breakout (3.7KB) and Ping Pong (3.2KB) are suspiciously small.

---

### 🟢 LOW: iframe Missing `sandbox` Attribute

The iframe for games has no `sandbox` attribute. Adding `sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-forms"` would limit what third-party game code can do on your domain. Currently games have full access to execute scripts without restrictions.

---

## SECTION 5: SEO ARCHITECTURE

### 🔴 CRITICAL: OG Image Is a Placeholder Service URL

```typescript
images: [{
  url: 'https://placehold.co/1200x630/0f0f0f/8b5cf6?text=ArcadeHeap+-+Free+Online+Games',
}]
```

When someone shares arcadeheap.com on Twitter, Discord, Slack, WhatsApp — the preview image is fetched from `placehold.co`. It's a text-on-color placeholder. This looks completely amateur and unprofessional. If `placehold.co` is down, no preview image appears at all.

**Fix**: Create a proper branded OG image and serve it from `/public/og-image.png`.

---

### 🟠 HIGH: No JSON-LD Structured Data

Zero schema markup on any page:
- ❌ No `VideoGame` schema on game pages
- ❌ No `WebSite` schema with SearchAction on homepage
- ❌ No `BreadcrumbList` schema on game/category pages
- ❌ No `Organization` schema

Google uses structured data to understand pages and can display rich results (star ratings, play buttons, breadcrumbs in SERP). Competitors with schema markup will outrank ArcadeHeap.

**Priority**: Add `VideoGame` schema to each game page. This can include name, description, genre, thumbnail, and playMode ("SinglePlayer").

---

### 🟡 MEDIUM: Category Metadata Description Literally Lies

As mentioned: `"Hundreds of ${cat.label} games"` is factually false. This damages trust and could trigger quality penalties from Google.

---

### 🟡 MEDIUM: No Meta Keywords Strategy Beyond Generic Terms

```typescript
keywords: 'free online games, HTML5 games, browser games, play now, no download games'
```

No game-specific keywords, no category-specific keywords. Each game page should have keywords specific to that game: `"2048 game, 2048 online, slide puzzle, number puzzle"` etc.

---

### 🟡 MEDIUM: Sitemap Uses `now` for `lastModified` on Every Build

```typescript
const now = new Date();
// All pages: lastModified: now
```

Every Vercel deploy updates `lastModified` for EVERY page, even if nothing changed. This is spam to Googlebot — it'll re-crawl everything on every deploy even when only 1 game was added. Use actual modification dates.

---

### 🟢 LOW: No `hreflang` (Minor for Now)

No internationalization signals. Low priority for now but worth noting for future.

---

## SECTION 6: PERFORMANCE

### 🟡 MEDIUM: `unoptimized` on All Thumbnail Images

```tsx
<Image src={game.thumbnailUrl} ... unoptimized />
```

The `unoptimized` prop disables Next.js image optimization entirely for all game thumbnails. This means no WebP serving optimization, no responsive image generation, no lazy loading optimization from Next.js. The images are already `.webp` so it's partially fine, but Next.js can still optimize them further.

---

### 🟡 MEDIUM: No Analytics on ArcadeHeap Itself

There is no analytics tracking in the Next.js app's `layout.tsx`. You have NO DATA on:
- Which games are actually popular (play counts are fake)
- Where users drop off
- Which categories get traffic
- Mobile vs desktop split
- Bounce rate

You're flying completely blind. Add Plausible Analytics, Umami, or at minimum Google Analytics 4 to the main layout.

---

### 🟢 LOW: Next.js Starter Template SVGs Left in `/public/`

```
/public/file.svg
/public/globe.svg
/public/next.svg
/public/vercel.svg
/public/window.svg
```

These are the default Next.js starter template files. They serve no purpose and should be deleted. Minor but sloppy.

---

### 🟢 LOW: `package.json` Name Is Still "playheap"

```json
"name": "playheap"
```

The package name wasn't updated to "arcadeheap". Not user-facing, but sloppy.

---

## SECTION 7: BRANDING CONSISTENCY

### 🟡 MEDIUM: No Brand OG Image / Social Preview

As mentioned — the social sharing preview is a `placehold.co` URL. No branded image exists anywhere in `/public/`.

---

### 🟡 MEDIUM: Logo Is Just Text + Emoji

The logo is `🎮 ArcadeHeap` in text. There is no actual logo SVG or custom wordmark. Compare to CrazyGames, Poki, FRVR — all have distinctive logos. A text + emoji logo looks like a prototype.

---

### 🟢 LOW: `favicon.ico` May Not Match Brand

The favicon is 25KB (relatively large for an ICO), suggesting it's possibly the Next.js default favicon or a generic game icon. The actual design wasn't verified — should be a custom ArcadeHeap branded favicon.

---

### 🟢 LOW: No PlayHeap References Found in Source

Good news: no visible "PlayHeap" text found in the TypeScript source files. The branding migration appears complete in the codebase. However, `package.json` `name` field is still "playheap".

---

## SECTION 8: MONETIZATION LAYOUT

### 🟠 HIGH: Zero Ad Placements (Intentional or Not)

There are no ad slots in the ArcadeHeap site itself. Given that:
1. Third-party ads from game creators ARE running inside iframes
2. ArcadeHeap has no ads of its own

This means you're serving ads for someone else for free. The irony: you're monetizing for the original authors, not for yourself.

**Where ads should go** (when ready):
1. Above game iframe (leaderboard 728×90 or responsive)
2. Below game info section (rectangle 336×280)
3. Sidebar on game pages (skyscraper or rectangle)
4. Between game sections on homepage (native-style)

---

### 🟡 MEDIUM: No Freemium or Premium Path

No "remove ads" premium tier concept. For future: consider offering an ad-free subscription, which also creates a user account system needed for retention features.

---

## SECTION 9: FAKE PLAY COUNTS — TRUST DESTROYER

### 🔴 CRITICAL: All Play Counts Are Static Hardcoded Numbers

Every game's play count is a static number in `games.ts`. These numbers never change. They're completely fabricated:

- 2048: "489,756 plays" — static forever
- New games like Tank Battle: "67,890 plays" — hardcoded at launch

**The problem**: Any user who visits twice and notices the count hasn't changed will lose all trust in the site. Any journalist or competitor who checks will expose it. These aren't even randomized — they're exactly the same on every page load.

Real competitors use actual analytics. At minimum, use a database counter that increments on iframe load. Without real play counts, even showing play counts is worse than not showing them at all.

---

## SECTION 10: WHAT WORKS (Things to Keep)

Despite all the problems, these are genuine strengths:

✅ **Visual design is solid**: Dark theme, purple accent color, clean card grid — looks better than 80% of amateur game sites  
✅ **Hero section is clear**: "No Downloads, Just Play" is a clear value prop  
✅ **Fullscreen button works**: The fullscreen toggle on game pages is functional  
✅ **Loading spinner**: Clean, branded purple spinner during game load  
✅ **Breadcrumb navigation**: Well-implemented on all pages  
✅ **Sitemap is generated**: Proper sitemap.xml with all pages  
✅ **Mobile layout of homepage**: Homepage sections are readable on mobile  
✅ **Search functionality**: Header search + /games filter works correctly  
✅ **Category pills with sort**: /games page filter/sort UX is clean  
✅ **No PlayHeap in source**: Brand migration appears complete in UI code  
✅ **Footer design**: Clean 4-column footer with appropriate links  
✅ **Code quality**: Clean TypeScript components, no obvious spaghetti  

---

## PRIORITIZED FIX LIST

### Do These Immediately (Pre-Launch Critical):

1. **Strip third-party analytics and AdSense** from Pac-Man and Hextris game files
2. **Remove or hide author credits** from 2048 footer, Floppy Bird bottom bar, Pac-Man title screen
3. **Remove Hextris App Store download links** from post-game score screen
4. **Fix canonical tag** in Pac-Man (remove or update to arcadeheap.com)
5. **Fix category metadata** — remove "Hundreds of" claim (it's false)
6. **Create real OG image** — replace placehold.co with actual branded `/public/og-image.png`

### Do These This Week (High Impact):

7. **Add per-game aspect ratios** or adaptive iframe sizing — especially for portrait games
8. **Add real analytics** — Plausible or GA4 in Next.js layout
9. **Add Recently Played** — localStorage-based, no backend needed
10. **Add JSON-LD structured data** on game pages (VideoGame schema)
11. **Fix play counts** — at minimum, randomize on load or use Supabase counter; ideally increment on iframe load
12. **Add at least 3 more games** to Adventure, Strategy, Multiplayer categories
13. **Fix footer to show all 10 categories**
14. **Fix "Hot Games" button** — link to /games sorted by popular, not /category/action

### Do This Month (Quality Polish):

15. **Add ArcadeHeap splash/loading screen** that appears before game content
16. **Fix thumbnail mismatches** — Ping Pong (stock photo), 2048 (wrong grid size)
17. **Add social sharing buttons** on game pages
18. **Create cross-category related games** for thin-category games
19. **Add tag/filter system** to game data
20. **Add sandbox attribute** to game iframes
21. **Remove Next.js starter SVGs** from `/public/`
22. **Rename `package.json` name** to "arcadeheap"
23. **Add schema markup** for breadcrumbs and WebSite search
24. **Design a real logo** — custom wordmark or icon instead of emoji + text

---

## COMPETITIVE GAP ANALYSIS

| Feature | ArcadeHeap | Poki | CrazyGames | FRVR |
|---------|-----------|------|------------|------|
| Game count | 24 | 5000+ | 7000+ | 500+ |
| Recently played | ❌ | ✅ | ✅ | ✅ |
| User accounts | ❌ | ✅ | ✅ | ✅ |
| Real analytics | ❌ | ✅ | ✅ | ✅ |
| Schema markup | ❌ | ✅ | ✅ | ✅ |
| Branded OG image | ❌ | ✅ | ✅ | ✅ |
| Custom logo | ❌ | ✅ | ✅ | ✅ |
| Mobile game scaling | ❌ Broken | ✅ | ✅ | ✅ |
| Author credits hidden | ❌ | ✅ | ✅ | ✅ |
| Social sharing | ❌ | ✅ | ✅ | ✅ |
| Leaderboards | ❌ | ✅ | ✅ | ✅ |
| Ads (own) | ❌ | ✅ | ✅ | ✅ |
| 3rd party ads in games | ✅ (BAD) | ❌ | ❌ | ❌ |

---

## GAME-BY-GAME STATUS TABLE

| Game | Author Visible | 3P Analytics | 3P Ads | Aspect OK | Mobile OK | Thumb OK |
|------|---------------|-------------|--------|-----------|-----------|---------|
| 2048 | ⚠️ Footer text | ❌ | ❌ | ⚠️ Portrait in 16:9 | ❌ Too small | ⚠️ Wrong grid size |
| Tetris | ✅ Clean | ❌ | ❌ | ⚠️ Portrait | ❌ Too small | ✅ |
| Pac-Man | ❌ PACMAN CANVAS title | 🔴 UA-28993174-1 | 🔴 ca-pub-??? | ⚠️ Portrait | ❌ | ✅ |
| Minesweeper | ✅ Clean | ❌ | ❌ | ⚠️ Square | ⚠️ | ✅ |
| Hextris | ✅ Clean UI but share links | 🔴 UA-51272720-2 | 🔴 ca-pub-9107422120987163 | ✅ Square-ish | ⚠️ | ✅ |
| Memory Match | ✅ Clean | ❌ | ❌ | ✅ | ✅ | ✅ |
| Floppy Bird | ❌ Dong Nguyen + nebez credits in UI | ❌ | ❌ | ✅ 4:3 | ⚠️ | ⚠️ Mismatch |
| Snake | ✅ Clean | ❌ | ❌ | ✅ | ✅ | ✅ |
| Breakout | ✅ Clean | ❌ | ❌ | ✅ | ✅ | ⚠️ Bland |
| Tower Stack | ✅ Clean | ❌ | ❌ | ✅ | ✅ | ✅ |
| Space Invaders | ✅ Clean | ❌ | ❌ | ✅ | ✅ | ✅ |
| Clumsy Bird | ⚠️ Meta refs ellisonleao | ❌ | ❌ | ✅ | ✅ | ✅ |
| Tic Tac Toe | ✅ Clean | ❌ | ❌ | ✅ | ✅ | ✅ |
| Astray Maze | ✅ Clean | ❌ | ❌ | ✅ | ✅ | ✅ |
| Radius Raid | ⚠️ Credits menu option | ❌ | ❌ | ✅ | ✅ | ✅ |
| Dot Eater | ✅ Clean | ❌ | ❌ | ✅ | ✅ | ✅ |
| Slither Solo | ✅ Clean | ❌ | ❌ | ✅ | ✅ | ✅ |
| Ninja Slash | ✅ Clean | ❌ | ❌ | ✅ | ✅ | ✅ |
| Zombie Survivor | ✅ Clean | ❌ | ❌ | ✅ | ✅ | ✅ |
| Speed Racer | ✅ Clean | ❌ | ❌ | ✅ | ✅ | ✅ |
| Drift King | ✅ Clean | ❌ | ❌ | ✅ | ✅ | ✅ |
| Ping Pong | ✅ Clean | ❌ | ❌ | ✅ | ✅ | ❌ Wrong (stock photo) |
| Basketball Shoot | ✅ Clean | ❌ | ❌ | ✅ | ✅ | ✅ |
| Tank Battle | ✅ Clean | ❌ | ❌ | ✅ | ✅ | ✅ |

---

*End of Audit Cycle 1. Total issues found: 6 Critical, 8 High, 14 Medium, 6 Low.*
