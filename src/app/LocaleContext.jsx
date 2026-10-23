import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import en from "../data/locales/en";
import fr from "../data/locales/fr";

const dictionaries = { en, fr };
export const SWITCH_DELAY_MS = 800;
const LocaleContext = createContext(null);

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => {
    const savedLocale = localStorage.getItem("portfolio-locale");
    return savedLocale in dictionaries ? savedLocale : "en";
  });

  const [switching, setSwitching] = useState(false);
  const switchTimer = useRef(null);

  useEffect(() => () => clearTimeout(switchTimer.current), []);

  useEffect(() => {
    document.documentElement.classList.toggle("is-switching", switching);
    return () => document.documentElement.classList.remove("is-switching");
  }, [switching]);

  const changeLocale = useCallback((next) => {
    if (!(next in dictionaries)) return;
    clearTimeout(switchTimer.current);
    setSwitching(true);
    switchTimer.current = setTimeout(() => {
      setLocale(next);
      setSwitching(false);
    }, SWITCH_DELAY_MS);
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      switching,
      setLocale: changeLocale,
      t: (key) =>
        key
          .split(".")
          .reduce((value, part) => value?.[part], dictionaries[locale]) || key,
    }),
    [locale, switching, changeLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
