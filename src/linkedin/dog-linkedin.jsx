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

const DogLinkedInProfile = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const posts = [
    {
      profileImage: '/dog-profile.jpg',
      author: 'Loretta',
      meta: 'Professional Good Girl · 1mo · Edited',
      content: (
        <div>
          <p>Just had an amazing day at the park! 🐕</p>
          <p>Made some new friends and showed off my fetch skills! 🎾</p>
        </div>
      ),
    },
    {
      profileImage: '/dog-profile.jpg',
      author: 'Loretta',
      meta: 'Professional Good Girl · 3mo · Edited',
      content: (
        <div>
          <p>Looking for new opportunities in the treat industry! 🦴</p>
          <p>I have extensive experience in chicken.</p>
        </div>
      ),
    },
  ];

  const comments = [
    {
      name: 'Max',
      title: 'Professional Park Explorer',
      company: 'Central Park',
      date: '1mo',
      content: 'Your fetch skills are impressive! 🎾',
    },
    {
      name: 'Bella',
      title: 'Senior Good Girl',
      company: 'Dog Park',
      date: '2mo',
      content: 'Congratulations on your training! 🎓',
    },
    {
      name: 'Charlie',
      title: 'Treat Taster',
      company: 'Dog Treats Inc',
      date: '3mo',
      content: 'You would be perfect for our team! 🦴',
    },
  ];

  const experience = [
    {
      logo: '/urban-park.png',
      title: 'Urban Dog',
      company: 'New York City · Full-time',
      startDate: '2023-08-01',
      endDate: 'Present',
    },
    {
      logo: '/suburban-park.png',
      title: 'Suburban Dog',
      company: 'Kentucky · Full-time',
      startDate: '2018-02-01',
      endDate: '2023-08-01',
    },
  ];

  const education = [
    {
      logo: '/petco.png',
      title: 'Petco Positive Dog Training Program',
      company: 'Petco',
      startDate: '2023-11-01',
      endDate: '2024-01-01',
    },
  ];

  const skills = [
    {
      name: 'Advanced Fetch',
      endorsement: 'Central Park',
    },
    {
      name: 'Treat Tasting',
      endorsement: 'Dog Treats Inc',
    },
    {
      name: 'Being a Good Girl',
      endorsement: 'Paw Training Academy',
    },
  ];

  return (
    <div className="linkedin">
      <Navbar />
      <main className="main-content">
        <div className="profile-content">
          <ProfileHeader
            profileImage="/dog-profile.jpg"
            name="Loretta"
            headline="Professional Good Girl"
            location="New York, New York, United States"
            followers={500}
            connections={300}
            email="loretta@example.com"
            blogLink="/#/blog"
            portfolioLink="/#/portfolio"
            isDogProfile={true}
          />

          <ProfileCard title="About" id="about">
            <p>
              Expertise in park exploration, treat tasting, and tricks.
              Passionate about making new friends and spreading joy.
            </p>
          </ProfileCard>

          <ProfileCard title="Activity" id="activity">
            <div>500 followers</div>
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

          <ProfileCard title="Skills" id="skills">
            {skills.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
            <a href="#">Show all 12 skills →</a>
          </ProfileCard>

          <ProfileCard title="Recommendations" id="recommendations">
            <div className="tablist">
              <div className="tab active">Received</div>
            </div>
            <Recommendation
              name="Muddy Paws Rescue"
              title="Animal Rescue Organization"
              company="New York City"
              date="August 31, 2023, Muddy Paws Rescue worked with Loretta at their facility"
              content="At 5 years young, Loretta is the eldest of our Only Dogs pack. If Meryl Streep's Loretta is known for loving the stage, our Loretta should be known for her love of walks! And unlike her namesake, she's not too timid to lean in for a kiss or two 😘"
              link="https://www.instagram.com/muddypawsrescuenyc/reel/CwnJEhLgXzP/"
            />
          </ProfileCard>
        </div>
      </main>
    </div>
  );
};

export default DogLinkedInProfile;
