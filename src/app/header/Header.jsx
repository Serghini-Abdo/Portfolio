import React, { useState } from 'react'
import "./header.css"
import { useLocale } from "../LocaleContext";

const Header = () => {
    // toggle menu
    const [Toggle,showMenu] = useState(false);
    const { locale, setLocale, t } = useLocale();
  return (
    <header className="header">
       <nav className="nav container">
        <a href="index.html" className="nav__logo">Serghni <b style={{color:'#FFDD67',fontSize:'var(--h1-font-size)'}}>.</b></a>
        <div className={Toggle?"nav__menu show-menu":"nav__menu"}>
            <ul className="nav__list" onClick={() => showMenu(false)}>
                
                <li className="nav__item">
                    <a href="#home" className="nav__link active-link">
                        <i className="uil uil-estate nav__icon"></i> {t("nav.home")}
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#about" className="nav__link">
                        <i className="uil uil-user nav__icon"></i> {t("nav.about")}
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#skills" className="nav__link">
                        <i className="uil uil-file-alt nav__icon"></i> {t("nav.skills")}
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#services" className="nav__link">
                        <i className="uil uil-briefcase-alt nav__icon"></i> {t("nav.services")}
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#portfolio" className="nav__link">
                        <i className="uil uil-scenery nav__icon"></i> {t("nav.portfolio")}
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#contact" className="nav__link">
                        <i className="uil uil-message nav__icon"></i> {t("nav.contact")}
                    </a>
                </li>
            </ul>
            <i className="uil uil-times nav__close" onClick={()=>showMenu(!Toggle)}></i>
        </div>
        <div className="nav__toggle" onClick={()=>showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
        </div>
        <label className="nav__language">
            <i className="uil uil-globe nav__language-icon" aria-hidden="true"></i>
            <select
                className="nav__language-select"
                value={locale}
                onChange={(event) => setLocale(event.target.value)}
                aria-label="Language"
            >
                <option value="en">English</option>
                <option value="fr">Français</option>
            </select>
        </label>

        </nav> 
    </header>
  )
}

export default Header
