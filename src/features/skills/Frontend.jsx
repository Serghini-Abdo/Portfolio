import React from "react";
import { frontendSkills as skills } from "../../data/skills";
import { useLocale } from "../../app/LocaleContext";

const Frontend = () => <FrontendContent />;

const FrontendContent = () => {
  const { t } = useLocale();
  return (
  <div className="skills__content">
    <h3 className="skills__title">{t("skills.frontend")}</h3>

    <div className="skills__box">
      <div className="skills__group skills__group--grid">
        {skills.map((item) => (
          <div className="skills__data" key={item.skill}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">{item.skill}</h3>
              <span className="skills__level">{t(item.levelKey)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Frontend;
