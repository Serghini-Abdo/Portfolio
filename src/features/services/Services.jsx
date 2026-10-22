import React from "react";
import "./services.css";
import SectionHeading from "../../components/ui/SectionHeading";
import CardGrid from "../../components/ui/CardGrid";
import services from "../../data/services";
import { useLocale } from "../../app/LocaleContext";

const Services = () => {
  const { t } = useLocale();
  return (
  <section className="services section" id="services">
    <SectionHeading title={t("services.title")} subtitle={t("services.subtitle")} />

    <CardGrid className="services__container container">
      {services.map((service) => (
        <article className="services__content" key={service.titleKey}>
          <i className={`${service.icon} services__icon`} aria-hidden="true"></i>
          <h3 className="services__title">{t(service.titleKey)}</h3>
          <p className="services__description">{t(service.descriptionKey)}</p>
        </article>
      ))}
    </CardGrid>
  </section>
  );
};

export default Services;
