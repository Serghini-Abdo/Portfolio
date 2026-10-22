import React from "react";
import { useLocale } from "../../app/LocaleContext";

const SkillGroup = ({ titleKey, items }) => {
  const { t } = useLocale();
  return (
    <div className="skills__content">
      <h3 className="skills__title">{t(titleKey)}</h3>
      <div className="skills__group">
        {items.map((item) => (
          <div className="skills__data" key={item.skill || item.skillKey}>
            <i className="bx bx-badge-check"></i>
            <h3 className="skills__name">{item.skillKey ? t(item.skillKey) : item.skill}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillGroup;
