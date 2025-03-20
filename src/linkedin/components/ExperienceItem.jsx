import React from 'react';
import { computeDuration } from '../utils/dateUtils';

const ExperienceItem = ({ logo, title, company, startDate, endDate, link }) => {
  const duration =
    startDate && endDate ? computeDuration(startDate, endDate) : null;

  return (
    <div className="experience-item">
      <div className="company-logo">
        <img src={logo} alt={`${company} logo`} />
      </div>
      <div className="experience-details">
        {link ? (
          <a href={link} className="job-title">
            {title}
          </a>
        ) : (
          <div className="job-title">{title}</div>
        )}
        <div className="company-name">{company}</div>
        {duration && <div className="job-duration">{duration}</div>}
      </div>
    </div>
  );
};

export default ExperienceItem;
