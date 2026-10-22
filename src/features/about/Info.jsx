import React from 'react'
import { useLocale } from '../../app/LocaleContext'

const Info = () => {
  const { t } = useLocale();
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className="bx bx-book-open about__icon"></i>
            <h3 className="about__title" >{t("about.education")}</h3>
            <span className="about__subtitle">{t("about.educationValue")}</span>

        </div>

        <div className="about__box">
            <i className="bx bx-award about__icon"></i>
            <h3 className="about__title" >{t("about.experience")}</h3>
            <span className="about__subtitle">{t("about.experienceValue")}</span>

        </div>

        <div className="about__box">
            <i className="bx bx-medal about__icon"></i>
            <h3 className="about__title" >{t("about.certifications")}</h3>
            <span className="about__subtitle">{t("about.certificationsValue")}</span>

        </div>

    </div>        
)
}

export default Info
