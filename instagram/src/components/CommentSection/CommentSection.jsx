import React from 'react';
import Comment from './Comment';
import AddComment from './AddComment';
import './CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { comments } = this.props;

    if (!comments.length) return null;

    return (
      <div className="comment-section">
        {comments.map(c => (
          <Comment data={c} key={c.text} />
        ))}
        <AddComment />
      </div>
    );
  }
}

export default CommentSection;

CommentSection.defaultProps = {
  comments: []
};
