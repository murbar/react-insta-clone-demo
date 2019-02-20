import React, { useState } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import CommentsContainer from '../comments/CommentsContainer';
import PostBody from './PostBody';
import './posts.css';
import AddComment from '../comments/AddComment';

const Post = props => {
  const [post, setPost] = useState(props.post);

  const addComment = comment => {
    const newComment = {
      username: 'murbar',
      text: comment
    };
    const newPost = { ...post };
    newPost.comments.push(newComment);
    setPost(newPost);
  };

  return (
    <div className="post-container">
      <PostBody post={post} />
      <CommentsContainer comments={post.comments} />
      <div className="post-time">
        <Moment fromNow parse="MMMM Do YYYY, hh:mm:ss a">
          {post.timestamp}
        </Moment>
      </div>
      <AddComment addComment={addComment} />
    </div>
  );
};

export default Post;

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.array
  })
};
