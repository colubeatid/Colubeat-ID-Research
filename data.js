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
      "Amrize has a strong Building Materials network and some very good local positions, but Building Envelope still needs to prove more. I like the business more than the valuation at today's price.",
    url: "https://colubeatid.substack.com/p/amrize-ltd-nyse-amrz-building-materials?r=392fuc",
    tags: ["Industrial"],
    isPaid: false,
    status: "holding",
    updates: [],
    earningsIntegrated: false,
    closedReason: null,
    position: {
      visible: true,
      status: "holding",
      currency: "USD",
      // interestedBelow: 00,   // ← add when you have a level in mind
      updatedAt: "2026-09-03",
      referencePrice: 43,
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
      "Four Million Acres at the Bottom of the Cycle. Rayonier trades at a steep discount to private timberland value, with four undervalued segments and early-stage optionality in land-based solutions like solar and carbon capture.",
    url: "https://colubeatid.substack.com/p/rayonier-inc-nyse-ryn",
    tags: ["REIT"],
    isPaid: true,
    status: "active",
    updates: [
      {
        label: "Rayonier Inc: I Gave the Buyback Too Much Credit",
        url: "https://colubeatid.substack.com/p/update-rayonier-inc-ryn-q2-2026-results?r=392fuc",
        date: "2026-08-17",
        excerpt:
          "Q2 2026. The land side still works for me, but there’s more debt and less room for buybacks than I expected.",
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
    image: "images/BZU.webp",
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
    title:
      "What Happens When Buzzi’s Biggest Customer Starts Making More of Its Own Cement?",
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
    articleSlug: "FRPH",
    displayTitle: "Why I Think the Assets Are Worth Much More Than the Stock",
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
      .filter((i) => i.relatedTicker === t.ticker)
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
