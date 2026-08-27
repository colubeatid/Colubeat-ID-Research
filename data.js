/* ═══════════════════════════════════════════════════════════
   COLUBEAT — SHARED DATA FILE
   Edit this single file. Both index.html and company.html read from it.
   ═══════════════════════════════════════════════════════════ */

const SUBSTACK = "https://colubeatid.substack.com/";
const NEW_DAYS = 14;

const publishedTheses = [
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
    position: false,
    targetEntry: "??",
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
        label: "Q2 2026 Results",
        url: "https://colubeatid.substack.com/p/update-rayonier-inc-ryn-q2-2026-results?r=392fuc",
        date: "2026-08-17",
      },
    ],
    earningsIntegrated: false,
    closedReason: null,
    position: true,
    targetEntry: "??",
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
    closedReason: null,
    position: false,
    targetEntry: "??",
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
    position: false,
    targetEntry: "??",
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
    closedReason: null,
    position: false,
    targetEntry: "55",
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
    position: false,
    targetEntry: "???",
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
        label: "Q2 2026 Results",
        url: "https://colubeatid.substack.com/p/update-tic-solutions-tic-q2-2026",
        date: "2026-08-10",
      },
    ],
    earningsIntegrated: false,
    closedReason: null,
    position: true,
    targetEntry: null,
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
        label: "Q2 2026 Results",
        url: "https://colubeatid.substack.com/p/update-alexanders-alx-q2-2026?r=392fuc",
        date: "2026-08-04",
      },
    ],
    earningsIntegrated: true,
    closedReason: null,
    position: true,
    targetEntry: null,
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
        label: "H1 2026 Results",
        url: "https://colubeatid.substack.com/p/buzzi-spa-bzumi-h1-2026-results?r=392fuc",
        date: "2026-08-20",
      },
    ],
    earningsIntegrated: false,
    closedReason: null,
    position: true,
    targetEntry: null,
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
    position: false,
    targetEntry: 155,
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
    status: "active",
    updates: [
      {
        label: "FY 2025 Results",
        url: "https://colubeatid.substack.com/p/update-bunzl-plc-bnzll-fy-2025-results?r=392fuc",
        date: "2026-03-02",
      },
    ],
    earningsIntegrated: false,
    closedReason: null,
    position: true,
    targetEntry: null,
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
    closedReason: "Acquired at $19.00",
    position: false,
    targetEntry: null,
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
        label: "H1 2026 Results",
        url: "https://colubeatid.substack.com/p/update-eurofins-scientific-erf-h1?r=392fuc",
        date: "2026-07-24",
      },
    ],
    earningsIntegrated: true,
    closedReason: null,
    position: true,
    targetEntry: null,
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
        label: "Q2 2026 Results",
        url: "https://colubeatid.substack.com/p/update-pool-corporation-pool-q2-2026?r=392fuc",
        date: "2026-07-30",
      },
    ],
    earningsIntegrated: true,
    dateIntegrated: "2026-03-23",
    closedReason: null,
    position: true,
    targetEntry: null,
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
        label: "Q2 2026 Results",
        url: "https://colubeatid.substack.com/p/update-frp-holdings-inc-frph-q2-2026",
        date: "2026-08-12",
      },
    ],
    earningsIntegrated: false,
    closedReason: null,
    position: true,
    targetEntry: null,
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
    status: "active",
    updates: [],
    earningsIntegrated: false,
    closedReason: null,
    position: false,
    targetEntry: null,
  },
];

const earningsAwaiting = [];

const wipTheses = [
  {
    ticker: "???",
    sector: "Industrials",
    geo: "US",
    hint: "An industrial firm that connects traditional buried pipes with real-time cloud data analytics.",
    estimatedRelease: "Abril 2026",
    progress: 5,
  },
];

const watchlist = [
  {
    ticker: "WSO",
    sector: "Industrials",
    geo: "US",
    note: "HVAC distribution leader. Recurring revenue angle.",
  },
  {
    ticker: "SCI",
    sector: "Consumer",
    geo: "US",
    note: "Funeral & cemetery services. Demographic tailwind thesis.",
  },
  {
    ticker: "MWA",
    sector: "Industrials",
    geo: "US",
    note: "It is one of the largest manufacturers and distributors of fire hydrants, gate valves, and other water infrastructure products in North America.",
  },
  {
    ticker: "SSD",
    sector: "Industrials",
    geo: "US",
    note: "Is a leading building materials manufacturer in the United States that produces structural connectors, fasteners, anchors, and products for new construction and retrofitting.",
  },
  {
    ticker: "HLMA.L",
    sector: "Industrials",
    geo: "Europe",
    note: "UK tech firm's provided specialized safety, environmental, and medical solutions, focusing on fire protection, monitoring, and diagnostics through its three main business segments.",
  },
];

const insights = [
  {
    title: "Buzzi, Quikrete and the Mississippi",
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
    title: "Behind the Number #04 - Negative Working Capital",
    tag: "P&L",
    issue: 4,
    date: "2026-07-09",
    excerpt:
      "The line on the balance sheet that scares off investors who never check what's underneath it",
    url: "https://colubeatid.substack.com/p/behind-the-number-04-negative-working",
    image: "images/behindthescenes.webp",
  },
  {
    title: "Behind the Number #03 - Depreciation Is a Guess",
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
      "Behind the Number #02 - Revenue went up. Did the business get better?",
    tag: "P&L",
    issue: 2,
    date: "2026-05-04",
    excerpt:
      "A framework to help you distinguish between real scaling and capital-intensive replication using three functional tests.",
    url: "https://colubeatid.substack.com/p/behind-the-number-02-revenue-went",
    image: "images/behindthescenes.webp",
  },
  {
    title: "Behind the Number #01 - Not All Revenue Is Created Equal",
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
