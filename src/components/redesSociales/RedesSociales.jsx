import React from 'react';
import '../redesSociales/RedesSociales.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const RedesSociales = () => {
  return (
    <section className="redes-sociales">
      <h2>Síguenos en redes sociales</h2>
      <div className="social-icons">
        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </section>
  );
};

export default RedesSociales;