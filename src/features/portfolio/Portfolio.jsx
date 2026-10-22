import React from "react";
import "./portfolio.css";
import SectionHeading from "../../components/ui/SectionHeading";
import CardGrid from "../../components/ui/CardGrid";
import projects from "../../data/projects";
import { useLocale } from "../../app/LocaleContext";

const Portfolio = () => {
  const { t } = useLocale();
  return (
    <section className="portfolio section" id="portfolio">
      <SectionHeading title={t("portfolio.title")} subtitle={t("portfolio.subtitle")} />

      <CardGrid className="portfolio__container container">
        {projects.map((project) => (
          <article className="portfolio__card" key={project.titleKey}>
            <div className="portfolio__preview" aria-hidden="true">
              <i className="uil uil-window-grid portfolio__preview-icon"></i>
            </div>
            <div className="portfolio__data">
              <h3 className="portfolio__title">{t(project.titleKey)}</h3>
              <p className="portfolio__description">{t(project.descriptionKey)}</p>
              <span className="portfolio__technologies">{project.technologies}</span>
              <a className="portfolio__link" href={project.link} target="_blank" rel="noreferrer">
                {t("portfolio.viewProject")} <i className="uil uil-arrow-up-right"></i>
              </a>
            </div>
          </article>
        ))}
      </CardGrid>
    </section>
  );
};

export default Portfolio;
