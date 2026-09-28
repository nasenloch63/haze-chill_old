"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/language-provider";

function Stars({ count, ariaLabel }: { count: number; ariaLabel: string }) {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label={ariaLabel}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < count ? "fill-amber-400 text-amber-400" : "fill-transparent text-white/20",
          )}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function ReviewCard({
  name,
  rating,
  text,
  relativeTime,
  starsAria,
  googleBadge,
}: {
  name: string;
  rating: number;
  text: string;
  relativeTime: string;
  starsAria: (n: number) => string;
  googleBadge: string;
}) {
  return (
    <article
      className="w-[min(100vw-2rem,320px)] shrink-0 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg sm:w-[340px]"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-xs text-violet-300/60">{relativeTime}</p>
        </div>
        <Stars count={rating} ariaLabel={starsAria(rating)} />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-violet-100/80">{text}</p>
      <p className="mt-3 text-xs text-emerald-400/70">{googleBadge}</p>
    </article>
  );
}

export function GoogleReviewsWall() {
  const { t } = useLanguage();
  const row = [...t.reviews.items, ...t.reviews.items];

  return (
    <section
      id="reviews"
      className="border-t border-white/5 bg-[#080808] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          {t.reviews.title}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-violet-200/65">
          {t.reviews.subtitle}
        </p>
      </div>

      <div className="relative mt-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#080808] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#080808] to-transparent sm:w-24" />

        <div className="flex w-max animate-marquee gap-5 py-2 pr-5">
          {row.map((r, i) => (
            <ReviewCard
              key={`${r.id}-${i}`}
              name={r.name}
              rating={r.rating}
              text={r.text}
              relativeTime={r.relativeTime}
              starsAria={t.reviews.starsAria}
              googleBadge={t.reviews.googleBadge}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
