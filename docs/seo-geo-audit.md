# SEO und Auffindbarkeit in KI-Suchen

Stand: 4. Oktober 2026. Produktionsdomain: https://www.haze-chill.com

## Umgesetzt

- Canonicals, Open Graph, Sitemap und Unternehmensdaten verwenden die tatsächlich ausgelieferte www-Domain.
- Jede Seite hat einen eigenen Titel und eine Beschreibung; Social Cards verwenden ein lesbares Bild mit 1200 × 630 Pixeln.
- Unternehmensdaten stehen als JSON-LD im initialen HTML. CafeOrCoffeeShop, WebSite und WebPage verweisen über stabile IDs aufeinander. Adresse, Instagram, tatsächlicher Maps-Eintrag und tägliche Zeiten 17:00–02:00 entsprechen den sichtbaren Angaben.
- `/speisekarte` enthält alle 85 Positionen aus derselben Datenquelle wie die Kategorien auf der Startseite. Texte und Preise stehen ohne JavaScript im HTML; Menu / MenuSection / MenuItem / Offer beschreiben denselben Inhalt. Original-PDF und Allergenhinweis bleiben verlinkt.
- Interne Links führen von Startseite, Menübereich, FAQ und Footer zur vollständigen Karte. Hero-Links funktionieren auch ohne JavaScript. Menüseite und FAQ haben Breadcrumb-Daten.
- Überladene Keyword-Texte und wiederholte Cannabis-/Rezeptfragen wurden durch kurze, konkrete Antworten zu Standort, Zeiten, Angebot und Preisen ersetzt. Keine unbelegten Specialty-Coffee-Aussagen.
- Die sechs eingebundenen Galeriebilder verwenden WebP mit maximal 1200 Pixeln Breite: zusammen 462.234 statt 24.351.192 Bytes (98,1 % weniger). Originaldateien bleiben erhalten.
- Google-Zitate bleiben sichtbare Originalzitate mit Quellenlink. Keine selbstbezogenen Bewertungssterne im Schema.
- Robots und Sitemap erlauben die Erfassung der öffentlichen Inhalte. Lastmod-Daten entsprechen tatsächlichen Inhaltsänderungen; unveränderte Rechtstexte erhalten kein künstlich neues Datum.

## Prüfung

`node scripts/check-seo.mjs` prüft nach `next build` die exportierten HTML-Dateien: Canonicals, eindeutige Titel, Beschreibungen, H1, JSON-LD, alle Menüpositionen mit passenden Preisen, FAQ-Antworten, interne Links, Sitemap und Robots. Zusätzlich TypeScript, ESLint und Browserkontrolle auf Desktop und Mobilgerät.

Die Dateireduktion ist gemessen; sie ist keine Messung realer Core Web Vitals. Rankings und Erwähnungen in KI-Antworten lassen sich aus einem Build nicht bestätigen.

## Betrieb und weitere Maßnahmen

1. In der Google Search Console die Domain verifizieren, `/sitemap.xml` einreichen und Startseite, Speisekarte sowie FAQ über die URL-Prüfung prüfen. Dazu braucht es den Zugriff auf die zugehörige Property. Anschließend Indexierung, Suchanfragen und Core Web Vitals beobachten.
2. Im Google-Unternehmensprofil Name, Adresse, Website, Menülink und Öffnungszeiten mit der Website abgleichen; neue Karte und aktuelle Fotos hinterlegen. Profiländerungen wurden in diesem Auftrag nicht vorgenommen.
3. Bei Preisänderungen `src/data/menu-data.ts` und das Original-PDF gemeinsam aktualisieren; FAQ-Preisantworten und Sitemap-Lastmod ebenfalls anpassen.
4. Englisch wird derzeit per Sprachschalter auf denselben URLs angezeigt. Keine erfundenen hreflang-Verweise. Wenn englische Suchergebnisse gezielt wichtig werden, echte englische URLs mit vollständig übersetzten Inhalten einführen.
5. Eine Telefonnummer nur ergänzen, sobald eine bestätigte öffentliche Nummer vorliegt.

## Grundlagen

- [Google: KI-Funktionen und Websites](https://developers.google.com/search/docs/appearance/ai-features): crawlbare Texte, interne Links, passende strukturierte Daten und aktuelle Unternehmensangaben; keine zusätzlichen KI-Dateien oder speziellen Schema-Typen nötig.
- [Google: LocalBusiness](https://developers.google.com/search/docs/appearance/structured-data/local-business): strukturierte Daten müssen das sichtbare Unternehmen beschreiben. Eigene Bewertungen sind nicht für selbstbezogene Bewertungs-Rich-Results gedacht.
- [Google: Canonicals](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) und [Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap): konsistente bevorzugte URLs und wahrheitsgemäße Änderungsdaten.

FAQ- und Menü-Markup beschreibt den Inhalt. Es ist keine Zusage von Google-Rich-Results. GEO baut hier auf nachvollziehbaren, direkt auslesbaren Fakten auf; es garantiert keine Nennung in einem bestimmten KI-System.
