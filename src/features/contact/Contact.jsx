import React, { useEffect, useState } from "react";
import "./contact.css";
import MailAnimation from "./MailAnimation";
import Button from "../../components/ui/Button";
import SectionHeading from "../../components/ui/SectionHeading";
import contactLinks from "../../data/contactLinks";
import { sendContactMessage } from "../../services/contactApi";
import { useLocale } from "../../app/LocaleContext";

const Contact = () => {
  const { t } = useLocale();
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!status || status === "sending") {
      return undefined;
    }

    const timeout = setTimeout(() => setStatus(""), 4000);
    return () => clearTimeout(timeout);
  }, [status]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const formElement = event.currentTarget;
    const values = Object.fromEntries(form.entries());
    const nextErrors = {};

    if (!values.name.trim()) nextErrors.name = "contact.nameRequired";
    if (!values.email.trim()) {
      nextErrors.email = "contact.emailRequired";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = "contact.invalidEmail";
    }
    if (!values.subject.trim()) nextErrors.subject = "contact.subjectRequired";
    if (!values.message.trim()) nextErrors.message = "contact.messageRequired";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("");
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      await sendContactMessage(values);
      formElement.reset();
      setStatus("sent");
    } catch (error) {
      setStatus("failed");
    }
  };

  return (
    <section className="contact section" id="contact">
      <SectionHeading title={t("contact.title")} subtitle={t("contact.subtitle")} />

      <div className="contact__container container grid">
        <div className="contact__content">
          {contactLinks.map((link) => (
            <a
              className="contact__card"
              href={link.href}
              key={link.labelKey}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <i className={`${link.icon} contact__card-icon`} aria-hidden="true"></i>
              <span>
                <strong className="contact__card-title">{t(link.labelKey)}</strong>
                <small className="contact__card-data">{t(link.valueKey)}</small>
              </span>
              <i className="uil uil-arrow-up-right contact__card-arrow" aria-hidden="true"></i>
            </a>
          ))}
        </div>

        <form className="contact__form" id="contact-form" noValidate onSubmit={handleSubmit}>
          <input className="contact__honeypot" name="website" type="text" tabIndex="-1" autoComplete="off" aria-hidden="true" />
          <div className="contact__form-group">
            <label className={errors.name ? "contact__field-error" : ""} htmlFor="contact-name">{t("contact.name")}</label>
            <input className={errors.name ? "contact__field-error" : ""} id="contact-name" name="name" type="text" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} />
            {errors.name && <span className="contact__error" id="contact-name-error">{t(errors.name)}</span>}
          </div>
          <div className="contact__form-group">
            <label className={errors.email ? "contact__field-error" : ""} htmlFor="contact-email">{t("contact.emailField")}</label>
            <input className={errors.email ? "contact__field-error" : ""} id="contact-email" name="email" type="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} />
            {errors.email && <span className="contact__error" id="contact-email-error">{t(errors.email)}</span>}
          </div>
          <div className="contact__form-group">
            <label className={errors.subject ? "contact__field-error" : ""} htmlFor="contact-subject">{t("contact.subject")}</label>
            <input className={errors.subject ? "contact__field-error" : ""} id="contact-subject" name="subject" type="text" aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? "contact-subject-error" : undefined} />
            {errors.subject && <span className="contact__error" id="contact-subject-error">{t(errors.subject)}</span>}
          </div>
          <div className="contact__form-group">
            <label className={errors.message ? "contact__field-error" : ""} htmlFor="contact-message">{t("contact.message")}</label>
            <textarea className={errors.message ? "contact__field-error" : ""} id="contact-message" name="message" rows="6" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} />
            {errors.message && <span className="contact__error" id="contact-message-error">{t(errors.message)}</span>}
          </div>
          <Button type="submit">
            {t("contact.send")} <i className="uil uil-message button__icon" aria-hidden="true"></i>
          </Button>
          {status && (
            <div className="contact__status contact__status--toast" role="status">
              <span>{t(`contact.${status}`)}</span>
              <button
                className="contact__status-close"
                type="button"
                aria-label={t("contact.close")}
                onClick={() => setStatus("")}
              >
                ×
              </button>
            </div>
          )}
        </form>

        <MailAnimation />
      </div>
    </section>
  );
};

export default Contact;
