import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { parsePath } from "./paths";

const RouteContext = createContext(null);

export const RouteProvider = ({ children }) => {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const syncPath = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", syncPath);
    return () => window.removeEventListener("popstate", syncPath);
  }, []);

  const navigate = useCallback((to, { replace = false, scroll = !replace } = {}) => {
    window.history[replace ? "replaceState" : "pushState"](null, "", to);
    setPathname(window.location.pathname);
    if (scroll && !to.includes("#")) window.scrollTo?.(0, 0);
  }, []);

  const value = useMemo(() => ({ ...parsePath(pathname), pathname, navigate }), [pathname, navigate]);

  return <RouteContext.Provider value={value}>{children}</RouteContext.Provider>;
};

export const useRoute = () => useContext(RouteContext);
