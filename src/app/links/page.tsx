import type { Metadata } from "next";
import { LinksView } from "@/components/haze/links-view";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Links — Speisekarte, Instagram & Anfahrt",
  description:
    "Alle Links zu Haze & Chill in Kassel: unsere Speisekarte als PDF, Instagram und unser Eintrag auf Google Maps.",
  path: "/links",
});

export default function LinksPage() {
  return <LinksView />;
}
