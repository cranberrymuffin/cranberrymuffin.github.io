import React from 'react';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="nav-left">
          <a
            className="linkedin-logo"
            href="https://www.linkedin.com/feed/"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              aria-hidden="true"
            >
              <path
                fill="#0a66c2"
                d="M34 2.5v29a2.5 2.5 0 0 1-2.5 2.5h-29A2.5 2.5 0 0 1 0 31.5v-29A2.5 2.5 0 0 1 2.5 0h29A2.5 2.5 0 0 1 34 2.5M10 13H5v16h5zm.45-5.5a2.88 2.88 0 0 0-2.86-2.9H7.5a2.9 2.9 0 0 0 0 5.8 2.88 2.88 0 0 0 2.95-2.81zM29 19.28c0-4.81-3.06-6.68-6.1-6.68a5.7 5.7 0 0 0-5.06 2.58h-.14V13H13v16h5v-8.51a3.32 3.32 0 0 1 3-3.58h.19c1.59 0 2.77 1 2.77 3.52V29h5z"
              />
            </svg>
          </a>
          <div className="search-box">
            <span className="search-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path d="M14.56 12.44 11.3 9.18a5.51 5.51 0 1 0-2.12 2.12l3.26 3.26a1.5 1.5 0 1 0 2.12-2.12M3 6.5A3.5 3.5 0 1 1 6.5 10 3.5 3.5 0 0 1 3 6.5"></path>
              </svg>
            </span>
            <input type="text" className="search-input" placeholder="Search" />
          </div>
        </div>
        <div className="nav-right">
          <a href="https://www.linkedin.com/feed/" className="nav-item">
            <span className="nav-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
              </svg>
            </span>
            <span>Home</span>
          </a>
          <a
            href="https://www.linkedin.com/mynetwork/grow/"
            className="nav-item"
          >
            <span className="nav-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
              </svg>
            </span>
            <span>My Network</span>
          </a>
          <a href="https://www.linkedin.com/jobs/" className="nav-item">
            <span className="nav-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
              </svg>
            </span>
            <span>Jobs</span>
          </a>
          <a href="https://www.linkedin.com/messaging/" className="nav-item">
            <span className="nav-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
              </svg>
            </span>
            <span>Messaging</span>
          </a>
          <a
            href="https://www.linkedin.com/notifications/"
            className="nav-item"
          >
            <span className="nav-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
              </svg>
            </span>
            <span>Notifications</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
