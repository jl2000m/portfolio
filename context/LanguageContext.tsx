"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { translations } from "@/lib/i18n";

export type Lang = "es" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    // Check localStorage for persisted user preference
    const stored = localStorage.getItem("jlm-lang") as Lang | null;
    if (stored === "en" || stored === "es") {
      setLangState(stored);
      return;
    }
    // Fall back to browser language detection
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("es")) {
      setLangState("es");
    } else {
      setLangState("en");
    }
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("jlm-lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

/** Convenience hook — returns the full translation object for the current language */
export function useT() {
  const { lang } = useLang();
  return translations[lang];
}
