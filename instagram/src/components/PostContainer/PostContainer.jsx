import React from 'react';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { post } = this.props;
    return <div>{post.username}</div>;
  }
}

export default PostContainer;
