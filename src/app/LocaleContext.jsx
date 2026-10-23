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
import { buildPath } from "./paths";
import { useRoute } from "./RouteContext";

const dictionaries = { en, fr };
export const SWITCH_DELAY_MS = 800;
const LocaleContext = createContext(null);

export const LocaleProvider = ({ children }) => {
  const route = useRoute();
  const [savedLocale] = useState(() => localStorage.getItem("portfolio-locale"));
  // Unprefixed URLs (/, /blog) resolve to the saved locale, or English.
  const preferredLocale = savedLocale in dictionaries ? savedLocale : "en";
  const locale = route.hasPrefix ? route.locale : preferredLocale;

  const [switching, setSwitching] = useState(false);
  const switchTimer = useRef(null);

  useEffect(() => () => clearTimeout(switchTimer.current), []);

  // Send unprefixed URLs to their locale-prefixed equivalent.
  useEffect(() => {
    if (!route.hasPrefix) {
      route.navigate(buildPath(preferredLocale, route.rest), { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("is-switching", switching);
    return () => document.documentElement.classList.remove("is-switching");
  }, [switching]);

  const { rest, navigate } = route;
  const changeLocale = useCallback((next) => {
    if (!(next in dictionaries)) return;
    clearTimeout(switchTimer.current);
    setSwitching(true);
    switchTimer.current = setTimeout(() => {
      navigate(buildPath(next, rest), { scroll: false });
      setSwitching(false);
    }, SWITCH_DELAY_MS);
  }, [rest, navigate]);

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
