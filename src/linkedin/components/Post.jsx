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
          <span className="post-action-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="thumbs-up-outline-small"
              fill="currentColor"
              aria-hidden="true"
              data-supported-dps="16x16"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              className="like-icon"
              role="img"
              aria-label="Like"
            >
              <path d="m12.91 7-2.25-2.57a8.2 8.2 0 0 1-1.5-2.55L9 1.37A2.08 2.08 0 0 0 7 0a2.08 2.08 0 0 0-2.06 2.08v1.17a5.8 5.8 0 0 0 .31 1.89l.28.86H2.38A1.47 1.47 0 0 0 1 7.47a1.45 1.45 0 0 0 .64 1.21 1.48 1.48 0 0 0-.37 2.06 1.54 1.54 0 0 0 .62.51h.05a1.6 1.6 0 0 0-.19.71A1.47 1.47 0 0 0 3 13.42v.10A1.46 1.46 0 0 0 4.4 15h4.83a5.6 5.6 0 0 0 2.48-.58l1-.42H14V7zM12 12.11l-1.19.52a3.6 3.6 0 0 1-1.58.37H5.1a.55.55 0 0 1-.53-.4l-.14-.48-.49-.21a.56.56 0 0 1-.34-.6l.09-.56-.42-.42a.56.56 0 0 1-.09-.68L3.55 9l-.4-.61A.28.28 0 0 1 3.3 8h5L7.14 4.51a4.2 4.2 0 0 1-.2-1.26V2.08A.09.09 0 0 1 7 2a.1.1 0 0 1 .08 0l.18.51a10 10 0 0 0 1.9 3.24l2.84 3z"></path>
            </svg>
          </span>
        </div>
        <div className="post-action">
          <span className="post-action-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="comment-small"
              fill="currentColor"
              aria-hidden="true"
              data-supported-dps="16x16"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              className="comment-icon"
              role="img"
              aria-label="Comment"
            >
              <path d="M5 8h5v1H5zm11-.5v.08a6 6 0 0 1-2.75 5L8 16v-3H5.5A5.51 5.51 0 0 1 0 7.5 5.62 5.62 0 0 1 5.74 2h4.76A5.5 5.5 0 0 1 16 7.5m-2 0A3.5 3.5 0 0 0 10.5 4H5.74A3.62 3.62 0 0 0 2 7.5 3.53 3.53 0 0 0 5.5 11H10v1.33l2.17-1.39A4 4 0 0 0 14 7.58zM5 7h6V6H5z"></path>
            </svg>
          </span>
        </div>
        <div className="post-action">
          <span className="post-action-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="thumbs-up-outline-small"
              fill="currentColor"
              aria-hidden="true"
              data-supported-dps="16x16"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              className="repost-icon"
              role="img"
              aria-label="Repost"
            >
              <path d="m12.91 7-2.25-2.57a8.2 8.2 0 0 1-1.5-2.55L9 1.37A2.08 2.08 0 0 0 7 0a2.08 2.08 0 0 0-2.06 2.08v1.17a5.8 5.8 0 0 0 .31 1.89l.28.86H2.38A1.47 1.47 0 0 0 1 7.47a1.45 1.45 0 0 0 .64 1.21 1.48 1.48 0 0 0-.37 2.06 1.54 1.54 0 0 0 .62.51h.05a1.6 1.6 0 0 0-.19.71A1.47 1.47 0 0 0 3 13.42v.10A1.46 1.46 0 0 0 4.4 15h4.83a5.6 5.6 0 0 0 2.48-.58l1-.42H14V7zM12 12.11l-1.19.52a3.6 3.6 0 0 1-1.58.37H5.1a.55.55 0 0 1-.53-.4l-.14-.48-.49-.21a.56.56 0 0 1-.34-.6l.09-.56-.42-.42a.56.56 0 0 1-.09-.68L3.55 9l-.4-.61A.28.28 0 0 1 3.3 8h5L7.14 4.51a4.2 4.2 0 0 1-.2-1.26V2.08A.09.09 0 0 1 7 2a.1.1 0 0 1 .08 0l.18.51a10 10 0 0 0 1.9 3.24l2.84 3z"></path>
            </svg>
          </span>
        </div>
        <div className="post-action">
          <span className="post-action-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="send-privately-small"
              fill="currentColor"
              aria-hidden="true"
              data-rtl="true"
              data-supported-dps="16x16"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              className="share-icon"
              role="img"
              aria-label="Share"
            >
              <path d="M14 2 0 6.67l5 2.64 5.67-3.98L6.7 11l2.63 5z"></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
