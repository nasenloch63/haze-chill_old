import Script from "next/script";
import type { Metadata } from "next";
import { SiteNavbar } from "@/components/haze/site-navbar";
import { HeroSection } from "@/components/haze/hero-section";
import { MenuSection } from "@/components/MenuSection";
import { LocalSeoSections } from "@/components/haze/local-seo-sections";
import { ArtOfChillGallery } from "@/components/haze/art-gallery";
import { LoungeExperience } from "@/components/haze/lounge-experience";
import { GoogleReviewsWall } from "@/components/haze/google-reviews-wall";
import { LocationHours } from "@/components/haze/location-hours";
import { SiteFooter } from "@/components/haze/site-footer";
import { buildPageMetadata, seoConfig } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Café, Coffeeshop und Lounge in Kassel",
  description:
    "Coffee Shop und gemütliches Café in Kassel: Specialty Coffee, Cocktails, Desserts, Gaming Lounge, Terrasse. Konsum vor Ort mit eigenem Material — kein Cannabisverkauf. Spät offen, zentral in der Innenstadt.",
  path: "/",
});

export default function Home() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Haze and Chill - Café, Coffeeshop und Lounge in Kassel",
    url: `${seoConfig.baseUrl}/`,
    description:
      "Café und Coffee Shop in Kassel: Lounge, Gaming, Terrasse, Konsum vor Ort mit eigenem Material — kein Verkauf von Cannabis. Late night café Kassel.",
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
        id="ld-webpage-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <SiteNavbar />
      <main>
        <HeroSection />
        <LocalSeoSections />
        <MenuSection />
        <ArtOfChillGallery />
        <LoungeExperience />
        <GoogleReviewsWall />
        <LocationHours />
      </main>
      <SiteFooter />
    </>
  );
}
