import type { Request, Response, NextFunction } from "express";

const BOT_USER_AGENTS = [
  "googlebot",
  "bingbot",
  "yandexbot",
  "duckduckbot",
  "slurp",
  "baiduspider",
  "facebookexternalhit",
  "twitterbot",
  "rogerbot",
  "linkedinbot",
  "embedly",
  "quora link preview",
  "showyoubot",
  "outbrain",
  "pinterest",
  "developers.google.com",
  "discordbot",
  "telegrambot",
  "whatsapp",
  "kakaotalk",
  "naverbot",
  "yeti",
  "daum",
  "petalbot",
  "semrushbot",
  "ahrefsbot",
];

function isBot(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return BOT_USER_AGENTS.some((bot) => ua.includes(bot));
}

export function seoPrerender(req: Request, res: Response, next: NextFunction) {
  const userAgent = req.headers["user-agent"] || "";

  if (!isBot(userAgent) || req.path.startsWith("/api") || req.path !== "/") {
    return next();
  }

  const canonicalUrl = "https://gangnamdaltoshs.com/";

  const html = `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>강남 달토 | 달리는토끼 - 강남 하이퍼블릭 가라오케 최저가 가격·주대·시스템 솔직 안내</title>
<meta name="description" content="강남 달토(달리는토끼)는 강남역 하이퍼블릭 가라오케입니다. 주대 가격, 이용 시스템, 초이스 방식을 숨기지 않고 투명하게 안내합니다. 처음 방문하시는 분도 부담 없이 이용 가능합니다. 전화 010-2303-3778"/>
<meta name="title" content="강남 달토 | 달리는토끼 - 강남 하이퍼블릭 가라오케 최저가 가격·주대·시스템 솔직 안내"/>
<meta name="keywords" content="강남달토,달토,달리는토끼,강남 달토,강남 하이퍼블릭,강남 가라오케,달토 가격,달토 주대,달토 시스템,달토 후기,강남 퍼블릭,강남 노래방,강남 룸,하이퍼블릭 추천,강남 술자리,강남 2차,달토 예약,강남역 하이퍼블릭,강남역 가라오케,강남 달리는토끼,달토 초이스,강남 하이퍼블릭 추천,강남 가라오케 추천,강남 하이퍼블릭 가격"/>
<meta name="author" content="강남 달토 달리는토끼"/>
<link rel="canonical" href="${canonicalUrl}"/>
<link rel="icon" href="/favicon.ico" sizes="any"/>
<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
<link rel="icon" type="image/png" sizes="128x128" href="/favicon.png"/>
<link rel="apple-touch-icon" href="/favicon.png"/>
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
<meta name="geo.region" content="KR-11"/>
<meta name="geo.placename" content="강남구, 서울특별시"/>
<meta name="geo.position" content="37.5172;127.0473"/>
<meta name="ICBM" content="37.5172, 127.0473"/>
<link rel="alternate" hreflang="ko" href="${canonicalUrl}"/>
<link rel="alternate" hreflang="x-default" href="${canonicalUrl}"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="${canonicalUrl}"/>
<meta property="og:title" content="강남 달토 | 달리는토끼 - 강남 하이퍼블릭 가라오케 최저가 가격·주대·시스템 솔직 안내"/>
<meta property="og:description" content="강남 달토(달리는토끼)는 강남역 하이퍼블릭 가라오케입니다. 주대 가격, 이용 시스템, 초이스 방식을 숨기지 않고 투명하게 안내합니다. 처음 방문하시는 분도 부담 없이 이용 가능합니다. 전화 010-2303-3778"/>
<meta property="og:image" content="${canonicalUrl}og-image.png"/>
<meta property="og:image:width" content="1024"/>
<meta property="og:image:height" content="1024"/>
<meta property="og:image:alt" content="강남 달토 달리는토끼 하이퍼블릭 가라오케"/>
<meta property="og:locale" content="ko_KR"/>
<meta property="og:site_name" content="강남 달토 달리는토끼"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:url" content="${canonicalUrl}"/>
<meta name="twitter:title" content="강남 달토 | 달리는토끼 - 강남 하이퍼블릭 가라오케 최저가 가격·주대·시스템 솔직 안내"/>
<meta name="twitter:description" content="강남 달토(달리는토끼)는 강남역 하이퍼블릭 가라오케입니다. 주대 가격, 이용 시스템, 초이스 방식을 숨기지 않고 투명하게 안내합니다. 전화 010-2303-3778"/>
<meta name="twitter:image" content="${canonicalUrl}og-image.png"/>
<meta name="google-site-verification" content="l-1hi4tffb45Lhh62DvkJCSavzJNYHTasGTeLmQF7Ms"/>
<meta name="naver-site-verification" content="8cec9b156e74ecd10367f18d14145d785f35a5ff"/>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": "강남 달토",
      "alternateName": ["달리는토끼", "달토", "Gangnam Dalto", "Running Rabbit", "강남달토"],
      "url": "${canonicalUrl}",
      "inLanguage": "ko",
      "description": "강남 달토(달리는토끼)는 강남역 하이퍼블릭 가라오케입니다. 주대 가격, 이용 시스템을 투명하게 안내합니다.",
      "publisher": {
        "@type": "Organization",
        "name": "강남 달토",
        "alternateName": "달리는토끼",
        "url": "${canonicalUrl}",
        "logo": {
          "@type": "ImageObject",
          "url": "${canonicalUrl}favicon.png",
          "width": 128,
          "height": 128
        }
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "${canonicalUrl}#business",
      "name": "강남 달토",
      "alternateName": ["달리는토끼", "달토", "Running Rabbit", "강남달토"],
      "description": "강남 달토(달리는토끼)는 강남역 인근 하이퍼블릭 가라오케입니다. 주대 가격부터 이용 시스템, 초이스 방식까지 숨기지 않고 투명하게 안내하며, 처음 방문하시는 분들도 부담 없이 이용할 수 있도록 운영합니다.",
      "url": "${canonicalUrl}",
      "telephone": "+82-10-2303-3778",
      "image": "${canonicalUrl}og-image.png",
      "logo": {
        "@type": "ImageObject",
        "url": "${canonicalUrl}favicon.png",
        "width": 128,
        "height": 128
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "강남대로",
        "addressLocality": "강남구",
        "addressRegion": "서울특별시",
        "postalCode": "06000",
        "addressCountry": "KR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "37.5172",
        "longitude": "127.0473"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday"],
          "opens": "18:00",
          "closes": "05:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Friday","Saturday"],
          "opens": "18:00",
          "closes": "06:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "18:00",
          "closes": "04:00"
        }
      ],
      "priceRange": "₩₩₩",
      "currenciesAccepted": "KRW",
      "paymentAccepted": "현금, 카드",
      "areaServed": {
        "@type": "City",
        "name": "서울특별시 강남구"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "강남 달토 서비스",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "하이퍼블릭 가라오케",
              "description": "강남 달토 달리는토끼의 프리미엄 하이퍼블릭 가라오케 서비스. 주대, 초이스, 룸 이용 포함."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "픽업 서비스",
              "description": "강남역 인근 무료 픽업 서비스. 자차가 없거나 이동이 불편하신 분들을 위한 안내."
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "127",
        "reviewCount": "89"
      },
      "review": [
        {
          "@type": "Review",
          "author": {"@type": "Person", "name": "방문 고객"},
          "datePublished": "2025-12-15",
          "reviewBody": "설명이랑 실제가 같다. 가격도 사전에 안내받은 그대로였고, 분위기도 편했다.",
          "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"}
        },
        {
          "@type": "Review",
          "author": {"@type": "Person", "name": "재방문 고객"},
          "datePublished": "2025-11-20",
          "reviewBody": "혼자 와도 어색하지 않고, 출근 인원이 많아서 좋았다. 다음에도 또 올 예정.",
          "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"}
        },
        {
          "@type": "Review",
          "author": {"@type": "Person", "name": "단체 고객"},
          "datePublished": "2025-10-08",
          "reviewBody": "회식 자리로 이용했는데 분위기가 부담스럽지 않아서 좋았다. 가격도 투명하게 안내해줘서 믿을 수 있었다.",
          "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"}
        }
      ],
      "sameAs": [
        "https://t.me/hscompanyshs"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "강남 달토 홈", "item": "${canonicalUrl}"}
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "강남 달토(달리는토끼) 가격은 얼마인가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "강남 달토의 주대 가격은 요일, 시간대, 인원수에 따라 달라집니다. 전화(010-2303-3778)로 문의하시면 그날 기준의 정확한 견적을 안내드립니다. 현금/카드 정찰제로 운영하며, 사전에 안내한 가격에서 추가 비용이 발생하지 않습니다."
          }
        },
        {
          "@type": "Question",
          "name": "달토 이용 시스템은 어떻게 되나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "강남 달토는 5단계로 진행됩니다. 1) 사전 문의: 인원, 방문 시간, 모임 성격 전달, 2) 도착 시 룸 안내: 대기 없이 바로 입실, 3) 주류 설명: 주대와 이용 시간 명확 안내, 4) 초이스 진행: 취향에 맞게 추천(강요 없음), 5) 연장 선택: 분위기에 따라 자유 결정."
          }
        },
        {
          "@type": "Question",
          "name": "강남 달토 예약은 어떻게 하나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "전화(010-2303-3778), 문자, 또는 텔레그램(@hscompanyshs)으로 문의하시면 됩니다. 방문 인원, 방문 시간, 대략적인 분위기/취향을 알려주시면 맞춤 안내를 드립니다."
          }
        },
        {
          "@type": "Question",
          "name": "강남 달토 위치는 어디인가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "강남 달토(달리는토끼)는 서울특별시 강남구 강남대로 인근에 위치해 있습니다. 강남역에서 도보 이동 가능하며, 자차가 없으신 경우 픽업 서비스도 안내해드립니다."
          }
        },
        {
          "@type": "Question",
          "name": "달토 초이스는 어떻게 진행되나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "강남 달토의 초이스는 손님의 취향에 맞게 추천드리는 방식으로 진행됩니다. 억지로 진행하거나 강요하는 구조가 아니며, 편하게 말씀해 주시면 그에 맞게 안내해드립니다."
          }
        },
        {
          "@type": "Question",
          "name": "달토 픽업 서비스가 있나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "네, 강남 달토는 상황에 따라 픽업 서비스를 안내해드리고 있습니다. 자차가 없거나 이동이 애매하신 경우, 사전에 말씀해 주시면 편하게 오실 수 있도록 도와드립니다."
          }
        },
        {
          "@type": "Question",
          "name": "혼자 가도 괜찮을까요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "물론입니다. 강남 달토에는 혼자 오시는 분들도 많습니다. 어색하지 않도록 분위기를 맞춰드리며, 편하게 즐기실 수 있도록 안내해드립니다."
          }
        },
        {
          "@type": "Question",
          "name": "강남 달토 영업시간은 어떻게 되나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "강남 달토(달리는토끼)는 매일 저녁 6시(18:00)부터 영업합니다. 평일은 새벽 5시, 금/토요일은 새벽 6시, 일요일은 새벽 4시까지 운영합니다."
          }
        }
      ]
    }
  ]
}
</script>
</head>
<body>
<header>
<nav aria-label="메인 네비게이션">
<a href="${canonicalUrl}">강남 달토 DALTO</a>
<ul>
<li><a href="#intro">강남 달토 소개</a></li>
<li><a href="#system">달토 이용 시스템</a></li>
<li><a href="#pricing">달토 주대 및 가격</a></li>
<li><a href="#gallery">달토 매장 갤러리</a></li>
<li><a href="#reviews">달토 이용 후기</a></li>
<li><a href="#faq">자주 묻는 질문</a></li>
<li><a href="#location">오시는 길</a></li>
<li><a href="#contact">예약 문의</a></li>
</ul>
<a href="tel:01023033778">전화: 010-2303-3778</a>
</nav>
</header>

<main>
<section id="hero">
<h1>강남 달토 | 달리는토끼 - 강남 하이퍼블릭 가라오케 최저가 가격·주대·시스템 솔직 안내</h1>
<p>강남 달토(달리는토끼)는 가격·주대·이용 시스템을 숨기지 않고 있는 그대로 설명합니다. 현장에서 실제로 운영하는 방식 그대로, 부담 없는 강남 하이퍼블릭 가라오케입니다.</p>
<a href="#contact">예약 문의하기</a>
<a href="#system">이용 시스템 확인</a>
</section>

<article id="intro">
<h2>강남 달토, 왜 이렇게 물어보는 분들이 많을까요?</h2>
<p>강남에서 가라오케나 하이퍼블릭을 찾는 분들 대부분이 처음부터 이런 생각을 합니다.</p>
<ul>
<li>광고는 많은데, 막상 가격은 안 나와 있고</li>
<li>주대 얼마인지, 어떻게 진행되는지 정확히 안 알려준다</li>
<li>괜히 갔다가 생각보다 많이 나오면 어쩌지</li>
</ul>
<p>강남 달토(달리는토끼)는 이런 걱정을 줄이기 위해 운영 방식부터 다르게 가져가고 있습니다. "무조건 좋다", "무조건 싸다" 같은 말 안 합니다. 대신 지금 상황이 어떤지, 얼마 정도 생각하셔야 하는지, 그리고 이용해도 괜찮을지 아닐지를 먼저 말씀드립니다.</p>
<h3>처음 연락 주시는 분들께</h3>
<p>강남 달토를 처음 문의하시는 분들 중 절반 이상은 이미 다른 곳에서 불편한 경험을 해보신 분들입니다. 설명이랑 실제가 달랐거나, 가격을 나중에야 알았거나, 분위기가 부담스러웠던 경우들입니다.</p>
<p>강남 달토는 오늘 한 번 받는 손님보다, 다음에 다시 연락 주는 손님이 더 중요합니다.</p>
</article>

<article id="system">
<h2>달토 이용 시스템 - 5단계 안내</h2>
<p>처음 오시는 분들도 이해하기 쉽게 구성되어 있습니다.</p>
<ol>
<li><h3>사전 문의</h3><p>인원, 방문 시간, 모임 성격만 알려주세요.</p></li>
<li><h3>도착 및 룸 안내</h3><p>대기 없이 가능한 바로 입실해서 자리부터 잡아드립니다.</p></li>
<li><h3>주류 설명</h3><p>주대와 이용 시간을 명확히 설명드리고 시작합니다.</p></li>
<li><h3>초이스 진행</h3><p>취향에 맞게 추천드리며, 강요는 절대 없습니다.</p></li>
<li><h3>연장 여부 선택</h3><p>분위기에 따라 자유롭게 선택하시면 됩니다.</p></li>
</ol>
<p>달토 시스템은 억지로 끌고 가는 구조가 아니라 손님이 편한 쪽으로 맞추는 방식입니다.</p>
</article>

<article id="pricing">
<h2>달토 가격과 주대 - 숨기지 않습니다</h2>
<p>강남 달토에서는 가격, 주대, TC 구조를 투명하게 공개합니다. "싸다"는 표현은 쓰지 않습니다. 대신 이 정도면 납득할 수 있다는 기준으로 운영합니다.</p>
<ul>
<li>요일별/시간대별 정확한 주대 안내</li>
<li>인원수에 따른 1/N 견적 산출</li>
<li>추가 비용 발생 가능성 사전 고지</li>
<li>현금/카드 정찰제 운영</li>
</ul>
<p>현장에서 갑자기 추가로 붙거나, 설명 없이 넘어가는 구조가 아닙니다. 사전에 안내한 기준에서 벗어나지 않습니다.</p>
<a href="tel:01023033778">지금 바로 전화로 가격 확인하기 - 010-2303-3778</a>
</article>

<article id="gallery">
<h2>강남 달토 달리는토끼 매장 공간 미리보기</h2>
<p>달리는토끼(달토)의 실제 매장 공간입니다. 프리미엄 인테리어와 편안한 분위기를 갖춘 강남 하이퍼블릭 가라오케입니다.</p>
<figure><img src="${canonicalUrl}og-image.png" alt="강남 달토 달리는토끼 프리미엄 룸 인테리어" width="800" height="600" loading="lazy"/><figcaption>강남 달토 달리는토끼 매장 내부 프리미엄 룸 인테리어</figcaption></figure>
<figure><img src="${canonicalUrl}og-image.png" alt="강남 달토 하이퍼블릭 VIP 룸 시설" width="800" height="600" loading="lazy"/><figcaption>강남 달토 하이퍼블릭 가라오케 VIP룸</figcaption></figure>
<figure><img src="${canonicalUrl}og-image.png" alt="달토 달리는토끼 가라오케 프라이빗 공간" width="800" height="600" loading="lazy"/><figcaption>달토 달리는토끼 프리미엄 노래방 시설</figcaption></figure>
<figure><img src="${canonicalUrl}og-image.png" alt="강남 달토 럭셔리 분위기 인테리어" width="800" height="600" loading="lazy"/><figcaption>강남 달토 럭셔리 분위기 공간</figcaption></figure>
<figure><img src="${canonicalUrl}og-image.png" alt="달리는토끼 강남 하이퍼블릭 매장 전경" width="800" height="600" loading="lazy"/><figcaption>달리는토끼 강남 매장 인테리어</figcaption></figure>
<figure><img src="${canonicalUrl}og-image.png" alt="강남 달토 편안한 분위기 프리미엄 룸" width="800" height="600" loading="lazy"/><figcaption>강남 달토 편안한 분위기 룸</figcaption></figure>
</article>

<article id="reviews">
<h2>강남 달토, 다시 찾는 이유 - 이용 후기</h2>
<p>한 번 오고 끝나는 손님보다 다시 연락 주는 손님이 많습니다.</p>
<blockquote>"설명이랑 실제가 같다" - 별점 5/5</blockquote>
<blockquote>"혼자 와도 어색하지 않다" - 별점 5/5</blockquote>
<blockquote>"출근 인원이 많아서 좋았다" - 별점 5/5</blockquote>
<blockquote>"분위기가 부담스럽지 않다" - 별점 5/5</blockquote>
<p>달리는토끼, 달토라는 이름으로 꾸준히 찾는 분들이 있다는 건 결국 편했기 때문이라고 생각합니다.</p>
</article>

<article id="faq">
<h2>강남 달토 자주 묻는 질문 (FAQ)</h2>

<details>
<summary>강남 달토(달리는토끼) 가격은 얼마인가요?</summary>
<p>강남 달토의 주대 가격은 요일, 시간대, 인원수에 따라 달라집니다. 전화(010-2303-3778)로 문의하시면 그날 기준의 정확한 견적을 안내드립니다. 현금/카드 정찰제로 운영하며, 사전에 안내한 가격에서 추가 비용이 발생하지 않습니다.</p>
</details>

<details>
<summary>달토 이용 시스템은 어떻게 되나요?</summary>
<p>강남 달토는 5단계로 진행됩니다. 사전 문의 → 도착 시 룸 안내 → 주류 설명 → 초이스 진행 → 연장 선택. 모든 과정에서 손님의 편의를 우선으로 합니다.</p>
</details>

<details>
<summary>강남 달토 예약은 어떻게 하나요?</summary>
<p>전화(010-2303-3778), 문자, 또는 텔레그램(@hscompanyshs)으로 문의하시면 됩니다. 방문 인원, 방문 시간, 대략적인 분위기/취향을 알려주시면 맞춤 안내를 드립니다.</p>
</details>

<details>
<summary>강남 달토 위치는 어디인가요?</summary>
<p>강남 달토(달리는토끼)는 서울특별시 강남구 강남대로 인근에 위치해 있습니다. 강남역에서 도보 이동 가능하며, 자차가 없으신 경우 픽업 서비스도 안내해드립니다.</p>
</details>

<details>
<summary>달토 초이스는 어떻게 진행되나요?</summary>
<p>강남 달토의 초이스는 손님의 취향에 맞게 추천드리는 방식으로 진행됩니다. 강요 없이 편하게 선택하실 수 있습니다.</p>
</details>

<details>
<summary>달토 픽업 서비스가 있나요?</summary>
<p>네, 강남 달토는 상황에 따라 픽업 서비스를 안내해드립니다. 자차가 없거나 이동이 애매하신 경우 사전에 말씀해 주세요.</p>
</details>

<details>
<summary>혼자 가도 괜찮을까요?</summary>
<p>물론입니다. 강남 달토에는 혼자 오시는 분들도 많습니다. 어색하지 않도록 분위기를 맞춰드립니다.</p>
</details>

<details>
<summary>강남 달토 영업시간은 어떻게 되나요?</summary>
<p>매일 저녁 6시(18:00)부터 영업합니다. 평일 새벽 5시, 금/토 새벽 6시, 일요일 새벽 4시까지 운영합니다.</p>
</details>
</article>

<article id="location">
<h2>강남 달토 오시는 길 - 위치 및 교통 안내</h2>
<address>
<p>서울특별시 강남구 강남대로 인근</p>
<p>강남역 도보 이동 가능</p>
</address>
<h3>교통편 안내</h3>
<ul>
<li>지하철: 강남역 하차 후 도보 이동</li>
<li>버스: 강남역 정류장 하차</li>
<li>자가용: 인근 주차장 이용 가능</li>
<li>픽업 서비스: 자차가 없으신 경우 사전 문의 시 픽업 안내</li>
</ul>
</article>

<section id="contact">
<h2>강남 달토에 편하게 문의주세요 - 예약 안내</h2>
<p>화려한 말로 포장하지 않습니다. 현장에서 실제로 하는 방식 그대로 설명하고, 손님 입장에서 불편할 수 있는 부분을 최대한 줄여드립니다.</p>
<ul>
<li>전화 문의: <a href="tel:01023033778">010-2303-3778</a></li>
<li>문자 문의: <a href="sms:01023033778">010-2303-3778</a></li>
<li>텔레그램: <a href="https://t.me/hscompanyshs">@hscompanyshs</a></li>
</ul>
<h3>픽업 서비스 안내</h3>
<p>강남 달토는 상황에 따라 픽업 서비스도 안내해드리고 있습니다. 자차가 없거나 이동이 애매하신 경우 미리 말씀해 주세요.</p>
<h3>예약 시 필요한 정보</h3>
<ol>
<li>방문 인원</li>
<li>방문 시간</li>
<li>대략적인 분위기/취향</li>
</ol>
</section>
</main>

<footer>
<p>&copy; 2025 강남 달토 달리는토끼 (Gangnam Dalto Running Rabbit). All rights reserved.</p>
<p>강남 하이퍼블릭 가라오케 | 달토 | 달리는토끼 | 강남역 인근</p>
</footer>
</body>
</html>`;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600");
  return res.send(html);
}
