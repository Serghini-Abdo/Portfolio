import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { getAlternates, getMeta, getRoutes, OG_IMAGE, personJsonLd, SITE_URL } from "../src/data/seo.js";

const BLOCK = /<!--seo-start-->[\s\S]*?<!--seo-end-->/;

const escapeHtml = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const renderBlock = (route) => {
  const meta = getMeta(route);
  const isPost = meta.page === "post" && meta.date;
  const alternateLocale = meta.locale === "fr" ? "en_US" : "fr_FR";
  const tags = [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="robots" content="${meta.noindex ? "noindex, follow" : "index, follow"}" />`,
    `<link rel="canonical" href="${meta.url}" />`,
    ...getAlternates(route).map((alt) => `<link rel="alternate" hreflang="${alt.lang}" href="${alt.url}" />`),
    `<meta property="og:type" content="${isPost ? "article" : "website"}" />`,
    `<meta property="og:site_name" content="Abdelmoula Serghini" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:url" content="${meta.url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Abdelmoula Serghini, Digital QA Specialist" />`,
    `<meta property="og:locale" content="${meta.ogLocale}" />`,
    `<meta property="og:locale:alternate" content="${alternateLocale}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  ];

  if (meta.page === "home") {
    const json = JSON.stringify(personJsonLd).replace(/</g, "\u003c");
    tags.push(`<script type="application/ld+json">${json}</script>`);
  }

  return `<!--seo-start-->\n    ${tags.join("\n    ")}\n    <!--seo-end-->`;
};

const renderSitemap = () => {
  const entries = getRoutes()
    .filter((route) => !getMeta(route).noindex)
    .map((route) => {
      const alternates = getAlternates(route)
        .map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.url}" />`)
        .join("\n");
      return `  <url>\n    <loc>${getMeta(route).url}</loc>\n${alternates}\n  </url>`;
    });

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join("\n")}\n</urlset>\n`;
};

// Injects per-route SEO tags into index.html and emits one static HTML file per route,
// so crawlers and link previews get the right head without running JavaScript.
export default function seoPlugin() {
  let outDir = "dist";
  let root = process.cwd();
  let isBuild = false;

  return {
    name: "portfolio-seo",
    configResolved(config) {
      outDir = config.build.outDir;
      root = config.root;
      isBuild = config.command === "build";
    },
    transformIndexHtml(html) {
      return html.replace(BLOCK, renderBlock({ locale: "en", page: "home" }));
    },
    closeBundle() {
      if (!isBuild) return;
      const dist = resolve(root, outDir);
      const template = readFileSync(join(dist, "index.html"), "utf8");

      getRoutes().forEach((route) => {
        const { path } = getMeta(route);
        const html = template
          .replace(BLOCK, () => renderBlock(route))
          .replace('<html lang="en">', `<html lang="${route.locale}">`);
        const file = join(dist, path, "index.html");
        mkdirSync(dirname(file), { recursive: true });
        writeFileSync(file, html);
      });

      writeFileSync(join(dist, "sitemap.xml"), renderSitemap());
    },
  };
}
