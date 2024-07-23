import React from "react";

const Tools = () => {
  const skills = [
    { skill: "GIT&Github", level: "Advanced" },
    { skill: "SCRUM", level: "Intermediate" },
    { skill: "Docker", level: "Basic" },
    { skill: "POO", level: "Intermediate" },
    { skill: "CI/CD", level: "Intermediate" },
    { skill: "Vercel", level: "Intermediate" },
  ];

  const halfLength = Math.ceil(skills.length / 2);
  const firstHalf = skills.slice(0, halfLength);
  const secondHalf = skills.slice(halfLength);
  return (
    <div className="skills__content">
      <h3 className="skills__title">Tools&Methodes</h3>

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

export default Tools;
