import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import Post from './Post';

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
        <div className="post-time">{post.timestamp}</div>
        <CommentSection comments={post.comments} />
      </div>
    );
  }
}

export default PostContainer;
