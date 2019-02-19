import React from 'react';
import './posts.css';

const Post = ({ post }) => {
  return (
    <div className="post-container-post">
      <div className="post-head">
        <img src={post.thumbnailUrl} alt={post.username} />
        {post.username}
      </div>
      <div className="post-body">
        <img src={post.imageUrl} alt="" />
      </div>
      <div className="post-foot">{post.likes} likes</div>
    </div>
  );
};

export default Post;
