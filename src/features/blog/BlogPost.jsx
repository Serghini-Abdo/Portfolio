import Link from "../../app/Link";
import { useLocale } from "../../app/LocaleContext";
import { useRoute } from "../../app/RouteContext";
import posts from "../../data/posts";
import { formatDate, localized } from "./postText";
import "./blog.css";

const BlogPost = () => {
  const { t, locale } = useLocale();
  const { slug } = useRoute();
  const post = posts.find((item) => item.slug === slug);

  return (
    <article className="blog-post section container">
      <Link to="/blog" className="blog__link">
        <i className="uil uil-arrow-left"></i> {t("blog.allPosts")}
      </Link>

      {post ? (
        <>
          <h1 className="blog-post__title">{localized(post.title, locale)}</h1>
          <time className="blog__date" dateTime={post.date}>{formatDate(post.date, locale)}</time>
          <div className="blog-post__body">
            {(post.body[locale] || post.body.en || []).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </>
      ) : (
        <p className="blog__empty">{t("blog.notFound")}</p>
      )}
    </article>
  );
};

export default BlogPost;
