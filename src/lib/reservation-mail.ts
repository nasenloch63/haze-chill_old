import type { Reservation } from "./reservation-validation";

export function reservationMail(reservation: Reservation, id: string) {
  const formatDate = (date: string) => new Intl.DateTimeFormat("de-DE", {
    dateStyle: "full", timeZone: "Europe/Berlin",
  }).format(new Date(`${date}T12:00:00Z`));
  return {
    subject: `Haze and Chill: Tischanfrage ${reservation.name}, ${reservation.date}, ${reservation.guests} Personen [${id.slice(0, 8)}]`,
    text: [
      "Neue Tischreservierungsanfrage – noch nicht bestätigt", "",
      `Anfrage-ID: ${id}`, `Name: ${reservation.name}`, `E-Mail: ${reservation.email}`,
      `Telefon: ${reservation.phone || "Nicht angegeben"}`, "",
      `Gewünschter Abend: ${formatDate(reservation.date)}`,
      `Ankunft: ${formatDate(reservation.arrivalDate)}, ${reservation.time} Uhr (Europe/Berlin)`,
      `Personen: ${reservation.guests}`, "", "Nachricht:", reservation.message || "Keine Nachricht", "",
      "Bitte Verfügbarkeit prüfen und dem Gast direkt antworten. Diese Anfrage ist keine verbindliche Tischbestätigung.",
    ].join("\n"),
  };
}
