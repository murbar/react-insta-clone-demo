import React from 'react';
import './posts.css';

const LikeButton = ({ liked, onLike }) => {
  const likeButtonText = liked ? 'Unlike' : 'Like';
  const likeButtonImgSrc = liked ? '/heart-filled.svg' : '/heart.svg';

  return (
    <button className="like-button" onClick={onLike}>
      <img src={likeButtonImgSrc} alt={likeButtonText} />
    </button>
  );
};

export default LikeButton;
