import type { Metadata } from "next";
import { SiteNavbar } from "@/components/haze/site-navbar";
import { SiteFooter } from "@/components/haze/site-footer";
import { DatenschutzView } from "@/components/haze/datenschutz-view";
import { buildPageMetadata } from "@/lib/seo";



export const metadata: Metadata = buildPageMetadata({
  title: "Datenschutzerklaerung",
  description:
    "Datenschutzerklaerung von Haze and Chill in Kassel zur Verarbeitung personenbezogener Daten auf dieser Website.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <>
      <SiteNavbar />
      <main className="min-h-[55vh] border-t border-white/5 bg-[#08060a] pb-20 pt-6 sm:pb-28 sm:pt-10">
        <DatenschutzView />
      </main>
      <SiteFooter />
    </>
  );
}
