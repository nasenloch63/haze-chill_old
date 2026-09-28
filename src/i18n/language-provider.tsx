"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Locale, Messages } from "@/i18n/messages";
import { messages } from "@/i18n/messages";

const STORAGE_KEY = "haze-locale";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: Messages;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("de");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored === "en" || stored === "de") {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- restore the persisted locale after hydration.
        setLocaleState(stored);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next = prev === "de" ? "en" : "de";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "de" ? "de" : "en";
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t: messages[locale],
    }),
    [locale, setLocale, toggleLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
