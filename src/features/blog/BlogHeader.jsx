import LanguageSelect from "../../components/ui/LanguageSelect";
import ThemeToggle from "../../components/ui/ThemeToggle";
import Link from "../../app/Link";
import { useLocale } from "../../app/LocaleContext";
import "./blog.css";

const BlogHeader = () => {
  const { t } = useLocale();
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          Serghni <b style={{ color: "#FFDD67", fontSize: "var(--h1-font-size)" }}>.</b>
        </Link>
        <Link to="/" className="nav__link blog-nav__home">
          {t("blog.getToKnowMe")} <i className="uil uil-arrow-right"></i>
        </Link>
        <LanguageSelect />
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default BlogHeader;
