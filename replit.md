# 강남 달토 (Gangnam Dalto) Landing Page

## Overview
A single-page landing website for "강남 달토" (Gangnam Dalto / Running Rabbit), a karaoke entertainment venue in Gangnam, Seoul. The site features a dark luxury theme with aurora gradient accents.

## Project Architecture
- **Frontend**: React + Vite with Tailwind CSS v3
- **Backend**: Express.js (minimal - serving static content + SEO prerender)
- **Styling**: Custom dark theme with aurora color palette (cyan, purple, pink, gold)
- **Animations**: Framer Motion for scroll-based animations and transitions
- **Font**: Pretendard (Korean optimized font)
- **SEO**: Server-side bot prerendering, structured data (JSON-LD), FAQPage schema

## Key Components
- `Navbar` - Fixed navigation with scroll-based backdrop blur
- `Hero` - Full-screen hero with parallax scrolling
- `Intro` - Information section with animated reveal
- `System` - 5-step process explanation cards
- `Pricing` - Transparent pricing information
- `Gallery` - 6-image grid with hover effects and keyword-rich alt text
- `Reviews` - Customer testimonials with star ratings and detail text
- `FAQ` - 8-item expandable FAQ with FAQPage schema markup
- `Location` - Address, transportation, hours, pickup service info
- `Contact` - Contact information with phone, SMS, Telegram links
- Mobile floating action bar for quick contact

## SEO Architecture
- **Crawler Prerender**: `server/seo-prerender.ts` serves fully rendered HTML to search engine bots (Googlebot, Naverbot, Yeti, etc.) at root path only
- **Structured Data**: WebSite, LocalBusiness (with AggregateRating, reviews, services, opening hours), BreadcrumbList, FAQPage schemas
- **Target Keywords**: 강남 달토, 달리는토끼, 달토, 강남 하이퍼블릭, 강남 가라오케
- **noscript Fallback**: Basic content for non-JS crawlers
- **Sitemap**: Updated with all sections including FAQ and Location
- **Robots.txt**: Google/Naver/Daum bot rules

## Custom Colors (Tailwind)
- `midnight-950/900/800` - Dark background shades
- `obsidian` - Near-black (#050505)
- `aurora-cyan` (#2DD4BF), `aurora-purple` (#A78BFA), `aurora-pink` (#F472B6), `aurora-gold` (#FCD34D)

## Custom CSS Utilities
- `.glass-panel` - Glassmorphism effect
- `.text-gradient-aurora` - Aurora gradient text
- `.glow-text` - Purple glow text shadow

## Recent Changes
- 2026-02-13: Comprehensive SEO optimization
  - Added server-side crawler prerendering (bot detection + full HTML response)
  - Added FAQ section with 8 keyword-rich Q&As
  - Added Location/Access section with transportation info
  - Enhanced structured data: @graph with WebSite, LocalBusiness, BreadcrumbList, FAQPage
  - Optimized all image alt tags with keywords
  - Expanded review content with detail text
  - Updated meta tags, sitemap, robots.txt
  - Added noscript fallback content
- 2026-02-13: Initial port from GitHub repo (tlsvmfh11-cyber/moon3) to Replit fullstack template
- Adapted Tailwind CSS v4 theme to v3 config format
- All image assets downloaded and stored in `client/src/assets/`

## User Preferences
- Korean language content
- Copy protection scripts enabled (right-click, select, keyboard shortcuts disabled)
