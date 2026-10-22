import React from "react";
import "./services.css";
import SectionHeading from "../../components/ui/SectionHeading";
import services from "../../data/services";
import { useLocale } from "../../app/LocaleContext";

const Services = () => {
  const { t } = useLocale();
  return (
  <section className="services section" id="services">
    <SectionHeading title={t("services.title")} subtitle={t("services.subtitle")} />

    <div className="services__container container grid">
      {services.map((service) => (
        <article className="services__content" key={service.titleKey}>
          <i className={`${service.icon} services__icon`} aria-hidden="true"></i>
          <h3 className="services__title">{t(service.titleKey)}</h3>
          <p className="services__description">{t(service.descriptionKey)}</p>
        </article>
      ))}
    </div>
  </section>
  );
};

export default Services;
