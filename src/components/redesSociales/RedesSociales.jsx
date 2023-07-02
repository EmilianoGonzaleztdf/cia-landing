import React from 'react';
import '../redesSociales/RedesSociales.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const RedesSociales = () => {
  return (
    <section className="redes-sociales">
      <h2>Síguenos en redes sociales</h2>
      <div className="social-icons">
        <a href="https://www.facebook.com/centrointegralautomotor"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="https://www.instagram.com/centrointegraldelautomotor/"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </section>
  );
};

export default RedesSociales;