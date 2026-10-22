import { useEffect, useRef, useState } from "react";
import "./language-select.css";
import { useLocale } from "../../app/LocaleContext";

const LanguageSelect = () => {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (!containerRef.current?.contains(event.target)) setOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div className="language-select" ref={containerRef}>
      <button
        className="language-select__trigger"
        type="button"
        aria-label="Language"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <i className="uil uil-globe language-select__icon" aria-hidden="true"></i>
      </button>
      {open && (
        <div className="language-select__menu" role="menu">
          {[['en', 'English'], ['fr', 'Français']].map(([value, label]) => (
            <button
              className={value === locale ? "language-select__option is-active" : "language-select__option"}
              type="button"
              role="menuitem"
              key={value}
              onClick={() => {
                setLocale(value);
                setOpen(false);
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;
