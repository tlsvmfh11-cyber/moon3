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
- 2026-04-16: Massive content expansion for 2026-level SEO (#1 ranking push)
  - **Intro**: Added "강남 달토가 다른 이유" 3-card section (투명한 가격, 많은 출근인원, 높은 재방문율); expanded all body copy with E-E-A-T signals; added competitor differentiation paragraph
  - **System**: Expanded each step with full detail paragraph; added "이용 전 꼭 알아두세요" 6-item info panel below steps
  - **Pricing**: Added 3 pricing FAQ cards (주대/TC/카드); expanded checklist from 4→6 items; added "달토 가격 안내 원칙" 5-bullet panel; added "요금 체계 이해하기" 3-card section (주대/TC/연장)
  - **Reviews**: Expanded from 4→8 reviews each with tag badge, longer detail text; added stats panel (재방문율, 투명가격 100%, 연중무휴, 다수 출근인원)
  - **FAQ**: Expanded from 8→15 questions covering all major search intents (TC 비용, 카드 결제, 단체 방문, 노래방 차이, 처음 방문 준비, 연장 강요)
  - **Location**: Added "주변 정보" panel with landmark list and detailed hours table; added note about address disclosure policy
  - **seo-prerender.ts**: Synced all 15 FAQPage schema entries; expanded Intro/System/Pricing/Reviews body HTML; added 8 review blockquotes with structured context
- 2026-02-17: Top 1% SEO audit & optimization
  - Added geo meta tags (geo.region KR-11, geo.placename, ICBM coordinates) for local SEO
  - Added hreflang ko + x-default for language targeting
  - Structured data: Added Organization publisher with logo to WebSite, SearchAction, image/logo to LocalBusiness
  - All section h2 headings now include "강남 달토" or "달토" target keywords
  - Navbar: Added aria-label for accessibility
  - Vercel: Added HSTS, X-DNS-Prefetch-Control, Permissions-Policy headers, immutable cache for hashed assets
  - Robots.txt: Added Googlebot-Image and Bingbot rules, cleaned up Crawl-delay
  - Full sync between index.html and seo-prerender.ts meta/schema/headings
- 2026-02-17: Crawl report issues resolved
  - Removed 8 non-canonical hash fragment URLs from sitemap (single canonical URL only)
  - Added og:image with dimensions/alt, synced title/og:title/twitter:title
  - Simplified BreadcrumbList to canonical homepage only
  - Added www→non-www redirect in vercel.json
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
