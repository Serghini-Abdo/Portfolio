import React, { useState } from "react";
import "./contact.css";

const contactLinks = [
  {
    icon: "uil uil-envelope",
    label: "Email",
    value: "Send a message",
    href: "#contact-form",
  },
  {
    icon: "uil uil-linkedin-alt",
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/abdelmoula-serghini/",
  },
  {
    icon: "uil uil-github",
    label: "GitHub",
    value: "See my repositories",
    href: "https://github.com/Serghini-Abdo",
  },
];

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = process.env.REACT_APP_CONTACT_EMAIL;

    if (!email) {
      setStatus("The contact form needs REACT_APP_CONTACT_EMAIL to be configured.");
      return;
    }

    const subject = encodeURIComponent(form.get("subject"));
    const message = encodeURIComponent(
      `From: ${form.get("name")} (${form.get("email"})\n\n${form.get("message")}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${message}`;
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Let&apos;s work together</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          {contactLinks.map((link) => (
            <a
              className="contact__card"
              href={link.href}
              key={link.label}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <i className={`${link.icon} contact__card-icon`} aria-hidden="true"></i>
              <span>
                <strong className="contact__card-title">{link.label}</strong>
                <small className="contact__card-data">{link.value}</small>
              </span>
              <i className="uil uil-arrow-up-right contact__card-arrow" aria-hidden="true"></i>
            </a>
          ))}
        </div>

        <form className="contact__form" id="contact-form" onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" required />
          </div>
          <div className="contact__form-group">
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" required />
          </div>
          <div className="contact__form-group">
            <label htmlFor="contact-subject">Subject</label>
            <input id="contact-subject" name="subject" type="text" required />
          </div>
          <div className="contact__form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="6" required />
          </div>
          <button className="button button--flex" type="submit">
            Send message <i className="uil uil-message button__icon" aria-hidden="true"></i>
          </button>
          {status && <p className="contact__status" role="status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
