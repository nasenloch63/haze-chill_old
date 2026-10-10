export const reservationTimes = Array.from({ length: 18 }, (_, index) => {
  const minutes = (17 * 60 + index * 30) % (24 * 60);
  return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
});

export type Reservation = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  message: string;
  arrivalDate: string;
};

export type ReservationError = "invalid" | "date" | "time";
export const emailPattern = /^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/;

export function berlinDate(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Berlin", year: "numeric", month: "2-digit", day: "2-digit",
  }).formatToParts(now);
  const get = (type: string) => parts.find(part => part.type === type)?.value;
  return `${get("year")}-${get("month")}-${get("day")}`;
}

export function validateReservation(input: unknown, now = new Date()):
  { ok: true; data: Reservation } | { ok: false; error: ReservationError } {
  if (!input || typeof input !== "object" || Array.isArray(input)) return { ok: false, error: "invalid" };
  const values = input as Record<string, unknown>;
  const string = (key: string) => typeof values[key] === "string" ? values[key].trim() : "";
  const name = string("name"), email = string("email"), phone = string("phone");
  const date = string("date"), time = string("time"), message = string("message");
  const guests = values.guests;
  if (name.length < 2 || name.length > 100 || /[\r\n\x00-\x1f]/.test(name) ||
    email.length > 254 || !emailPattern.test(email) ||
    phone.length > 40 || (phone !== "" && !/^[+\d\s()./-]{5,40}$/.test(phone)) ||
    typeof guests !== "number" || !Number.isInteger(guests) || guests < 1 || guests > 50 ||
    message.length > 1000 || /[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(message)) {
    return { ok: false, error: "invalid" };
  }
  const parsed = new Date(`${date}T12:00:00Z`);
  const maximum = new Date(now);
  maximum.setUTCFullYear(maximum.getUTCFullYear() + 1);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(parsed.getTime()) ||
    parsed.toISOString().slice(0, 10) !== date || date < berlinDate(now) || date > berlinDate(maximum)) {
    return { ok: false, error: "date" };
  }
  if (!reservationTimes.includes(time)) return { ok: false, error: "time" };
  const arrival = new Date(parsed);
  if (time < "02:00") arrival.setUTCDate(arrival.getUTCDate() + 1);
  const arrivalDate = arrival.toISOString().slice(0, 10);
  const currentTime = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Berlin", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
  }).format(now);
  if (`${arrivalDate}T${time}` <= `${berlinDate(now)}T${currentTime}`) return { ok: false, error: "time" };
  return { ok: true, data: { name, email, phone, date, time, guests, message, arrivalDate } };
}
