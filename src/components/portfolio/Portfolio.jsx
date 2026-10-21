import React from "react";
import "./portfolio.css";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal website presenting my experience, skills, and selected work.",
    technologies: "React · CSS · Vercel",
    link: "https://github.com/Serghini-Abdo/Portfolio",
  },
  {
    title: "Frontend Applications",
    description:
      "Clean interfaces focused on responsive layouts, reusable components, and accessible interactions.",
    technologies: "React · JavaScript · Bootstrap",
    link: "https://github.com/Serghini-Abdo",
  },
  {
    title: "Full Stack Solutions",
    description:
      "Web applications that connect practical user experiences with maintainable backend services.",
    technologies: "Laravel · PHP · MySQL",
    link: "https://github.com/Serghini-Abdo",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Selected work</span>

      <div className="portfolio__container container grid">
        {projects.map((project) => (
          <article className="portfolio__card" key={project.title}>
            <div className="portfolio__preview" aria-hidden="true">
              <i className="uil uil-window-grid portfolio__preview-icon"></i>
            </div>
            <div className="portfolio__data">
              <h3 className="portfolio__title">{project.title}</h3>
              <p className="portfolio__description">{project.description}</p>
              <span className="portfolio__technologies">{project.technologies}</span>
              <a
                className="portfolio__link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                View project <i className="uil uil-arrow-up-right"></i>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
