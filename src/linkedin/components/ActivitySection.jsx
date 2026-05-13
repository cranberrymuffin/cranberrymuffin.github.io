import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import Post from './Post';
import Carousel from './Carousel';

const ActivitySection = ({ followers, posts, comments }) => {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <ProfileCard title="Activity" id="activity">
      <div>{followers} followers</div>
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
          <Carousel>
            {posts.map((post, index) => (
              <Post key={index} {...post} />
            ))}
          </Carousel>
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
  );
};

export default ActivitySection;
