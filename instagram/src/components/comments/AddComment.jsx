import React, { useState } from 'react';
import './comments.css';

const AddComment = props => {
  const [inputValue, setInputValue] = useState('');

  const onChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <div className="comment-section-add-comment">
      <input type="text" placeholder="Add a comment..." value={inputValue} onChange={onChange} />
    </div>
  );
};

export default AddComment;
