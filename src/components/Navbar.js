import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/gen1">Gen1</Link></li>
        <li><Link to="/gen2">Gen2</Link></li>
        <li><Link to="/gen3">Gen3</Link></li>
        <li><Link to="/contact/Jeronimo">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
