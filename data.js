/* ═══════════════════════════════════════════════════════════
   COLUBEAT — SHARED DATA FILE
   Edit this single file. Both index.html and company.html read from it.
   ═══════════════════════════════════════════════════════════ */

const SUBSTACK = "https://colubeatid.substack.com/";
const NEW_DAYS = 14;

/* ── TWO INDEPENDENT CONCEPTS — never infer one from the other ──
   `status`   = COVERAGE status. Am I still following this company?
                "active" | "watching" | "closed"
   `position` = MY POSITION. Do I personally own the stock?
                {
                  visible: true|false   // false → nothing is rendered anywhere
                  status: "holding" | "watching" | "no_position"
                  currency: "USD"|"EUR"|"GBP"|"CHF"|"CAD"|"HKD"...
                  averagePrice?: 42.5    // holding only, OPTIONAL. Omit to keep private.
                  interestedBelow?: 42   // watching only, OPTIONAL.
                  referencePrice?: 39.16      // OPTIONAL, manually refreshed. NOT live.
                  referencePriceDate?: "2026-08-28" // date of that reference price
                  updatedAt: "2026-08-28" // REQUIRED whenever visible is true
                }
   To refresh the displayed performance you only ever edit referencePrice
   and referencePriceDate — the percentage is always derived, never stored.
   Prices are stored as numbers; the UI formats them by currency.
   Never add portfolio weight, size, shares or P&L here.
   ─────────────────────────────────────────────────────────────── */

/* Optional per-company `cardDescription`: short homepage-only research angle.
   Falls back to `summary` when absent. The research page always uses `summary`. */
const publishedTheses = [
  {
    ticker: "AMRZ",
    company: "Amrize Ltd",
    sector: "Industrial",
    geo: "US",
    datePublished: "2026-09-03",
    image: "images/AMRZ.webp",
    summary:
      "Amrize has a strong Building Materials network and some very good local positions, but Building Envelope still needs to prove more.",
    url: "https://colubeatid.substack.com/p/amrize-ltd-nyse-amrz-building-materials?r=392fuc",
    tags: ["Industrials", "Materials"],
    isPaid: false,
    status: "active",
    updates: [],
    earningsIntegrated: false,
    closedReason: null,
    position: {
      visible: true,
      status: "holding",
      currency: "USD",
      averagePrice: 41.71,
      // interestedBelow: 00,   // ← add when you have a level in mind
      updatedAt: "2026-10-23",
      referencePrice: 39,
    },
  },
  {
    ticker: "HOM.U",
    company: "BSR Real Estate Investment Trust",
    sector: "REIT",
    geo: "Canada",
    datePublished: "2026-07-16",
    image: "images/BSR.webp",
    summary:
      "Small Toronto-listed REIT that owns zero property in Canada. Just apts across TX, OK & AR, managed by people who've leased those submarkets for years. A strategic buyer paid almost book value for part of this REIT. The rest still trades nearly 30% below NAV.",
    url: "https://colubeatid.substack.com/p/bsr-reit-tsx-homu-the-29-gap-avalonbay?r=392fuc",
    tags: ["REIT"],
    isPaid: true,
    status: "watching",
    updates: [],
    earningsIntegrated: false,
    closedReason: null,
    position: {
      visible: true,
      status: "watching",
      currency: "CAD",
      // interestedBelow: 00,   // ← add when you have a level in mind
      updatedAt: "2026-08-28",
    },
  },
  {
    ticker: "RYN",
    company: "Rayonier Inc",
    sector: "REIT",
    geo: "US",
    datePublished: "2026-06-16",
    image: "images/RYN.webp",
    summary:
      "Four Million Acres at the Bottom of the Cycle. Rayonier trades at a steep discount to private timberland value.",
    url: "https://colubeatid.substack.com/p/rayonier-inc-nyse-ryn",
    tags: ["REIT"],
    isPaid: true,
    status: "active",
    updates: [
      {
        label: "Let's talk about Rayonier",
        url: "https://colubeatid.substack.com/p/lets-talk-about-rayonier",
        date: "2026-10-06",
        excerpt:
          "I published my Rayonier thesis at about $21. The stock is now $18, so I went back through the thesis to see what the private-market NAV means for shareholders and what return I can get from here.",
      },
      {
        label: "Rayonier Inc: I Gave the Buyback Too Much Credit",
        url: "https://colubeatid.substack.com/p/update-rayonier-inc-ryn-q2-2026-results?r=392fuc",
        date: "2026-08-17",
        excerpt:
          "Q2 2026. The land side still works for me, but there's more debt and less room for buybacks than I expected.",
      },
    ],
    earningsIntegrated: false,
    closedReason: null,
    position: {
      visible: true,
      status: "holding",
      currency: "USD",
      averagePrice: 21.1, // ← add only when you want to disclose it
      updatedAt: "2026-08-28",
      referencePrice: 20.9,
    },
  },
  {
    ticker: "USLM",
    company: "United States Minerals & Lime",
    sector: "Materials",
    geo: "US",
    datePublished: "2026-05-28",
    image: "images/USLM.webp",
    summary:
      "A debt-free regional lime monopoly with exceptional, temporary margins driven by cheap Permian gas and sticky local electric-arc steel demand.",
    url: "https://colubeatid.substack.com/p/united-states-lime-and-minerals-inc",
    tags: ["Industrials"],
    isPaid: true,
    status: "watching",
    updates: [],
    earningsIntegrated: false,
    closedReason: "Bought $98.25 sold at $118",
    position: {
      visible: true,
      status: "watching",
      currency: "USD",
      interestedBelow: 100, // ← add when you have a level in mind
      updatedAt: "2026-08-28",
    },
  },
  {
    ticker: "BQE",
    company: "BQE Waters",
    sector: "Industrial",
    geo: "Canada",
    datePublished: "2026-05-06",
    image: "images/bqe.webp",
    summary:
      "The core of the business is currently transitioning from a project-based consulting model into a long-term operator of water treatment plants.",
    url: "https://colubeatid.substack.com/p/bqe-water-inc-tsx-v-bqe",
    tags: ["Industrials"],
    isPaid: false,
    status: "watching",
    updates: [],
    earningsIntegrated: false,
    closedReason: null,
    position: {
      visible: true,
      status: "watching",
      currency: "CAD",
      interestedBelow: 60, // ← add when you have a level in mind
      updatedAt: "2026-08-28",
    },
  },
  {
    ticker: "HAE",
    company: "HAEMONETICS Corp",
    sector: "Healthcare",
    geo: "US",
    datePublished: "2026-04-22",
    image: "images/HAE.webp",
    summary:
      "A medical technology leader with high software-driven switching costs. It's trading at 12x because the market's mistaking reported revenue declines for actual organic growth.",
    url: "https://colubeatid.substack.com/p/haemonetics-nyse-hae",
    tags: ["Medtech"],
    isPaid: false,
    status: "watching",
    updates: [],
    earningsIntegrated: false,
    closedReason: "Bought $55.67 sold at $88",
    position: {
      visible: true,
      status: "watching",
      currency: "USD",
      interestedBelow: 55,
      updatedAt: "2026-08-28",
    },
  },
  {
    ticker: "CHE",
    company: "CHEMED Corporation",
    sector: "Healthcare",
    geo: "US",
    datePublished: "2026-03-23",
    image: "images/CHE.webp",
    summary:
      "A debt-free holding company that leverages dominant, route-based market positions in hospice and plumbing to generate high-margin free cash flow for aggressive share repurchases",
    url: "https://colubeatid.substack.com/p/chemed-corporation-nyse-che?r=392fuc",
    tags: [
      "Healthcare Services",
      "Industrial",
      "Compounder",
      "Business Services",
    ],
    isPaid: false,
    status: "watching",
    updates: [],
    earningsIntegrated: false,
    closedReason: null,
    position: {
      visible: true,
      status: "watching",
      currency: "USD",
      // interestedBelow: 00,   // ← add when you have a level in mind
      updatedAt: "2026-08-28",
    },
  },
  {
    ticker: "TIC",
    company: "TIC Solutions",
    sector: "Industrials",
    geo: "US",
    datePublished: "2026-02-20",
    image: "images/TIC.webp",
    summary:
      "Co-investing with Martin Franklin in an asymmetric bet. How to buy a Data Center infrastructure play at industrial distress prices. A 3-5 year roadmap.",
    url: "https://colubeatid.substack.com/p/tic-solutions-nyse-tic",
    tags: ["Industrials"],
    isPaid: false,
    status: "active",
    updates: [
      {
        label: "FY 2025 Results",
        url: "https://colubeatid.substack.com/p/update-tic-solutions-tic-fy-2025?r=392fuc",
        date: "2026-04-08",
      },
      {
        label: "Q1 2026 Results",
        url: "https://colubeatid.substack.com/p/update-tic-solutions-tic-q1-2026",
        date: "2026-05-07",
      },
      {
        label: "Investor Day 2026",
        url: "https://colubeatid.substack.com/p/tics-new-31885-framework-growth-over",
        date: "2026-05-20",
      },
      {
        label: "TIC Solutions: Slower, but I Still See 18% Margins",
        url: "https://colubeatid.substack.com/p/update-tic-solutions-tic-q2-2026",
        date: "2026-08-10",
        excerpt:
          "Q2 2026. The gross margin was better. Organic growth was still 2.5%, and debt went up again.",
      },
    ],
    earningsIntegrated: false,
    closedReason: null,
    position: {
      visible: true,
      status: "holding",
      currency: "USD",
      averagePrice: 8.32, // ← add only when you want to disclose it
      updatedAt: "2026-08-28",
      referencePrice: 9.85,
    },
  },
  {
    ticker: "ALX",
    company: "Alexander's",
    sector: "REIT",
    geo: "US",
    datePublished: "2025-12-29",
    image: "images/ALX.webp",
    summary:
      "The Rego Park Sale Changes Everything: Updated NAV, A Likely Special Dividend, and Why the Bear Case Just Collapsed",
    url: "https://colubeatid.substack.com/p/alexanders-inc-nyse-alx",
    tags: ["REIT"],
    isPaid: false,
    status: "active",
    updates: [
      {
        label: "FY 2025 Results",
        url: "https://colubeatid.substack.com/p/update-alexanders-alx-fy-2025-results?r=392fuc",
        date: "2026-02-09",
      },
      {
        label: "Alexander's: The Discount Is Mostly Gone",
        url: "https://colubeatid.substack.com/p/update-alexanders-alx-q2-2026?r=392fuc",
        date: "2026-08-04",
        excerpt:
          "Q2 2026. The stock is much closer to my NAV now, so I'm paying more attention to the distributions and what gets sold next.",
      },
    ],
    earningsIntegrated: true,
    closedReason: "Sold 60% position at $281",
    position: {
      visible: true,
      status: "holding",
      currency: "USD",
      averagePrice: 221.02, // ← add only when you want to disclose it
      updatedAt: "2026-08-28",
      referencePrice: 270,
    },
  },
  {
    ticker: "BZU",
    company: "Buzzi SpA",
    sector: "Materials",
    geo: "Europe",
    datePublished: "2026-2-18",
    image: "images/bzu/BZU.webp",
    summary:
      "Highly cash-generative cement producer controlled by the founding family, and right now they're using their strong balance sheet to buy back their own shares.",
    url: "https://colubeatid.substack.com/p/buzzi-spa-bzumi",
    tags: ["Materials"],
    isPaid: false,
    status: "active",
    updates: [
      {
        label: "FY 2025 Results",
        url: "https://open.substack.com/pub/colubeatid/p/buzzi-spa-bzumi-fy-2025-results?r=392fuc&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true",
        date: "2026-03-31",
      },
      {
        label: "Buzzi: The US Pressure Is Mostly in Texas",
        url: "https://colubeatid.substack.com/p/buzzi-spa-bzumi-h1-2026-results?r=392fuc",
        date: "2026-08-20",
        excerpt:
          "H1 2026. The US margin fell, but not for the same reason in every market.",
      },
    ],
    earningsIntegrated: false,
    closedReason: null,
    position: {
      visible: true,
      status: "holding",
      currency: "EUR",
      averagePrice: 43.83, // ← add only when you want to disclose it
      updatedAt: "2026-08-28",
      referencePrice: 41,
    },
  },
  {
    ticker: "MSA",
    company: "MSA Safety Incorporated",
    sector: "Industrials",
    geo: "US",
    datePublished: "2026-3-3",
    image: "images/MSA.webp",
    summary:
      "An elite 'regulatory tax' on safety with 45% recurring revenue, but right now it's a great business at a very difficult price.",
    url: "https://colubeatid.substack.com/p/msa-safety-incorporated-nyse-msa",
    tags: ["Compounder", "Regulatory", "Defensive"],
    isPaid: false,
    status: "watching",
    updates: [],
    earningsIntegrated: false,
    closedReason: null,
    position: {
      visible: true,
      status: "watching",
      currency: "USD",
      interestedBelow: 155,
      updatedAt: "2026-08-28",
    },
  },
  {
    ticker: "BNZL",
    company: "BUNZL plc",
    sector: "Industrials",
    geo: "Europe",
    datePublished: "2026-02-04",
    image: "images/BNZL.webp",
    summary:
      "An M&A machine that scales by buying smaller distributors, currently busy fixing a centralization mess in the US.",
    url: "https://colubeatid.substack.com/p/bunzl-plc-lon-bnzl?r=392fuc",
    tags: ["UK", "Defensive", "Distribution"],
    isPaid: false,
    status: "watching",
    updates: [
      {
        label: "FY 2025 Results",
        url: "https://colubeatid.substack.com/p/update-bunzl-plc-bnzll-fy-2025-results?r=392fuc",
        date: "2026-03-02",
      },
    ],
    earningsIntegrated: false,
    closedReason: "Sold at $28",
    position: {
      visible: true,
      status: "holding",
      currency: "GBP",
      averagePrice: 22.07, // ← add only when you want to disclose it
      updatedAt: "2026-08-28",
    },
  },
  {
    ticker: "VRE",
    company: "Veris Residential",
    sector: "REIT",
    geo: "US",
    datePublished: "2025-12-11",
    image: "images/VRE.webp",
    summary:
      "Irreplaceable luxury, mercenary management, and a 35% discount: Veris Residential's master stroke.",
    url: "https://colubeatid.substack.com/p/veris-residential-nyse-vre-the-deep?r=392fuc",
    tags: ["REIT"],
    isPaid: false,
    status: "closed",
    updates: [
      {
        label: "Acquired at $19.00",
        url: "https://colubeatid.substack.com/p/thesis-closed-vre-acquired-at-1900?r=392fuc",
        date: "2026-02-23",
      },
    ],
    earningsIntegrated: false,
    closedReason: "Sold at $19.00",
    position: {
      visible: true,
      status: "no_position",
      currency: "USD",
      updatedAt: "2026-08-28",
    },
  },
  {
    ticker: "ERF",
    company: "Eurofins Scientific",
    sector: "Pharma",
    geo: "Europe",
    datePublished: "2026-01-08",
    image: "images/ERF.webp",
    summary:
      "Global laboratory leader that's finished its heavy investment cycle and is now turning its massive network into a high-cash-flow operation.",
    url: "https://colubeatid.substack.com/p/eurofins-scientific-erfpa?r=392fuc",
    tags: ["BioPharma", "Life Sciences", "Testing"],
    isPaid: false,
    status: "active",
    updates: [
      {
        label: "FY 2025 Results",
        url: "https://colubeatid.substack.com/p/update-eurofins-scientific-erf-fy?r=392fuc",
        date: "2026-02-10",
      },
      {
        label: "Q1 2026 Results",
        url: "https://colubeatid.substack.com/p/update-eurofins-scientific-erf-q1",
        date: "2026-04-23",
      },
      {
        label: "Eurofins Scientific: Margins Are Fine, Waiting for Growth",
        url: "https://colubeatid.substack.com/p/update-eurofins-scientific-erf-h1?r=392fuc",
        date: "2026-07-24",
        excerpt:
          "H1 2026. The margin was already above what I needed in my model. I went back through the valuation to see what slower growth does to it.",
      },
    ],
    earningsIntegrated: true,
    closedReason: null,
    position: {
      visible: true,
      status: "holding",
      currency: "EUR",
      averagePrice: 61.22, // ← add only when you want to disclose it
      updatedAt: "2026-08-28",
      referencePrice: 72,
    },
  },
  {
    ticker: "POOL",
    company: "POOL Corporation",
    sector: "Industrials",
    geo: "US",
    datePublished: "2025-12-19",
    image: "images/POOL.webp",
    summary:
      "A massive distribution machine where 64% of the revenue is locked in by mandatory maintenance, making it a resilient compounder just waiting for the construction cycle to turn.",
    url: "https://colubeatid.substack.com/p/pool-corporation-nasdaq-pool?r=392fuc",
    tags: ["B2B Distribution", "Recurring Revenue", "Compounder"],
    isPaid: false,
    status: "active",
    updates: [
      {
        label: "FY 2025 Results",
        url: "https://colubeatid.substack.com/p/update-pool-corporation-pool-fy-2025?r=392fuc",
        date: "2026-03-23",
      },
      {
        label: "Q1 2026 Results",
        url: "https://colubeatid.substack.com/p/update-pool-corporation-pool-q1-2026?r=392fuc",
        date: "2026-04-28",
      },
      {
        label: "POOL Corporation: The Problem Wasn't Maintenance Demand",
        url: "https://colubeatid.substack.com/p/update-pool-corporation-pool-q2-2026?r=392fuc",
        date: "2026-07-30",
        excerpt: "Q2 2026: freight, customer mix, POOL360 and the buyback.",
      },
      {
        label: "POOL: It Didn't Need a Great Quarter",
        url: "https://colubeatid.substack.com/p/pool-it-didnt-need-a-great-quarter?r=392fuc",
        date: "2026-10-26",
        excerpt:
          "Q3 gave investors some reasons to be less pessimistic. I'm giving Watwood more credit, although I still have questions about how much margin POOL can recover.",
      },
    ],
    earningsIntegrated: true,
    dateIntegrated: "2026-03-23",
    closedReason: null,
    position: {
      visible: true,
      status: "holding",
      currency: "USD",
      averagePrice: 201.0, // ← add only when you want to disclose it
      updatedAt: "2026-08-28",
      referencePrice: 186,
    },
  },
  {
    ticker: "FRPH",
    company: "FRP Holdings",
    sector: "RE Developer",
    geo: "US",
    datePublished: "2025-12-06",
    image: "images/FRPH.webp",
    summary:
      "A legacy asset-heavy business that just brought a full-cycle development platform in-house to control the entire lifecycle of its projects.",
    url: "https://colubeatid.substack.com/p/frp-holdings-inc-nasdaq-frph?r=392fuc",
    tags: ["Development", "Industrial RE", "Residential RE"],
    isPaid: false,
    status: "active",
    updates: [
      {
        label: "Let's talk about",
        url: "https://colubeatid.substack.com/p/lets-talk-about-frp-holdings?r=392fuc",
        date: "2026-10-17",
      },
      {
        label: "FY 2025 Results",
        url: "https://colubeatid.substack.com/p/update-frp-holdings-inc-frph-fy-2025?r=392fuc",
        date: "2026-04-13",
      },
      {
        label: "Q1 2026 Results",
        url: "https://colubeatid.substack.com/p/update-frp-holdings-inc-frph-q1-2026",
        date: "2026-05-13",
      },
      {
        label:
          "FRP Holdings Inc: Chelsea Is Still Empty and Problems Continue in DC",
        url: "https://colubeatid.substack.com/p/update-frp-holdings-inc-frph-q2-2026",
        date: "2026-08-12",
        excerpt:
          "Q2 2026. The asset values haven’t changed. I still have some doubts about the execution, and a few things I expected to improve this year haven’t. There was also an interesting debate about capital allocation on the call.",
      },
    ],
    earningsIntegrated: false,
    closedReason: null,
    position: {
      visible: true,
      status: "holding",
      currency: "USD",
      averagePrice: 25.1, // ← add only when you want to disclose it
      updatedAt: "2026-08-28",
      referencePrice: 22.15,
    },
  },
  {
    ticker: "3828.HK",
    company: "MING FAI International",
    sector: "Consumer",
    geo: "Asia",
    datePublished: "2025-12-04",
    image: "images/3828.webp",
    summary:
      "Cash fortress and anti-tariff shield trading at panic levels. New strategic value unlocks.",
    url: "https://colubeatid.substack.com/p/ming-fai-international-holding-limited?r=392fuc",
    tags: ["Deep Value", "Arbitrage", "B2B"],
    isPaid: false,
    status: "watching",
    updates: [],
    earningsIntegrated: false,
    closedReason: null,
    position: {
      visible: true,
      status: "no_position",
      currency: "HKD",
      updatedAt: "2026-08-28",
    },
  },
];

const earningsAwaiting = [];

const wipTheses = [{}];

const watchlist = [
  {
    ticker: "AMRZ",
    sector: "Industrials",
    geo: "US",
    note: "North American building materials company with cement, aggregates and roofing businesses after the Holcim spin-off.",
  },
  {
    ticker: "RGLD",
    sector: "Materials",
    geo: "US",
    note: "Gold royalty and streaming company with no direct mine operating costs.",
  },
  {
    ticker: "SITE",
    sector: "Industrials",
    geo: "US",
    note: "Largest wholesale distributor of landscaping products in the US.",
  },
  {
    ticker: "GATX",
    sector: "Industrials",
    geo: "US",
    note: "Owns and leases railcars, with a large North American fleet and long asset lives.",
  },
  {
    ticker: "FTDR",
    sector: "Consumer",
    geo: "US",
    note: "Home service plans and repair network, mainly through the American Home Shield brand.",
  },
  {
    ticker: "EVI",
    sector: "Industrials",
    geo: "US",
    note: "Distributor of commercial laundry equipment that has grown through a long series of acquisitions.",
  },
];

const insights = [
  {
    title: "I Mapped the Materials Around 25 Texas Data Centers",
    tag: "Cement sector",
    date: "2026-09-23",
    excerpt:
      "What the map misses about cement plants, terminals and captive demand along the Mississippi.",
    url: "https://colubeatid.substack.com/p/i-mapped-the-materials-around-25?r=392fuc",
    image: "images/Mapped.webp",
    relatedTicker: "BZU, AMRZ",
  },
  {
    title:
      "What Happens When Buzzi's Biggest Customer Starts Making More of Its Own Cement?",
    tag: "Buzzi insight",
    date: "2026-08-26",
    excerpt:
      "What the map misses about cement plants, terminals and captive demand along the Mississippi.",
    url: "https://colubeatid.substack.com/p/buzzi-quikrete-and-the-mississippi",
    image: "images/BZUQUIK.webp",
    relatedTicker: "BZU",
  },
  {
    title:
      "$TIC's €197 Million Ceiling, and the €375 Million Deal That Broke It",
    tag: "TIC insight",
    date: "2026-07-21",
    excerpt:
      "A signal I said to watch in June had already happened by the time I published it.",
    url: "https://colubeatid.substack.com/p/tics-197-million-ceiling-and-the",
    image: "images/TIC.webp",
    relatedTicker: "TIC",
  },
  {
    title: "Alexander's Inc.: Read the 8-K Before You Read the 10-Q",
    tag: "Alexander's insight",
    date: "2026-07-07",
    excerpt:
      "The Bloomberg abatement mechanism, a $40 data error in the March NAV, and the return case from $272 before the Q2 print arrives.",
    url: "https://colubeatid.substack.com/p/alexanders-inc-read-the-8-k-before",
    image: "images/ALX.webp",
    relatedTicker: "ALX",
  },
  {
    title: "Is Buzzi's buyback real capital allocation, or window dressing?",
    tag: "BUZZI insight",
    date: "2026-06-29",
    excerpt:
      "The buying pattern says more than the total does, and it answers a question holders keep asking.",
    url: "https://colubeatid.substack.com/p/is-buzzis-buyback-real-capital-allocation",
    image: "images/BZU.webp",
    relatedTicker: "BZU",
  },
  {
    title: "TIC's Data Center Business, Region by Region",
    tag: "TIC insight",
    date: "2026-06-26",
    excerpt:
      "A region-by-region look at TIC Solutions' data center exposure: where the US, India/Indonesia, China, and Europe/Middle East stories actually differ.",
    url: "https://colubeatid.substack.com/p/tics-data-center-business-region",
    image: "images/TIC.webp",
    relatedTicker: "TIC",
  },
  {
    title:
      "Lime, Data Centers, and Steel: Tracing How the AI Build-Out Reaches U.S. Lime & Minerals",
    tag: "USLM insight",
    date: "2026-06-02",
    excerpt:
      "A documented investigation into what the data center and semiconductor build-out actually means for a Texas lime monopoly.",
    url: "https://colubeatid.substack.com/p/lime-data-centers-and-steel-tracing",
    image: "images/USLM.webp",
    relatedTicker: "USLM",
  },
  {
    title: "The Mississippi: Buzzi's Structural Dominance in American Cement",
    tag: "BUZZI insight",
    date: "2026-05-11",
    excerpt:
      "How thermodynamics, environmental regulation, and geography built an irreplicable logistics advantage that doubles European margins.",
    url: "https://colubeatid.substack.com/p/the-mississippi-buzzis-structural",
    image: "images/BUZZI2.webp",
    relatedTicker: "BZU",
  },
  {
    title: "The Hidden Details in TIC 10-K/A Filing",
    tag: "TIC insight",
    date: "2026-04-30",
    excerpt:
      "Five disclosures from the 10-K/A. Three confirm what we already knew. Two deserve attention.",
    url: "https://colubeatid.substack.com/p/insight-2-the-hidden-details-in-tic",
    image: "images/TIC2.webp",
    relatedTicker: "TIC",
  },
  {
    title: "GEO Agent: The Part of TIC Solutions Nobody Is Pricing",
    tag: "TIC insight",
    date: "2026-03-26",
    excerpt:
      "GEO Agent is the asset nobody is pricing. The CEO transition may be the reason it gets built.",
    url: "https://colubeatid.substack.com/p/insight-geo-agent-the-part-of-tic?r=392fuc",
    image: "images/TIC.webp",
    relatedTicker: "TIC",
  },
  {
    title: "Eurofins: What 10,000 Bad Reviews Tell Us About the IT Rollout",
    tag: "Eurofins insight",
    date: "2026-05-26",
    excerpt:
      "Inside eLIMS-NG, the shadow period, and what it means for the 2027 margin case",
    url: "https://colubeatid.substack.com/p/eurofins-what-10000-bad-reviews-tell",
    image: "images/ERF.webp",
    relatedTicker: "ERF",
  },
];

const behindTheNumber = [
  {
    title: "Accounting Required #05 - Channel Inventory",
    tag: "P&L",
    issue: 5,
    date: "2026-09-14",
    excerpt: "Why a manufacturer's sales can fall much faster than demand.",
    url: "https://colubeatid.substack.com/p/accounting-required-05-channel-inventory?r=392fuc",
    image: "images/behindthescenes.webp",
  },
  {
    title: "Accounting Required #04 - Negative Working Capital",
    tag: "P&L",
    issue: 4,
    date: "2026-07-09",
    excerpt:
      "The line on the balance sheet that scares off investors who never check what's underneath it",
    url: "https://colubeatid.substack.com/p/behind-the-number-04-negative-working",
    image: "images/behindthescenes.webp",
  },
  {
    title: "Accounting Required #03 - Depreciation Is a Guess",
    tag: "P&L",
    issue: 3,
    date: "2026-06-08",
    excerpt:
      "Three tests to find out whether a company's depreciation is hiding a cost or hiding a quality",
    url: "https://colubeatid.substack.com/p/behind-the-number-03-depreciation",
    image: "images/behindthescenes.webp",
  },
  {
    title:
      "Accounting Required #02 - Revenue went up. Did the business get better?",
    tag: "P&L",
    issue: 2,
    date: "2026-05-04",
    excerpt:
      "A framework to help you distinguish between real scaling and capital-intensive replication using three functional tests.",
    url: "https://colubeatid.substack.com/p/behind-the-number-02-revenue-went",
    image: "images/behindthescenes.webp",
  },
  {
    title: "Accounting Required #01 - Not All Revenue Is Created Equal",
    tag: "P&L",
    issue: 1,
    date: "2026-04-07",
    excerpt:
      "The difference between revenue a company owns and revenue it just rents, and why the income statement won't tell you.",
    url: "https://colubeatid.substack.com/p/behind-the-number-01-not-all-revenue",
    image: "images/behindthescenes.webp",
  },
];

// Key thesis questions - one per company
const keyQuestions = {
  AMRZ: "Does Amrize really have one network, or a collection of very different local businesses?",
  "HOM.U":
    "Can a 30% NAV discount close when the strategic buyer already validated the assets at book value?",
  RYN: "Is the market pricing only the trees while ignoring four million acres of optionality in solar, carbon, and real estate?",
  USLM: "How long can a regional lime monopoly sustain margins driven by cheap Permian gas before the cost advantage normalizes?",
  BQE: "Can a project-based consulting firm successfully transition to recurring water treatment contracts at scale?",
  HAE: "Is the market confusing a one-time revenue reclassification with actual organic decline?",
  CHE: "Can a debt-free holding company compound at 10%+ returns through buybacks alone, without acquisitions?",
  TIC: "Is Martin Franklin building a data center infrastructure play inside what the market still prices as a distressed industrial?",
  ALX: "With the Rego Park sale done and a special dividend likely, what is the remaining portfolio actually worth?",
  BZU: "Is the family-controlled buyback a signal that insiders see the stock as significantly undervalued?",
  MSA: "At what price does a 45% recurring revenue safety business become a buy despite its premium multiple?",
  BNZL: "Can Bunzl fix its US centralization problems while maintaining its acquisition flywheel?",
  VRE: "Was the 35% NAV discount justified by operational risk, or was the market simply wrong?",
  ERF: "Is the heavy capex cycle truly over, and will FCF conversion reach the levels management projects?",
  POOL: "When the construction cycle turns, does 64% recurring maintenance revenue protect or limit the upside?",
  FRPH: "Can an asset-heavy legacy business successfully reinvent itself as a full-cycle developer?",
  "3828.HK":
    "Is this a genuine cash fortress at panic prices, or is there a governance discount the market is correctly pricing?",
};
/* ═══════════════════════════════════════════════════════════
   COMPANY PAGES — optional extra content for company.html
   Keyed by ticker. EVERYTHING here is optional: a company with no
   entry (or a missing field) still renders; that section just hides.

   hook       → one line under the company name in the hero.
   hero       → { image, video, poster, caption }
                video: short muted .mp4/.webm (< 3 MB). poster is shown
                while it loads and to anyone with reduced motion on.
   metrics[]  → { label, value, note, asOf }   number tiles
   segments   → { title, unit, asOf, source, items:[{label, value, highlight}] }
   assets     → { title, intro, plants[], terminals[], elsewhere[], source }
                plants/terminals: { name, lat, lon, note }
   watchingReviewed → date you last reviewed the statuses below
   watching[] → { label, status: "ok"|"watch"|"broken", current, note,
                  range?: { min, max, limit, value, unit, limitLabel } }
                ⚠ "status" is YOUR call, not a calculation. Review it
                every time you publish an update.
   sources[]  → { label, url }   shown at the bottom of the business block

   Figures: always company-reported, always dated (asOf). Never live.
   ═══════════════════════════════════════════════════════════ */
const companyPages = {
  BZU: {
    // ✎ EDITORIAL — rewrite in your own words
    hook: "An Italian cement maker that earns most of its money in America.",
    metrics: [
      {
        label: "Net sales",
        value: "€4.5bn",
        note: "FY 2025",
        asOf: "2025-12-31",
      },
      { label: "EBITDA", value: "€1.2bn", note: "FY 2025", asOf: "2025-12-31" },
      {
        label: "Net cash",
        value: "€896m",
        note: "Jun 30, 2026 · €1.11bn at YE 2025",
        asOf: "2026-06-30",
      },
      {
        label: "EBITDA margin",
        value: "22.1%",
        note: "H1 2026 · −190 bps YoY",
        asOf: "2026-06-30",
      },
      {
        label: "FY 2026 guidance",
        value: "€1.10–1.20bn",
        note: "Recurring EBITDA",
        asOf: "2026-08-04",
      },
      {
        label: "Family ownership",
        value: "~59%",
        note: "Buzzi family",
        asOf: "2025-12-31",
      },
    ],
    segments: {
      title: "Where H1 2026 sales came from",
      unit: "€m",
      asOf: "2026-06-30",
      source: "Buzzi H1 2026 report · S&P Global",
      total: 2188.5,
      items: [
        { label: "United States", value: 733.0, highlight: true },
        { label: "Brazil", value: 204.0 },
        { label: "Czech Rep. & Slovakia", value: 116.3 },
        { label: "UAE", value: 75.8 },
        { label: "Italy, Germany, Poland & rest", value: 1059.4 },
      ],
      note: "Mexico (50% JV) is equity-accounted and not in consolidated sales.",
    },
    assets: {
      title: "The US network",
      intro:
        "Eight cement plants and a chain of river terminals. Festus and Cape Girardeau sit on the Mississippi itself, where barges move cement far beyond the usual trucking radius.",
      plants: [
        {
          name: "Festus, MO",
          lat: 38.2,
          lon: -90.37,
          note: "Largest plant (the Selma plant) · ~2.5 Mt clinker · anchors the St. Louis market",
          featured: true,
        },
        {
          name: "Cape Girardeau, MO",
          lat: 37.26,
          lon: -89.52,
          note: "Mississippi river plant",
        },
        {
          name: "Greencastle, IN",
          lat: 39.64,
          lon: -86.86,
          note: "Indiana plant",
        },
        {
          name: "Chattanooga, TN",
          lat: 35.08,
          lon: -85.36,
          note: "Signal Mountain · Tennessee market",
        },
        {
          name: "Stockertown, PA",
          lat: 40.75,
          lon: -75.26,
          note: "Lehigh Valley · Northeast market",
        },
        { name: "Pryor, OK", lat: 36.28, lon: -95.31, note: "Oklahoma plant" },
        {
          name: "Maryneal, TX",
          lat: 32.23,
          lon: -100.45,
          note: "15–20 mi from the Abilene / Sweetwater data-center cluster",
          featured: true,
        },
        {
          name: "San Antonio, TX",
          lat: 29.63,
          lon: -98.5,
          note: "Alamo Cement",
        },
      ],
      terminals: [
        {
          name: "St. Louis, MO",
          lat: 38.63,
          lon: -90.19,
          note: "River terminal",
        },
        {
          name: "Memphis, TN",
          lat: 35.11,
          lon: -90.06,
          note: "River terminal",
        },
        {
          name: "Bonner Springs, KS",
          lat: 39.06,
          lon: -94.88,
          note: "Missouri river terminal",
        },
        {
          name: "Oglesby, IL",
          lat: 41.29,
          lon: -89.06,
          note: "Illinois river terminal",
        },
      ],
      elsewhere: [
        "Italy",
        "Germany",
        "Luxembourg",
        "Netherlands",
        "Poland",
        "Czech Republic & Slovakia",
        "Ukraine",
        "Brazil",
        "Mexico (JV)",
        "UAE",
      ],
      // Other points the story needs on the map
      others: [
        {
          name: "Hannibal, MO",
          lat: 39.65,
          lon: -91.32,
          note: "Cement plant owned by Quikrete since it bought Summit Materials (Feb 2025)",
          group: "quikrete",
        },
        {
          name: "Davenport, IA",
          lat: 41.46,
          lon: -90.72,
          note: "Cement plant owned by Quikrete since it bought Summit Materials (Feb 2025)",
          group: "quikrete",
        },
        {
          name: "Abilene / Sweetwater",
          lat: 32.46,
          lon: -100.05,
          note: "Data-center cluster",
          group: "dc",
        },
      ],
      source: "Buzzi Unicem USA · company filings. River paths are schematic.",
    },

    mapViews: {
      us: [
        [-104, 28.5],
        [-73.5, 45],
      ],
      corridor: [
        [-97, 34],
        [-84, 43],
      ],
      festus: [
        [-92.6, 36.6],
        [-88.4, 39.6],
      ],
      texas: [
        [-103, 28.8],
        [-96.5, 33.6],
      ],
      upriver: [
        [-93.2, 37.4],
        [-88.4, 42.2],
      ],
    },

    /* ── THE PAGE: hero + one chapter per publication ─────────────
       Read top to bottom. Each chapter is matched to an article by `ref`
       (any piece of its URL; the longest match wins). Publications with
       no chapter still appear, with their own image.

       layout:
         "split"     → text on one side, moving image on the other (side: "left"|"right")
         "fullbleed" → photo fills the screen, title over it, cards float on it
         "numbers"   → big counting figures, no image
         "dark"      → deep-green band with animated bars (balance-sheet style)
       Common fields:
         title, more (behind "+"), image, video, motion ("zoom-in" | "zoom-out" | "pan-left" | "pan-right" | "rise")
         cards  → floating cards on the image: { x, y, value, label } (x/y in % of the image;
                  find them with company.html?ticker=BZU&edit=1)
         explore → optional tabs under a chapter: [{ label, image, caption, cards }]
         inside  → 2–3 short teasers shown as "In the full piece" (the hook to click)
         readMin → optional reading time in minutes, shown on the button
       ✎ EDITORIAL — every line of copy is a first draft. Rewrite freely.
       ──────────────────────────────────────────────────────────── */
    hero: {
      image: "images/bzu/hero-silo.webp",
      video: null, // e.g. "video/bzu-hero.mp4" (short muted loop)
      title: "An Italian cement maker that earns most of its money in America.",
      cards: [
        {
          x: 16,
          y: 30,
          value: "58%",
          label: "of EBITDA from the United States",
        },
        { x: 80, y: 66, value: "€1.13bn", label: "net cash, not debt" },
      ],
    },
    chapters: [
      {
        ref: "buzzi-spa-bzumi",
        layout: "split",
        inside: [
          "Why 58% of EBITDA is American but the stock is priced like a European",
          "The three reasons behind the 'Italian discount'",
          "Bear, base and bull cases to 2028",
        ],
        side: "right",
        image: "images/bzu/plant-dawn.webp",
        motion: "zoom-out",
        title: "Buy for the floor, not the ceiling.",
        lead: "A family-controlled cement group from Italy, running plants in 14 countries, priced at around 6x EBITDA like a European cement company.",
        more: "The thesis found three reasons for the discount: a family that hoards cash (€1.13bn net), exposure to Russia (~€303m of 2025 sales treated as stranded) and decarbonisation capex of €350m+ a year. Not a growth story. A balance sheet and a set of assets that protect you in a bad market.",
        cards: [
          { x: 22, y: 20, value: "14", label: "countries" },
          { x: 74, y: 82, value: "~6x", label: "EBITDA, a European multiple" },
        ],
      },
      {
        ref: "buzzi-spa-bzumi-fy-2025-results",
        layout: "numbers",
        inside: [
          "Where the 240 basis points of margin went",
          "Region by region, from Texas to Poland",
        ],
        title: "Top of guidance, with thinner margins.",
        lead: "The year landed where management said it would. The US carried the pressure: lower volumes on a heavy fixed-cost base.",
        items: [
          {
            value: "€1.23bn",
            label: "Recurring EBITDA, FY 2025, top of guidance",
          },
          { value: "−240bps", label: "Group EBITDA margin" },
          { value: "−7.0%", label: "US sales in 2025" },
        ],
      },
      {
        ref: "the-mississippi-buzzis-structural",
        layout: "fullbleed",
        inside: [
          "How thermodynamics, regulation and geography built the moat",
          "Why the river roughly doubles European margins",
          "The petcoke loop: cement down, fuel back up",
        ],
        image: "images/bzu/barge.webp",
        motion: "pan-left",
        title:
          "On the Mississippi, cement travels further than any truck can take it.",
        lead: "Cement is heavy and cheap, so it rarely goes far by road. A plant on the river reaches markets hundreds of miles away by barge.",
        more: "Festus is the largest plant in the US network, with about 2.5 Mt of clinker. Barges carry cement down to the Gulf and come back with petcoke for the kilns. Explore the network and the loop below.",
        explore: [
          {
            label: "The network",
            image: "images/bzu/river-map.webp",
            caption:
              "Buzzi's US cement plants on the Mississippi river system. Base map: Shannon1, Wikimedia Commons (CC BY-SA 4.0).",
            cards: [
              {
                x: 64,
                y: 49,
                value: "Festus",
                label:
                  "Largest plant, ~2.5 Mt clinker, on the river next to St. Louis",
              },
              {
                x: 65,
                y: 52.5,
                value: "Cape Girardeau",
                label: "Second Mississippi river plant",
              },
              { x: 66.5, y: 63.8, value: "Memphis", label: "River terminal" },
              {
                x: 53.4,
                y: 47.8,
                value: "Kansas City",
                label: "Bonner Springs terminal on the Missouri",
              },
              { x: 52.8, y: 58.8, value: "Pryor", label: "Oklahoma plant" },
              {
                x: 72.5,
                y: 42.6,
                value: "Greencastle",
                label: "Indiana plant",
              },
              {
                x: 78.2,
                y: 63,
                value: "Chattanooga",
                label: "Tennessee plant",
              },
              {
                x: 39.8,
                y: 79.8,
                value: "Maryneal",
                label: "West Texas plant, 15–20 mi from a data-center cluster",
              },
            ],
          },
          {
            label: "The petcoke loop",
            image: "images/bzu/petcoke-loop.webp",
            caption:
              "Cement goes down the river; petcoke for the kilns comes back up.",
            cards: [],
          },
        ],
      },
      {
        ref: "is-buzzis-buyback-real-capital-allocation",
        layout: "split",
        inside: [
          "What the buying pattern reveals that the total hides",
          "The question holders keep asking, answered",
        ],
        title:
          "The family is buying back stock. The pattern says more than the total.",
        image: "images/bzu/Buybacks.png",
        lead: "With net cash on the balance sheet, Buzzi can always afford a buyback. The question is whether the way it buys shows conviction about the price.",
      },
      {
        ref: "buzzi-spa-bzumi-h1-2026-results",
        layout: "split",
        inside: [
          "Why the US margin fell for different reasons in different markets",
          "Where the Texas pressure is coming from",
        ],
        side: "left",
        image: "images/bzu/hero-silo.webp", // ✎ needs a Texas image: e.g. "images/bzu/texas.webp"
        motion: "pan-right",
        title: "The US pressure is mostly in Texas.",
        lead: "In H1 2026, US net sales fell 6.9%. Competition, fuel costs and a weaker dollar, but not equally across the network.",
        more: "New supply, including imports ground in Texas, has kept prices flat there. Brazil, now fully consolidated, grew 23.8% in the same half.",
        cards: [
          { x: 24, y: 24, value: "−6.9%", label: "US net sales, H1 2026" },
          { x: 76, y: 78, value: "+23.8%", label: "Brazil net sales" },
        ],
      },
      {
        ref: "buzzi-quikrete-and-the-mississippi",
        layout: "fullbleed",
        inside: [
          "What the map misses about plants, terminals and captive demand",
          "Where Festus's river volumes could go",
        ],
        image: "images/bzu/quikrete-river.webp",
        motion: "zoom-in",
        title:
          "What happens when your biggest customer starts making its own cement?",
        lead: "Quikrete bought Summit Materials in 2025, and with it cement plants on the same river system as Festus.",
        more: "Every tonne Quikrete makes itself is a tonne it may not buy from Buzzi. The piece looks at where those river volumes could go.",
        cards: [
          {
            x: 17,
            y: 36,
            value: "~6%",
            label: "of Buzzi's US sales go to Quikrete",
          },
          {
            x: 86,
            y: 42,
            value: "2 plants",
            label: "Hannibal, MO and Davenport, IA, now Quikrete's",
          },
        ],
      },
      {
        ref: "i-mapped-the-materials-around-25",
        layout: "split",
        inside: [
          "The materials map around 25 Texas data-center sites",
          "Who actually supplies the tonnes",
        ],
        side: "right",
        image: null, // uses the article image until you add one
        motion: "zoom-in",
        title: "A data-center boom, 15 miles from a Buzzi plant.",
        lead: "Maryneal, Texas, sits next to the Abilene and Sweetwater cluster. Management ties roughly a tenth of H1 US cement volumes to data-center projects.",
        more: "I mapped the materials suppliers around 25 Texas data-center sites to see who actually gets the tonnes.",
        cards: [
          {
            x: 24,
            y: 26,
            value: "~10%",
            label: "of H1 US volumes tied to data centers",
          },
          { x: 74, y: 76, value: "25", label: "Texas sites mapped" },
        ],
      },
    ],

    // ✎ EDITORIAL — status is your judgement; current values are reported figures
    watchingReviewed: "2026-08-20",
    watching: [
      {
        label: "US pricing in Texas",
        status: "watch",
        current: "US net sales −6.9% in H1 2026",
        note: "Competition, fuel costs and a weaker dollar. The pressure is mostly in Texas, not across the network.",
      },
      {
        label: "Balance sheet behind the buyback",
        status: "ok",
        current: "Net cash €896m",
        note: "Leverage ceiling set by management: net debt / EBITDA below 1.5x.",
        range: {
          min: -1.5,
          max: 2.5,
          limit: 1.5,
          value: -0.75,
          unit: "x",
          limitLabel: "1.5x ceiling",
          valueLabel: "−0.75x (net cash / FY25 EBITDA)",
        },
      },
      {
        label: "Data-center demand at Maryneal",
        status: "ok",
        current: "~10% of H1 US cement volumes",
        note: "Management attributes roughly a tenth of US volumes to data-center projects.",
      },
      {
        label: "Quikrete making its own cement",
        status: "watch",
        current: "Open question",
        note: "If Buzzi's biggest customer self-supplies more, river volumes need a new home.",
      },
      {
        label: "FY 2026 EBITDA vs guidance",
        status: "ok",
        current: "€1.10–1.20bn guided",
        note: "FY 2025 was €1.2bn. The top of the range means a flat year.",
      },
    ],
    sources: [
      {
        label: "Buzzi — investor relations",
        url: "https://www.buzzi.com/en/investors",
      },
      {
        label: "S&P Global — H1 2026 volumes",
        url: "https://www.spglobal.com/energy/en/news-research/latest-news/metals/080526-buzzi-cement-volumes-rise-on-brazil-strength-despite-weaker-europe",
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════
     POOL — example of the pattern to follow for every company
     1. hero      → cover photo + your headline (+ optional cards)
     2. chapters  → one block per publication you want to customise.
                    ref = any piece of the article URL.
                    Only write what you want to change: anything missing
                    (title, text, image) comes from the article itself.
                    Publications without a block still appear automatically.
     Photos: put them in images/pool/ and point `image` at them.
     ✎ EDITORIAL — copy below is a first draft from your summaries.
     ═══════════════════════════════════════════════════════════ */
  FRPH: {
    chapters: [
      {
        ref: "lets-talk-about-frp-holdings",
        image: "images/frp/FRPHportada.webp",
      },
      {
        ref: "update-frp-holdings-inc-frph-fy-2025",
        image: "images/frp/FRPHfy25.webp",
      },
      {
        ref: "update-frp-holdings-inc-frph-q1-2026",
        image: "images/frp/FRPHQ1.webp",
      },
      {
        ref: "update-frp-holdings-inc-frph-q2-2026",
        image: "images/frp/FRPHQ2.webp",
      },
      // 02 · FY 2025 Results and 03 · Q1 2026 Results have no block:
      //      they appear automatically. To change only their photo:
      //      { ref: "pool-corporation-pool-fy-2025", image: "images/pool/fy2025.webp" },
    ],
  },
  RYN: {
    chapters: [
      {
        ref: "lets-talk-about-rayonier",
        image: "images/ryn/RYNtalk.webp",
      },
      {
        ref: "update-rayonier-inc-ryn-q2-2026-results",
        image: "images/ryn/RYNQ2.webp",
      },
      // 02 · FY 2025 Results and 03 · Q1 2026 Results have no block:
      //      they appear automatically. To change only their photo:
      //      { ref: "pool-corporation-pool-fy-2025", image: "images/pool/fy2025.webp" },
    ],
  },
  POOL: {
    hero: {
      image: "images/POOL.webp", // ✎ swap for images/pool/hero.webp when you have it
      title:
        "A distribution machine where most of the revenue comes back every year.",
      cards: [
        {
          x: 18,
          y: 32,
          value: "64%",
          label: "of revenue tied to mandatory maintenance",
        },
      ],
    },
    chapters: [
      {
        // 01 · Original thesis (Dec 19, 2025)
        ref: "pool-corporation-nasdaq-pool",
        layout: "split",
        side: "right",
        image: null, // ✎ e.g. "images/pool/thesis.webp" (null = thesis image)
        title:
          "Pools need chemicals and repairs whether or not anyone builds a new one.",
        lead: "A massive distribution machine where 64% of the revenue is locked in by mandatory maintenance, waiting for the construction cycle to turn.",
        inside: [
          "Why maintenance makes the revenue so resilient",
          "What has to happen for the construction cycle to turn",
          "Bear, base and bull cases",
        ],
        cards: [{ x: 74, y: 80, value: "64%", label: "maintenance revenue" }],
      },
      // 02 · FY 2025 Results and 03 · Q1 2026 Results have no block:
      //      they appear automatically. To change only their photo:
      //      { ref: "pool-corporation-pool-fy-2025", image: "images/pool/fy2025.webp" },
      {
        // 05 · FY 2026 (Oct 26, 2026)
        ref: "update-pool-corporation-pool-fy-2025",
        image: "images/pool/Poolfy25.webp", // ✎ a wide, dramatic photo works best here, e.g. "images/pool/q3-2026.webp"
      },
      {
        // 05 · FY 2026 (Oct 26, 2026)
        ref: "update-pool-corporation-pool-q1-2026",
        image: "images/pool/POOLQ1.webp", // ✎ a wide, dramatic photo works best here, e.g. "images/pool/q3-2026.webp"
      },
      {
        // 04 · Q2 2026 (Jul 30, 2026)
        ref: "update-pool-corporation-pool-q2-2026",
        layout: "split",
        side: "left",
        image: "images/pool/POOLQ2.webp", // ✎ e.g. "images/pool/q2-2026.webp"
        title: "The problem wasn't maintenance demand.",
        lead: "Q2 2026. Maintenance held up. What moved the numbers was elsewhere.",
        inside: [
          "Freight and customer mix",
          "Where POOL360 fits in",
          "What the buyback tells you",
        ],
      },
      {
        // 05 · Q3 2026 (Oct 26, 2026)
        ref: "pool-it-didnt-need-a-great-quarter",
        layout: "fullbleed",
        image: "images/pool/POOLQ3.webp", // ✎ a wide, dramatic photo works best here, e.g. "images/pool/q3-2026.webp"
        title: "It didn't need a great quarter.",
        lead: "Q3 gave investors some reasons to be less pessimistic.",
        inside: [
          "Why the quarter was enough",
          "Why I'm giving Watwood more credit",
          "How much margin POOL can still recover",
        ],
      },
    ],
  },
};

/* ═══ HOMEPAGE HERO ═══
   Full-bleed picture (or short muted video) behind the homepage headline.
   Warm, golden-hour, no text or logos. Swap freely. */
const homeHero = {
  image: "images/home-hero.webp",
  video: null, // e.g. "video/home.mp4" (5–8 s loop, muted, < 3 MB)
};

/* ═══════════════════════════════════════════════════════════
   START HERE — curated editorial entry points.
   NOT calculated by date or views. Edit this array to swap pieces.

   articleSlug     → matches a `ticker` in publishedTheses. That article
                     stays the canonical source for url, ticker, company,
                     image and publication metadata.
   displayTitle    → OPTIONAL homepage-only hook. Overrides the article
                     title on this card ONLY. Does not rename the article,
                     change its URL, its SEO metadata, or its title on the
                     company page. Omit it to fall back to the real title.
   displaySubtitle → OPTIONAL single short line under the title. Omit it
                     and no space is reserved.
   ═══════════════════════════════════════════════════════════ */
const startHere = [
  {
    articleSlug: "USLM",
    displayTitle: "A Local Monopoly Priced Like a Commodity Stock",
  },
  {
    articleSlug: "RYN",
    displayTitle: "Why I'm Paying for Trees to Get the Land for Free",
  },
  {
    articleSlug: "AMRZ",
    displayTitle:
      "A Strong Asset Network, With More to Prove in Building Envelope",
    // displaySubtitle: "optional one-liner if the title can't carry the hook alone",
  },
];

const SECTORS = [
  "All",
  "Healthcare",
  "Technology",
  "Industrials",
  "Consumer",
  "Financials",
  "REIT",
  "Materials",
  "Pharma",
  "RE Developer",
  "Consumer Staples",
];
const GEOS = ["All", "US", "Europe", "Asia", "Canada"];
const STATUSES = ["All", "active", "watching", "closed"];
const STATUS_LABELS = {
  All: "All",
  active: "Active",
  watching: "Watching",
  closed: "Closed",
};

/* ═══ SHARED HELPERS ═══ */
const fmt = (d) => {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
const daysUntil = (d) => {
  const x = Math.ceil((new Date(d) - new Date()) / 864e5);
  return x < 0 ? "Past" : x === 0 ? "Today" : x + "d";
};
const latest = (t) => {
  let d = [t.datePublished];
  if (t.updates)
    t.updates.forEach((u) => {
      if (u.date) d.push(u.date);
    });
  return d.sort((a, b) => new Date(b) - new Date(a))[0];
};
const isNew = (t) =>
  (new Date() - new Date(t.datePublished)) / 864e5 <= NEW_DAYS;
const isRecentlyIntegrated = (t) =>
  t.earningsIntegrated &&
  t.dateIntegrated &&
  (new Date() - new Date(t.dateIntegrated)) / 864e5 <= NEW_DAYS;
const sColor = (s) =>
  s === "active"
    ? "var(--s-active)"
    : s === "updated"
      ? "var(--s-updated)"
      : s === "watching"
        ? "var(--s-watching)"
        : "var(--s-closed)";
const sLabel = (s) =>
  ({
    active: "ACTIVE",
    updated: "UPDATED",
    watching: "WATCHING",
    closed: "CLOSED",
  })[s];

/* An insight can belong to several companies: relatedTicker: "BZU, AMRZ".
   Split on commas so the piece shows up on every company page it names. */
const relatesTo = (item, ticker) =>
  String(item.relatedTicker || "")
    .split(",")
    .map((s) => s.trim())
    .includes(ticker);

/* ── RESEARCH DEPTH ──
   One source of truth for both the homepage card ("Updated ...") and the
   research page ("Last activity"). Counts thesis + earnings updates +
   related insights, ignoring anything dated in the future. */
const researchItems = (t) => {
  const now = new Date();
  const out = [{ date: t.datePublished }];
  if (t.updates) t.updates.forEach((u) => u.date && out.push({ date: u.date }));
  if (typeof insights !== "undefined")
    insights
      .filter((i) => relatesTo(i, t.ticker))
      .forEach((i) => i.date && out.push({ date: i.date }));
  return out.filter((x) => new Date(x.date) <= now);
};
const publicationCount = (t) => researchItems(t).length;
const lastActivity = (t) =>
  researchItems(t).sort((a, b) => new Date(b.date) - new Date(a.date))[0]
    ?.date || t.datePublished;

/* ── POSITION HELPERS ── */
const posVisible = (t) => !!(t.position && t.position.visible);
const posLabel = (s) =>
  ({ holding: "HOLDING", watching: "WATCHING", no_position: "NO POSITION" })[s];
const posColor = (s) =>
  s === "holding"
    ? "var(--green)"
    : s === "watching"
      ? "var(--s-watching)"
      : "var(--text-fnt)";
const posMark = (s) =>
  s === "holding" ? "\u25C6" : s === "watching" ? "\u25C7" : "";
const money = (value, currency) => {
  if (value === undefined || value === null || value === "") return null;
  const n = Number(value);
  if (!isFinite(n)) return null;
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "USD",
      minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
      maximumFractionDigits: 2,
    }).format(n);
  } catch (e) {
    return (currency ? currency + " " : "") + n;
  }
};

/* CTA copy for the homepage card: "View 6 publications →" */
const publicationCta = (count) =>
  `View ${count} publication${count === 1 ? "" : "s"}`;

/* Performance vs average price. Returns null unless both prices are usable,
   so the UI can simply skip the block instead of printing NaN/Infinity. */
const positionPerformance = (averagePrice, referencePrice) => {
  if (
    typeof averagePrice !== "number" ||
    typeof referencePrice !== "number" ||
    !isFinite(averagePrice) ||
    !isFinite(referencePrice) ||
    averagePrice <= 0 ||
    referencePrice <= 0
  )
    return null;
  return (referencePrice / averagePrice - 1) * 100;
};

/* Presentation is kept separate from the calculation above. */
const formatSignedPercent = (value) => {
  if (value > 0) return `+${value.toFixed(1)}%`;
  if (value < 0) return `\u2212${Math.abs(value).toFixed(1)}%`;
  return "0.0%";
};

/* Public position data must always carry a date. Warn loudly in dev. */
publishedTheses.forEach((t) => {
  if (t.position && t.position.visible && !t.position.updatedAt)
    console.warn(
      `[colubeat] ${t.ticker}: public position information requires an updatedAt date`,
    );
});

/* ═══════════════════════════════════════════════════════════
   SITE HELPERS — clean URLs and optimised images
   ───────────────────────────────────────────────────────────
   companyUrl(t)  → /companies/buzzi-style link for a company.
                    On the live site: /companies/bzu
                    In VS Code (Live Server): /companies/bzu.html
                    The pages are generated by scripts/build.mjs.
   imgAttrs(src, sizes, maxWidth)
                  → on the live site, asks Vercel for a resized copy
                    of each image (480–2400 px wide, WebP/AVIF), so
                    a phone never downloads the 2400 px original.
                    Locally it just returns the original file.
   If an optimised copy ever fails, the page falls back to the
   original image automatically.
   ═══════════════════════════════════════════════════════════ */
const SITE_URL = "https://www.colubeat.com";
const ON_VERCEL =
  typeof location !== "undefined" &&
  /(^|\.)colubeat\.com$|\.vercel\.app$/.test(location.hostname);
const slugOf = (ticker) =>
  String(ticker)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
// Live site: /companies/bzu. Local preview (Live Server): company.html?ticker=BZU, works without running the build.
const companyUrl = (t) => {
  const tk = t && t.ticker ? t.ticker : t;
  return ON_VERCEL
    ? `/companies/${slugOf(tk)}`
    : `company.html?ticker=${encodeURIComponent(tk)}`;
};
const IMG_WIDTHS = [480, 800, 1200, 1600, 2400];
const canOptimise = (src) =>
  ON_VERCEL &&
  src &&
  !/^(https?:|data:)/.test(src) &&
  !/\.(svg|gif)$/i.test(src);
const imgUrl = (src, w) =>
  canOptimise(src)
    ? `/_vercel/image?url=${encodeURIComponent("/" + String(src).replace(/^\//, ""))}&w=${w}&q=75`
    : src;
const imgAttrs = (src, sizes = "100vw", maxWidth = 2400) => {
  if (!src) return "";
  if (!canOptimise(src)) return `src="${src}"`;
  const ws = IMG_WIDTHS.filter((w) => w <= maxWidth);
  const mid = ws[Math.min(2, ws.length - 1)];
  return `src="${imgUrl(src, mid)}" srcset="${ws.map((w) => `${imgUrl(src, w)} ${w}w`).join(", ")}" sizes="${sizes}" data-orig="${src}"`;
};
// optimised copy failed → use the original; original failed too → hide if marked data-rm
if (typeof document !== "undefined")
  document.addEventListener(
    "error",
    (e) => {
      const i = e.target;
      if (!i || i.tagName !== "IMG") return;
      if (i.dataset.orig && !i.dataset.fell) {
        i.dataset.fell = "1";
        i.removeAttribute("srcset");
        i.src = i.dataset.orig;
      } else if (i.hasAttribute("data-rm")) i.remove();
    },
    true,
  );

/* ── SEO text for each company page (used by the page AND by the build) ──
   title: ~60 characters, description: ~155. Override per company with
   companyPages.TICKER.seo = { title: "...", description: "..." } */
const clip = (s, n) => {
  s = String(s || "")
    .replace(/\s+/g, " ")
    .trim();
  return s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, "") + "…";
};
const companyMeta = (t) => {
  const page =
    (typeof companyPages !== "undefined" && companyPages[t.ticker]) || {};
  const seo = page.seo || {};
  const n = publicationCount(t);
  const hookText = (page.hero && page.hero.title) || page.hook || t.summary;
  return {
    title:
      seo.title ||
      [
        `${t.company} (${t.ticker}): thesis and updates | Colubeat`,
        `${t.company} (${t.ticker}) research | Colubeat`,
        `${t.company} (${t.ticker}) | Colubeat`,
      ].find((x) => x.length <= 60) ||
      clip(`${t.company} (${t.ticker})`, 60),
    description:
      seo.description ||
      clip(
        `${hookText} ${n} publication${n === 1 ? "" : "s"} since ${fmt(t.datePublished)}, in order.`,
        158,
      ),
    image: (page.hero && page.hero.image) || t.image,
    path: `/companies/${slugOf(t.ticker)}`,
  };
};
