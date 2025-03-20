import React, { useState, useRef } from 'react';
import './linkedin.css';
import Navbar from './components/Navbar';
import ProfileHeader from './components/ProfileHeader';
import ProfileCard from './components/ProfileCard';
import Post from './components/Post';
import ExperienceItem from './components/ExperienceItem';
import SkillItem from './components/SkillItem';
import Recommendation from './components/Recommendation';

const DogLinkedInProfile = () => {
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
      meta: 'Professional Good Girl · 2mo · Edited',
      content: (
        <div>
          <p>Just graduated from Advanced Obedience Training! 🎓</p>
          <p>Now I can sit, stay, and roll over with the best of them! 🐾</p>
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
          <p>
            I have extensive experience in belly rubs and being a good girl.
          </p>
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
      logo: '/central-park.png',
      title: 'Professional Park Explorer',
      company: 'Central Park · Full-time',
      duration: '2020 - Present · 4 yrs',
    },
    {
      logo: '/training-academy.png',
      title: 'Advanced Obedience Training',
      company: 'Paw Training Academy',
      duration: '2019 - 2020 · 1 yr',
    },
    {
      logo: '/dog-treats.png',
      title: 'Treat Taster',
      company: 'Dog Treats Inc · Part-time',
      duration: '2018 - 2019 · 1 yr',
    },
  ];

  const education = [
    {
      logo: '/training-academy.png',
      title: 'Paw Training Academy',
      company: 'Certified Good Girl',
      duration: '2020',
    },
  ];

  const projects = [
    {
      logo: '/dog-treats.png',
      title: 'Treat Testing Program',
      company:
        'Led a team of dogs in testing new treat flavors and textures. Achieved 100% satisfaction rate among testers.',
      link: 'https://example.com/treats',
    },
  ];

  const skills = [
    {
      name: 'Advanced Fetch',
      endorsement: 'Central Park',
    },
    {
      name: 'Belly Rubs',
      endorsement: 'Dog Park',
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
          />

          <ProfileCard title="About" id="about">
            <p>
              Experienced professional dog with expertise in park exploration,
              treat tasting, and being a good girl. Certified in advanced
              obedience and belly rub techniques. Passionate about making new
              friends and spreading joy through tail wags.
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
                <div className="carousel-container">
                  <button className="carousel-btn prev" onClick={scrollLeft}>
                    &lt;
                  </button>
                  <div className="carousel" ref={carouselRef}>
                    {posts.map((post, index) => (
                      <Post key={index} {...post} />
                    ))}
                  </div>
                  <button className="carousel-btn next" onClick={scrollRight}>
                    &gt;
                  </button>
                </div>
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
              name="Max"
              title="Professional Park Explorer"
              company="Central Park"
              date="February 15, 2024, Max worked with Loretta at Central Park"
              content="Loretta is the most enthusiastic and friendly dog I've ever met! Her energy is contagious, and she's always ready for an adventure. She's great with other dogs and humans alike. Her advanced fetch skills are truly impressive, and she's always willing to share her toys. I would highly recommend Loretta for any position that requires a positive attitude and excellent social skills!"
              link="#"
            />
          </ProfileCard>

          <ProfileCard title="Interests" id="interests">
            <div className="tablist">
              <div className="tab active">Companies</div>
            </div>
            <ExperienceItem
              logo="/dog-treats.png"
              title="Dog Treats Inc"
              company="300 connections"
              link="#"
            />
          </ProfileCard>
        </div>
      </main>
    </div>
  );
};

export default DogLinkedInProfile;
