import React from 'react'
import Link from "../../app/Link";
import { useLocale } from "../../app/LocaleContext";

const Social = () => {
  const { t } = useLocale();
  return (
    <div className="home__social">
        <a href="https://www.linkedin.com/in/abdelmoula-serghini/" className="home__social-icon" aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <i className="bx bxl-linkedin"></i>
        </a>
        <Link to="/blog" className="home__social-icon" aria-label={t("blog.title")}>
            <i className="uil uil-pen"></i>
        </Link>
        <a href="https://github.com/Serghini-Abdo/" className="home__social-icon" aria-label="GitHub" target="_blank" rel="noreferrer">
            <i className="uil uil-github-alt"></i>
        </a>
    </div>
  )
}

export default Social
