import type { Metadata } from "next";

export const seoConfig = {
  baseUrl: "https://haze-chill.com",
  siteName: "Haze and Chill",
  defaultTitle: "Haze and Chill | Café, Coffeeshop und Lounge in Kassel",
  titleTemplate: "%s | Haze and Chill Kassel",
  defaultDescription:
    "Haze and Chill: Café, Coffeeshop und Lounge in Kassel — Specialty Coffee, Kaffee, Cocktails, Desserts, Gaming Lounge, Terrasse. Konsum vor Ort mit eigenem Material (bring your own), kein Cannabisverkauf. Spät geöffnet — late night café Kassel.",
  defaultOgImage: "/gallery/haze-chill-logo.png",
  /**
   * Ziel-Phrasen für lokales SEO — im sichtbaren Text (Hero, About, FAQ, Lounge)
   * und Meta-Beschreibungen verwenden, nicht nur hier ablegen.
   * Bewusst ohne Kauf-/Rezept-Bait: ihr verkauft kein Cannabis.
   */
  localPhrases: [
    "coffeeshop kassel",
    "coffee kassel",
    "café kassel",
    "coffee shop kassel",
    "specialty coffee kassel",
    "lounge kassel",
    "gaming lounge kassel",
    "late night café kassel",
    "cocktails kassel",
    "desserts kassel",
    "kaffee kassel",
    "gemütliches café kassel",
    "instagrammable café kassel",
    "cannabis lounge kassel",
    "konsum vor ort kassel",
    "bring your own coffeeshop",
    "eigenes cannabis mitbringen",
    "kiffen in der lounge kassel",
    "raucherlounge kassel",
    "smoking lounge kassel",
    "kein cannabisverkauf kassel",
    "coffeeshop ohne verkauf",
  ],
} as const;

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function buildPageMetadata({
  title,
  description,
  path = "/",
}: MetadataInput): Metadata {
  const canonical = new URL(path, seoConfig.baseUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: seoConfig.siteName,
      locale: "de_DE",
      type: "website",
      images: [
        {
          url: new URL(seoConfig.defaultOgImage, seoConfig.baseUrl).toString(),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL(seoConfig.defaultOgImage, seoConfig.baseUrl).toString()],
    },
  };
}
