import React from 'react';
import Comment from './Comment';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { comments } = this.props;
    return (
      <div className="comments-section">
        {comments.map(c => (
          <Comment data={c} key={c.text} />
        ))}
      </div>
    );
  }
}

export default CommentSection;
