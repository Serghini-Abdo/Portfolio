import SectionHeading from "../../components/ui/SectionHeading";
import CardGrid from "../../components/ui/CardGrid";
import Link from "../../app/Link";
import { useLocale } from "../../app/LocaleContext";
import posts from "../../data/posts";
import { formatDate, localized } from "./postText";
import "./blog.css";

const Blog = () => {
  const { t, locale } = useLocale();
  return (
    <section className="blog section" id="blog">
      <SectionHeading title={t("blog.title")} subtitle={t("blog.subtitle")} />

      {posts.length === 0 ? (
        <p className="blog__empty container">{t("blog.empty")}</p>
      ) : (
        <CardGrid className="blog__container container">
          {posts.map((post) => (
            <article className="blog__card" key={post.slug}>
              <time className="blog__date" dateTime={post.date}>{formatDate(post.date, locale)}</time>
              <h3 className="blog__card-title">{localized(post.title, locale)}</h3>
              <p className="blog__summary">{localized(post.summary, locale)}</p>
              <Link to={`/blog/${post.slug}`} className="blog__link">
                {t("blog.readMore")} <i className="uil uil-arrow-right"></i>
              </Link>
            </article>
          ))}
        </CardGrid>
      )}
    </section>
  );
};

export default Blog;
