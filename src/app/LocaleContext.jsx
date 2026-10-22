import { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "../data/locales/en";
import fr from "../data/locales/fr";

const dictionaries = { en, fr };
const LocaleContext = createContext(null);

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => {
    const savedLocale = localStorage.getItem("portfolio-locale");
    return savedLocale in dictionaries ? savedLocale : "en";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(() => ({
    locale,
    setLocale,
    toggleLocale: () => setLocale((current) => (current === "en" ? "fr" : "en")),
    t: (key) => key.split(".").reduce((value, part) => value?.[part], dictionaries[locale]) || key,
  }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => useContext(LocaleContext);
