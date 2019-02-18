import React from 'react';
import Comment from './Comment';
import './CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { comments } = this.props;
    return (
      <div className="comment-section">
        {comments.map(c => (
          <Comment data={c} key={c.text} />
        ))}
      </div>
    );
  }
}

export default CommentSection;
