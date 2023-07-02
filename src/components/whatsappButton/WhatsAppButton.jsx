import React from 'react';
import '../whatsappButton/WhatsAppButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5492901440354', '_blank');
  };

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      <FontAwesomeIcon icon={faWhatsapp} />
    </button>
  );
};

export default WhatsAppButton;