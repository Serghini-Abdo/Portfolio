import React from "react";
import { toolSkills as skills } from "../../data/skills";

const Tools = () => {
  const halfLength = Math.ceil(skills.length / 2);
  const firstHalf = skills.slice(0, halfLength);
  const secondHalf = skills.slice(halfLength);

  return (
    <div className="skills__content">
      <h3 className="skills__title">Tools&Methodes</h3>
      <div className="skills__box">
        {[firstHalf, secondHalf].map((group, index) => (
          <div className="skills__group" key={index}>
            {group.map((item) => (
              <div className="skills__data" key={item.skill}>
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">{item.skill}</h3>
                  <span className="skills__level">{item.level}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
