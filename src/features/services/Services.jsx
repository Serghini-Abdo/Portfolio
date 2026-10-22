import React from "react";
import "./services.css";
import SectionHeading from "../../components/ui/SectionHeading";
import services from "../../data/services";

const Services = () => (
  <section className="services section" id="services">
    <SectionHeading title="Services" subtitle="What I can build" />

    <div className="services__container container grid">
      {services.map((service) => (
        <article className="services__content" key={service.title}>
          <i className={`${service.icon} services__icon`} aria-hidden="true"></i>
          <h3 className="services__title">{service.title}</h3>
          <p className="services__description">{service.description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Services;
