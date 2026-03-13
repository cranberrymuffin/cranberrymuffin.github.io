import React from 'react';

const ProfileHeader = ({
  profileImage,
  name,
  headline,
  location,
  followers,
  connections,
  email,
  resumeLink,
  dogLink,
  isDogProfile = false,
}) => {
  return (
    <section className="profile-section">
      <div
        className={`profile-background ${isDogProfile ? 'dog-profile' : ''}`}
      ></div>
      <div className="profile-info">
        <div className="profile-name">
          <h1 className="name">{name}</h1>
          <span className="verified-icon">✓</span>
        </div>
        <div className="profile-headline">{headline}</div>
        <div className="profile-location">
          {location}
          {!isDogProfile && (
            <>
              {' '}
              · <a href="/#/resume">Contact info</a>
            </>
          )}
        </div>
        <div className="profile-stats">
          <div className="profile-stat">
            {followers} followers · {connections} connections
          </div>
        </div>
        {!isDogProfile && (
          <div className="action-buttons">
            <a href={`mailto:${email}`} className="primary-button">
              Message
            </a>
            <a href={resumeLink} className="secondary-button">
              View my resume
            </a>
            <a href={dogLink} className="secondary-button">
              Meet my dog
            </a>
          </div>
        )}
      </div>
      <div className="profile-photo">
        <img src={profileImage} alt={name} />
      </div>
    </section>
  );
};

export default ProfileHeader;
