import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = ({ data }) => {
  return (
    <div className="comment-section-comment">
      <span>{data.username}</span> {data.text}
    </div>
  );
};

export default Comment;

Comment.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};
