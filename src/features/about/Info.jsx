import React, { useCallback, useState } from 'react'
import { useLocale } from '../../app/LocaleContext'
import cvDetails from '../../data/cvDetails'
import SidePanel from '../../components/ui/SidePanel'

const boxes = [
  { key: "education", icon: "bx-book-open" },
  { key: "experience", icon: "bx-award" },
  { key: "certifications", icon: "bx-medal" },
]

const Info = () => {
  const { t, locale } = useLocale();
  // `key` is kept after closing so the content stays put during the exit animation.
  const [panel, setPanel] = useState({ key: "education", open: false });
  const openKey = panel.key;
  const close = useCallback(() => setPanel((p) => ({ ...p, open: false })), []);

  return (
    <>
      <div className="about__info grid">
        {boxes.map(({ key, icon }) => (
          <div key={key} className="about__box">
            <i className={`bx ${icon} about__icon`}></i>
            <h3 className="about__title">{t(`about.${key}`)}</h3>
            <span className="about__subtitle">{t(`about.${key}Value`)}</span>
            <button
              type="button"
              className="about__link"
              aria-haspopup="dialog"
              aria-label={`${t("about.details")}: ${t(`about.${key}`)}`}
              onClick={() => setPanel({ key, open: true })}
            >
              {t("about.details")}
            </button>
          </div>
        ))}
      </div>

      <SidePanel
        open={panel.open}
        onClose={close}
        title={t(`about.${openKey}`)}
        icon={boxes.find(({ key }) => key === openKey).icon}
        closeLabel={t("about.close")}
      >
        {cvDetails[locale][openKey].map((item) => (
          <article className="cv-detail" key={item.title}>
            <h4 className="cv-detail__title">{item.title}</h4>
            <span className="cv-detail__meta">{item.meta}</span>
            {item.period && <span className="cv-detail__period">{item.period}</span>}
            {item.bullets && (
              <ul className="cv-detail__list">
                {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            )}
          </article>
        ))}
      </SidePanel>
    </>
  )
}

export default Info
