import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post-container-post">
      {post.username}
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
