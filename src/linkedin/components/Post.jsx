import React from 'react';

const Post = ({ profileImage, author, title, meta, content }) => {
  return (
    <div className="carousel-card">
      <div className="post-header">
        <div className="post-avatar">
          <img src={profileImage} alt={author} />
        </div>
        <div className="post-info">
          <div className="post-author">{author}</div>
          <div className="post-meta">{meta}</div>
        </div>
        <div>⋯</div>
      </div>
      <div className="post-content">{content}</div>
      <div className="post-actions">
        <div className="post-action">
          <span className="post-action-icon">👍</span>
        </div>
        <div className="post-action">
          <span className="post-action-icon">💬</span>
        </div>
        <div className="post-action">
          <span className="post-action-icon">🔄</span>
        </div>
        <div className="post-action">
          <span className="post-action-icon">📤</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
