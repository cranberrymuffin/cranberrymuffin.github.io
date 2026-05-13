import React from 'react';
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
  children,
}) => {
  useSwapFavicon('/linkedin-favicon.svg');

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

          <ProfileCard title="Skills" id="skills">
            {skills.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
            {skillsFooter}
          </ProfileCard>

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
