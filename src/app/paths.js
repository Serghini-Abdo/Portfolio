// Pure URL helpers shared by the router, the SEO data and the build plugin.
// Every page lives under a locale prefix: /en, /fr, /en/blog, /fr/blog/<slug>.
export const parsePath = (pathname) => {
  const clean = pathname.replace(/\/+$/, "") || "/";
  const prefix = clean.match(/^\/(en|fr)(?=\/|$)/);
  const locale = prefix ? prefix[1] : "en";
  const rest = prefix ? clean.slice(prefix[0].length) || "/" : clean;
  const base = { locale, hasPrefix: Boolean(prefix) };

  if (rest === "/blog") return { ...base, page: "blog", rest };
  const post = rest.match(/^\/blog\/([^/]+)$/);
  if (post) return { ...base, page: "post", slug: post[1], rest };
  return { ...base, page: "home", rest: "/" };
};

export const buildPath = (locale, rest = "/") => (rest === "/" ? `/${locale}` : `/${locale}${rest}`);
