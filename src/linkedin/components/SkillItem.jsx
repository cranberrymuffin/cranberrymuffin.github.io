import React from 'react';

const SkillItem = ({ name, endorsement }) => {
  return (
    <div className="skill-item">
      <div className="skill-name">{name}</div>
      <div className="skill-endorsement">
        <span>{endorsement}</span>
      </div>
    </div>
  );
};

export default SkillItem;
