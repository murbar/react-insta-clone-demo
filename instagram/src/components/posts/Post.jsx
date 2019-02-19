import React, { useState } from 'react';
import './posts.css';

const Post = props => {
  const [post, setPost] = useState(props.post);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(prevProp => !prevProp);
    const updatedPost = { ...post };
    if (liked) {
      updatedPost.likes--;
    } else {
      updatedPost.likes++;
    }
    setPost(updatedPost);
  };

  const likeButtonText = liked ? 'Unlike' : 'Like';

  return (
    <div className="post-container-post">
      <div className="post-head">
        <img src={post.thumbnailUrl} alt={post.username} />
        {post.username}
      </div>
      <div className="post-body">
        <img src={post.imageUrl} alt="" />
      </div>
      <div className="post-foot">
        <div className="post-controls">
          <button onClick={toggleLike}>{likeButtonText}</button>{' '}
          <button title="Add comment">Comment</button>
        </div>
        {post.likes} likes
      </div>
    </div>
  );
};

export default Post;
