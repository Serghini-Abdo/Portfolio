import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div>
          <h2 className="footer__title">Serghini.</h2>
          <span className="footer__subtitle">Full Stack Developer</span>
        </div>

        <div className="footer__links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/abdelmoula-serghini/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/Serghini-Abdo"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} Serghini Abdelmoula. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
