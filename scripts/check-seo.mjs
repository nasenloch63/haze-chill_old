import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

// Validate the exported HTML rather than the hydrated browser DOM.
const origin = "https://www.haze-chill.com";
const routes = ["/", "/speisekarte", "/faq", "/links", "/impressum", "/datenschutz"];
const htmlFor = route => readFileSync(`out/${route === "/" ? "index" : route.slice(1)}.html`, "utf8");
const decode = text => text.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const pages = new Map(routes.map(route => [route, htmlFor(route)]));
const titles = new Set();
let itemCount = 0;

for (const [route, html] of pages) {
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${route}: one H1`);
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  assert(canonical, `${route}: canonical present`);
  assert.equal(new URL(canonical).href, new URL(`${origin}${route}`).href, `${route}: canonical`);
  assert(!/<meta name="robots" content="[^"]*noindex/.test(html), `${route}: indexable`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert(title && !titles.has(title), `${route}: unique title`);
  titles.add(title);
  assert(/<meta name="description" content="[^"]+"/.test(html), `${route}: description`);
  assert(html.includes('property="og:image:width" content="1200"'), `${route}: social image`);
  const graphs = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(match => JSON.parse(match[1]));
  assert(graphs.length > 0, `${route}: structured data in raw HTML`);
  const entities = graphs.flatMap(graph => graph["@graph"] ?? [graph]);
  const business = entities.find(entity => entity["@type"] === "CafeOrCoffeeShop");
  assert(business, `${route}: business entity`);
  assert.equal(business.openingHoursSpecification[0].opens, "17:00");
  assert.equal(business.openingHoursSpecification[0].closes, "02:00");
  assert.equal(business.openingHoursSpecification[0].dayOfWeek.length, 7);
  assert.equal(business.hasMenu, `${origin}/speisekarte`);
  assert(!business.aggregateRating && !business.review, "No self-serving review schema");
  const main = html.match(/<main\b[^>]*>(.*?)<\/main>/s)?.[1] ?? "";
  const visible = decode(main.replace(/<script\b[^>]*>.*?<\/script>/gs, "").replace(/<[^>]+>/g, " "));
  if (route === "/speisekarte") {
    const menu = entities.find(entity => entity["@type"] === "Menu");
    assert(menu, "Menu entity");
    const items = menu.hasMenuSection.flatMap(section => section.hasMenuItem);
    itemCount = items.length;
    assert.equal((main.match(/<li[\s>]/g) || []).length, itemCount, "All menu items in raw HTML");
    for (const item of items) {
      assert(visible.includes(item.name), `Visible menu item: ${item.name}`);
      assert.equal(item.offers.priceCurrency, "EUR");
      assert(/^\d+\.\d{2}$/.test(item.offers.price), `Numeric price: ${item.name}`);
      assert(visible.includes(`${item.offers.price.replace(".", ",")} €`), `Visible price: ${item.name}`);
    }
  }
  if (route === "/faq") {
    const faq = entities.find(entity => entity["@type"] === "FAQPage");
    assert(faq);
    for (const item of faq.mainEntity) {
      assert(visible.includes(item.name), "Visible FAQ question");
      assert(visible.includes(item.acceptedAnswer.text), "FAQ schema matches full answer");
    }
  }
  for (const match of html.matchAll(/<a\b[^>]*href="([^"?]+)"/g)) {
    const href = decode(match[1]);
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const [target, anchor] = href.split("#");
    const targetHtml = pages.get(target || route);
    if (targetHtml) {
      if (anchor) assert(targetHtml.includes(`id="${anchor}"`), `Broken anchor: ${route} → ${href}`);
    } else {
      assert(existsSync(`out${target}`), `Broken internal link: ${route} → ${href}`);
    }
  }
}
const sitemap = readFileSync("out/sitemap.xml", "utf8");
for (const route of routes) assert(sitemap.includes(`<loc>${origin}${route}</loc>`), `Sitemap: ${route}`);
assert.equal((sitemap.match(/<loc>/g) || []).length, routes.length);
assert(readFileSync("out/robots.txt", "utf8").includes(`Sitemap: ${origin}/sitemap.xml`));
assert(existsSync("out/gallery/social-card.jpg"));
console.log(`SEO checks passed: ${routes.length} pages; ${itemCount} visible menu items with matching structured prices; canonicals, sitemap, FAQ and internal links.`);
