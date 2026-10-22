import React from 'react'
import { useLocale } from '../../app/LocaleContext'

const Info = () => {
  const { t } = useLocale();
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className="bx bx-book-open about__icon"></i>
            <h3 className="about__title" >{t("about.education")}</h3>
            <span className="about__subtitle">Bac+2</span>

        </div>

        <div className="about__box">
            <i className="bx bx-award about__icon"></i>
            <h3 className="about__title" >{t("about.experience")}</h3>
            <span className="about__subtitle">+2</span>

        </div>

        <div className="about__box">
            <i className="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title" >{t("about.projects")}</h3>
            <span className="about__subtitle">+5</span>

        </div>

    </div>        
)
}

export default Info
