# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Universal Tower Defense (UTD) Hub** — a Next.js 16 (App Router) content + tools website for the Roblox experience **Universal Tower Defense**.

**Domain:** https://theforgecodes.org/ (domain only; site content is UTD)

## Non-negotiables

- All user-facing copy must be **English-only**.
- Do not add any previous-site content back (pages, copy, assets).
- Do not publish exploit scripts or cheating instructions. Safety notes are fine.

## Development Commands

```bash
npm run dev
npm run build
npm start
npm run lint
```

## Architecture

### App Router Structure
- `app/layout.tsx`: Root layout + metadata
- `app/page.tsx`: Home hub
- `components/Header.tsx`: Sticky nav + mobile menu
- `components/Footer.tsx`: Resource links + disclaimers
- `lib/site.ts`: Branding + primary navigation
- `lib/utd.ts`: UTD content/data (codes, FAQ, summon rates, tools)

### Primary Routes
- `/universal-tower-defense-codes`
- `/universal-tower-defense-tier-list`
- `/universal-tower-defense-calculator`
- `/universal-tower-defense-guide`
- `/universal-tower-defense-wiki`
- `/universal-tower-defense-community`
- `/universal-tower-defense-discord`

### Styling
- Tailwind CSS v4
- Dark UI with sky/violet accents; Orbitron for headings/brand

### SEO Notes
- Unique titles/descriptions per page
- Sitemap and robots live in `public/`
- For frequently changing info (e.g. codes), include a visible “last checked” timestamp

## Disclaimer Template

Universal Tower Defense is a Roblox experience. This site is an unofficial fan resource and is not affiliated with Roblox Corporation or the game’s developers.
