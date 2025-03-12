import React, { useState, useRef } from 'react';
import './linkedin.css';

const LinkedInProfile = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const carouselRef = useRef(null);

  const scrollByAmount = 300 + 16; // Card width + gap

  const scrollLeft = () => {
    if (carouselRef.current) {
      const newScrollLeft = Math.max(
        carouselRef.current.scrollLeft - scrollByAmount,
        0,
      );
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const maxScrollLeft =
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      const newScrollLeft = Math.min(
        carouselRef.current.scrollLeft + scrollByAmount,
        maxScrollLeft,
      );
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div class="linkedin">
      <header className="navbar">
        <div class="nav-left">
          <a className="linkedin-logo" href="https://www.linkedin.com/feed/">
            in
          </a>
          <div class="search-box">
            <span class="search-icon">🔍</span>
            <input type="text" class="search-input" placeholder="Search" />
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
      </header>

      <main className="main-content">
        <div className="profile-content">
          <div className="profile-photo">
            <img src="./pro-pic-2.jpeg" alt="Aparna Natarajan" />
          </div>
          <section className="profile-section">
            <div className="profile-background"></div>
            <div className="profile-info">
              <div className="profile-name">
                <h1 className="name">Aparna Natarajan</h1>
              </div>
              <div className="profile-headline">Software Engineer</div>
              <div className="profile-location">
                New York, New York, United States ·{' '}
                <a href="/#/resume">Contact info</a>
              </div>
              <div className="profile-stats">
                <div className="profile-stat">
                  170 followers · 158 connections
                </div>
              </div>
              <div className="action-buttons">
                <a
                  href="mailto:aparnalovestocode@gmail.com"
                  className="primary-button"
                >
                  Message
                </a>
                <a href="/#/blog" className="secondary-button">
                  View my blog
                </a>
                <a href="/#/portfolio" className="secondary-button">
                  View my portfolio
                </a>
              </div>
            </div>
          </section>
          <section class="profile-card" id="about">
            <div class="card-header">
              <h2 class="card-title">About</h2>
            </div>
            <p>
              Software Engineer with 5 years of experience in mobile and web
              development. Currently on sabbatical at{' '}
              <a href="https://www.recurse.com/about">
                https://www.recurse.com/about
              </a>
            </p>
          </section>

          <section class="profile-card" id="activity">
            <div class="card-header">
              <h2 class="card-title">Activity</h2>
            </div>
            <div>170 followers</div>
            <div class="action-buttons">
              <div
                class={`info-button ${activeTab === 'posts' ? 'active' : ''}`}
                onClick={() => setActiveTab('posts')}
              >
                Posts
              </div>
              <div
                class={`info-button ${activeTab === 'comments' ? 'active' : ''}`}
                onClick={() => setActiveTab('comments')}
              >
                Comments
              </div>
            </div>
            <div class="activity-section">
              {activeTab === 'posts' && (
                <div class="carousel-container">
                  <button class="carousel-btn prev" onClick={scrollLeft}>
                    &lt;
                  </button>
                  <div class="carousel" ref={carouselRef}>
                    <div class="carousel-card">
                      <div class="post-header">
                        <div class="post-avatar">
                          <img src="/pro-pic-2.jpeg" alt="Aparna Natarajan" />
                        </div>
                        <div class="post-info">
                          <div class="post-author">Aparna Natarajan</div>
                          <div class="post-meta">
                            Software Engineer · 1mo · Edited
                          </div>
                        </div>
                        <div>⋯</div>
                      </div>
                      <div class="post-content">
                        <p>
                          I started blogging about the web graphics projects I
                          have been working on!
                        </p>
                        <p>
                          <a href="/#/blog/snowstorm">
                            Building Snowstorm ❄️: A Wintertime Web Game
                          </a>
                        </p>
                        <p>
                          <a href="/#/blog/valentine">
                            Building a 3D Heart ❤️ with Math
                          </a>
                        </p>
                      </div>
                      <div class="post-actions">
                        <div class="post-action">
                          <span class="post-action-icon">👍</span>
                        </div>
                        <div class="post-action">
                          <span class="post-action-icon">💬</span>
                        </div>
                        <div class="post-action">
                          <span class="post-action-icon">🔄</span>
                        </div>
                        <div class="post-action">
                          <span class="post-action-icon">📤</span>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-card">
                      <div class="post-header">
                        <div class="post-avatar">
                          <img src="/pro-pic-2.jpeg" alt="Aparna Natarajan" />
                        </div>
                        <div class="post-info">
                          <div class="post-author">Aparna Natarajan</div>
                          <div class="post-meta">
                            Software Engineer · 1mo · Edited
                          </div>
                        </div>
                        <div>⋯</div>
                      </div>
                      <div class="post-content">
                        <p>
                          I'm reaching out to my network for feedback on my{' '}
                          <a href="/#/resume">resume</a>!
                        </p>
                      </div>
                      <div class="post-actions">
                        <div class="post-action">
                          <span class="post-action-icon">👍</span>
                        </div>
                        <div class="post-action">
                          <span class="post-action-icon">💬</span>
                        </div>
                        <div class="post-action">
                          <span class="post-action-icon">🔄</span>
                        </div>
                        <div class="post-action">
                          <span class="post-action-icon">📤</span>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-card">
                      <div class="post-header">
                        <div class="post-avatar">
                          <img src="/pro-pic-2.jpeg" alt="Aparna Natarajan" />
                        </div>
                        <div class="post-info">
                          <div class="post-author">Aparna Natarajan</div>
                          <div class="post-meta">
                            Software Engineer · 3mo · Edited
                          </div>
                        </div>
                        <div>⋯</div>
                      </div>
                      <div class="post-content">
                        <p>
                          I will be participating in the Recurse Center's Winter
                          2, 2025 batch!
                        </p>
                      </div>
                      <div class="post-actions">
                        <div class="post-action">
                          <span class="post-action-icon">👍</span>
                        </div>
                        <div class="post-action">
                          <span class="post-action-icon">💬</span>
                        </div>
                        <div class="post-action">
                          <span class="post-action-icon">🔄</span>
                        </div>
                        <div class="post-action">
                          <span class="post-action-icon">📤</span>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-card">
                      <div class="post-header">
                        <div class="post-avatar">
                          <img src="/pro-pic-2.jpeg" alt="Aparna Natarajan" />
                        </div>
                        <div class="post-info">
                          <div class="post-author">Aparna Natarajan</div>
                          <div class="post-meta">
                            Software Engineer · 3mo · Edited
                          </div>
                        </div>
                        <div>⋯</div>
                      </div>
                      <div class="post-content">
                        <p>
                          Something new I am trying this year!{' '}
                          <a href="https://adventofcode.com/2024/">
                            https://adventofcode.com/2024/
                          </a>
                        </p>
                      </div>
                      <div class="post-actions">
                        <div class="post-action">
                          <span class="post-action-icon">👍</span>
                        </div>
                        <div class="post-action">
                          <span class="post-action-icon">💬</span>
                        </div>
                        <div class="post-action">
                          <span class="post-action-icon">🔄</span>
                        </div>
                        <div class="post-action">
                          <span class="post-action-icon">📤</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button class="carousel-btn next" onClick={scrollRight}>
                    &gt;
                  </button>
                </div>
              )}
              {activeTab === 'comments' && (
                <div class="comments-list">
                  <div class="comment">
                    <div class="post-info">
                      <div class="post-meta">
                        Aparna Natarajan · Software Engineer · 1mo
                      </div>
                    </div>
                    <div class="comment-content">Congrats!</div>
                  </div>
                  <div class="comment">
                    <div class="post-info">
                      <div class="post-meta">
                        Aparna Natarajan · Software Engineer · 1mo
                      </div>
                    </div>
                    <div class="comment-content">So exciting 🔥🔥🔥</div>
                  </div>
                  <div class="comment">
                    <div class="post-info">
                      <div class="post-meta">
                        Aparna Natarajan · Software Engineer · 1mo
                      </div>
                    </div>
                    <div class="comment-content">🔥🔥🔥</div>
                  </div>
                </div>
              )}
            </div>
          </section>

          <section class="profile-card" id="experience">
            <div class="card-header">
              <h2 class="card-title">Experience</h2>
            </div>
            <div class="experience-item">
              <div class="company-logo">
                <img src="./meta.png" alt="Meta logo" />
              </div>
              <div class="experience-details">
                <div class="job-title">Software Engineer</div>
                <div class="company-name">Meta · Full-time</div>
                <div class="job-duration">
                  May 2022 - Dec 2024 · 2 yrs 8 mos
                </div>
              </div>
            </div>
            <div class="experience-item">
              <div class="company-logo">
                <img src="./activision.jpg" alt="Activision logo" />
              </div>
              <div class="experience-details">
                <div class="job-title">Back End Developer</div>
                <div class="company-name">Activision · Part-time</div>
                <div class="job-duration">May 2021 - Dec 2021 · 8 mos</div>
              </div>
            </div>
            <div class="experience-item">
              <div class="company-logo">
                <img src="./jpmorgan.png" alt="JP Morgan logo" />
              </div>
              <div class="experience-details">
                <div class="job-title">Software Engineer</div>
                <div class="company-name">
                  J.P. Morgan Asset Management · Full-time
                </div>
                <div class="job-duration">Jul 2018 - Jul 2020 · 2 yrs 1 mo</div>
              </div>
            </div>
          </section>

          <section class="profile-card" id="education">
            <div class="card-header">
              <h2 class="card-title">Education</h2>
            </div>
            <div class="experience-item">
              <div class="company-logo">
                <img src="./brown.jpg" alt="Brown University logo" />
              </div>
              <div class="experience-details">
                <div class="job-title">Brown University</div>
                <div class="company-name">
                  Master of Science - MS, Computer Science
                </div>
                <div class="job-duration">2022</div>
              </div>
            </div>
            <div class="experience-item">
              <div class="company-logo">
                <img src="./umd.webp" alt="University of Maryland logo" />
              </div>
              <div class="experience-details">
                <div class="job-title">University of Maryland</div>
                <div class="company-name">
                  Bachelor of Science - BS, Computer Science
                </div>
                <div class="job-duration">2018</div>
              </div>
            </div>
          </section>

          <section class="profile-card" id="projects">
            <div class="card-header">
              <h2 class="card-title">Projects</h2>
            </div>
            <div class="experience-item">
              <div class="company-logo">
                <img src="./crystal-ball.png" alt="Project thumbnail" />
              </div>
              <div class="experience-details">
                <div class="job-title">
                  <a class="title-link" href="https://akinator.rcdis.co/">
                    Gemini AI Akinator
                  </a>
                </div>
                <div class="company-name">
                  LLM-powered Akinator game that guesses who you're thinking of
                  with dynamic yes/no questions. Built with React, Node.js,
                  Express, and Gemini AI. Deployed with Docker on Disco hosting.
                </div>
              </div>
            </div>
          </section>

          <section class="profile-card" id="skills">
            <div class="card-header">
              <h2 class="card-title">Skills</h2>
            </div>
            <div class="skill-item">
              <div class="skill-name">Google Gemini</div>
              <div class="skill-endorsement">
                <span>Gemini AI Akinator</span>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-name">Large Language Models (LLM)</div>
              <div class="skill-endorsement">
                <span>Gemini AI Akinator</span>
              </div>
            </div>
            <a href="https://github.com/cranberrymuffin#languages-and-tools">
              Show all 45 skills →
            </a>
          </section>

          <section class="profile-card" id="recommendations">
            <div class="card-header">
              <h2 class="card-title">Recommendations</h2>
            </div>
            <div class="tablist">
              <div class="tab active">Received</div>
            </div>
            <div class="recommendation">
              <div class="recommender">
                <div class="recommender-info">
                  <div class="recommender-name">
                    <a
                      className="title-link"
                      href="https://www.linkedin.com/in/bdettmer/"
                    >
                      Bradley Dettmer
                    </a>
                  </div>
                  <div class="company-name">
                    Staff Software Engineer at Hustle
                  </div>
                  <div class="job-duration">
                    February 5, 2025, Bradley worked with Aparna but they were
                    at different companies
                  </div>
                </div>
              </div>
              <div class="recommendation-text">
                <p>
                  Aparna is an amazing engineer with an ability to learn quickly
                  and integrate the right technologies to make a project
                  successful. She is also driven and hard working. While working
                  with her on building a multiplayer game, she quickly learned
                  how to use peerjs and zustand integrated them into the
                  project. She is fantastic and good to work with and I would
                  recommend her for any role that needs someone who can figure
                  things out and propel the team forward!
                </p>
              </div>
            </div>
          </section>

          <section class="profile-card" id="interests">
            <div class="card-header">
              <h2 class="card-title">Interests</h2>
            </div>
            <div class="tablist">
              <div class="tab active">Companies</div>
            </div>

            <div class="experience-item">
              <div class="company-logo">
                <i class="rc-scout__logo" />
              </div>
              <div class="experience-details">
                <a
                  class="job-title title-link"
                  href="https://www.recurse.com/scout/click?t=4f0d21efdf10880bb07e8f0ac2e22146"
                >
                  Recurse Center
                </a>
                <div class="company-name">4,516 followers</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LinkedInProfile;
