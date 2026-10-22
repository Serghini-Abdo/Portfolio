import React from "react";
import "./services.css";

const services = [
  {
    icon: "uil uil-browser",
    title: "Frontend Development",
    description:
      "Responsive and accessible interfaces built with React, JavaScript, and modern CSS.",
  },
  {
    icon: "uil uil-server-network",
    title: "Backend Development",
    description:
      "Reliable APIs and server-side features using Laravel, PHP, Node.js, and databases.",
  },
  {
    icon: "uil uil-layer-group",
    title: "Full Stack Solutions",
    description:
      "End-to-end applications that connect polished user experiences with maintainable backends.",
  },
];

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I can build</span>

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
};

export default Services;
