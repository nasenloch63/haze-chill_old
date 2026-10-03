export type FaqItem = {
  question: string;
  /** Full answer shown in the FAQ accordion */
  answer: string;
  /** Optional shorter text for schema.org (defaults to `answer`) */
  schemaAnswer?: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Wo finde ich euer Café in Kassel?",
    answer:
      "Du findest Haze and Chill zentral in Kassel in der Kölnischen Str. 12-14, 34117 Kassel. Damit ist unser Coffeeshop gut erreichbar, auch wenn du nach einem Café nahe Innenstadt Kassel suchst.",
    schemaAnswer:
      "Du findest Haze and Chill in der Kölnischen Str. 12-14, 34117 Kassel.",
  },
  {
    question: "Gibt es bei euch Specialty Coffee und Desserts?",
    answer:
      "Ja. Wir servieren Specialty Coffee, klassische Kaffeespezialitäten, Softdrinks und dazu Desserts sowie Pastry-Optionen für den perfekten Chill-Moment.",
    schemaAnswer:
      "Ja, wir bieten Specialty Coffee, Kaffeespezialitäten und Desserts.",
  },
  {
    question: "Ist Haze and Chill ein gemütliches Café für Freunde und Studierende?",
    answer:
      "Ja — ein gemütliches Café in Kassel mit Lounge-Charakter: ideal für Freunde, Studierende, Fotos und einen instagrammable Spot ohne kitschige Kulisse.",
    schemaAnswer:
      "Ja, mit Lounge-Charakter und einem instagrammable Spot für Fotos.",
  },
  {
    question: "Bietet ihr Frühstück oder Brunch in Kassel an?",
    answer:
      "Unser Fokus liegt auf dem Nachmittags- und Abendgeschäft ab 17:00 Uhr. Für Kaffee, Desserts und entspannte Café-Atmosphäre am späteren Tag bist du bei uns genau richtig.",
    schemaAnswer:
      "Unser Fokus liegt auf dem Nachmittags- und Abendgeschäft ab 17:00 Uhr.",
  },
  {
    question: "Wann hat euer Coffeeshop in Kassel geöffnet?",
    answer:
      "Wir sind jeden Tag von 17:00 bis 02:00 Uhr (bis Ende) geöffnet.",
    schemaAnswer:
      "Täglich von 17:00 bis 02:00 Uhr (bis Ende).",
  },
  {
    question: "Gibt es bei euch eine Gaming Lounge in Kassel?",
    answer:
      "Ja. Du kannst bei uns an der Konsole spielen — Gaming Lounge in einem urbanen Lounge-Setup, dazu Drinks und Terrasse.",
    schemaAnswer:
      "Ja, Gaming Lounge mit Konsolen, dazu Drinks und Terrasse.",
  },
  {
    question: "Seid ihr abends als late night café in Kassel offen?",
    answer:
      "Wir sind täglich von 17:00 bis 02:00 Uhr (bis Ende) für dich da.",
    schemaAnswer:
      "Täglich von 17:00 bis 02:00 Uhr (bis Ende).",
  },
  {
    question: "Ist Kiffen bei euch erlaubt?",
    answer:
      "Ja. Bei uns gilt ein Coffeeshop-Lounge-Konzept: Konsum ist in den dafür vorgesehenen Gästebereichen möglich — respektvoll gegenüber anderen Gästen und im Rahmen unserer Hausregeln.",
    schemaAnswer:
      "Ja, in den dafür vorgesehenen Bereichen und nach unseren Hausregeln.",
  },
  {
    question: "Kann man bei euch Weed rauchen?",
    answer:
      "Ja, mit eigenem Material und in den ausgewiesenen Bereichen. Wir verkaufen kein Cannabis und keine THC-haltigen Erzeugnisse.",
    schemaAnswer:
      "Ja, mit eigenem Material in den ausgewiesenen Bereichen; kein Verkauf.",
  },
  {
    question: "Kann man bei euch Haschisch konsumieren?",
    answer:
      "Ja — analog zu anderen Formen des Cannabiskonsums vor Ort, mit eigenem Material und in den gekennzeichneten Bereichen. Eine Abgabe oder ein Verkauf durch uns gibt es nicht.",
    schemaAnswer:
      "Ja, mit eigenem Material in den vorgesehenen Bereichen; kein Verkauf.",
  },
  {
    question: "Verkauft ihr Cannabis?",
    answer:
      "Nein. Haze and Chill verkauft kein Cannabis und keine illegalen Substanzen. Wir sind Café, Lounge und Treffpunkt — kein Shop für Cannabis.",
    schemaAnswer: "Nein, wir verkaufen kein Cannabis.",
  },
  {
    question: "Verkauft ihr Hash oder Weed?",
    answer:
      "Nein. Weder Hash noch Weed noch andere Cannabiserzeugnisse werden bei uns verkauft oder abgegeben.",
    schemaAnswer: "Nein, weder Hash noch Weed.",
  },
  {
    question: "Kann man bei euch Gras kaufen?",
    answer:
      "Nein. Gras oder andere Cannabiserzeugnisse kannst du bei uns nicht erwerben.",
    schemaAnswer: "Nein, Gras kann man bei uns nicht kaufen.",
  },
  {
    question: "Wo bekommt man bei euch Cannabis?",
    answer:
      "Bei uns nicht — wir führen und verkaufen kein Cannabis. Wo du legal an Cannabis kommst, hängt von den jeweils geltenden Regeln ab; Rechts- oder medizinische Beratung erteilen wir nicht.",
    schemaAnswer:
      "Bei uns nicht; wir verkaufen kein Cannabis und beraten nicht zu legalen Bezugswegen.",
  },
  {
    question: "Habt ihr THC-Produkte?",
    answer:
      "Nein. THC-haltige Produkte und Cannabiserzeugnisse gehören nicht zu unserem Sortiment und werden von uns nicht verkauft.",
    schemaAnswer: "Nein, keine THC-Produkte.",
  },
  {
    question: "Kann man bei euch Joints kaufen?",
    answer:
      "Nein. Fertig gedrehte Joints oder ähnliche Cannabisprodukte verkaufen wir nicht.",
    schemaAnswer: "Nein, keine Joints zum Kauf.",
  },
  {
    question: "Kann man bei euch vor Ort smoken?",
    answer:
      "Ja — in den dafür vorgesehenen Innen- und Außenbereichen, mit eigenem Material und unter Beachtung unserer Hausregeln sowie Rücksicht auf andere Gäste.",
    schemaAnswer:
      "Ja, vor Ort in den gekennzeichneten Bereichen mit eigenem Material.",
  },
  {
    question: "Ist Haze and Chill ein Coffeeshop für Weed?",
    answer:
      "Ja, im Sinne einer Lounge, in der du mit eigenem Material chillen und konsumieren kannst — nicht als Verkaufsort. Coffeeshop-Vibe, aber ohne Grasverkauf bei uns.",
    schemaAnswer:
      "Ja als Lounge mit Konsum vor Ort mit eigenem Material; kein Verkauf.",
  },
  {
    question: "Seid ihr eine Cannabis-Lounge in Kassel?",
    answer:
      "Ja. Wir sind ein urbaner Coffeeshop und Lounge in Kassel: Drinks, Terrasse, Gaming und Platz zum Entspannen — Konsum mit eigenem Material in den vorgesehenen Bereichen, ohne Cannabisverkauf durch uns.",
    schemaAnswer:
      "Ja, Lounge in Kassel mit Konsum vor Ort (eigenes Material), kein Verkauf.",
  },
  {
    question: "Kann man bei euch medizinisches Cannabis bekommen?",
    answer:
      "Nein. Medizinisches Cannabis, Rezepte oder apothekenübliche Abgabe gehören nicht zu unserem Angebot.",
    schemaAnswer: "Nein, kein medizinisches Cannabis.",
  },
  {
    question: "Helft ihr bei einem Cannabis-Rezept?",
    answer:
      "Nein. Wir stellen keine Rezepte aus, vermitteln keine Ärztinnen und Ärzte und unterstützen nicht bei der Beantragung von medizinischem Cannabis.",
    schemaAnswer: "Nein, keine Hilfe bei Cannabis-Rezepten.",
  },
  {
    question: "Bekomme ich über euch ein Weed-Rezept?",
    answer:
      "Nein. Über Haze and Chill ist kein Rezept für Cannabis oder ähnliche Produkte erhältlich.",
    schemaAnswer: "Nein, keine Rezepte über uns.",
  },
  {
    question: "Arbeitet ihr mit Cannabis-Ärzten zusammen?",
    answer:
      "Nein. Es besteht keine Kooperation mit Cannabis-Ärztinnen, Cannabis-Ärzten oder spezialisierten Zentren im Sinne einer Rezept- oder Abgabevermittlung.",
    schemaAnswer: "Nein, keine Kooperation mit Cannabis-Ärztinnen/-ärzten.",
  },
  {
    question: "Seid ihr eine Alternative zu DrAnsay?",
    answer:
      "Nein. Wir sind Café und Lounge in Kassel — kein medizinisches oder telemedizinisches Angebot und kein Ersatz für spezialisierte Anbieter.",
    schemaAnswer: "Nein, kein medizinisches oder telemedizinisches Angebot.",
  },
  {
    question: "Wie bekomme ich legal Weed über euch?",
    answer:
      "Das geht nicht über uns. Wir verkaufen kein Cannabis und vermitteln keine legalen Bezugswege; dafür musst du dich an die geltenden gesetzlichen Regelungen und zuständigen Stellen halten.",
    schemaAnswer:
      "Nicht über uns — wir verkaufen kein Cannabis und vermitteln keine Bezugswege.",
  },
  {
    question: "Kann man bei euch Cannabis bestellen?",
    answer:
      "Nein. Bestellung, Lieferung oder Abholung von Cannabis über uns ist nicht möglich.",
    schemaAnswer: "Nein, kein Bestellen von Cannabis.",
  },
  {
    question: "Habt ihr CBD, THC oder ähnliche Produkte?",
    answer:
      "Nein. Weder CBD- noch THC-haltige Produkte noch vergleichbare Cannabiserzeugnisse werden von uns verkauft.",
    schemaAnswer: "Nein, keine CBD-/THC-Produkte zum Verkauf.",
  },
  {
    question: "Darf man bei euch drinnen oder draußen kiffen?",
    answer:
      "Ja — in den dafür vorgesehenen Innenbereichen und auf der Terrasse, sofern du die Hausregeln einhältst, andere Gäste respektierst und nur mit eigenem Material konsumierst.",
    schemaAnswer:
      "Ja, drinnen und draußen in den gekennzeichneten Bereichen mit eigenem Material.",
  },
  {
    question: "Muss ich Weed, Hash oder Gras selbst mitbringen?",
    answer:
      "Ja. Wir arbeiten nach dem Bring-your-own-Prinzip: Du bringst dein eigenes Material mit und konsumierst in unseren ausgewiesenen Bereichen nach den Hausregeln. Ein Verkauf, eine Abgabe oder ein Ankauf durch uns findet nicht statt.",
    schemaAnswer:
      "Ja — eigenes Material mitbringen (bring your own); kein Verkauf durch uns.",
  },
  {
    question: "Warum heißt ihr Coffeeshop, wenn ihr kein Cannabis verkauft?",
    answer:
      "Bei uns steht Coffeeshop für den typischen Mix aus Café-Kultur, Lounge, Street Art und entspanntem Zusammensein — inklusive Möglichkeit, mit eigenem Material vor Ort zu konsumieren. Wir sind kein Shop und kein Anbieter von Cannabis, Haschisch, Marihuana oder CBD-Produkten.",
    schemaAnswer:
      "Coffeeshop-Vibe und Lounge; Konsum mit eigenem Material, kein Verkauf.",
  },
  {
    question: "Gibt es bei euch eine Smoking Lounge oder Cannabis-Lounge in Kassel?",
    answer:
      "Du kannst Haze and Chill als urbanen Coffeeshop und Lounge in Kassel verstehen: Drinks, Terrasse, Gaming und Bereiche, in denen du mit eigenem Material konsumieren kannst — ohne Kauf bei uns. Genaues regeln unsere Hausregeln; frag gern das Team vor Ort.",
    schemaAnswer:
      "Lounge in Kassel mit Konsum vor Ort (eigenes Material), kein Verkauf.",
  },
];
