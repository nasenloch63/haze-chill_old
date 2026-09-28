import type { Metadata } from "next";
import { SiteNavbar } from "@/components/haze/site-navbar";
import { SiteFooter } from "@/components/haze/site-footer";
import { ImpressumView } from "@/components/haze/impressum-view";
import { buildPageMetadata } from "@/lib/seo";



export const metadata: Metadata = buildPageMetadata({
  title: "Impressum und Kontakt in Kassel",
  description:
    "Impressum von Haze and Chill in Kassel mit Anbieter- und Kontaktangaben gemaess den rechtlichen Vorgaben.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <>
      <SiteNavbar />
      <main className="min-h-[55vh] border-t border-white/5 bg-[#08060a] pb-20 pt-6 sm:pb-28 sm:pt-10">
        <ImpressumView />
      </main>
      <SiteFooter />
    </>
  );
}
