import React from 'react';

const ProfileHeader = ({
  profileImage,
  name,
  headline,
  location,
  followers,
  connections,
  email,
  blogLink,
  portfolioLink,
}) => {
  return (
    <section className="profile-section">
      <div className="profile-background"></div>
      <div className="profile-info">
        <div className="profile-name">
          <h1 className="name">{name}</h1>
        </div>
        <div className="profile-headline">{headline}</div>
        <div className="profile-location">
          {location} · <a href="/#/resume">Contact info</a>
        </div>
        <div className="profile-stats">
          <div className="profile-stat">
            {followers} followers · {connections} connections
          </div>
        </div>
        <div className="action-buttons">
          <a href={`mailto:${email}`} className="primary-button">
            Message
          </a>
          <a href={blogLink} className="secondary-button">
            View my blog
          </a>
          <a href={portfolioLink} className="secondary-button">
            View my portfolio
          </a>
        </div>
      </div>
      <div className="profile-photo">
        <img src={profileImage} alt={name} />
      </div>
    </section>
  );
};

export default ProfileHeader;
