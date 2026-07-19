import React from 'react';
import LinkedInProfileTemplate from './LinkedInProfileTemplate';
import ProfileCard from './components/ProfileCard';
import ExperienceItem from './components/ExperienceItem';
import { getRelativeTime } from './utils/dateUtils';

const posts = [
  {
    date: new Date('2026-07-14'),
    profileImage: '/pro-pic-2.png',
    author: 'Aparna Natarajan',
    content: (
      <div>
        <a style={{ color: 'inherit' }} href="/#/blog/get-up">
          <p>
            On Tuesday night I was attacked while running on the East River
            walkway. After taking the minimum amount of PTO, I wanted to share
            my career reflections:
          </p>
          <p>
            1. When you fall down you can get back up.
            <br />
            2. People can join your network in unexpected ways. <br />
            3. Your head is your biggest asset
          </p>
        </a>
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
    logo: '/rc-scout.png',
    title: 'Recurse Center',
    company: 'Winter 2, 2025',
    link: 'https://www.recurse.com/scout/click?t=4f0d21efdf10880bb07e8f0ac2e22146',
  },
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
  { name: 'React', endorsement: 'Paperless Post' },
  { name: 'Android', endorsement: 'Meta' },
  { name: 'iOS', endorsement: 'Path Recorder' },
];

const LinkedInProfile = () => {
  const formattedPosts = [...posts]
    .sort((a, b) => b.date - a.date)
    .map(post => ({
      ...post,
      meta: `Software Engineer · ${getRelativeTime(post.date)}`,
    }));

  return (
    <LinkedInProfileTemplate
      title="Aparna Natarajan"
      headerProps={{
        profileImage: '/pro-pic-2.png',
        name: 'Aparna Natarajan',
        headline: 'Software Engineer',
        location: 'New York, New York, United States',
        followers: 291,
        connections: 291,
        email: 'aparnalovestocode@gmail.com',
        resumeLink: '/#/resume',
        dogLink: '/#/linkedin/dog',
      }}
      about="Software Engineer with 6+ years of experience in mobile and web development."
      followers={170}
      posts={formattedPosts}
      comments={comments}
      experience={experience}
      education={education}
      skills={skills}
      skillsFooter={
        <a href="https://github.com/cranberrymuffin#languages-and-tools">
          Show all 45 skills →
        </a>
      }
      recommendation={{
        name: 'Bradley Dettmer',
        title: 'Staff Software Engineer',
        company: 'Hustle',
        date: 'February 5, 2025, Bradley worked with Aparna but they were at different companies',
        content:
          'Aparna is an amazing engineer with an ability to learn quickly and integrate the right technologies to make a project successful. She is also driven and hard working. While working with her on building a multiplayer game, she quickly learned how to use peerjs and zustand integrated them into the project. She is fantastic and good to work with and I would recommend her for any role that needs someone who can figure things out and propel the team forward!',
        link: 'https://www.linkedin.com/in/bdettmer/',
      }}
      projects={projects}
    >
      <ProfileCard title="Interests" id="interests">
        <div className="tablist">
          <div className="tab active">Organizations</div>
        </div>
        <a
          id="rc-ring-home"
          data-rc-uuid="e31fb97f-d813-4593-83a1-682e7de3d896"
          href="https://ring.recurse.com/"
          className="experience-item"
        >
          <div className="company-logo">
            <img src="/rc-scout.png" alt="Recurse Center logo" />
          </div>
          <div className="experience-details">
            <div className="job-title">The Recurse Webring</div>
            <div className="webring-links">
              <a id="rc-ring-prev" href="https://ring.recurse.com/prev?id=75">
                ←
              </a>
              <a id="rc-ring-rand" href="https://ring.recurse.com/rand">
                Random
              </a>
              <a id="rc-ring-next" href="https://ring.recurse.com/next?id=75">
                →
              </a>
            </div>
          </div>
        </a>
      </ProfileCard>
    </LinkedInProfileTemplate>
  );
};

export default LinkedInProfile;
