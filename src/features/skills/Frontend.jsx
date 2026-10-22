import React from "react";
import { frontendSkills as skills } from "../../data/skills";

const Frontend = () => (
  <div className="skills__content">
    <h3 className="skills__title">Frontend developement</h3>

    <div className="skills__box">
      <div className="skills__group skills__group--grid">
        {skills.map((item) => (
          <div className="skills__data" key={item.skill}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">{item.skill}</h3>
              <span className="skills__level">{item.level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Frontend;
