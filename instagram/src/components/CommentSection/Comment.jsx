import React from 'react';

const Comment = ({ data }) => {
  return <div className="comments-comment">{data.text}</div>;
};

export default Comment;
