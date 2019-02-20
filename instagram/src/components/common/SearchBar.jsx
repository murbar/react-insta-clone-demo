import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onFilter }) => {
  const onChange = e => {
    onFilter(e.target.value);
  };

  return (
    <div className="search-bar">
      logo
      <input type="search" placeholder="Search" onChange={onChange} />
      icons
    </div>
  );
};

export default SearchBar;
