import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import CommentsContainer from '../comments/CommentsContainer';
import Post from './Post';
import './posts.css';
import AddComment from '../comments/AddComment';

const PostContainer = ({ post }) => {
  return (
    <div className="post-container">
      <Post post={post} />
      <CommentsContainer comments={post.comments} />
      <div className="post-time">
        <Moment fromNow parse="MMMM Do YYYY, hh:mm:ss a">
          {post.timestamp}
        </Moment>
      </div>
      <AddComment />
    </div>
  );
};

export default PostContainer;

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.array
  })
};
