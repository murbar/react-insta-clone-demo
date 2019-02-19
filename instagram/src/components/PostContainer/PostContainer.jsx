import React from 'react';
import Moment from 'react-moment';
import CommentSection from '../CommentSection/CommentSection';
import Post from './Post';
import './PostContainer.css';

const PostContainer = ({ post }) => {
  return (
    <div className="post-container">
      <Post post={post} />
      <CommentSection comments={post.comments} />
      <div className="post-time">
        <Moment fromNow parse="MMMM Do YYYY, hh:mm:ss a">
          {post.timestamp}
        </Moment>
      </div>
    </div>
  );
};

export default PostContainer;
