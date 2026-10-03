import type { Metadata } from "next";

export const seoConfig = {
  baseUrl: "https://www.haze-chill.com",
  siteName: "Haze and Chill",
  defaultTitle: "Haze and Chill – Café & Lounge in Kassel",
  titleTemplate: "%s | Haze and Chill Kassel",
  defaultDescription:
    "Café und Lounge in der Kölnischen Str. 12–14 in Kassel. Kaffee, Cocktails, Snacks und Desserts. Täglich 17–02 Uhr (bis Ende). Speisekarte und Anfahrt.",
  defaultOgImage: "/gallery/social-card.jpg",
  instagramUrl: "https://www.instagram.com/haze_and_chill_cafe/",
  mapsUrl: "https://maps.app.goo.gl/gEjB6Sn8PR39p6YH7",
} as const;

export const businessId = `${seoConfig.baseUrl}/#business`;
export const websiteId = `${seoConfig.baseUrl}/#website`;

export function buildPageMetadata({ title, description, path = "/" }: {
  title: string; description: string; path?: string;
}): Metadata {
  const canonical = new URL(path, seoConfig.baseUrl).toString();
  const fullTitle = path === "/" ? seoConfig.defaultTitle : `${title} | Haze and Chill Kassel`;
  return {
    title: { absolute: fullTitle }, description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle, description, url: canonical,
      siteName: seoConfig.siteName, locale: "de_DE", type: "website",
      images: [{ url: new URL(seoConfig.defaultOgImage, seoConfig.baseUrl).toString(),
        width: 1200, height: 630, alt: "Haze and Chill – Café und Lounge in Kassel" }],
    },
    twitter: {
      card: "summary_large_image", title: fullTitle, description,
      images: [new URL(seoConfig.defaultOgImage, seoConfig.baseUrl).toString()],
    },
  };
}
