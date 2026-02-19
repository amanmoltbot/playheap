# Session 1: Google H5 Games — Complete Requirements Documentation

> **Sources**: Google AdSense H5 Games Ads docs, Google Ad Placement API docs, Google Publisher Policies, H5 Games Policy Best Practices Infographic, AdSense Program Policies, AdSense Eligibility Requirements
> **Date**: 2026-02-19

---

## 1. ELIGIBILITY REQUIREMENTS

### 1.1 Account Prerequisites
- **Approved AdSense account** required before applying for H5 Games Ads
- H5 Games Ads is a **by-application product** (beta) — approval not guaranteed
- Subject to "partner eligibility" criteria (Google does not publish exact thresholds)
- Apply via: https://adsense.google.com/start/h5-beta/

### 1.2 Site-Level Requirements
- **You must own the H5 games website** — Google's exact words: "Any publisher that owns an H5 games website is eligible to apply, as long as the Advertising and AdSense Program Policies are adhered to."
- Site must comply with **all** of the following policy layers:
  1. Google AdSense Program Policies
  2. Google Publisher Policies
  3. Google Publisher Restrictions
  4. H5 Games Ads (Beta) Policies (specific to Ad Placement API)

---

## 2. TECHNICAL REQUIREMENTS

### 2.1 Ad Placement API Integration
- Must use the **H5 Games Ad Placement API** (`adBreak()` / `adConfig()` functions)
- The Ad Placement API must run **within the same document** as the game canvas and `adsbygoogle` tag
- Standard AdSense tag (`adsbygoogle.js`) is used — same code for game ads and content ads
- `data-ad-frequency-hint` attribute controls ad frequency (e.g., `"30s"`)

### 2.2 Game Page Structure
```html
<head>
  <script async
    data-ad-frequency-hint="30s"
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXX"
    crossorigin="anonymous">
  </script>
  <script>
    window.adsbygoogle = window.adsbygoogle || [];
    var adBreak = adConfig = function(o) {adsbygoogle.push(o);}
  </script>
</head>
<body>
  <canvas id="game_canvas" width="100%" height="100%"></canvas>
  <script src="game.js"></script>
</body>
```

### 2.3 Distribution Requirements
- Games can be served: **fullscreen**, **iFrame/WebView**, or **embedded**
- If iFrame'd: the tag AND all API calls must be **inside the iFrame**, not the parent
- The ad must always **fully cover the enclosing document**
- The tag and game must always be in the **same document**

### 2.4 HTTPS / Security
- Site must be served over **HTTPS** (standard AdSense requirement)
- No malware, phishing, or deceptive behavior
- Must not enable illegal access to content or bypass copyright protections

---

## 3. AD PLACEMENT POLICIES (H5-Specific)

### 3.1 Supported Ad Formats
- **Interstitials**: Full-screen ads at natural breaks (between levels, loading screens)
- **Rewarded Ads**: Users opt-in to watch ads in exchange for in-game rewards (coins, lives, etc.)
- Both support display ads + TrueView/Bumper video ads

### 3.2 Allowed Ad Placements (6 placement types)
| Placement | When |
|-----------|------|
| **Preroll** | While the game is rendering/loading |
| **Start** | When the game is ready to play |
| **Pause** | When users pause a session |
| **Browse** | When users are outside game sessions (settings, catalog) |
| **Next** | When users advance to next level |
| **Reward** | When users need credits to progress |

### 3.3 PROHIBITED Ad Behaviors (Critical — rejection triggers)
Full-screen ads **MUST NOT**:
- ❌ Appear before the app/page has opened (user thinks clicking ad is part of startup)
- ❌ Appear after the app has exited or page has closed
- ❌ Trigger after a user closes another full-screen ad (no ad stacking)
- ❌ Appear unexpectedly during content viewing
- ❌ Trigger after every user interaction
- ❌ Interrupt continuous gameplay or heavy user interaction
- ❌ Interfere with user navigation and interaction
- ❌ Be confused with normal app operation

Full-screen ads **MUST**:
- ✅ Only appear between screens/content pages
- ✅ Only appear at transitions between game catalog and individual games
- ✅ Only be created using `adBreak()` from the Ad Placement API

### 3.4 Ad Frequency
- Must not overwhelm users — use `data-ad-frequency-hint` to control
- No policy-defined minimum interval, but aggressive frequency = rejection risk
- Best practice: 30s+ between ad opportunities

---

## 4. CONTENT & QUALITY REQUIREMENTS

### 4.1 AdSense Content Standards
- **High-quality, original content** that attracts an audience
- Must provide **substantial, useful content** — not just a game wrapper
- No scraped or auto-generated low-quality content
- No pages that exist primarily to show ads (MFA — Made for Ads)

### 4.2 Google Publisher Policies (applies to all pages)
- No **sexually explicit** content
- No content promoting **violence, harassment, hate speech**
- No **dangerous or derogatory** content
- No **misleading/deceptive practices** (fake buttons, deceptive navigation)
- No **shocking content** designed to exploit
- No **illegal content** or promotion of illegal activities
- No content enabling **unauthorized access** or copyright circumvention

### 4.3 Content Ownership & Licensing
- **You must have rights to distribute all games on your platform**
- Open-source games: verify the specific license (MIT, GPL, Apache, etc.)
  - MIT/Apache: generally safe for commercial use with attribution
  - GPL: may require your modifications to also be open source
  - Some licenses prohibit commercial use entirely
- **Attribution requirements must be met** per each game's license
- Clones of copyrighted games (e.g., "Flappy Bird clone") may trigger IP issues
- Google can reject for **copyrighted material** violations

### 4.4 Game Quality Expectations
While Google doesn't publish explicit quality benchmarks for H5 games, the following are derived from AdSense quality standards and common rejection reasons:
- Games must be **functional and playable** — no broken games
- Games should provide **genuine entertainment value**
- No deceptive gameplay (e.g., fake game that's really just an ad delivery mechanism)
- Game catalog should feel curated, not a dump of random iFrames

---

## 5. PRIVACY & COMPLIANCE

### 5.1 Privacy Policy (Mandatory)
Your site's privacy policy **must disclose**:
- That third parties (including Google) place cookies on users' browsers
- That web beacons or IP addresses may be used for data collection
- How user data is collected, used, and shared
- Link to Google's privacy policy or ad settings page

### 5.2 Cookie Consent
- Must comply with applicable data protection laws (GDPR, CCPA, etc.)
- Google CMP (Consent Management Platform) integration recommended
- Must obtain consent before serving personalized ads in applicable regions

### 5.3 COPPA / Children's Content
- If games target children under 13, additional COPPA compliance required
- Must tag child-directed content appropriately
- Personalized ads cannot be served to children

---

## 6. SITE INFRASTRUCTURE

### 6.1 Performance (Industry Standards for H5 Games)
Google doesn't publish H5-specific benchmarks, but Core Web Vitals + general web standards apply:
| Metric | Target |
|--------|--------|
| **LCP** (Largest Contentful Paint) | < 2.5s |
| **FID/INP** (Interaction to Next Paint) | < 200ms |
| **CLS** (Cumulative Layout Shift) | < 0.1 |
| **Page Load Time** | < 3s (critical for game portals) |
| **Game Load Time** | < 5s per individual game |
| **Mobile Performance** | Lighthouse score 70+ |

### 6.2 Mobile Requirements
- Site must be **fully responsive** and mobile-friendly
- Games must be **playable on mobile** (touch controls, proper viewport)
- No horizontal scroll on mobile
- Touch targets appropriately sized (48x48px minimum)
- Mobile-first design expected (majority of H5 game traffic is mobile)

### 6.3 Navigation & UX
- Clear, intuitive navigation
- Easy to find and play games
- No deceptive UI patterns (fake buttons, misleading links)
- Proper back button / exit behavior
- No forced redirects or pop-ups that interfere with navigation

### 6.4 Essential Site Pages
- **Privacy Policy** (mandatory)
- **Terms of Service** (strongly recommended)
- **About/Contact** page (adds legitimacy)
- **DMCA/Copyright** notice (recommended for game portals)

---

## 7. STRUCTURED DATA

### 7.1 Recommended Schema.org Markup
For game portal pages:
- `WebSite` schema with `SearchAction` (if site has search)
- `VideoGame` or `SoftwareApplication` schema for individual games
- `BreadcrumbList` for navigation
- `Organization` schema for site identity

### 7.2 Per-Game Structured Data (Ideal)
```json
{
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Game Name",
  "description": "Game description",
  "genre": "Puzzle",
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "url": "https://arcadeheap.com/games/game-name",
  "image": "https://arcadeheap.com/images/game-name.jpg",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.2",
    "ratingCount": "150"
  }
}
```

---

## 8. MONETIZATION RESTRICTIONS

- **No content ads on game interfaces** — must use H5 Games Ad Placement API for game pages
- Standard AdSense display ads are fine on non-game pages (homepage, category pages)
- No interstitials on non-gaming inventory
- No ad stacking (multiple overlapping ads)
- No encouraging clicks ("click here to support us")
- No placing ads in a way that could lead to accidental clicks
- No auto-refreshing ads

---

## 9. SECURITY STANDARDS

- HTTPS everywhere (no mixed content)
- No malware or unwanted software
- No phishing pages
- No drive-by downloads
- Content Security Policy (CSP) headers recommended
- X-Frame-Options / frame-ancestors for iFrame security (but must allow Google ad serving domains)

---

## 10. COMMON REJECTION REASONS (Compiled from community reports)

1. **Insufficient content** — site is too thin, just a game wrapper
2. **Low traffic** — Google prefers established sites
3. **Copyrighted games** — using games without proper licensing
4. **Missing privacy policy / legal pages**
5. **Poor mobile experience**
6. **Aggressive ad placements** — too many, too frequent, deceptive
7. **Navigation issues** — users can't easily find/play games
8. **Mixed content / no HTTPS**
9. **Broken games** — games that don't load or crash
10. **Site age** — brand new sites often get rejected (6+ months recommended)

---

## SUMMARY: Compliance Checklist for ArcadeHeap

| Category | Key Requirements |
|----------|-----------------|
| **Account** | Approved AdSense account + H5 beta application |
| **Technical** | Ad Placement API integration, same-document tag placement |
| **Ads** | Only at natural breaks, no stacking, no deceptive placement |
| **Content** | High-quality, original, substantial — not just a game wrapper |
| **Licensing** | Rights to every game, proper attribution, no IP violations |
| **Privacy** | Privacy policy, cookie consent, GDPR/CCPA compliance |
| **Performance** | Core Web Vitals passing, fast load times, mobile-optimized |
| **UX** | Clear navigation, no deceptive patterns, mobile-first |
| **Security** | HTTPS, no mixed content, CSP headers |
| **Pages** | Privacy Policy, Terms, About/Contact, DMCA |
| **Structured Data** | VideoGame schema, Organization, BreadcrumbList |
| **Branding** | Consistent (ArcadeHeap, not PlayHeap — known issue) |

---

*Session 1 complete. Ready for Session 2: ArcadeHeap Compliance Audit.*
