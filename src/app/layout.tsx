import Script from "next/script";
import type { Metadata, Viewport } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { LanguageProvider } from "@/i18n/language-provider";
import { siteLegal } from "@/config/site-legal";
import { seoConfig } from "@/lib/seo";
import "./globals.css";



const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.baseUrl),
  title: {
    default: seoConfig.defaultTitle,
    template: seoConfig.titleTemplate,
  },
  description: seoConfig.defaultDescription,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/gallery/favicon.svg",
  },
  openGraph: {
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    url: seoConfig.baseUrl,
    siteName: seoConfig.siteName,
    locale: "de_DE",
    type: "website",
    images: [{ url: seoConfig.defaultOgImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    images: [seoConfig.defaultOgImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteLegal.tradeName,
    url: seoConfig.baseUrl,
    logo: `${seoConfig.baseUrl}/gallery/haze-chill-logo.png`,
    email: siteLegal.email,
    sameAs: ["https://www.instagram.com/haze_and_chill_cafe/"],
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: siteLegal.tradeName,
    description: seoConfig.defaultDescription,
    url: seoConfig.baseUrl,
    image: `${seoConfig.baseUrl}/gallery/haze-chill-logo.png`,
    email: siteLegal.email,
    telephone: siteLegal.phone || undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteLegal.addressLine1,
      postalCode: "34117",
      addressLocality: "Kassel",
      addressCountry: "DE",
    },
    hasMap: "https://maps.google.com/?q=K%C3%B6lnische%20Str.%2012-14%2C%2034117%20Kassel",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "17:00",
        closes: "02:00",
      },
    ],
    servesCuisine: ["Coffee", "Dessert", "Snacks"],
    priceRange: "EUR",
    sameAs: ["https://www.instagram.com/haze_and_chill_cafe/"],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoConfig.siteName,
    url: seoConfig.baseUrl,
    inLanguage: "de-DE",
  };

  return (
    <html lang="de" className="dark" suppressHydrationWarning>
      <body
        className={`${display.variable} ${sans.variable} min-h-screen font-sans`}
      >
        <Script
          id="ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="ld-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
