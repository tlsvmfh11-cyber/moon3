# 강남 달토 (Gangnam Dalto) Landing Page

## Overview
A single-page landing website for "강남 달토" (Gangnam Dalto / Running Rabbit), a karaoke entertainment venue in Gangnam, Seoul. The site features a dark luxury theme with aurora gradient accents.

## Project Architecture
- **Frontend**: React + Vite with Tailwind CSS v3
- **Backend**: Express.js (minimal - serving static content)
- **Styling**: Custom dark theme with aurora color palette (cyan, purple, pink, gold)
- **Animations**: Framer Motion for scroll-based animations and transitions
- **Font**: Pretendard (Korean optimized font)

## Key Components
- `Navbar` - Fixed navigation with scroll-based backdrop blur
- `Hero` - Full-screen hero with parallax scrolling
- `Intro` - Information section with animated reveal
- `System` - 5-step process explanation cards
- `Pricing` - Transparent pricing information
- `Gallery` - 6-image grid with hover effects
- `Reviews` - Customer testimonials with star ratings
- `Contact` - Contact information with phone, SMS, Telegram links
- Mobile floating action bar for quick contact

## Custom Colors (Tailwind)
- `midnight-950/900/800` - Dark background shades
- `obsidian` - Near-black (#050505)
- `aurora-cyan` (#2DD4BF), `aurora-purple` (#A78BFA), `aurora-pink` (#F472B6), `aurora-gold` (#FCD34D)

## Custom CSS Utilities
- `.glass-panel` - Glassmorphism effect
- `.text-gradient-aurora` - Aurora gradient text
- `.glow-text` - Purple glow text shadow

## Recent Changes
- 2026-02-13: Initial port from GitHub repo (tlsvmfh11-cyber/moon3) to Replit fullstack template
- Adapted Tailwind CSS v4 theme to v3 config format
- All image assets downloaded and stored in `client/src/assets/`

## User Preferences
- Korean language content
- Copy protection scripts enabled (right-click, select, keyboard shortcuts disabled)
