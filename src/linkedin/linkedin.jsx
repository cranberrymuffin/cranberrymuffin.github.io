import React, { useState } from 'react';
import './linkedin.css';
import Navbar from './components/Navbar';
import ProfileHeader from './components/ProfileHeader';
import ProfileCard from './components/ProfileCard';
import Post from './components/Post';
import ExperienceItem from './components/ExperienceItem';
import SkillItem from './components/SkillItem';
import Recommendation from './components/Recommendation';
import Carousel from './components/Carousel';

const LinkedInProfile = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const posts = [
    {
      profileImage: '/pro-pic-2.png',
      author: 'Aparna Natarajan',
      meta: 'Software Engineer · 1mo · Edited',
      content: (
        <div>
          <p>
            I started blogging about the web graphics projects I have been
            working on!
          </p>
          <p>
            <a href="/#/blog/snowstorm">
              Building Snowstorm ❄️: A Wintertime Web Game
            </a>
          </p>
          <p>
            <a href="/#/blog/valentine">Building a 3D Heart ❤️ with Math</a>
          </p>
        </div>
      ),
    },
    {
      profileImage: '/pro-pic-2.png',
      author: 'Aparna Natarajan',
      meta: 'Software Engineer · 1mo · Edited',
      content: (
        <div>
          <p>
            I'm reaching out to my network for feedback on my{' '}
            <a href="/#/resume">resume</a>!
          </p>
        </div>
      ),
    },
    {
      profileImage: '/pro-pic-2.png',
      author: 'Aparna Natarajan',
      meta: 'Software Engineer · 3mo · Edited',
      content: (
        <div>
          <p>
            I will be participating in the Recurse Center's Winter 2, 2025
            batch!
          </p>
        </div>
      ),
    },
    {
      profileImage: '/pro-pic-2.png',
      author: 'Aparna Natarajan',
      meta: 'Software Engineer · 3mo · Edited',
      content: (
        <div>
          <p>
            Something new I am trying this year!{' '}
            <a href="https://adventofcode.com/2024/">
              https://adventofcode.com/2024/
            </a>
          </p>
        </div>
      ),
    },
  ];

  const comments = [
    {
      name: 'Aparna Natarajan',
      title: 'Software Engineer',
      company: 'Meta',
      date: '1mo',
      content: 'Congrats!',
    },
    {
      name: 'Aparna Natarajan',
      title: 'Software Engineer',
      company: 'Meta',
      date: '1mo',
      content: 'So exciting 🔥🔥🔥',
    },
    {
      name: 'Aparna Natarajan',
      title: 'Software Engineer',
      company: 'Meta',
      date: '1mo',
      content: '🔥🔥🔥',
    },
  ];

  const experience = [
    {
      logo: '/meta.png',
      title: 'Software Engineer',
      company: 'Meta · Full-time',
      startDate: '2022-05-01',
      endDate: '2024-12-01',
    },
    {
      logo: '/activision.jpg',
      title: 'Back End Developer',
      company: 'Activision · Part-time',
      startDate: '2021-05-01',
      endDate: '2021-12-01',
    },
    {
      logo: '/jpmorgan.png',
      title: 'Software Engineer',
      company: 'J.P. Morgan Asset Management · Full-time',
      startDate: '2018-07-01',
      endDate: '2020-07-01',
    },
  ];

  const education = [
    {
      logo: '/brown.jpg',
      title: 'Brown University',
      company: 'Master of Science - MS, Computer Science',
      duration: '2022',
    },
    {
      logo: '/umd.webp',
      title: 'University of Maryland',
      company: 'Bachelor of Science - BS, Computer Science',
      duration: '2018',
    },
  ];

  const projects = [
    {
      logo: '/crystal-ball.png',
      title: 'Gemini AI Akinator',
      company:
        "LLM-powered Akinator game that guesses who you're thinking of with dynamic yes/no questions. Built with React, Node.js, Express, and Gemini AI. Deployed with Docker on Disco hosting.",
      link: 'https://akinator.rcdis.co/',
    },
  ];

  const skills = [
    {
      name: 'Google Gemini',
      endorsement: 'Gemini AI Akinator',
    },
    {
      name: 'Large Language Models (LLM)',
      endorsement: 'Gemini AI Akinator',
    },
  ];

  return (
    <div className="linkedin">
      <Navbar />
      <main className="main-content">
        <div className="profile-content">
          <ProfileHeader
            profileImage="/pro-pic-2.png"
            name="Aparna Natarajan"
            headline="Software Engineer"
            location="New York, New York, United States"
            followers={170}
            connections={158}
            email="aparnalovestocode@gmail.com"
            blogLink="/#/blog"
            portfolioLink="/#/portfolio"
          />

          <ProfileCard title="About" id="about">
            <p>
              Software Engineer with 5 years of experience in mobile and web
              development. Currently on sabbatical at{' '}
              <a href="https://www.recurse.com/about">
                https://www.recurse.com/about
              </a>
            </p>
          </ProfileCard>

          <ProfileCard title="Activity" id="activity">
            <div>170 followers</div>
            <div className="action-buttons">
              <div
                className={`info-button ${activeTab === 'posts' ? 'active' : ''}`}
                onClick={() => setActiveTab('posts')}
              >
                Posts
              </div>
              <div
                className={`info-button ${activeTab === 'comments' ? 'active' : ''}`}
                onClick={() => setActiveTab('comments')}
              >
                Comments
              </div>
            </div>
            <div className="activity-section">
              {activeTab === 'posts' && (
                <Carousel>
                  {posts.map((post, index) => (
                    <Post key={index} {...post} />
                  ))}
                </Carousel>
              )}
              {activeTab === 'comments' && (
                <div className="comments-list">
                  {comments.map((comment, index) => (
                    <div key={index} className="comment">
                      <div className="post-info">
                        <div className="post-meta">
                          {comment.name} · {comment.title} · {comment.date}
                        </div>
                      </div>
                      <div className="comment-content">{comment.content}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </ProfileCard>

          <ProfileCard title="Experience" id="experience">
            {experience.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </ProfileCard>

          <ProfileCard title="Education" id="education">
            {education.map((edu, index) => (
              <ExperienceItem key={index} {...edu} />
            ))}
          </ProfileCard>

          <ProfileCard title="Projects" id="projects">
            {projects.map((project, index) => (
              <ExperienceItem key={index} {...project} />
            ))}
          </ProfileCard>

          <ProfileCard title="Skills" id="skills">
            {skills.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
            <a href="https://github.com/cranberrymuffin#languages-and-tools">
              Show all 45 skills →
            </a>
          </ProfileCard>

          <ProfileCard title="Recommendations" id="recommendations">
            <div className="tablist">
              <div className="tab active">Received</div>
            </div>
            <Recommendation
              name="Bradley Dettmer"
              title="Staff Software Engineer"
              company="Hustle"
              date="February 5, 2025, Bradley worked with Aparna but they were at different companies"
              content="Aparna is an amazing engineer with an ability to learn quickly and integrate the right technologies to make a project successful. She is also driven and hard working. While working with her on building a multiplayer game, she quickly learned how to use peerjs and zustand integrated them into the project. She is fantastic and good to work with and I would recommend her for any role that needs someone who can figure things out and propel the team forward!"
              link="https://www.linkedin.com/in/bdettmer/"
            />
          </ProfileCard>

          <ProfileCard title="Interests" id="interests">
            <div className="tablist">
              <div className="tab active">Companies</div>
            </div>
            <ExperienceItem
              logo="/rc-scout.png"
              title="Recurse Center"
              company="4,516 followers"
              link="https://www.recurse.com/scout/click?t=4f0d21efdf10880bb07e8f0ac2e22146"
            />
          </ProfileCard>
        </div>
      </main>
    </div>
  );
};

export default LinkedInProfile;
