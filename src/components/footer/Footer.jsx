import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="redes-sociales">
        <h2>Síguenos en redes sociales</h2>
        <div className="social-icons">
          <a href="https://www.facebook.com/centrointegralautomotor">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com/centrointegraldelautomotor/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </section>
      <p className="footer-text">
        © 2023 Centro Integral del Automotor. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
