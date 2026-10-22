import "./language-select.css";
import { useLocale } from "../../app/LocaleContext";

const LanguageSelect = () => {
  const { locale, setLocale } = useLocale();

  return (
    <label className="language-select">
      <i className="uil uil-globe language-select__icon" aria-hidden="true"></i>
      <select
        className="language-select__control"
        value={locale}
        onChange={(event) => setLocale(event.target.value)}
        aria-label="Language"
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </label>
  );
};

export default LanguageSelect;
