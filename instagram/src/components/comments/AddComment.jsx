import React, { useState } from 'react';
import './comments.css';

const AddComment = ({ addComment }) => {
  const [inputValue, setInputValue] = useState('');

  const onChange = e => {
    setInputValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    addComment(inputValue);
    setInputValue('');
  };

  return (
    <div className="comments--add-comment">
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Add a comment..." value={inputValue} onChange={onChange} />
      </form>
    </div>
  );
};

export default AddComment;
