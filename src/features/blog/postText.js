export const localized = (value, locale) => value?.[locale] || value?.en || "";

export const formatDate = (date, locale) =>
  new Date(date).toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" });
