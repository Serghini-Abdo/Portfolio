import "./theme-toggle.css";
import { useLocale } from "../../app/LocaleContext";
import { useTheme } from "../../app/ThemeContext";

const ThemeToggle = () => {
  const { t } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={t(isDark ? "theme.toLight" : "theme.toDark")}
      title={t(isDark ? "theme.toLight" : "theme.toDark")}
      onClick={toggleTheme}
    >
      <i className={isDark ? "uil uil-sun" : "uil uil-moon"} aria-hidden="true"></i>
    </button>
  );
};

export default ThemeToggle;
