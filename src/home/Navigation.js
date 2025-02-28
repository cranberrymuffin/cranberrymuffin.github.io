import React, { useState } from 'react';
import './home.css';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="nav">
      {/* Hamburger menu for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Menu items */}
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
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
