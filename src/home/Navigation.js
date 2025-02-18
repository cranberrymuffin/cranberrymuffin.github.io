import React, { useState } from "react";
import "./home.css";

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
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <a id="nav-element" href="/#/resume">
          Resume
        </a>
        <a id="nav-element" href="/#/snowstorm">
          snowstorm
        </a>
        <a id="nav-element" href="/#/tic-tac-toe">
          tic-tac-toe
        </a>
        <a id="nav-element" href="/#/valentine">
          valentine
        </a>
        <a id="nav-element" href="https://akinator.rcdis.co/">
          gemini ai akinator
        </a>
        <a id="nav-element" href="/#/blog">
          writing
        </a>
      </div>
    </div>
  );
}
