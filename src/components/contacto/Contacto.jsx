import React from 'react';
import '../contacto/Contacto.css';

const Contacto = () => {
  return (
    <section id="contacto" className="section">
      <h2>Contacto</h2>
      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contacto;