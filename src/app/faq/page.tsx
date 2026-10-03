import type { Metadata } from "next";
import { SiteNavbar } from "@/components/haze/site-navbar";
import { SiteFooter } from "@/components/haze/site-footer";
import { FaqSection } from "@/components/haze/faq-section";
import { PageStructuredData } from "@/components/haze/structured-data";
import { faqItems } from "@/data/faq-items";
import { buildPageMetadata, seoConfig } from "@/lib/seo";

const description = "Antworten zu Haze and Chill in Kassel: Adresse, tägliche Öffnungszeiten, Speisekarte, Preise, Terrasse und Gaming Lounge.";
export const metadata: Metadata = buildPageMetadata({ title: "Häufige Fragen", description, path: "/faq" });

export default function FaqPage() {
  return <>
    <PageStructuredData name="Häufige Fragen" path="/faq" description={description} entities={[{
      "@type": "FAQPage", "@id": `${seoConfig.baseUrl}/faq#page`,
      mainEntity: faqItems.map(item => ({ "@type": "Question", name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer } })),
    }]} />
    <SiteNavbar />
    <main className="min-h-[55vh] border-t border-white/5 bg-[#08060a] pb-20 pt-6 sm:pb-28 sm:pt-10"><FaqSection /></main>
    <SiteFooter />
  </>;
}
