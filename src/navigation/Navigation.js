import React, { useState } from 'react';
import './navigation.css';

export default function Navigation({ textColor = '#000000' }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="nav" style={{ '--nav-text-color': textColor }}>
      {/* Hamburger menu for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Menu items */}
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <a id="nav-element" href="/">
          Home
        </a>
        <a id="nav-element" href="/#/portfolio">
          Portfolio
        </a>
        <a id="nav-element" href="/#/resume">
          Resume
        </a>
        <a id="nav-element" href="/#/blog">
          Writing
        </a>
      </div>
    </div>
  );
}
