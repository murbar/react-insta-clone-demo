import React, { useState } from 'react';
import './posts.css';

const PostBody = props => {
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
  const likeButtonImgSrc = liked ? '/heart-filled.svg' : '/heart.svg';

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
          <button className="like-button" onClick={toggleLike}>
            <img src={likeButtonImgSrc} alt={likeButtonText} />
          </button>
        </div>
        {post.likes} likes
      </div>
    </div>
  );
};

export default PostBody;
