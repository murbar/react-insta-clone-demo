import React, { useState } from 'react';
import LikeButton from './LikeButton';
import './posts.css';

const PostBody = ({ post, liked, onToggleLike }) => {
  return (
    <div className="post--container">
      <div className="post-head">
        <img src={post.thumbnailUrl} alt={post.username} />
        {post.username}
      </div>
      <div className="post-body">
        <img src={post.imageUrl} alt="" />
      </div>
      <div className="post-foot">
        <div className="post-controls">
          <LikeButton liked={liked} onLike={onToggleLike} />
        </div>
        {post.likes} likes
      </div>
    </div>
  );
};

export default PostBody;
