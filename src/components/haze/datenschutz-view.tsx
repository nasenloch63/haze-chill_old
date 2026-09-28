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

const INSTAGRAM_URL = "https://www.instagram.com/haze_and_chill_cafe/";

export function DatenschutzView() {
  const { locale, t } = useLanguage();
  const L = siteLegal;
  const phone = L.phone?.trim() ? L.phone : null;
  const emailAddr = (() => {
    const raw = L.email.trim();
    if (raw.startsWith("[") || !raw.includes("@")) return null;
    return raw;
  })();

  if (locale === "de") {
    return (
      <LegalPageShell backLabel={t.legal.backHome}>
        <article className={legalProseClass}>
          <LegalH1>{t.legal.privacyTitle}</LegalH1>

          <LegalH2>Datenschutzerklärung</LegalH2>

          <LegalH2>1. Verantwortlicher</LegalH2>
          <LegalP>
            Verantwortlich für die Datenverarbeitung auf dieser Webseite ist:
            <br />
            <strong className="text-violet-100">{L.operatorName}</strong>
            <br />
            {L.addressLine1}
            <br />
            {L.addressLine2}
            <br />
            E-Mail:{" "}
            {emailAddr ? (
              <a href={`mailto:${emailAddr}`}>{emailAddr}</a>
            ) : (
              L.email
            )}
            {phone ? (
              <>
                <br />
                Telefon: {phone}
              </>
            ) : null}
          </LegalP>

          <LegalH2>2. Hosting</LegalH2>
          <LegalP>
            Diese Webseite wird gehostet bei:
            <br />
            <strong className="text-violet-200">Hetzner Online GmbH</strong>
            <br />
            Industriestr. 25
            <br />
            91710 Gunzenhausen
            <br />
            Deutschland
            <br />
            <br />
            Der Server befindet sich in Nürnberg, Deutschland. Hetzner verarbeitet
            beim Aufruf der Webseite automatisch folgende Server-Log-Daten:
            <br />
            <br />
            IP-Adresse des zugreifenden Geräts (anonymisiert)
            <br />
            Datum und Uhrzeit des Zugriffs
            <br />
            Aufgerufene URL
            <br />
            Browsertyp und Betriebssystem
            <br />
            Referrer URL (zuvor besuchte Webseite)
            <br />
            <br />
            Diese Daten werden ausschließlich zur technischen Bereitstellung der
            Webseite verarbeitet und nicht mit anderen Datenquellen
            zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse).
            <br />
            <br />
            Hetzner Online GmbH ist als Auftragsverarbeiter gemäß Art. 28 DSGVO
            vertraglich gebunden. Weitere Informationen findest du in der
            Datenschutzerklärung von Hetzner:{" "}
            <a
              href="https://www.hetzner.com/de/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-200/90"
            >
              https://www.hetzner.com/de/legal/privacy-policy
            </a>
          </LegalP>

          <LegalH2>3. Keine Cookies, kein Tracking</LegalH2>
          <LegalP>
            Diese Webseite verwendet keine Cookies und kein Tracking. Es werden
            keine Analyse- oder Marketing-Tools eingesetzt.
          </LegalP>

          <LegalH2>4. Google Maps</LegalH2>
          <LegalP>
            Auf dieser Webseite ist der Kartendienst Google Maps der Google Ireland
            Limited (Gordon House, Barrow Street, Dublin 4, Irland) eingebunden.
            <br />
            Bei der Nutzung von Google Maps wird deine IP-Adresse sowie dein
            Standort (sofern du dies gestattest) an Google übertragen. Dies
            geschieht auch dann, wenn du nicht bei einem Google-Konto eingeloggt
            bist. Wenn du eingeloggt bist, kann Google die Daten deinem Konto
            zuordnen.
            <br />
            Google Maps wird eingebunden, um dir die Anfahrt zu unserem Standort zu
            erleichtern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse).
            <br />
            Google kann die übermittelten Daten in die USA übertragen. Für
            Übermittlungen in die USA hat Google Standardvertragsklauseln gemäß
            Art. 46 Abs. 2 lit. c DSGVO abgeschlossen.
            <br />
            Weitere Informationen zur Datenverarbeitung durch Google findest du
            hier:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-200/90"
            >
              https://policies.google.com/privacy
            </a>
          </LegalP>

          <LegalH2>5. Google Bewertungen (Google Business Profile)</LegalH2>
          <LegalP>
            Auf dieser Webseite werden Kundenbewertungen aus dem Google Business
            Profile angezeigt. Dabei können durch die Einbindung Daten wie deine
            IP-Adresse an Google Ireland Limited übertragen werden. Die Anzeige der
            Bewertungen dient der transparenten Information über unser Angebot.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
            Interesse).
            <br />
            Hinweis: Wir haben keinen Einfluss auf die Datenverarbeitung durch
            Google im Rahmen des Business Profiles.
            <br />
            Weitere Informationen:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-200/90"
            >
              https://policies.google.com/privacy
            </a>
          </LegalP>

          <LegalH2>6. Instagram (Einbindung / Verlinkung)</LegalH2>
          <LegalP>
            Auf dieser Webseite ist ein Link bzw. eine Einbindung zu unserem
            Instagram-Profil der Meta Platforms Ireland Limited (4 Grand Canal
            Square, Dublin 2, Irland) vorhanden.
            <br />
            Wichtiger Hinweis: Wenn du auf den Instagram-Link klickst oder ein
            eingebetteter Instagram-Inhalt (z. B. ein Post oder Feed) geladen wird,
            werden Daten wie deine IP-Adresse an Meta übertragen – unabhängig davon,
            ob du ein Instagram-Konto besitzt oder eingeloggt bist.
            <br />
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
            an der Darstellung unseres Unternehmens in sozialen Medien).
            <br />
            Meta kann Daten in die USA übertragen. Meta hat Standardvertragsklauseln
            gemäß Art. 46 Abs. 2 lit. c DSGVO abgeschlossen.
            <br />
            Weitere Informationen zur Datenverarbeitung durch Meta findest du hier:{" "}
            <a
              href="https://privacycenter.instagram.com/policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-200/90"
            >
              https://privacycenter.instagram.com/policy
            </a>
          </LegalP>

          <LegalH2>7. Deine Rechte</LegalH2>
          <LegalP>
            Du hast gegenüber uns folgende Rechte bezüglich deiner personenbezogenen
            Daten:
          </LegalP>
          <LegalUl>
            <li>Auskunft (Art. 15 DSGVO)</li>
            <li>Berichtigung (Art. 16 DSGVO)</li>
            <li>Löschung (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch (Art. 21 DSGVO)</li>
          </LegalUl>
          <LegalP>
            Du hast außerdem das Recht, dich bei der zuständigen
            Datenschutz-Aufsichtsbehörde zu beschweren. In Deutschland ist dies der
            jeweilige Landesbeauftragte für Datenschutz.
          </LegalP>

          <LegalH2>8. Kontakt bei Datenschutzfragen</LegalH2>
          <LegalP>
            Bei Fragen zum Datenschutz wende dich bitte an:
            <br />
            <strong className="text-violet-100">{L.operatorName}</strong>
            <br />
            E-Mail:{" "}
            {emailAddr ? (
              <a href={`mailto:${emailAddr}`}>{emailAddr}</a>
            ) : (
              L.email
            )}
            {phone ? (
              <>
                <br />
                Telefon: {phone}
              </>
            ) : null}
          </LegalP>

          <LegalH2>9. Aktualität</LegalH2>
          <LegalP>
            Diese Datenschutzerklärung hat den Stand: März 2026
            <br />
            Bei Änderungen an der Webseite oder neuen gesetzlichen Vorgaben wird
            diese Erklärung entsprechend aktualisiert.
          </LegalP>
        </article>
      </LegalPageShell>
    );
  }

  return (
    <LegalPageShell backLabel={t.legal.backHome}>
      <article className={legalProseClass}>
        <LegalH1>{t.legal.privacyTitleEn}</LegalH1>
        <LegalP>{t.legal.privacyIntroEn}</LegalP>

        <LegalH2>{t.legal.privacyController}</LegalH2>
        <LegalP>
          {t.legal.privacyControllerBodyPrefix}{" "}
          <strong className="text-violet-100">{L.tradeName}</strong>
          <br />
          {L.operatorName}
          <br />
          {L.addressLine1}
          <br />
          {L.addressLine2}
          <br />
          {L.country}
          <br />
          Email:{" "}
          {emailAddr ? (
            <a href={`mailto:${emailAddr}`}>{emailAddr}</a>
          ) : (
            L.email
          )}
          {phone ? (
            <>
              <br />
              Phone: {phone}
            </>
          ) : null}
        </LegalP>

        <LegalH2>{t.legal.privacyGeneral}</LegalH2>
        <LegalP>{t.legal.privacyGeneralBody}</LegalP>

        <LegalH2>{t.legal.privacyHosting}</LegalH2>
        <LegalP>{t.legal.privacyHostingBody}</LegalP>
        <LegalP>
          <strong className="text-violet-200">{t.legal.privacyHostingNote}</strong>{" "}
          {L.hostingProviderLine}
        </LegalP>
        <LegalP>{t.legal.privacyHostingLegal}</LegalP>

        <LegalH2>{t.legal.privacyLocale}</LegalH2>
        <LegalP>{t.legal.privacyLocaleBody}</LegalP>

        <LegalH2>{t.legal.privacyMaps}</LegalH2>
        <LegalP>{t.legal.privacyMapsBody}</LegalP>
        <LegalP>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com/privacy
          </a>
        </LegalP>
        <LegalP>{t.legal.privacyMapsLegal}</LegalP>

        <LegalH2>{t.legal.privacyInstagram}</LegalH2>
        <LegalP>
          {t.legal.privacyInstagramBody}{" "}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            @haze_and_chill_cafe
          </a>
          . {t.legal.privacyInstagramMeta}{" "}
          <a
            href="https://www.facebook.com/privacy/policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            facebook.com/privacy/policy
          </a>
          .
        </LegalP>

        <LegalH2>{t.legal.privacyNoForm}</LegalH2>
        <LegalP>{t.legal.privacyNoFormBody}</LegalP>

        <LegalH2>{t.legal.privacyRetention}</LegalH2>
        <LegalP>{t.legal.privacyRetentionBody}</LegalP>

        <LegalH2>{t.legal.privacyRights}</LegalH2>
        <LegalP>{t.legal.privacyRightsIntro}</LegalP>
        <LegalUl>
          <li>{t.legal.privacyRight1}</li>
          <li>{t.legal.privacyRight2}</li>
          <li>{t.legal.privacyRight3}</li>
          <li>{t.legal.privacyRight4}</li>
          <li>{t.legal.privacyRight5}</li>
          <li>{t.legal.privacyRight6}</li>
        </LegalUl>
        <LegalP>{t.legal.privacyRightsComplaint}</LegalP>

        <LegalH2>{t.legal.privacyChanges}</LegalH2>
        <LegalP>{t.legal.privacyChangesBody}</LegalP>
      </article>
    </LegalPageShell>
  );
}
