import React, { useState } from 'react';
import './linkedin.css';

const LinkedInProfile = () => {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <>
      <header className="navbar">
        <div className="nav-left">
          <div className="linkedin-logo">in</div>
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input type="text" className="search-input" placeholder="Search" />
          </div>
        </div>
        <div className="nav-right">
          <a href="https://www.linkedin.com/feed/" className="nav-item">
            <span className="nav-icon">🏠</span>
            <span>Home</span>
          </a>
          <a
            href="https://www.linkedin.com/mynetwork/grow/"
            className="nav-item"
          >
            <span className="nav-icon">👥</span>
            <span>My Network</span>
          </a>
          <a href="https://www.linkedin.com/jobs/" className="nav-item">
            <span className="nav-icon">💼</span>
            <span>Jobs</span>
          </a>
          <a href="https://www.linkedin.com/messaging/" className="nav-item">
            <span className="nav-icon">💬</span>
            <span>Messaging</span>
          </a>
          <a
            href="https://www.linkedin.com/notifications/"
            className="nav-item"
          >
            <span className="nav-icon">🔔</span>
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
                <h1>Aparna Natarajan</h1>
                <span className="verified-icon">✓</span>
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
                <>
                  <div class="post">
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
                        <span>Like</span>
                      </div>
                      <div class="post-action">
                        <span class="post-action-icon">💬</span>
                        <span>Comment</span>
                      </div>
                      <div class="post-action">
                        <span class="post-action-icon">🔄</span>
                        <span>Repost</span>
                      </div>
                      <div class="post-action">
                        <span class="post-action-icon">📤</span>
                        <span>Send</span>
                      </div>
                    </div>
                  </div>

                  <div class="post">
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
                        <span>Like</span>
                      </div>
                      <div class="post-action">
                        <span class="post-action-icon">💬</span>
                        <span>Comment</span>
                      </div>
                      <div class="post-action">
                        <span class="post-action-icon">🔄</span>
                        <span>Repost</span>
                      </div>
                      <div class="post-action">
                        <span class="post-action-icon">📤</span>
                        <span>Send</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {activeTab === 'comments' && (
                <>
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
                </>
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
                <div class="job-title">Gemini AI Akinator</div>
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
                    <a href="https://www.linkedin.com/in/bdettmer/">
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
                  class="job-title"
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
    </>
  );
};

export default LinkedInProfile;
