# Pixel Agency — Project Summary

> **Purpose of this file:** Give Claude (or any contributor) an instant working understanding of this repo without exploring the whole codebase. Keep it updated whenever structure, patterns, or content conventions change.

---

## Project

**pixelagency.com.au** — company website for Pixel Agency, an Australian digital agency.  
Secondary domain: **pixelassist.ai** — redirects to `/pixel-assist` via Vercel.

---

## Tech Stack

| Tool | Version | Role |
|---|---|---|
| Astro | ^6.4 | Static site framework, file-based routing |
| TailwindCSS | ^4.2 | Utility-first styling (via `@tailwindcss/vite`) |
| GSAP | ^3.15 | Animations |
| Lenis | ^1.3 | Smooth scrolling |
| TypeScript | strict | All source files |
| Partytown | ^2.1 | Offloads GTM + other third-party scripts to web workers |
| @astrojs/sitemap | ^3.7 | Auto-generates `/sitemap-index.xml` (filters out `/case-studies/private/`) |

**Node:** `>=22.12.0`  
**Deploy:** Vercel (`vercel.json` at root)  
**Site URL:** `https://www.pixelagency.com.au`

---

## Directory Structure

```
src/
├── assets/
│   ├── case-studies/<slug>/     # tile, hero, squareOne, squareTwo, wideOne, wideTwo (.webp/.svg)
│   └── services/
├── components/
│   ├── case-studies/
│   │   ├── case-study/          # CaseStudyHeader, CaseStudyImages, CaseStudyMetaData,
│   │   │                        # CaseStudyNav, CaseStudyResults, CaseStudySectionText,
│   │   │                        # CaseStudyShout, CaseStudyToggleButton
│   │   ├── CallOut.astro
│   │   ├── CaseStudyCard.astro
│   │   └── PageHeading.astro
│   ├── home/                    # CaseStudyDrawer, ClientLogos, LetsTalk, PixelAssistChatbot
│   ├── insights/                # FeaturedInsights, Insight, InsightCard, InsightList,
│   │                            # InsightNav, Insights, InsightSignoff
│   ├── services/                # BlurbPoints, CaseStudiesSection, FeatureCards,
│   │                            # HeroSection, OurApproachSection, WhatWeDoSection, WhoSection
│   ├── signs/                   # Equals, Plus, Vector (decorative SVG elements)
│   ├── Callout.astro
│   ├── ContactForm.astro
│   ├── CTA.astro
│   ├── Footer.astro
│   ├── Grid.astro
│   ├── Menu.astro
│   └── SectionCards.astro
├── config/
│   ├── colours.ts               # Brand palette tokens — SINGLE SOURCE OF TRUTH for colours
│   └── site.ts                  # Phone + email constants, Link type
├── data/
│   ├── caseStudies.ts           # All case study metadata + filtering/nav logic
│   ├── insights.ts              # All insight metadata + filtering/nav logic
│   └── analyticsCaller.ts       # Analytics page-type helpers
├── layouts/
│   └── Layout.astro             # Root layout: SEO, fonts, GTM, Chkout, Menu, Footer, flow-field accent colour
├── pages/
│   ├── index.astro              # Homepage
│   ├── about.astro
│   ├── contact.astro
│   ├── pixel-assist.astro       # Pixel Assist AI product landing page
│   ├── agency-help.astro        # Landing page for prospects whose current agency has gone quiet/stopped delivering
│   ├── privacy-policy.astro
│   ├── terms-and-conditions.astro
│   ├── sitemap.astro
│   ├── 404.astro
│   ├── [city].astro             # City SEO pages: melbourne, sydney, brisbane, perth,
│   │                            # adelaide, canberra, hobart, darwin
│   ├── case-studies/
│   │   ├── index.astro          # Case studies listing
│   │   ├── <slug>.astro         # Published case study pages
│   │   └── private/<slug>.astro # Unlisted case studies (excluded from sitemap, noindex)
│   ├── insights/
│   │   ├── index.astro          # Insights listing
│   │   ├── <slug>.astro         # Published insight pages
│   │   └── private/             # Unlisted insights
│   └── services/
│       ├── index.astro
│       ├── ai.astro
│       ├── consulting.astro
│       ├── design.astro
│       ├── development.astro
│       ├── discovery.astro
│       └── education.astro
├── scripts/
│   └── flow-field.ts            # Custom animated canvas background (zero deps, ~3KB)
├── styles/
│   └── global.css               # CSS custom properties + Tailwind base; mirrors colours.ts
└── types/                       # Shared TypeScript types
```

---

## Path Aliases (tsconfig.json)

```
@components  →  src/components
@config      →  src/config
@layouts     →  src/layouts
@scripts     →  src/scripts
@styles      →  src/styles
@assets      →  src/assets
@data        →  src/data
```

---

## Content Systems

### Case Studies (`src/data/caseStudies.ts`)

The single source of truth for all case study content and metadata. No CMS or content collections — everything is TypeScript.

**Total:** 22 entries | **Published:** 13 | **Private/unlisted:** 9

**Key fields on `CaseStudy`:**
- `title`, `slug`, `industry[]`, `services[]`, `overview`
- `colour` — Tailwind bg class e.g. `bg-pixel-teal`
- `image` — tile image (used on listing/cards)
- `drawerImage` — optional image for home page drawer component
- `imagePosition`, `drawerPosition` — object-position CSS values
- `published` — controls visibility on listing pages
- `featured` — subset shown in featured sections

**Key exports:**
- `publishedCaseStudies` — sorted A–Z, published only
- `featuredCaseStudies` — published + featured
- `melbourneCaseStudies`, `sydneyCaseStudies` — city-specific subsets
- `getCaseStudyNav(slug)` — returns `{ previous?, next? }` for in-page navigation
- `resolveColour(colour)` — converts bg class or hex to `{ class? } | { style? }`

**Published case studies (slugs):**
`ai-risk-calculator`, `bawbaw`, `bhn`, `cyprusays`, `eel`, `fletcher-dam`, `holmesglen`, `insulation`, `pixel-assist`, `simple`, `stemhub`, `toll`, `yoplait`

**Asset convention per case study:** `src/assets/case-studies/<slug>/`
- `tile.webp` — card/listing thumbnail
- `hero.webp` — full-width header image
- `squareOne.webp/.svg`, `squareTwo.webp` — square layout images
- `wideOne.webp`, `wideTwo.webp` — wide layout images
- `drawer.webp` — optional home drawer image

---

### Insights (`src/data/insights.ts`)

**Total:** 11 entries, all published. Sorted newest-first.

**Key fields on `Insight`:**
- `title`, `slug`, `summary`, `publishedAt` (ISO date), `dateLabel` (display string)
- `published`, `featured`
- `tags[]` — e.g. `['Discovery', 'Project Management']`
- `colour` — colour key string e.g. `'pixel-solar'`

**Key exports:**
- `publishedInsights` — sorted newest-first
- `featuredInsights` — published + featured
- `getInsightNav(slug)` — returns `{ previous?, current, next? }`

**Current published insights (newest first):**
1. Lets Derisk Your Project Delivery
2. Open Knowledge Format
3. Why You Should Consider Using Your Own AI Model
4. Does AI Have a Sustainable Business Model?
5. How To Evaluate The Technology Your Agency Recommends
6. What Good Communication Looks Like On A Digital Project
7. How To Manage Multiple Agencies Working On The Same Project
8. What a Good Brief Looks Like
9. What About Off-shoring?
10. What a Discovery Phase Looks Like
11. Why and When To Do A Discovery Phase

---

## Layout & Routing Conventions

### `Layout.astro` props
```ts
title?: string           // defaults to 'Pixel Agency'; auto-appends '| Pixel Agency' if custom
description?: string     // defaults to site-level description
noMenuSpacer?: boolean   // true for full-height hero pages
logoColors?: { p: string; a: string }  // override random logo accent colour
published?: boolean      // false adds noindex/nofollow meta
```

### Private pages
- Place in `case-studies/private/` or `insights/private/`
- Pass `published={false}` to `<Layout>` for noindex
- Sitemap filter excludes `/case-studies/private/`

---

## Flow Field (`src/scripts/flow-field.ts`)

Animated canvas background used across the site. Zero dependencies, ~3KB.

- **Algorithm:** Simplex noise drives vector angles; time-based animation
- **Mouse interaction:** "hero" mode — vectors repel cursor and tint toward accent colour
- **Text repulsion:** Vectors push away from `#hero-text h1/h2` and `#hero-h2 h2` elements
- **Accent colour:** Random key from `ACCENT_COLOUR_KEYS` set on `<html data-accent-color>` at page load via inline script in `Layout.astro`

```ts
import { initFlowField } from '@scripts/flow-field'
const controller = initFlowField({ color: 'pixel-teal', speed: 0.5, spacing: 'compact' })
controller.addRepulsionElement(el)    // add dynamic repulsion target
controller.removeRepulsionElement(el) // remove it
```

---

## Colour System

**Single source of truth:** `src/config/colours.ts`  
**Must be mirrored in:** `src/styles/global.css` (CSS custom properties `--color-pixel-*`)

Brand tokens: `pixel-platinum`, `pixel-rosy`, `pixel-lte-rosy`, `pixel-teal`, `pixel-drk-teal`, `pixel-fawn`, `pixel-poppy`, `pixel-drk-poppy`, `pixel-celestial`, `pixel-drk-celestial`, `pixel-lte-celestial`, `pixel-fire`, `pixel-lte-fire`, `pixel-solar`, `pixel-lte-solar`

**Accent colours** (used by flow field + per-page random tinting): `pixel-celestial`, `pixel-drk-celestial`, `pixel-poppy`, `pixel-rosy`, `pixel-fire`, `pixel-solar`, `pixel-teal`, `pixel-drk-teal`, `pixel-fawn`

---

## Fonts

- **IBM Plex Sans** (weights 200–700) — primary UI font, CSS var `--font-ibm-plex-sans`
- **Lateef** (weights 200–400) — decorative/accent font, CSS var `--font-lateef`
- Both loaded via Astro's built-in Google font provider with `display: fallback/optional`

---

## Analytics & Tracking

- **GTM:** `GTM-TSXFMXLV` loaded via Partytown (`type="text/partytown"`) — forwards `dataLayer.push`
- **Chkout:** `019f1bb0-0289-7d64-a72f-6afa5bbfe43c` — checkout/conversion tracking script in `Layout.astro`
- **`src/data/analyticsCaller.ts`** — `SitePage` enum for tagging pages

---

## SEO

- Canonical URLs: auto-generated from `Astro.site` + `Astro.url.pathname`
- JSON-LD `ProfessionalService` schema in `Layout.astro` (address: 1 Collins St Melbourne VIC 3000)
- City landing pages target major Australian cities
- Sitemap generated at build; private case studies excluded

---

## Adding New Content

### New Case Study
1. Add entry to `src/data/caseStudies.ts`
2. Add images to `src/assets/case-studies/<slug>/` (tile, hero, squareOne, squareTwo, wideOne, wideTwo)
3. Create `src/pages/case-studies/<slug>.astro` (or `private/<slug>.astro` if unlisted)
4. Compose with `CaseStudy*` components; call `getCaseStudyNav(slug)` for prev/next

### New Insight
1. Add entry to `src/data/insights.ts` with ISO `publishedAt` date
2. Create `src/pages/insights/<slug>.astro`
3. Call `getInsightNav(slug)` and compose with `Insight`, `InsightSignoff`, `InsightNav`, `LetsTalk`

---

## Keeping This File Up to Date

This file will go stale if not maintained. Recommended approach:

**Convention (lightweight, no tooling required):**  
When opening a PR that changes any of the following, update this file as part of that PR:
- Adding/removing a page, route, or section
- Adding/removing a case study or insight
- Adding a new component directory or utility
- Changing a path alias, colour token, font, or key config
- Changing deploy config or third-party integrations

**Prompt for Claude:** At the start of any session involving structural changes, Claude should flag if `CLAUDE.md` needs updating and do so before closing the task.

---

*Last updated: 2026-07-21*
