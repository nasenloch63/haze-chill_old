import Link from "next/link";
import type { Metadata } from "next";
import { SiteNavbar } from "@/components/haze/site-navbar";
import { SiteFooter } from "@/components/haze/site-footer";
import { PageStructuredData } from "@/components/haze/structured-data";
import { menuData } from "@/data/menu-data";
import { businessId, buildPageMetadata, seoConfig } from "@/lib/seo";

const description = "Die Speisekarte von Haze and Chill in Kassel: Kaffee, Cocktails, Shakes, Snacks und Desserts mit allen Preisen. Auch als PDF verfügbar.";
export const metadata: Metadata = buildPageMetadata({ title: "Speisekarte & Preise", description, path: "/speisekarte" });
const menuUrl = `${seoConfig.baseUrl}/speisekarte`;
const categoryId = (index: number) => `kategorie-${index + 1}`;

const menuSchema = {
  "@type": "Menu", "@id": `${menuUrl}#menu`,
  name: "Speisekarte Haze and Chill", url: menuUrl, inLanguage: "de-DE",
  hasMenuSection: menuData.map((category, index) => ({
    "@type": "MenuSection", name: category.category,
    "@id": `${menuUrl}#${categoryId(index)}`,
    ...(category.notes ? { description: category.notes } : {}),
    hasMenuItem: category.items.map(item => ({
      "@type": "MenuItem", name: item.name,
      ...(item.description ? { description: item.description } : {}),
      offers: { "@type": "Offer", priceCurrency: "EUR",
        price: item.price.replace(" €", "").replace(",", "."),
        seller: { "@id": businessId } },
    })),
  })),
};

export default function MenuPage() {
  return <>
    <PageStructuredData name="Speisekarte & Preise" path="/speisekarte" description={description} entities={[menuSchema, {
      "@type": "WebPage", "@id": `${menuUrl}#page`, mainEntity: { "@id": `${menuUrl}#menu` },
    }]} />
    <SiteNavbar />
    <main lang="de" className="bg-[#090909] px-4 py-12 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <nav aria-label="Brotkrümelnavigation" className="text-sm text-violet-200/70">
          <Link href="/" className="hover:text-emerald-300">Haze and Chill</Link>
          <span aria-hidden className="mx-2">/</span><span>Speisekarte</span>
        </nav>
        <header className="mt-8 max-w-3xl">
          <p className="text-sm font-medium text-emerald-300">Haze and Chill · Kassel</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">Speisekarte & Preise</h1>
          <p className="mt-4 leading-relaxed text-violet-100/80">Kaffee, Cocktails, Snacks und Desserts in der Kölnischen Str. 12-14, 34117 Kassel. Wir sind täglich von 17:00 bis 02:00 Uhr (bis Ende) für dich da.</p>
          <a href="/speisekarte.pdf" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-5 py-2 text-sm text-emerald-200 hover:bg-emerald-500/20">Original-Speisekarte als PDF<span className="sr-only"> (öffnet in einem neuen Tab)</span></a>
          <p className="mt-4 text-sm text-violet-200/60">Alle Preise in Euro. Die Zahlen in eckigen Klammern sind Kennzeichnungen aus der Originalkarte; die Legende zu Allergenen und Zusatzstoffen findest du im PDF. Bei Fragen hilft dir unser Team vor Ort.</p>
        </header>
        <nav aria-label="Kategorien der Speisekarte" className="mt-10 flex flex-wrap gap-2">
          {menuData.map((category, index) => <a key={category.category} href={`#${categoryId(index)}`} className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-4 py-2 text-sm text-violet-100 hover:border-emerald-400/40 hover:text-emerald-200">{category.category}</a>)}
        </nav>
        <div className="mt-12 grid items-start gap-6 md:grid-cols-2">
          {menuData.map((category, index) => <section key={category.category} id={categoryId(index)} aria-labelledby={`${categoryId(index)}-heading`} className="scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <h2 id={`${categoryId(index)}-heading`} className="font-display text-2xl font-semibold text-emerald-200">{category.category}</h2>
            {category.notes ? <p className="mt-3 text-sm text-violet-100/70">{category.notes}</p> : null}
            <ul className="mt-4">
              {category.items.map(item => <li key={item.name} className="flex items-baseline justify-between gap-4 border-b border-white/5 py-3 last:border-0">
                <div className="min-w-0"><h3 className="font-medium text-white">{item.name}</h3>{item.description ? <p className="mt-1 text-sm text-violet-200/60">{item.description}</p> : null}</div>
                <span className="shrink-0 font-semibold tabular-nums text-emerald-300">{item.price}</span>
              </li>)}
            </ul>
          </section>)}
        </div>
        <p className="mt-10 text-sm text-violet-200/70">Noch Fragen? <Link href="/faq" className="text-emerald-300 underline underline-offset-4">Antworten zum Besuch</Link> · <Link href="/#location" className="text-emerald-300 underline underline-offset-4">Öffnungszeiten und Anfahrt</Link></p>
      </div>
    </main>
    <SiteFooter />
  </>;
}
