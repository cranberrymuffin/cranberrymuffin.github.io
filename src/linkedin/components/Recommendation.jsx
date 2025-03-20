import React from 'react';

const Recommendation = ({ name, title, company, date, content, link }) => {
  return (
    <div className="recommendation">
      <div className="recommender">
        <div className="recommender-info">
          <div className="recommender-name">
            <a className="title-link" href={link}>
              {name}
            </a>
          </div>
          <div className="company-name">
            {title} at {company}
          </div>
          <div className="job-duration">{date}</div>
        </div>
      </div>
      <div className="recommendation-text">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Recommendation;
