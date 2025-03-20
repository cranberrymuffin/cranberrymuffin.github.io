import React from 'react';

const ProfileCard = ({ title, children, id }) => {
  return (
    <section className="profile-card" id={id}>
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
      </div>
      {children}
    </section>
  );
};

export default ProfileCard;
