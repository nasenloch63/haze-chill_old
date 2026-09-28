import Script from "next/script";
import type { Metadata } from "next";
import { SiteNavbar } from "@/components/haze/site-navbar";
import { SiteFooter } from "@/components/haze/site-footer";
import { FaqSection } from "@/components/haze/faq-section";
import { faqItems } from "@/data/faq-items";
import { buildPageMetadata, seoConfig } from "@/lib/seo";



const faqPageDescription =
  "FAQ Haze and Chill Kassel: Café, Coffeeshop-Lounge, Gaming, Terrasse, Kiffen und Konsum vor Ort mit eigenem Material — ausdrücklich kein Cannabis-, Hash- oder Weed-Verkauf, kein CBD-Shop.";

export const metadata: Metadata = buildPageMetadata({
  title: "FAQ — Café und Coffeeshop in Kassel",
  description: faqPageDescription,
  path: "/faq",
});

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.schemaAnswer ?? item.answer,
      },
    })),
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FAQ — Haze and Chill Kassel",
    url: `${seoConfig.baseUrl}/faq`,
    description: faqPageDescription,
    inLanguage: "de-DE",
    isPartOf: {
      "@type": "WebSite",
      name: seoConfig.siteName,
      url: seoConfig.baseUrl,
    },
  };

  return (
    <>
      <Script
        id="ld-faq-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="ld-webpage-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <SiteNavbar />
      <main className="min-h-[55vh] border-t border-white/5 bg-[#08060a] pb-20 pt-6 sm:pb-28 sm:pt-10">
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
