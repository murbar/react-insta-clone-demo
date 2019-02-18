import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { post } = this.props;
    return (
      <div className="post-container">
        {post.username}
        <CommentSection comments={post.comments} />
      </div>
    );
  }
}

export default PostContainer;
