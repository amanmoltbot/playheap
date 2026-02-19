# Session 3: Gap Exposure — ArcadeHeap H5 Games Compliance

> **Date**: 2026-02-19
> **Approach**: Every deficiency exposed aggressively. Borderline = risk.

---

## ⛔ CRITICAL GAPS (Rejection Guaranteed)

### GAP 1: Licensing & IP — ZERO Compliance
**Severity**: ⛔ SHOWSTOPPER — Legal liability + guaranteed rejection

**What's wrong:**
- 0/40 game directories contain license files
- No license field in the Game data model
- No attribution to any original developer on the site
- No DMCA/copyright takedown page

**Trademark violations (active legal risk):**

| Game | Risk | Why |
|------|------|-----|
| **Tetris** | ⛔ EXTREME | The Tetris Company aggressively sues clones. Even using the NAME "Tetris" is trademark infringement. They've taken down thousands of clones. |
| **Pac-Man** | ⛔ EXTREME | Trademarked by Bandai Namco. The name "Pac-Man" cannot be used. The game's maze design is also protected. |
| **Space Invaders** | ⛔ HIGH | Trademarked by Taito/Square Enix |
| **Wordle** | ⛔ HIGH | Owned by The New York Times since 2022. Actively enforces. The name AND the game mechanic are claimed. |
| **Asteroids** | ⚠️ MEDIUM | Originally Atari. Trademark may have lapsed but the name is recognizable IP. |
| **Breakout** | ⚠️ MEDIUM | Originally Atari. Same concern. |
| **Flappy Bird** | ⚠️ LOW-MEDIUM | Title already renamed to "Floppy Bird" in code — but slug is still `flappy-bird`. Dong Nguyen didn't trademark it, but the association is strong. |
| **Simon Says** | ⚠️ LOW | Trademarked toy by Hasbro, but the phrase itself is generic. |

**Source code analysis:**
- `flappy-bird/`: Has MIT license header + author credit (Nebez Briefkani) — **but not displayed on site**
- `pacman/`: Uses jQuery (MIT) + HammerJS (MIT) — game code itself has no license
- `tetris/`, `space-invaders/`, `wordle/`, `asteroids/`, `breakout/`: No license info found anywhere

**What must happen:**
1. Remove or rename ALL trademarked games (Tetris, Pac-Man, Space Invaders, Wordle)
2. Audit every game's source for original license
3. Add license field to Game data model
4. Display attribution on every game page
5. Create DMCA page
6. For games with no verifiable open-source license: REMOVE THEM

---

### GAP 2: Fake Structured Data — Google Manual Action Risk
**Severity**: ⛔ SHOWSTOPPER — Can result in site-wide penalty

**What's wrong:**
```typescript
aggregateRating: {
  '@type': 'AggregateRating',
  ratingValue: '4.5',        // HARDCODED — every game gets 4.5
  bestRating: '5',
  worstRating: '1',
  ratingCount: Math.max(50, Math.floor(game.plays / 100)),  // FAKE
}
```

- Every single game has identical `ratingValue: '4.5'`
- `ratingCount` is derived from fake `plays` numbers (also hardcoded in data)
- `plays` counts are fabricated (e.g., 489756 for 2048, 412345 for Tetris)
- Google's Rich Results guidelines explicitly prohibit fabricated ratings
- This isn't just an H5 rejection risk — it's a **manual action** risk that could tank the entire site's search presence

**What must happen:**
1. Remove `aggregateRating` entirely from schema (no real rating system exists)
2. Remove fake `plays` counts OR clearly label them as estimates
3. Only add ratings back if a real user rating system is implemented

---

### GAP 3: No Ad Integration
**Severity**: ⛔ BLOCKER — Can't apply without it

**What's wrong:**
- Zero AdSense code in the project
- No Ad Placement API (`adBreak`/`adConfig`)
- No `adsbygoogle.js` script loaded
- Game pages use iFrames — ad tag placement architecture needs design

**Architecture challenge:**
Games are served via `<iframe src="/games/[slug]/index.html">` with sandbox attributes. The Ad Placement API requires the tag to be **in the same document** as the game canvas. Two options:

**Option A**: Place ad code in each game's `index.html` (inside iFrame)
- Pros: Follows Google's recommended architecture
- Cons: Must modify 40+ game files, each game becomes ad-aware

**Option B**: Place ad code on the host page, show interstitials outside the iFrame
- Pros: Single integration point
- Cons: May not comply with "same document" requirement

**Recommendation**: Option A is the only Google-compliant approach. Each game's HTML needs the AdSense tag + API hooks for `adBreak()` at natural pause points.

---

## ❌ MAJOR GAPS (High Rejection Risk)

### GAP 4: Privacy & Consent — Multiple Failures
**Severity**: ❌ HIGH — Required for AdSense approval

**Missing items:**
1. **No cookie consent banner/CMP** — GDPR requires explicit consent before serving personalized ads. Google AdSense won't serve personalized ads without consent in EU/UK/EEA. No consent mechanism = no ad revenue from 20%+ of traffic.

2. **Privacy policy doesn't mention Google** — Must specifically disclose:
   - Google as an advertising partner
   - Google's use of cookies for ad serving
   - Link to https://policies.google.com/technologies/ads
   - How users can opt out of personalized advertising

3. **No CCPA "Do Not Sell My Personal Information" link** — Required for California users

4. **No opt-out mechanism** — Privacy policy mentions ads but provides no actionable opt-out

5. **COPPA risk** — Site says "13 and older" but:
   - No age gate or verification
   - Games are inherently child-attractive
   - No child-directed content tagging for Google
   - If Google determines content is child-directed, personalized ads are blocked

---

### GAP 5: Missing Security Headers
**Severity**: ❌ MEDIUM-HIGH

**Missing:**
- `Content-Security-Policy` — No CSP headers configured in `next.config.ts`
- `X-Content-Type-Options` — Missing `nosniff`
- `Permissions-Policy` — Not configured
- `Referrer-Policy` — Not explicitly set (though iFrame has `referrerPolicy="no-referrer"`)

**Why it matters:** Google evaluates site security. Missing CSP is a quality signal. Also, when AdSense is integrated, CSP must whitelist Google ad domains or ads won't load.

---

### GAP 6: Missing DMCA Page
**Severity**: ❌ MEDIUM-HIGH — Especially critical for a game portal

A game portal hosting third-party content MUST have a DMCA/copyright process. Without it:
- Google sees this as a red flag for content ownership
- No mechanism for rights holders to request takedowns
- Increases legal exposure significantly

---

## ⚠️ MODERATE GAPS (Could Trigger Rejection)

### GAP 7: No Organization Schema
**Severity**: ⚠️ MEDIUM

Site has WebSite + VideoGame + BreadcrumbList schemas but no Organization schema. For AdSense approval, Google wants to see a legitimate entity behind the site.

### GAP 8: Content Depth on Non-Game Pages
**Severity**: ⚠️ MEDIUM

- Homepage: Loads as mostly empty when fetched (only footer text visible to crawlers without JS)
- Category pages: Need verification of SSR content
- About page: Generic — could be stronger with more detail about the team/mission
- Contact page: Needs verification

**Risk**: If Google's crawler doesn't see rich content (SSR issue), the site looks thin.

### GAP 9: Missing CSP for AdSense Domains
**Severity**: ⚠️ MEDIUM (blocks implementation)

When implementing AdSense, CSP headers must whitelist:
- `*.googlesyndication.com`
- `*.googleadservices.com`  
- `*.doubleclick.net`
- `tpc.googlesyndication.com`

Without this, ads literally won't load even if the code is correct.

### GAP 10: Social Links Lead Nowhere
**Severity**: ⚠️ LOW-MEDIUM

Footer links to `twitter.com/arcadeheap` and `discord.gg/arcadeheap` — if these don't exist, they're dead links. Dead social links reduce site credibility.

### GAP 11: PlayHeap Branding Remnants
**Severity**: ⚠️ UNKNOWN — Needs browser verification

Memory notes say "branding still says PlayHeap in places." Inconsistent branding = unprofessional = rejection risk. Needs full audit.

### GAP 12: AdSense Account Status Unknown
**Severity**: ⚠️ BLOCKING

Don't know if Aman has an approved AdSense account. This is prerequisite #1 for the entire operation.

---

## 📊 RISK MATRIX

| Gap | Severity | Effort to Fix | Priority |
|-----|----------|---------------|----------|
| GAP 1: Licensing/IP | ⛔ Critical | HIGH (research + remove + rename) | **P0 — Do first** |
| GAP 2: Fake ratings | ⛔ Critical | LOW (remove schema) | **P0** |
| GAP 3: Ad integration | ⛔ Blocker | HIGH (architecture + 40 files) | **P1** |
| GAP 4: Privacy/consent | ❌ High | MEDIUM (CMP + policy rewrite) | **P1** |
| GAP 5: Security headers | ❌ Medium-High | LOW (next.config.ts) | **P2** |
| GAP 6: DMCA page | ❌ Medium-High | LOW (create page) | **P1** |
| GAP 7: Org schema | ⚠️ Medium | LOW (add to layout) | **P2** |
| GAP 8: SSR content | ⚠️ Medium | MEDIUM (verify/fix) | **P2** |
| GAP 9: CSP for ads | ⚠️ Medium | LOW (next.config.ts) | **P2** |
| GAP 10: Dead social | ⚠️ Low-Med | LOW (remove or create) | **P3** |
| GAP 11: PlayHeap remnants | ⚠️ Unknown | LOW (find/replace) | **P2** |
| GAP 12: AdSense account | ⚠️ Blocking | N/A (Aman decision) | **P0 — Confirm** |

---

## EXECUTION ORDER FOR SESSION 4

1. **Confirm AdSense account status** (need Aman's input)
2. **Licensing audit** — Research every game's source, document licenses, remove/rename trademark violations
3. **Remove fake structured data** — Delete aggregateRating + fake plays
4. **Create DMCA page**
5. **Rewrite privacy policy** — Google-specific disclosures, CCPA, opt-out
6. **Add cookie consent banner** (CMP)
7. **Add security headers** + CSP whitelist for future ad domains
8. **Add Organization schema**
9. **Fix dead social links**
10. **Verify PlayHeap remnants** 
11. **Ad Placement API integration** (biggest task — last because licensing must be clean first)

---

*Session 3 complete. Ready for Session 4: Compliance Execution.*
