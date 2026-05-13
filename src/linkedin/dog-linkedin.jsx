import React from 'react';
import LinkedInProfileTemplate from './LinkedInProfileTemplate';
import ProfileCard from './components/ProfileCard';
import ExperienceItem from './components/ExperienceItem';

const posts = [
  {
    profileImage: '/dog-profile.jpg',
    author: 'Loretta',
    meta: 'Professional Good Girl · 1wk ago',
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
    meta: 'Professional Good Girl · 3mo ago',
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
  { name: 'Advanced Fetch', endorsement: 'Central Park' },
  { name: 'Treat Tasting', endorsement: 'Dog Treats Inc' },
  { name: 'Being a Good Girl', endorsement: 'Paw Training Academy' },
];

const DogLinkedInProfile = () => (
  <LinkedInProfileTemplate
    title="Loretta"
    headerProps={{
      profileImage: '/dog-profile.jpg',
      name: 'Loretta',
      headline: 'Professional Good Girl',
      location: 'New York, New York, United States',
      followers: 500,
      connections: 300,
      email: 'loretta@example.com',
      isDogProfile: true,
      blogLink: '/#/blog',
      portfolioLink: '/#/portfolio',
    }}
    about="Expertise in park exploration, treat tasting, and tricks. Passionate about making new friends and spreading joy."
    followers={500}
    posts={posts}
    comments={comments}
    experience={experience}
    education={education}
    skills={skills}
    recommendation={{
      name: 'Muddy Paws Rescue',
      title: 'Animal Rescue Organization',
      company: 'New York City',
      date: 'August 31, 2023, Muddy Paws Rescue worked with Loretta at their facility',
      content:
        "At 5 years young, Loretta is the eldest of our Only Dogs pack. If Meryl Streep's Loretta is known for loving the stage, our Loretta should be known for her love of walks! And unlike her namesake, she's not too timid to lean in for a kiss or two 😘",
      link: 'https://www.instagram.com/muddypawsrescuenyc/reel/CwnJEhLgXzP/',
    }}
  >
    <ProfileCard title="Interests" id="interests">
      <div className="tablist">
        <div className="tab active">Companies</div>
      </div>
      <ExperienceItem
        logo="/muddy-paws.png"
        title="Muddy Paws Rescue"
        company="13,200 followers"
        link="https://www.muddypawsrescue.org/"
      />
    </ProfileCard>
  </LinkedInProfileTemplate>
);

export default DogLinkedInProfile;
