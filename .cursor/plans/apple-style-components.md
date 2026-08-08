# Apple/iOS-Style Components — Free Registries Only

Aesthetic: clean, minimal, monochrome (black/white/grey), restrained motion, generous whitespace, large typography — the Apple.com / iOS feel.
Sources used: Aceternity UI, Magic UI, Origin UI, shadcnspace — all FREE, all shadcn-CLI/copy-paste, all Next.js 15 + Tailwind v4 ready.
shadcn.io blocks removed per request.

---

## FINAL SHORTLIST (one per category — all free, Apple/iOS style)

| Section | Component | Source | Link |
|--------|-----------|--------|------|
| Schedule/Timeline | Timeline (sticky header + scroll beam) | Aceternity UI | https://ui.aceternity.com/components/timeline |
| Feature/Bento | Bento Grid | Magic UI | https://magicui.design/docs/components/bento-grid |
| Sponsors/Logo | Logo Cloud 06 (minimal grid) | shadcnspace | https://shadcnspace.com/blocks/marketing/logo-cloud |
| Footer | Centered Footer With Logo | Aceternity UI | https://ui.aceternity.com/blocks/footers/centered-with-logo |
| FAQ/Accordion | Accordion | Origin UI | https://originui.com |
| Profile Card | Team Section With Timeline Cards | Aceternity UI | https://ui.aceternity.com/blocks/team-sections/team-section-with-timeline-cards |

---

## 1. Schedule / Timeline (Program §3.2-3.3)

### Aceternity UI (Next.js 15 + Tailwind v4 + Motion, FREE)
- **Timeline** — sticky header + scroll beam follow — https://ui.aceternity.com/components/timeline
  - Install: `npx shadcn@latest add @aceternity/timeline`
  - Props: `data: TimelineEntry[]` (title, content, etc.)
  - Clean, motion-driven, dark-mode native

Alt (also free): Magic UI doesn't have a dedicated timeline, but Origin UI has Tabs + disclosure patterns at https://originui.com if you want a non-Aceternity option.

---

## 2. Feature / Value Prop / Bento (Home §2.10)

### Magic UI (FREE, 150+ animated components, shadcn-CLI)
- **Bento Grid** — https://magicui.design/docs/components/bento-grid
  - Install: `npx shadcn@latest add @magicui/bento-grid`
  - Exports: `BentoGrid` (container) + `BentoCard` (tile)
  - Props per card: `name, description, Icon, background, href, cta, className`
  - Asymmetric col-span layout, dark-mode ready, uses shadcn CSS variables

Alt (also free): Aceternity Bento Grid — https://ui.aceternity.com/components/bento-grid — install `npx shadcn@latest add @aceternity/bento-grid` (inline `dark:bg-black dark:border-white/[0.2]` styling).

---

## 3. Sponsors / Logo Cloud / Wall (Home §2.2, §2.11; all pages)

### shadcnspace (FREE, React + Tailwind + shadcn/ui, copy-paste)
- **Logo Cloud 06** (minimal grid) — https://shadcnspace.com/blocks/marketing/logo-cloud
  - Clean grid, grayscale built-in, "Trusted by" heading
  - All 7 variants (Logo Cloud 01-07) on the same page support `grayscale`/`opacity-50` for monochrome
  - Copy-paste the code directly

Alt (also free): Aceternity Logo Clouds — https://ui.aceternity.com/blocks/logo-clouds

---

## 4. Footer (global §1.3)

### Aceternity UI (Next.js 15 + Tailwind v4, FREE)
- **Centered Footer With Logo** — https://ui.aceternity.com/blocks/footers/centered-with-logo
  - Logo centered top, horizontal nav row, grid-line divider, copyright + socials (Twitter/LinkedIn/GitHub/Instagram/Facebook)
  - Max-width 7xl, responsive stack on mobile
  - Matches your centered navbar aesthetic

Alt (also free): Aceternity Footers (full blocks) — https://ui.aceternity.com/blocks/footers

---

## 5. FAQ / Accordion (Technical Challenges rules; collapsibles)

### Origin UI (FREE, MIT, copy-paste, Tailwind v4, Apple-minimal)
- **Accordion** — https://originui.com
  - 20+ accordion variants (tabs, chevron, borderless, etc.)
  - Built on Base UI (not Radix), oklch neutral tokens, source ownership
  - Install per variant: `pnpm dlx shadcn@latest add https://originui.com/r/accordion-XX.json`
  - Most variants are already neutral/monochrome — minimal rework

Alt (also free): Aceternity FAQ blocks at https://ui.aceternity.com/blocks/faqs

---

## 6. Profile / Team / Guest / Speaker Card (reused on 4 pages)

### Aceternity UI (Next.js 15 + Tailwind v4 + Motion, FREE)
- **Team Section With Timeline Cards** — https://ui.aceternity.com/blocks/team-sections/team-section-with-timeline-cards
  - Per card: photo, role, status, short bio, location, social links
  - Structured but lightweight — works for guests, speakers, committee
- Team Sections (more variants: Small Avatars, Light Background, Scales) — https://ui.aceternity.com/blocks/team-sections

Alt (also free): Magic UI has animated tooltips/badges that pair well for speaker flags.

---

## Install commands summary (free tier)
- Aceternity Timeline: `npx shadcn@latest add @aceternity/timeline`
- Magic UI Bento Grid: `npx shadcn@latest add @magicui/bento-grid`
- Aceternity Bento Grid (alt): `npx shadcn@latest add @aceternity/bento-grid`
- Origin UI Accordion: `pnpm dlx shadcn@latest add https://originui.com/r/accordion-XX.json` (pick variant XX)
- shadcnspace Logo Cloud + Aceternity Footer/Team: copy-paste from the page Code tab

All sources are free (MIT or free-to-use). Hand me the code (or tell me which install commands to run) and I'll adapt each to your monochrome theme and wire them into the Bizerte Tcodi pages. The hero stays untouched as your current perfect one.
