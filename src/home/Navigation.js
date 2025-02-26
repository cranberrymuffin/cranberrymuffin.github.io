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
        <a id="nav-element" href="/snowstorm">
          Snowstorm
        </a>
        <a id="nav-element" href="/tic-tac-toe">
          Tic-Tac-Toe
        </a>
        <a id="nav-element" href="/valentine">
          Valentine
        </a>
        <a id="nav-element" href="https://akinator.rcdis.co/">
          Gemini AI Akinator
        </a>
        <a id="nav-element" href="/ascii-art">
          ASCII Art Generator
        </a>
        <a id="nav-element" href="/peerjs-video-chat">
          WebRTC Video Chat
        </a>
        <a id="nav-element" href="/#/blog">
          Writing
        </a>
      </div>
    </div>
  );
}
