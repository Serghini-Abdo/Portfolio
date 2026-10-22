import React from "react";
import "./portfolio.css";
import SectionHeading from "../../components/ui/SectionHeading";
import projects from "../../data/projects";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <SectionHeading title="Portfolio" subtitle="Selected work" />

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
              <a className="portfolio__link" href={project.link} target="_blank" rel="noreferrer">
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
