import React from 'react';

const ExperienceItem = ({ logo, title, company, duration, link }) => {
  return (
    <div className="experience-item">
      <div className="company-logo">
        <img src={logo} alt={`${company} logo`} />
      </div>
      <div className="experience-details">
        {link ? (
          <a className="job-title title-link" href={link}>
            {title}
          </a>
        ) : (
          <div className="job-title">{title}</div>
        )}
        <div className="company-name">{company}</div>
        <div className="job-duration">{duration}</div>
      </div>
    </div>
  );
};

export default ExperienceItem;
