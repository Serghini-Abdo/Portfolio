import { useEffect } from "react";
import { getMeta } from "../data/seo";
import { useRoute } from "./RouteContext";

const setAttribute = (selector, attribute, value) => {
  document.head.querySelector(selector)?.setAttribute(attribute, value);
};

// Keeps the head in sync after in-app navigation; the static HTML already has it on first load.
const useDocumentMeta = () => {
  const { locale, page, slug } = useRoute();

  useEffect(() => {
    const meta = getMeta({ locale, page, slug });
    document.title = meta.title;
    setAttribute('meta[name="description"]', "content", meta.description);
    setAttribute('meta[name="robots"]', "content", meta.noindex ? "noindex, follow" : "index, follow");
    setAttribute('link[rel="canonical"]', "href", meta.url);
    setAttribute('meta[property="og:title"]', "content", meta.title);
    setAttribute('meta[property="og:description"]', "content", meta.description);
    setAttribute('meta[property="og:url"]', "content", meta.url);
    setAttribute('meta[property="og:locale"]', "content", meta.ogLocale);
    setAttribute('meta[name="twitter:title"]', "content", meta.title);
    setAttribute('meta[name="twitter:description"]', "content", meta.description);
  }, [locale, page, slug]);
};

export default useDocumentMeta;
