import React from "react";
import { backendSkills as skills } from "../../data/skills";
import { useLocale } from "../../app/LocaleContext";

const Backend = () => {
  const { t } = useLocale();
  const halfLength = Math.ceil(skills.length / 2);
  const firstHalf = skills.slice(0, halfLength);
  const secondHalf = skills.slice(halfLength);

  return (
    <div className="skills__content">
      <h3 className="skills__title">{t("skills.backend")}</h3>
      <div className="skills__box">
        {[firstHalf, secondHalf].map((group, index) => (
          <div className="skills__group" key={index}>
            {group.map((item) => (
              <div className="skills__data" key={item.skill}>
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">{item.skill}</h3>
                  <span className="skills__level">{t(item.levelKey)}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Backend;
