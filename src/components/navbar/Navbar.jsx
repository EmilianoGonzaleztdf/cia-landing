import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" className="navbar-logo" />
        Centro Integral del Automotor
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="/empresa">Empresa</Link>
        </li>
        <li className="nav-item">
          <Link to="/productos">Productos</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

