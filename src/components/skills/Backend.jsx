import React from "react";

const Backend = () => {
  const skills = [
    { skill: "Python", level: "Intermediate" },
    { skill: "PHP", level: "Intermediate" },
    { skill: "Laravel", level: "Advanced" },
    { skill: "NodeJS", level: "Intermediate" },
    { skill: "MongoDB", level: "Intermediate" },
    { skill: "MySQL", level: "Intermediate" },
  ];

  const halfLength = Math.ceil(skills.length / 2);
  const firstHalf = skills.slice(0, halfLength);
  const secondHalf = skills.slice(halfLength);
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend developement</h3>

      <div className="skills__box">
        <div className="skills__group">
          {firstHalf.map((item, i) => {
            return (
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">{item.skill}</h3>
                  <span className="skills__level">{item.level}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="skills__group">
          {secondHalf.map((item, i) => {
            return (
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">{item.skill}</h3>
                  <span className="skills__level">{item.level}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Backend;
