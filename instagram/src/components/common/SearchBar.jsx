import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onFilterPosts }) => {
  const handleChange = e => {
    onFilterPosts(e.target.value);
  };

  const handleLogout = e => {
    localStorage.removeItem('username');
    window.location.reload();
  };

  return (
    <div className="search-bar">
      logo
      <input type="search" placeholder="Search" onChange={handleChange} />
      icons
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default SearchBar;
