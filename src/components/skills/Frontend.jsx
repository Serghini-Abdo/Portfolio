import React from "react";

const Frontend = () => {
  const skills = [
    { skill: "HTML", level: "Advanced" },
    { skill: "CSS", level: "Intermediate" },
    { skill: "Javascript", level: "Intermediate" },
    { skill: "Bootstrap", level: "Intermediate" },
    { skill: "React", level: "Advanced" },
  ];

  const halfLength = Math.ceil(skills.length / 2);
  const firstHalf = skills.slice(0, halfLength);
  const secondHalf = skills.slice(halfLength);
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend developement</h3>

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

export default Frontend;
