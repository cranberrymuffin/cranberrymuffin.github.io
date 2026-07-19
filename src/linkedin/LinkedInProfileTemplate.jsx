import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import useSwapFavicon from '../hooks/useSwapFavicon';
import './linkedin.css';
import Navbar from './components/Navbar';
import ProfileHeader from './components/ProfileHeader';
import ProfileCard from './components/ProfileCard';
import ExperienceItem from './components/ExperienceItem';
import SkillItem from './components/SkillItem';
import Recommendation from './components/Recommendation';
import ActivitySection from './components/ActivitySection';

const LinkedInProfileTemplate = ({
  title,
  headerProps,
  about,
  followers,
  posts,
  comments,
  experience,
  education,
  skills,
  skillsFooter,
  recommendation,
  projects,
  children,
}) => {
  useSwapFavicon('/linkedin-favicon.svg');

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://raw.githack.com/Qwuke/recurse-ring/main/static/ring.js';
    script.type = 'text/javascript';
    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="linkedin">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Navbar />
      <main className="main-content">
        <div className="profile-content">
          <ProfileHeader {...headerProps} />

          <ProfileCard title="About" id="about">
            <p>{about}</p>
          </ProfileCard>
          <ActivitySection
            followers={followers}
            posts={posts}
            comments={comments}
          />

          {experience && (
            <ProfileCard title="Experience" id="experience">
              {experience.map((exp, index) => (
                <ExperienceItem key={index} {...exp} />
              ))}
            </ProfileCard>
          )}
          {education && (
            <ProfileCard title="Education" id="education">
              {education.map((edu, index) => (
                <ExperienceItem key={index} {...edu} />
              ))}
            </ProfileCard>
          )}
          {skills && (
            <ProfileCard title="Skills" id="skills">
              {skills.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
              {skillsFooter}
            </ProfileCard>
          )}
          {projects && (
            <ProfileCard title="Projects" id="projects">
              {projects.map((project, index) => (
                <ExperienceItem key={index} {...project} />
              ))}
            </ProfileCard>
          )}
          <ProfileCard title="Recommendations" id="recommendations">
            <div className="tablist">
              <div className="tab active">Received</div>
            </div>
            <Recommendation {...recommendation} />
          </ProfileCard>
          {children}
        </div>
      </main>
    </div>
  );
};

export default LinkedInProfileTemplate;
