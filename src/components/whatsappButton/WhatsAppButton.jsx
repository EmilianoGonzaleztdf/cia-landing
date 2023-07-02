import React from 'react';
import '../whatsappButton/WhatsAppButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  const handleClick = () => {
    // Lógica para abrir la ventana de chat de WhatsApp
    // Puedes utilizar la API de WhatsApp o redirigir a un enlace de WhatsApp
  };

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      <FontAwesomeIcon icon={faWhatsapp} />
    </button>
  );
};

export default WhatsAppButton;