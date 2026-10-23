import React, { useEffect, useState } from 'react'
import "./header.css"
import { useLocale } from "../LocaleContext";
import LanguageSelect from "../../components/ui/LanguageSelect";
import ThemeToggle from "../../components/ui/ThemeToggle";

const SECTION_IDS = ["home", "about", "skills", "services", "portfolio", "contact"];

const Header = () => {
    // toggle menu
    const [Toggle,showMenu] = useState(false);
    const { t } = useLocale();
    const [active, setActive] = useState("home");
    const linkClass = (id) => (active === id ? "nav__link active-link" : "nav__link");

    // highlight the nav link of the section currently in view
    useEffect(() => {
        if (!("IntersectionObserver" in window)) return undefined;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );
        SECTION_IDS.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });
        return () => observer.disconnect();
    }, []);
  return (
    <header className="header">
       <nav className="nav container">
        <a href="index.html" className="nav__logo">Serghni <b style={{color:'#FFDD67',fontSize:'var(--h1-font-size)'}}>.</b></a>
        <div className={Toggle?"nav__menu show-menu":"nav__menu"}>
            <ul className="nav__list" onClick={() => showMenu(false)}>
                
                <li className="nav__item">
                    <a href="#home" className={linkClass("home")}>
                        <i className="uil uil-estate nav__icon"></i> {t("nav.home")}
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#about" className={linkClass("about")}>
                        <i className="uil uil-user nav__icon"></i> {t("nav.about")}
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#skills" className={linkClass("skills")}>
                        <i className="uil uil-file-alt nav__icon"></i> {t("nav.skills")}
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#services" className={linkClass("services")}>
                        <i className="uil uil-briefcase-alt nav__icon"></i> {t("nav.services")}
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#portfolio" className={linkClass("portfolio")}>
                        <i className="uil uil-scenery nav__icon"></i> {t("nav.portfolio")}
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#contact" className={linkClass("contact")}>
                        <i className="uil uil-message nav__icon"></i> {t("nav.contact")}
                    </a>
                </li>
            </ul>
            <i className="uil uil-times nav__close" onClick={()=>showMenu(!Toggle)}></i>
        </div>
        <div className="nav__toggle" onClick={()=>showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
        </div>
        <LanguageSelect />
        <ThemeToggle />

        </nav> 
    </header>
  )
}

export default Header
