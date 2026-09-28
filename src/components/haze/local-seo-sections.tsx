import Link from "next/link";

export function LocalSeoSections() {
  return (
    <section id="about" className="border-t border-white/5 bg-[#090909] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Haze and Chill: Café, Coffeeshop und Lounge in Kassel
          </h2>
          <p className="mt-4 text-violet-100/80">
            In Kassel verbinden wir Coffeeshop-Qualität mit Lounge-Atmosphäre:
            Specialty Coffee und Kaffee, dazu Cocktails, Desserts und Snacks.
            Dazu kommt unser Konzept: Konsum vor Ort mit eigenem Material (bring
            your own) in den vorgesehenen Bereichen — ohne Verkauf von Cannabis,
            Hasch, Gras oder CBD durch uns. Der Ort wirkt wie ein instagrammable
            Café — Neon, Street Art, klare Bilder.
          </p>
        </header>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-display text-xl font-semibold text-emerald-200">
              Drinks, Coffee und Menu
            </h3>
            <p className="mt-3 text-violet-100/80">
              Von Espresso bis Longdrink: Kaffeespezialitäten, Mocktails und
              Cocktails — plus Desserts und Snacks für den Abend in unserem
              Coffee Shop in Kassel.
            </p>
            <p className="mt-3 text-sm text-violet-300/80">
              Direkt zum{" "}
              <Link
                href="/#menu"
                className="text-emerald-300 underline-offset-4 hover:underline"
              >
                Menu mit Preisen
              </Link>
              .
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-display text-xl font-semibold text-emerald-200">
              Gaming Lounge und Terrasse in Kassel
            </h3>
            <p className="mt-3 text-violet-100/80">
              Gaming Lounge und Terrasse: Konsole, Couch, frische Luft. Abends
              länger offen als viele klassische Cafés — ideal als Lounge in
              Kassel für Freunde, Date oder After-Work; dazu entspannter
              Smoking-Lounge-Charakter mit eigenem Material, nicht als Verkaufsort.
            </p>
            <p className="mt-3 text-sm text-violet-300/80">
              Mehr unter{" "}
              <Link
                href="/#lounge"
                className="text-emerald-300 underline-offset-4 hover:underline"
              >
                Lounge & Terrasse
              </Link>
              .
            </p>
          </article>
        </div>

        <article
          id="contact"
          className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-950/10 p-6"
        >
          <h3 className="font-display text-xl font-semibold text-white">
            Standort, Öffnungszeiten und Anfahrt in Kassel
          </h3>
          <p className="mt-3 text-violet-50/90">
            Haze and Chill findest du in der Kölnischen Str. 12-14, 34117
            Kassel — zentral, wenn du nach einem Café, einer Coffeeshop-Lounge
            oder einem late night Spot nahe der Innenstadt suchst. Fragen zu
            Konsum vor Ort und Hausregeln beantworten wir gern unter{" "}
            <Link
              href="/faq"
              className="text-emerald-300 underline-offset-4 hover:underline"
            >
              FAQ
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link
              href="/#location"
              className="rounded-lg border border-white/15 px-3 py-2 text-violet-100 hover:border-emerald-400/40 hover:text-emerald-200"
            >
              Zu Standort & Zeiten
            </Link>
            <a
              href="https://maps.google.com/?q=K%C3%B6lnische%20Str.%2012-14%2C%2034117%20Kassel"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/15 px-3 py-2 text-violet-100 hover:border-emerald-400/40 hover:text-emerald-200"
            >
              Route in Google Maps
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
