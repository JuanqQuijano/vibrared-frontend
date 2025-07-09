import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Crearemos este archivo para estilos básicos

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">VibraRed  VibrandoJuntos</Link>
      <div className="navbar-links">
        <Link to="/posts">Publicaciones</Link>
        <Link to="/users">Usuarios</Link>
      </div>
    </nav>
  );
};

export default Navbar;
