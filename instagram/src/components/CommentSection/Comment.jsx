import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ data }) => {
  return <div className="comments-section-comment">{data.text}</div>;
};

export default Comment;

Comment.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};
