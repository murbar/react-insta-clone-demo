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
      <div className="logo">
        Instaclone{' '}
        <span role="img" aria-label="Camera icon">
          📸
        </span>
      </div>
      <div className="search">
        <input type="search" placeholder="Search" onChange={handleChange} />
      </div>
      <div className="logout">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default SearchBar;
