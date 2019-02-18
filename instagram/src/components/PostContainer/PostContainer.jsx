import React from 'react';
import Moment from 'react-moment';
import CommentSection from '../CommentSection/CommentSection';
import Post from './Post';
import './PostContainer.css';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { post } = this.props;
    return (
      <div className="post-container">
        <Post post={post} />
        <div className="post-time">
          <Moment fromNow parse="MMMM Do YYYY, hh:mm:ss a">
            {post.timestamp}
          </Moment>
        </div>
        <CommentSection comments={post.comments} />
      </div>
    );
  }
}

export default PostContainer;
