"use client";

import { useLanguage } from "@/i18n/language-provider";

const MAP_EMBED =
  "https://www.google.com/maps?q=Haze+and+Chill+Kassel&output=embed";

export function LocationHours() {
  const { t } = useLanguage();

  return (
    <section
      id="location"
      className="border-t border-white/5 bg-[#0a0a0a] py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            {t.location.title}
          </h2>
          <p className="mt-3 text-violet-200/65">{t.location.intro}</p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-emerald-500/20 bg-white/[0.03] backdrop-blur-md">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-violet-950/40">
                  <th className="px-4 py-3 font-display font-semibold tracking-wide text-emerald-300">
                    {t.location.colDay}
                  </th>
                  <th className="px-4 py-3 font-display font-semibold tracking-wide text-emerald-300">
                    {t.location.colHours}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.location.rows.map((row) => (
                  <tr
                    key={row.day}
                    className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]"
                  >
                    <td className="px-4 py-3.5 text-violet-100/90">{row.day}</td>
                    <td className="px-4 py-3.5 font-medium text-emerald-200/90 tabular-nums">
                      {row.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex min-h-[320px] flex-col">
          <h3 className="sr-only">{t.location.mapTitle}</h3>
          <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_0_40px_rgba(109,40,217,0.15)]">
            <iframe
              title={t.location.mapIframeTitle}
              src={MAP_EMBED}
              className="absolute inset-0 h-full min-h-[320px] w-full border-0 grayscale-[20%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
