"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/language-provider";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.lang.toggleAria}
      className="flex shrink-0 items-center rounded-full border border-white/15 bg-white/5 p-0.5 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={() => setLocale("de")}
        className={cn(
          "rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors sm:px-3",
          locale === "de"
            ? "bg-violet-600/80 text-white shadow-[0_0_16px_rgba(139,92,246,0.35)]"
            : "text-violet-200/70 hover:text-white",
        )}
        aria-pressed={locale === "de"}
      >
        {t.lang.de}
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={cn(
          "rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors sm:px-3",
          locale === "en"
            ? "bg-emerald-600/80 text-white shadow-[0_0_16px_rgba(16,185,129,0.35)]"
            : "text-violet-200/70 hover:text-white",
        )}
        aria-pressed={locale === "en"}
      >
        {t.lang.en}
      </button>
    </div>
  );
}
