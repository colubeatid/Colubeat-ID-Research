// Colubeat static build: run on every Vercel deploy (see vercel.json).
// Creates companies/<slug>.html (one per thesis, with its own title, description,
// canonical, social tags and readable fallback text) plus sitemap.xml.
// Local test: node scripts/build.mjs
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const read = (f) => fs.readFileSync(path.join(root, f), "utf8");

const ctx = { console, URLSearchParams };
vm.createContext(ctx);
vm.runInContext(
  read("data.js") +
    "\n;globalThis.__d = { publishedTheses, companyMeta, slugOf, SITE_URL, insights: typeof insights !== 'undefined' ? insights : [], relatesTo, companyPages: typeof companyPages !== 'undefined' ? companyPages : {} };",
  ctx
);
const { publishedTheses, companyMeta, slugOf, SITE_URL, insights, relatesTo, companyPages } = ctx.__d;

// Every published piece about one company, oldest first (future-dated items skipped).
const publications = (t) => {
  const now = new Date();
  const list = [{ title: `${t.company}: original thesis`, url: t.url, date: t.datePublished }];
  (t.updates || []).forEach((u) => list.push({ title: u.label, url: u.url, date: u.date }));
  insights.filter((i) => relatesTo(i, t.ticker)).forEach((i) => list.push({ title: i.title, url: i.url, date: i.date }));
  return list.filter((x) => x.date && new Date(x.date) <= now).sort((a, b) => new Date(a.date) - new Date(b.date));
};

const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const abs = (u) => (!u ? "" : /^https?:/.test(u) ? u : SITE_URL + "/" + String(u).replace(/^\//, ""));
const iso = (d) => { const x = new Date(d); return isNaN(x) ? null : x.toISOString().slice(0, 10); };

const template = read("company.html");
const outDir = path.join(root, "companies");
fs.mkdirSync(outDir, { recursive: true });
for (const f of fs.readdirSync(outDir)) if (f.endsWith(".html")) fs.unlinkSync(path.join(outDir, f));

const urls = [{ loc: SITE_URL + "/", lastmod: null }];

for (const t of publishedTheses) {
  const m = companyMeta(t);
  const url = SITE_URL + m.path;
  const img = abs(m.image);
  const items = publications(t);
  const dates = [t.datePublished, t.lastActivity, ...items.map((i) => i.date)].map(iso).filter(Boolean).sort();
  const lastmod = dates[dates.length - 1] || null;

  const ld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: m.title,
    description: m.description,
    url,
    ...(img && { image: img }),
    ...(lastmod && { dateModified: lastmod }),
    ...(iso(t.datePublished) && { datePublished: iso(t.datePublished) }),
    about: { "@type": "Corporation", name: t.company, tickerSymbol: t.ticker },
    publisher: { "@type": "Organization", name: "Colubeat", url: SITE_URL },
    ...(items.length && {
      mainEntity: {
        "@type": "ItemList",
        itemListElement: items.filter((i) => i.url).map((i, k) => ({
          "@type": "ListItem", position: k + 1, url: i.url, name: i.title,
        })),
      },
    }),
  };

  const head = `
  <title>${esc(m.title)}</title>
  <meta name="description" content="${esc(m.description)}" />
  <link rel="canonical" href="${url}" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Colubeat" />
  <meta property="og:title" content="${esc(m.title)}" />
  <meta property="og:description" content="${esc(m.description)}" />
  <meta property="og:url" content="${url}" />
  ${img ? `<meta property="og:image" content="${esc(img)}" />` : ""}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@colubeatid" />
  <meta name="twitter:title" content="${esc(m.title)}" />
  <meta name="twitter:description" content="${esc(m.description)}" />
  ${img ? `<meta name="twitter:image" content="${esc(img)}" />` : ""}
  <script type="application/ld+json">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>
  <script>window.__TICKER = ${JSON.stringify(t.ticker)};</script>`;

  // Readable text for crawlers and no-JS visitors; the app replaces it on load.
  const about = (companyPages[t.ticker] || {}).about;
  const aboutHtml = about && !/^\s*lorem ipsum/i.test(about) ? `<p>${esc(about)}</p>` : "";
  const fallback = `
      <article class="seo-fallback">
        <h1>${esc(t.company)} (${esc(t.ticker)})</h1>
        <p>${esc(m.description)}</p>
        ${aboutHtml}
        ${items.length ? `<ol>${items.map((i) => `<li>${i.url ? `<a href="${esc(i.url)}">${esc(i.title)}</a>` : esc(i.title)}${iso(i.date) ? ` · <time datetime="${iso(i.date)}">${iso(i.date)}</time>` : ""}</li>`).join("")}</ol>` : ""}
        <p><a href="/">Colubeat home</a></p>
      </article>`;

  let html = template
    .replace(/<title>[\s\S]*?<\/title>\s*/, "")
    .replace(/<meta\s+name="description"[^>]*>\s*/, "")
    .replace(/<meta\s+name="robots"[^>]*>\s*/, "")
    // pages live in /companies/, so <base> makes images/, data.js… resolve from the site root
    .replace(/(<meta\s+name="viewport"[^>]*>)/, (v) => v + '\n  <base href="/">' + head);
  if (!html.includes("window.__TICKER")) throw new Error("company.html: viewport <meta> not found");
  const appRe = /(<(\w+)[^>]*\bid="app"[^>]*>)/;
  if (appRe.test(html)) html = html.replace(appRe, `$1${fallback}`);
  else console.warn("No #app container found, fallback text skipped for", t.ticker);

  fs.writeFileSync(path.join(outDir, `${slugOf(t.ticker)}.html`), html);
  urls.push({ loc: url, lastmod });
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}</url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);
console.log(`Built ${urls.length - 1} company pages + sitemap.xml`);
