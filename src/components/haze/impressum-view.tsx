"use client";

import { useLanguage } from "@/i18n/language-provider";
import { siteLegal } from "@/config/site-legal";
import {
  LegalH1,
  LegalH2,
  LegalP,
  LegalPageShell,
  LegalUl,
  legalProseClass,
} from "@/components/haze/legal-page-shell";

function contactEmail(L: typeof siteLegal) {
  const raw = L.email.trim();
  if (raw.startsWith("[") || !raw.includes("@")) return null;
  return raw;
}

export function ImpressumView() {
  const { locale, t } = useLanguage();
  const L = siteLegal;
  const emailAddr = contactEmail(L);

  if (locale === "de") {
    return (
      <LegalPageShell backLabel={t.legal.backHome}>
        <article className={legalProseClass}>
          <LegalH1>{t.legal.impressumTitle}</LegalH1>
          <LegalP>{t.legal.impressumIntroDe}</LegalP>

          <LegalH2>Angaben gemäß § 5 TMG</LegalH2>
          <LegalP>
            <strong className="text-violet-100">{L.tradeName}</strong>
            <br />
            {L.operatorName}
            <br />
            {L.addressLine1}
            <br />
            {L.addressLine2}
            <br />
            {L.country}
          </LegalP>

          <LegalH2>Kontakt</LegalH2>
          <LegalP>
            E-Mail:{" "}
            {emailAddr ? (
              <a href={`mailto:${emailAddr}`}>{emailAddr}</a>
            ) : (
              L.email
            )}
            {L.phone ? (
              <>
                <br />
                Telefon: {L.phone}
              </>
            ) : null}
          </LegalP>

          {L.vatId ? (
            <>
              <LegalH2>Umsatzsteuer</LegalH2>
              <LegalP>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz: {L.vatId}
              </LegalP>
            </>
          ) : null}

          {L.registerNote ? (
            <>
              <LegalH2>Registereintrag</LegalH2>
              <LegalP>{L.registerNote}</LegalP>
            </>
          ) : null}

          <LegalH2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</LegalH2>
          <LegalP>
            {L.operatorName}
            <br />
            {L.addressLine1}, {L.addressLine2}
          </LegalP>

          <LegalH2>EU-Streitschlichtung</LegalH2>
          <LegalP>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </LegalP>

          <LegalH2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</LegalH2>
          <LegalP>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </LegalP>

          <LegalH2>Haftung für Inhalte</LegalH2>
          <LegalP>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </LegalP>
          <LegalP>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </LegalP>

          <LegalH2>Haftung für Links</LegalH2>
          <LegalP>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar.
          </LegalP>
          <LegalP>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne
            konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
            Bekanntwerden von Rechtsverletzungen werden wir derartige Links
            umgehend entfernen.
          </LegalP>

          <LegalH2>Urheberrecht</LegalH2>
          <LegalP>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
          </LegalP>
          <LegalP>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </LegalP>
        </article>
      </LegalPageShell>
    );
  }

  return (
    <LegalPageShell backLabel={t.legal.backHome}>
      <article className={legalProseClass}>
        <LegalH1>{t.legal.impressumTitleEn}</LegalH1>
        <LegalP>{t.legal.impressumIntroEn}</LegalP>

        <LegalH2>{t.legal.impressumServiceProvider}</LegalH2>
        <LegalP>
          <strong className="text-violet-100">{L.tradeName}</strong>
          <br />
          {L.operatorName}
          <br />
          {L.addressLine1}
          <br />
          {L.addressLine2}
          <br />
          {L.country}
        </LegalP>

        <LegalH2>{t.legal.impressumContact}</LegalH2>
        <LegalP>
          Email:{" "}
          {emailAddr ? (
            <a href={`mailto:${emailAddr}`}>{emailAddr}</a>
          ) : (
            L.email
          )}
          {L.phone ? (
            <>
              <br />
              Phone: {L.phone}
            </>
          ) : null}
        </LegalP>

        {L.vatId ? (
          <>
            <LegalH2>{t.legal.impressumVat}</LegalH2>
            <LegalP>{L.vatId}</LegalP>
          </>
        ) : null}

        {L.registerNote ? (
          <>
            <LegalH2>{t.legal.impressumRegister}</LegalH2>
            <LegalP>{L.registerNote}</LegalP>
          </>
        ) : null}

        <LegalH2>{t.legal.impressumLiabilityContent}</LegalH2>
        <LegalP>{t.legal.impressumLiabilityContentBody}</LegalP>

        <LegalH2>{t.legal.impressumLiabilityLinks}</LegalH2>
        <LegalP>{t.legal.impressumLiabilityLinksBody}</LegalP>

        <LegalH2>{t.legal.impressumCopyright}</LegalH2>
        <LegalP>{t.legal.impressumCopyrightBody}</LegalP>

        <LegalH2>{t.legal.impressumEuOdr}</LegalH2>
        <LegalP>
          {t.legal.impressumEuOdrBody}{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
        </LegalP>

        <LegalH2>{t.legal.impressumDispute}</LegalH2>
        <LegalP>{t.legal.impressumDisputeBody}</LegalP>

        <LegalUl>
          <li>{t.legal.impressumNoteEn}</li>
        </LegalUl>
      </article>
    </LegalPageShell>
  );
}
