import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useSwapFavicon from '../hooks/useSwapFavicon';
import './linkedin.css';
import Navbar from './components/Navbar';
import ProfileHeader from './components/ProfileHeader';
import ProfileCard from './components/ProfileCard';
import Post from './components/Post';
import ExperienceItem from './components/ExperienceItem';
import SkillItem from './components/SkillItem';
import Recommendation from './components/Recommendation';
import Carousel from './components/Carousel';

const getRelativeTime = date => {
  const diffMs = Date.now() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);
  if (diffDays < 1) return 'just now';
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffWeeks < 4) return `${diffWeeks}w ago`;
  if (diffMonths < 12) return `${diffMonths}mo ago`;
  return `${diffYears}yr ago`;
};

const LinkedInProfile = () => {
  const [activeTab, setActiveTab] = useState('posts');

  useSwapFavicon('/linkedin-favicon.svg');

  const posts = [
    {
      date: new Date('2025-05-12'),
      profileImage: '/pro-pic-2.png',
      author: 'Aparna Natarajan',
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
      date: new Date('2025-08-15'),
      profileImage: '/pro-pic-2.png',
      author: 'Aparna Natarajan',
      content: (
        <div>
          <p>Check out my first iOS App:</p>
          <a
            className="link-preview"
            href="https://apps.apple.com/us/app/run-hike-walk-path-recorder/id6749169358"
            target="_blank"
            rel="noreferrer"
          >
            <div className="link-preview-domain">apps.apple.com</div>
            <div className="link-preview-title">
              Run Hike Walk - Path Recorder
            </div>
          </a>
        </div>
      ),
    },
    {
      date: new Date('2026-01-15'),
      profileImage: '/pro-pic-2.png',
      author: 'Aparna Natarajan',
      content: (
        <div>
          <p>Take a survey to help me gather data for my social app!</p>
          <a
            className="link-preview"
            href="https://forms.gle/vX9Yjg7KtjCyCtkD6"
            target="_blank"
            rel="noreferrer"
          >
            <div className="link-preview-domain">forms.gle</div>
            <div className="link-preview-title">
              Your Relationships and Meaningful Moments
            </div>
          </a>
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
      logo: '/paperless-post.png',
      title: 'Software Engineer',
      company: 'Paperless Post · Full-time',
      startDate: '2025-04-01',
      endDate: 'Present',
    },
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
      logo: '/pathrecorder.png',
      title: 'Path Recorder',
      company: 'An iOS app that tracks and visualizes your foot paths.',
      link: 'https://apps.apple.com/us/app/run-hike-walk-path-recorder/id6749169358',
    },
  ];

  const skills = [
    {
      name: 'React',
      endorsement: 'Paperless Post',
    },
    {
      name: 'Android',
      endorsement: 'Meta',
    },
    {
      name: 'iOS',
      endorsement: 'Path Recorder',
    },
  ];

  return (
    <div className="linkedin">
      <Helmet>
        <title>Aparna Natarajan</title>
      </Helmet>
      <Navbar />
      <main className="main-content">
        <div className="profile-content">
          <ProfileHeader
            profileImage="/pro-pic-2.png"
            name="Aparna Natarajan"
            headline="Software Engineer"
            location="New York, New York, United States"
            followers={291}
            connections={291}
            email="aparnalovestocode@gmail.com"
            resumeLink="/#/resume"
            dogLink="/#/linkedin/dog"
          />

          <ProfileCard title="About" id="about">
            <p>
              Software Engineer with 6+ years of experience in mobile and web
              development.
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
                  {[...posts]
                    .sort((a, b) => b.date - a.date)
                    .map((post, index) => (
                      <Post
                        key={index}
                        {...post}
                        meta={`Software Engineer · ${getRelativeTime(post.date)}`}
                      />
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
