import posts from "./posts";
import { buildPath } from "../app/paths";

export const SITE_URL = "https://serghini.site";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const AUTHOR = "Abdelmoula Serghini";
export const LOCALES = ["en", "fr"];

const pages = {
  en: {
    ogLocale: "en_US",
    home: {
      title: "Abdelmoula Serghini | Digital QA Specialist & Conversational AI",
      description:
        "Digital QA Specialist in Fez, Morocco. I test digital products and build AI-assisted QA tools with Python, JavaScript and LLM agents, with a full-stack background in React and Laravel.",
    },
    blog: {
      title: "Blog | Abdelmoula Serghini",
      description: "Notes on QA, conversational AI and web development by Abdelmoula Serghini.",
    },
  },
  fr: {
    ogLocale: "fr_FR",
    home: {
      title: "Abdelmoula Serghini | Spécialiste QA digital & IA conversationnelle",
      description:
        "Spécialiste QA digital à Fès, Maroc. Je teste des produits digitaux et je crée des outils d'IA pour la QA avec Python, JavaScript et des agents LLM, avec une base full stack en React et Laravel.",
    },
    blog: {
      title: "Blog | Abdelmoula Serghini",
      description: "Notes sur la QA, l'IA conversationnelle et le développement web par Abdelmoula Serghini.",
    },
  },
};

const pick = (value, locale) => value?.[locale] || value?.en || "";

export const getMeta = ({ locale, page, slug }) => {
  const copy = pages[locale];
  const rest = page === "home" ? "/" : page === "blog" ? "/blog" : `/blog/${slug}`;
  const path = buildPath(locale, rest);
  const base = { locale, page, slug, path, url: `${SITE_URL}${path === "/" ? "/" : path}`, ogLocale: copy.ogLocale };

  if (page === "post") {
    const post = posts.find((item) => item.slug === slug);
    if (!post) return { ...base, title: copy.blog.title, description: copy.blog.description, noindex: true };
    return {
      ...base,
      title: `${pick(post.title, locale)} | ${AUTHOR}`,
      description: pick(post.summary, locale),
      date: post.date,
    };
  }

  return { ...base, ...copy[page], noindex: page === "blog" && posts.length === 0 };
};

export const getRoutes = () =>
  LOCALES.flatMap((locale) => [
    { locale, page: "home" },
    { locale, page: "blog" },
    ...posts.map((post) => ({ locale, page: "post", slug: post.slug })),
  ]);

// hreflang alternates: the same page in every locale.
export const getAlternates = (route) => [
  ...LOCALES.map((locale) => ({ lang: locale, url: getMeta({ ...route, locale }).url })),
  { lang: "x-default", url: getMeta({ ...route, locale: "en" }).url },
];

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: AUTHOR,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/og-image.jpg`,
  jobTitle: "Digital QA Specialist",
  worksFor: { "@type": "Organization", name: "Cnexia" },
  address: { "@type": "PostalAddress", addressLocality: "Fez", addressCountry: "MA" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "ISGA Fez" },
    { "@type": "CollegeOrUniversity", name: "SUP'Management Fez" },
  ],
  knowsAbout: ["Quality assurance", "Software testing", "Prompt engineering", "LLM agents", "Python", "JavaScript", "Laravel", "REST APIs"],
  sameAs: ["https://www.linkedin.com/in/abdelmoula-serghini/", "https://github.com/Serghini-Abdo"],
};
