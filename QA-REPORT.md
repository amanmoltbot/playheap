# PlayHeap QA Report

**Date:** 2026-02-18  
**Tester:** Automated QA Subagent  
**Site:** https://playheap.vercel.app  
**Codebase:** ~/Projects/playheap (Next.js 16.1.6 / TypeScript / Tailwind v4)  
**Build status:** ✅ Passes (no errors)  
**Lint status:** ✅ Passes (no errors)

---

## Summary

| Severity | Count |
|----------|-------|
| Critical | 1     |
| High     | 7     |
| Medium   | 13    |
| Low      | 10    |
| **Total**| **31**|

---

## Issues

---

### #1 — CRITICAL: All game iframe URLs point to non-existent files

**Severity:** Critical  
**File:** `src/data/games.ts` (lines 36, 49, 62, 75, …)  
**Also:** `src/components/GameEmbed.tsx` line 58

**Description:**  
Every game in the database has a `gameUrl` of the form `/games/<slug>/index.html`, e.g.:

```ts
gameUrl: '/games/pixel-warrior/index.html',
```

These are relative paths that resolve to `https://playheap.vercel.app/games/pixel-warrior/index.html` — all of which return **404**. The `public/games/` directory **does not exist**; the `public/` folder only contains default Next.js SVG template files.

Confirmed with live check: fetching `https://playheap.vercel.app/games/pixel-warrior/index.html` returns `404: This page could not be found.`

As a result, **every game on the site shows a 404 page inside the embed iframe**. Users cannot play any game. This is a site-breaking issue.

**Suggested fix:**  
Either:
1. Add actual HTML5 game files under `public/games/<slug>/index.html` for each game, OR
2. Replace the relative paths with real hosted game URLs (e.g., external CDN URLs), OR
3. Integrate a third-party HTML5 game API/CDN (e.g., GameDistribution, itch.io embed URLs).

---

### #2 — HIGH: All game thumbnails are placeholder images (placehold.co)

**Severity:** High  
**File:** `src/data/games.ts` (all 22 game entries, lines 35, 48, 61, 74, …)

**Description:**  
Every game thumbnail uses `https://placehold.co/400x300/...?text=<GameName>`. These are auto-generated placeholder images from a third-party service, not real game artwork.

```ts
thumbnailUrl: 'https://placehold.co/400x300/1a1a2e/8b5cf6?text=Pixel+Warrior',
```

Problems:
- **Visual**: Cards all look identical (same color scheme, just different text labels).
- **Reliability**: Dependency on an external placeholder service with no SLA.
- **SEO**: OG image tags in `game/[slug]/page.tsx` (line 27) use these placehold.co URLs — social shares will show low-quality placeholders.
- **Professionalism**: A live game portal cannot ship with placeholder artwork.

**Suggested fix:**  
Replace all `thumbnailUrl` values with real game screenshots/artwork stored in `public/images/games/` or served from a CDN. Update `next.config.ts` with appropriate `images.remotePatterns` if using external hosting.

---

### #3 — HIGH: `/games` page inherits homepage title (duplicate meta title, SEO issue)

**Severity:** High  
**File:** `src/app/games/page.tsx` (line 1 — `'use client'` directive)

**Description:**  
The `/games` page is declared `'use client'` at the top level, which means it **cannot export a `metadata` object**. As a result the page uses the fallback metadata from `layout.tsx`:

```
Title: "Free Online Games - Play Now | PlayHeap"
```

This is **identical to the homepage title**, creating a duplicate title issue that harms SEO. Search engines may penalise both pages.

Additionally, the page itself (`GamesContent` component) is rendered entirely client-side, meaning the 22 game titles and descriptions are **not present in the HTML source** for crawlers to index.

**Suggested fix:**  
Convert the page to a hybrid approach:
- Keep the Server Component shell with a `metadata` export (e.g., `title: 'All Games | PlayHeap'`).
- Move the `'use client'` boundary to a child `GamesContent` component only (already partially done with `GamesContent` — just move the `'use client'` directive to that inner component file, not the page file).

---

### #4 — HIGH: iframe sandbox allows `allow-scripts` + `allow-same-origin` simultaneously (security bypass)

**Severity:** High  
**File:** `src/components/GameEmbed.tsx` line 58

**Description:**  
The iframe uses this sandbox configuration:

```tsx
sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-popups"
```

Using **both `allow-scripts` and `allow-same-origin` together effectively nullifies the sandbox**. A malicious or compromised game could:
- Access `document.cookie` from the parent domain
- Read/write `localStorage` and `sessionStorage`
- Make same-origin XHR requests
- Bypass Content Security Policy

This is a well-known browser security anti-pattern (referenced in MDN documentation).

**Suggested fix:**  
Remove `allow-same-origin` from the sandbox unless the game files are hosted on a different domain. If games must be same-origin, consider hosting game files on a separate subdomain (e.g., `games.playheap.io`) so `allow-same-origin` is scoped to that subdomain. For third-party games, omitting `allow-same-origin` is safer.

---

### #5 — HIGH: No custom 404 (`not-found.tsx`) or error page (`error.tsx`)

**Severity:** High  
**File:** `src/app/` (missing files)

**Description:**  
There is no custom `not-found.tsx` or `error.tsx` in the `src/app/` directory. The build output shows `/_not-found` as a generated page — this is Next.js's default plain white/unstyled 404 page, not the site's dark theme.

Users navigating to an invalid URL (e.g., `/game/nonexistent-game`) will see the notFound() call redirected to the default Next.js error page which does not match the PlayHeap design, brand, or dark theme.

**Suggested fix:**  
Create `src/app/not-found.tsx`:
```tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-32 text-center">
      <div className="text-8xl mb-6">🕹️</div>
      <h1 className="text-4xl font-extrabold text-white mb-4">Page Not Found</h1>
      <p className="text-gray-400 mb-8">That page doesn&apos;t exist.</p>
      <Link href="/" className="bg-[#8b5cf6] text-white px-6 py-3 rounded-full hover:bg-[#7c3aed]">
        Back to Home
      </Link>
    </div>
  );
}
```
Similarly create `src/app/error.tsx` for runtime errors.

---

### #6 — HIGH: Inaccurate game count claims ("1000+ games" vs. actual 22)

**Severity:** High  
**File:** 
- `src/app/page.tsx` line 31 (`1000+ Free HTML5 Games`)
- `src/app/page.tsx` line 34–39 (hero text: `"Thousands of HTML5 Games"`)
- `src/app/about/page.tsx` line 38 (`"1000+ free HTML5 games"`)
- `src/app/layout.tsx` line 8 (meta description: `"Play thousands of free HTML5 games"`)

**Description:**  
The site claims to offer "1000+" and "thousands of" HTML5 games, but the actual game count is **22**. The games page correctly displays `{games.length}+` which would show "22+" — but this conflicts with all the above claims.

This is misleading to users and could be flagged as false advertising. It also creates inconsistency within the page itself (e.g., a user on the /games page sees "22+ free HTML5 games" but the homepage promises "thousands").

**Suggested fix:**  
Update all copy to reflect the real number, or implement a dynamically computed count from `games.length`. E.g.:
- Hero badge: `"${games.length}+ Free HTML5 Games"` (import games data into page)
- Or: Remove the number and say "Free HTML5 Games — Play Now"

---

### #7 — HIGH: No `next/image` remote patterns configured; `unoptimized` prop disables all image optimisation

**Severity:** High  
**File:** 
- `next.config.ts` (empty)
- `src/components/GameCard.tsx` line 19 (`unoptimized`)

**Description:**  
All 22 `<Image>` components use `unoptimized={true}`:
```tsx
<Image ... unoptimized />
```

This completely bypasses Next.js image optimisation:
- No WebP/AVIF conversion
- No lazy loading via Next.js
- No automatic resizing
- No CDN caching through Next.js image pipeline
- Images are fetched at full external size from placehold.co on every page load

Also, `next.config.ts` is completely empty — no `images.remotePatterns` is configured. When `unoptimized` is eventually removed, this will cause a build error for all external image domains.

**Suggested fix:**  
1. Remove `unoptimized` from `GameCard.tsx`.
2. Add to `next.config.ts`:
```ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
      // add real CDN hostname when images are real
    ],
  },
};
```
3. Replace placeholder images with real ones and use proper `sizes` prop.

---

### #8 — MEDIUM: `GameEmbed` has no `onError` handler — iframe 404 is silent

**Severity:** Medium  
**File:** `src/components/GameEmbed.tsx` lines 57–61

**Description:**  
The `<iframe>` only has an `onLoad` handler, which fires even when the page inside the iframe returns a 404. The loading spinner disappears and the user sees a raw 404 error inside the game frame with no user-friendly message.

```tsx
<iframe
  src={gameUrl}
  ...
  onLoad={handleLoad}
  // no onError!
/>
```

There is no fallback UI shown when a game fails to load.

**Suggested fix:**  
Add an error state:
```tsx
const [hasError, setHasError] = useState(false);

<iframe
  ...
  onLoad={handleLoad}
  onError={() => { setIsLoading(false); setHasError(true); }}
/>

{hasError && (
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0f0f1a]">
    <p className="text-gray-400">Game failed to load. Please try again later.</p>
  </div>
)}
```

---

### #9 — MEDIUM: `GameEmbed` fullscreen state desynchronises when user presses Escape

**Severity:** Medium  
**File:** `src/components/GameEmbed.tsx` lines 19–45

**Description:**  
When a user enters fullscreen and then presses the browser's `Escape` key to exit, the browser exits fullscreen but the React state `isFullscreen` remains `true`. This means:
- The fullscreen button shows the wrong icon (exit icon instead of enter icon)
- Clicking the button again won't work as expected (tries to call `exitFullscreen()` when not in fullscreen)

**Suggested fix:**  
Add a `fullscreenchange` event listener in a `useEffect`:
```tsx
useEffect(() => {
  const handleFsChange = () => {
    if (!document.fullscreenElement) {
      setIsFullscreen(false);
      if (containerRef.current) {
        // reset CSS fallback styles
        containerRef.current.style.position = '';
        containerRef.current.style.inset = '';
        containerRef.current.style.zIndex = '';
        containerRef.current.style.width = '';
        containerRef.current.style.height = '';
      }
    }
  };
  document.addEventListener('fullscreenchange', handleFsChange);
  return () => document.removeEventListener('fullscreenchange', handleFsChange);
}, []);
```

---

### #10 — MEDIUM: `categoryEmoji` Record is duplicated in two files

**Severity:** Medium  
**File:** 
- `src/app/page.tsx` lines 150–161
- `src/app/category/[slug]/page.tsx` lines 39–52

**Description:**  
The exact same `categoryEmoji` mapping is defined twice:
```ts
const categoryEmoji: Record<string, string> = {
  action: '⚔️',
  puzzle: '🧩',
  racing: '🏎️',
  // ...
};
```
Any future category addition must be updated in both places. If they fall out of sync, one page will show `🎮` fallback while the other shows the correct emoji.

**Suggested fix:**  
Move to `src/data/games.ts` and export it:
```ts
export const categoryEmoji: Record<string, string> = { ... };
```
Then import in both files.

---

### #11 — MEDIUM: `GameCard` `size` prop ternary is dead code (both branches identical)

**Severity:** Medium  
**File:** `src/components/GameCard.tsx` line 23

**Description:**  
```tsx
<div className={`relative overflow-hidden ${size === 'large' ? 'aspect-[4/3]' : 'aspect-[4/3]'}`}>
```
Both the `true` and `false` branches produce `'aspect-[4/3]'`. The conditional is pointless. The `size` prop also accepts `'large'` vs `'normal'` values (via `GameGrid`) but no caller ever passes `size="large"`.

**Suggested fix:**  
Either implement the distinction (e.g., `'large'` gets `aspect-[16/9]`) or remove the ternary and the `size` prop entirely:
```tsx
<div className="relative overflow-hidden aspect-[4/3]">
```

---

### #12 — MEDIUM: `SearchBar` component is never used (dead code)

**Severity:** Medium  
**File:** `src/components/SearchBar.tsx`

**Description:**  
A fully-implemented `SearchBar` component exists but is not imported or used anywhere. The `Header` and `games/page.tsx` both implement their own inline search `<input>` elements directly. This creates three separate search implementations with slightly different styles and behaviour (e.g., different `pl-9` vs `pl-10` padding, different `py-2` vs `py-2.5`).

**Suggested fix:**  
Either:
1. Replace the inline search inputs in `Header.tsx` and `games/page.tsx` with the `SearchBar` component (DRY principle), OR
2. Delete `SearchBar.tsx` if it's not needed.

---

### #13 — MEDIUM: Missing OG image, Twitter Card metadata, and canonical URLs

**Severity:** Medium  
**File:** `src/app/layout.tsx` (lines 6–14), `src/app/page.tsx` (lines 3–7)

**Description:**  
The global `metadata` in `layout.tsx` defines:
```ts
openGraph: {
  siteName: 'PlayHeap',
  type: 'website',
}
```

Missing from all pages:
- `openGraph.url` — no canonical URL specified
- `openGraph.images` — no fallback social share image (homepage and category pages will have no image when shared)
- `twitter.card` — no Twitter/X card type defined (defaults to `summary`)
- `twitter.images` — no Twitter image
- No `alternates.canonical` — search engines may not correctly deduplicate URLs

Game pages do set `openGraph.images` but use the placeholder images (see Issue #2).

**Suggested fix:**  
In `layout.tsx` metadata:
```ts
export const metadata: Metadata = {
  metadataBase: new URL('https://playheap.io'),
  openGraph: {
    siteName: 'PlayHeap',
    type: 'website',
    images: ['/og-image.png'], // create a proper 1200×630 OG image
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
};
```

---

### #14 — MEDIUM: Homepage metadata is redundantly duplicated from layout

**Severity:** Medium  
**File:** `src/app/page.tsx` lines 3–7

**Description:**  
The `metadata` export in `page.tsx` is identical to the one in `layout.tsx`:
```ts
export const metadata: Metadata = {
  title: 'Free Online Games - Play Now | PlayHeap',
  description: 'Play thousands of free HTML5 games online...',
};
```

This is redundant noise. If the layout metadata changes, both files need updating. If they diverge accidentally, the homepage will use its own stale values.

**Suggested fix:**  
Remove the duplicate `metadata` export from `src/app/page.tsx` entirely. The layout's metadata will apply automatically.

---

### #15 — MEDIUM: No `sitemap.xml` or `robots.txt`

**Severity:** Medium  
**File:** `src/app/` (missing files)

**Description:**  
There is no `sitemap.xml` or `robots.txt` configured. For a content-heavy site with 22 game pages + 10 category pages + static pages, missing a sitemap significantly reduces crawl efficiency.

**Suggested fix:**  
Create `src/app/sitemap.ts` using Next.js's built-in sitemap generation:
```ts
import { MetadataRoute } from 'next';
import { games, categories } from '@/data/games';

export default function sitemap(): MetadataRoute.Sitemap {
  const gameUrls = games.map(g => ({
    url: `https://playheap.io/game/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));
  // ... categories and static pages
  return [...gameUrls];
}
```
Also create `src/app/robots.ts`.

---

### #16 — MEDIUM: `hamburger button` missing `aria-expanded` attribute

**Severity:** Medium  
**File:** `src/components/Header.tsx` lines 63–67

**Description:**  
The mobile hamburger button has `aria-label="Toggle menu"` but is missing `aria-expanded` and `aria-controls`, which are necessary for screen readers to announce whether the menu is open or closed:

```tsx
<button
  onClick={() => setMenuOpen(v => !v)}
  className="md:hidden p-2 ..."
  aria-label="Toggle menu"
  // missing: aria-expanded={menuOpen} aria-controls="mobile-menu"
>
```

**Suggested fix:**  
```tsx
<button
  onClick={() => setMenuOpen(v => !v)}
  aria-label="Toggle menu"
  aria-expanded={menuOpen}
  aria-controls="mobile-menu"
>
```
And add `id="mobile-menu"` to the mobile menu `<div>`.

---

### #17 — MEDIUM: Privacy Policy and Terms of Service dates are hardcoded to "January 2025"

**Severity:** Medium  
**File:** 
- `src/app/privacy/page.tsx` line 19
- `src/app/terms/page.tsx` line 19

**Description:**  
Both legal pages show a static hardcoded date:
```tsx
<p className="text-gray-500 text-sm mb-10">Last updated: January 2025</p>
```

If the policies are ever updated, developers must remember to manually update this date. It's also potentially inaccurate at launch.

**Suggested fix:**  
Use an exported constant for the date so it's updated in one place, or use a `LAST_UPDATED` constant at the top of each file. Not recommended to use `new Date()` here (should be explicit about when the policy was last changed).

---

### #18 — MEDIUM: Category page breadcrumb incorrectly routes through `/games`

**Severity:** Medium  
**File:** `src/app/category/[slug]/page.tsx` lines 58–65

**Description:**  
The breadcrumb shows: `Home › Games › Action`

```tsx
<nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
  <Link href="/">Home</Link>
  <span>›</span>
  <Link href="/games">Games</Link>  {/* ← is this canonical? */}
  <span>›</span>
  <span className="text-gray-300">{cat.label}</span>
</nav>
```

Category pages are direct children of the root, not of the "All Games" page. The breadcrumb implies a hierarchy that doesn't exist in the URL structure (`/category/action` is not under `/games`). Compare with game pages which correctly show `Home › Action › Pixel Warrior`.

**Suggested fix:**  
Remove the `/games` breadcrumb step:
```tsx
<Link href="/">Home</Link> › <span>{cat.label}</span>
```

---

### #19 — MEDIUM: `globals.css` duplicates CSS variables and re-implements Tailwind built-ins

**Severity:** Medium  
**File:** `src/app/globals.css` lines 3–14

**Description:**  
Two issues:

1. **Duplicate CSS variables**: The same values are defined in both `@theme inline {}` (Tailwind v4 config) AND a separate `:root {}` block:
```css
@theme inline {
  --color-background: #0f0f0f;  /* Tailwind v4 */
}
:root {
  --background: #0f0f0f;        /* different variable name! */
}
```
These are different variable names (`--color-background` vs `--background`), creating confusion about which to use.

2. **Redundant `line-clamp` utilities** (lines 33–50): Tailwind v4 ships `line-clamp-1`, `line-clamp-2`, `line-clamp-3` as built-in utilities. Manually re-implementing them in `globals.css` is unnecessary and could conflict with the Tailwind utilities.

**Suggested fix:**  
- Consolidate CSS variables into `@theme inline {}` only.
- Remove the manual `line-clamp-*` definitions.

---

### #20 — MEDIUM: `games/page.tsx` "Newest First" sort is unstable (games within same `isNew` value not sorted)

**Severity:** Medium  
**File:** `src/app/games/page.tsx` lines 31–33

**Description:**  
```ts
else if (sortBy === 'new') result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
```

This sort only puts `isNew: true` games before `isNew: false` games, but within each group the order is arbitrary (relies on JS engine sort stability). Since `isNew` is a boolean with no timestamp, there's no way to sort by "actually newest". All `isNew: true` games are grouped together but in no meaningful order.

**Suggested fix:**  
Add a `createdAt` or `addedDate` field to the `Game` interface in `games.ts` to enable proper chronological sorting.

---

### #21 — LOW: Default Next.js template files remain in `public/`

**Severity:** Low  
**File:** `public/` directory

**Description:**  
The following files are remnants of the `create-next-app` starter template and serve no purpose in the deployed site:
- `public/file.svg`
- `public/globe.svg`
- `public/next.svg`
- `public/vercel.svg`
- `public/window.svg`

They're accessible as static files (e.g., `https://playheap.vercel.app/next.svg`) and add unnecessary noise to the deployment.

**Suggested fix:**  
Delete all unused template files from `public/`. Keep only `favicon.ico` (moved from `src/app/favicon.ico` to `public/favicon.ico`) and any actual assets needed.

---

### #22 — LOW: Footer "Pages" section is missing Terms of Service and Contact links

**Severity:** Low  
**File:** `src/components/Footer.tsx` lines 23–33

**Description:**  
The Footer has two navigation columns:
- **Pages**: Home, All Games, About, Privacy Policy
- **Legal**: Privacy Policy, Terms of Service, About Us, Contact

The "Pages" section is missing `/terms` and `/contact` links. "Privacy Policy" appears in both columns, and "About Us" appears in both columns. This creates redundancy and omissions.

**Suggested fix:**  
Deduplicate the footer links:
- **Pages**: Home, All Games, About, Contact
- **Legal**: Privacy Policy, Terms of Service

---

### #23 — LOW: Contact page has no actual contact form

**Severity:** Low  
**File:** `src/app/contact/page.tsx`

**Description:**  
The contact page only provides an email address with no form. Users must open their mail client to send a message, creating friction and reducing conversions. Users on mobile or without email configured get no easy way to contact.

The About page also has a duplicate "Contact Us" section (with the same email), making the `/contact` page somewhat redundant.

**Suggested fix:**  
Add a simple contact form with fields for name, email, subject, and message. Integrate a form service (Formspree, Resend, etc.) to handle submissions without a backend.

---

### #24 — LOW: No `apple-touch-icon`, `manifest.json`, or PWA metadata

**Severity:** Low  
**File:** `src/app/layout.tsx`

**Description:**  
The site has no `apple-touch-icon`, no `manifest.json`, no `theme-color` meta tag, and no PWA configuration. For a gaming site targeting mobile users (claimed to be "mobile-friendly"), these are basic quality-of-life improvements:
- Without `apple-touch-icon`, iOS home-screen bookmarks use a screenshot
- Without `theme-color`, the browser chrome won't match the dark theme

**Suggested fix:**  
Add to `layout.tsx` metadata:
```ts
icons: {
  apple: '/apple-touch-icon.png',
},
other: {
  'theme-color': '#0f0f0f',
}
```
And create a `public/manifest.json` for PWA support.

---

### #25 — LOW: `iframe` allow attribute includes `clipboard-write` (overly permissive)

**Severity:** Low  
**File:** `src/components/GameEmbed.tsx` line 57

**Description:**  
```tsx
allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
```

`clipboard-write` grants the embedded game the ability to write to the user's clipboard without user gesture in some browsers. Most HTML5 games don't need this permission. It's better to only grant permissions that are actually required.

**Suggested fix:**  
Remove `clipboard-write` unless specific games require it. Minimal suggested `allow`:
```
allow="fullscreen; autoplay; pointer-lock"
```

---

### #26 — LOW: `about/page.tsx` claims "1000+ free HTML5 games across 10+ categories" (inaccurate — see also Issue #6)

**Severity:** Low  
**File:** `src/app/about/page.tsx` line 38

**Description:**  
The bullet point `"🕹️ 1000+ free HTML5 games across 10+ categories"` is part of the "What We Offer" list. This repeats the inflated count problem (Issue #6) and is false on a live site with 22 games. The "10+ categories" part is marginally true (there are exactly 10 categories, not "10+").

**Suggested fix:**  
Update the copy to be accurate or use a dynamic count. 

---

### #27 — LOW: No `loading="lazy"` or `Suspense` for GameCard images (beyond `next/image` default)

**Severity:** Low  
**File:** `src/components/GameCard.tsx` line 19

**Description:**  
Because `unoptimized={true}` is set (Issue #7), the `next/image` lazy loading feature is not being used as effectively. The `sizes` prop also assumes 4-column layout but the image is used in 3-column (`cols={3}`) layouts on the homepage featured section without adjusting sizes:

```tsx
sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
```

For `cols={3}`, the desktop size should be `33vw`, not `25vw`.

**Suggested fix:**  
Pass `sizes` as a prop to `GameCard` (or derive it from the `size` prop) to match the actual grid column width.

---

### #28 — LOW: `globals.css` sets generic `font-family: Arial` — no `next/font` optimisation

**Severity:** Low  
**File:** `src/app/globals.css` line 20

**Description:**  
```css
body {
  font-family: Arial, Helvetica, sans-serif;
}
```

The site uses a system font stack via raw CSS. While this is fine for performance, `layout.tsx` doesn't use `next/font` at all, missing the opportunity for:
- Font preloading
- Font fallback optimisation (CLS reduction)
- Variable font subsetting

The `antialiased` Tailwind class on `<body>` in `layout.tsx` may also be ineffective if the `globals.css` font declaration overrides font rendering.

**Suggested fix:**  
Consider using `next/font/google` for a custom font (e.g., Inter or Nunito for a gaming site), or at minimum remove the `globals.css` override and rely on Tailwind's font-sans defaults.

---

### #29 — LOW: `about/page.tsx` has duplicated contact info that's already on `/contact`

**Severity:** Low  
**File:** `src/app/about/page.tsx` lines 54–60

**Description:**  
The About page has a "Contact Us" section with the email address and a button "Start Playing" that links to `/`. The existence of both an About page with contact info and a dedicated `/contact` page causes duplication. Neither page links to the other.

**Suggested fix:**  
Replace the contact section on the About page with a brief line and a `<Link href="/contact">Contact Us →</Link>` button.

---

### #30 — LOW: `react` version in `package.json` appears non-standard (`19.2.3`)

**Severity:** Low  
**File:** `package.json` lines 13–14

**Description:**  
```json
"react": "19.2.3",
"react-dom": "19.2.3"
```

React 19 was released, but `19.2.3` should be verified as a real published version. The `next` version `16.1.6` is also non-standard — as of early 2026, Next.js is at version 15.x. These may be internal/preview builds or future versions that exist in the package ecosystem, but should be verified for stability and security patches.

**Suggested fix:**  
Verify these are legitimate npm-published stable versions. Run `npm outdated` to check for security patches. Consider pinning exact versions with a lockfile audit (`npm audit`).

---

### #31 — LOW: Emoji decorations lack `aria-hidden` attributes

**Severity:** Low  
**File:** Multiple files (e.g., `src/app/page.tsx`, `src/app/about/page.tsx`, `src/components/GameCard.tsx`)

**Description:**  
Decorative emoji characters (🎮, ⭐, ✨, etc.) are used throughout the UI without `aria-hidden="true"`. Screen readers will announce these as text (e.g., "game controller emoji", "star emoji"), which is verbose and disruptive for accessibility.

Example in `page.tsx`:
```tsx
<div className="inline-flex ...">
  <span>🎮</span> 1000+ Free HTML5 Games
</div>
```

**Suggested fix:**  
Add `aria-hidden="true"` to decorative emoji spans:
```tsx
<span aria-hidden="true">🎮</span>
```

---

## Appendix: Pages Checked

| URL | HTTP Status | Notes |
|-----|-------------|-------|
| https://playheap.vercel.app | 200 | OK |
| https://playheap.vercel.app/game/pixel-warrior | 200 | Game iframe 404s |
| https://playheap.vercel.app/game/block-puzzle-master | 200 | Game iframe 404s |
| https://playheap.vercel.app/category/action | 200 | Shows 3 games |
| https://playheap.vercel.app/category/puzzle | 200 | Shows 3 games |
| https://playheap.vercel.app/games | 200 | Client-rendered only |
| https://playheap.vercel.app/about | 200 | OK |
| https://playheap.vercel.app/privacy | 200 | OK |
| https://playheap.vercel.app/terms | 200 | OK |
| https://playheap.vercel.app/contact | 200 | No form |
| https://playheap.vercel.app/games/pixel-warrior/index.html | **404** | Missing game file |

## Appendix: Files Reviewed

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/game/[slug]/page.tsx`
- `src/app/category/[slug]/page.tsx`
- `src/app/games/page.tsx`
- `src/app/about/page.tsx`
- `src/app/privacy/page.tsx`
- `src/app/terms/page.tsx`
- `src/app/contact/page.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/components/GameCard.tsx`
- `src/components/GameEmbed.tsx`
- `src/components/GameGrid.tsx`
- `src/components/AdSlot.tsx`
- `src/components/CategoryBadge.tsx`
- `src/components/SearchBar.tsx`
- `src/data/games.ts`
- `src/app/globals.css`
- `next.config.ts`
- `package.json`
- `tsconfig.json`
- `eslint.config.mjs`
- `public/` directory
