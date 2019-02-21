import React from 'react';
import styled from 'styled-components';
// import './SearchBar.css';

const StyledSearchBarDiv = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;

  > div {
    width: 33.33%;
  }

  .logo {
    font-family: 'Pacifico', serif;
    font-size: 2rem;
  }

  .search {
    text-align: center;
  }

  .search input {
    text-align: center;
    width: 100%;
    font-size: 1rem;
    background: transparent;
    border: none;
  }

  .search input:focus {
    outline: none;
  }

  .search input:focus::placeholder {
    color: transparent;
  }

  .logout {
    text-align: right;
  }

  .logout button {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    border: none;
    background: black;
    color: white;
    font-size: 1rem;
    border: 1px solid black;
  }
`;

const SearchBar = ({ onFilterPosts }) => {
  const handleChange = e => {
    onFilterPosts(e.target.value);
  };

  const handleLogout = e => {
    localStorage.removeItem('username');
    window.location.reload();
  };

  return (
    <StyledSearchBarDiv>
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
    </StyledSearchBarDiv>
  );
};

export default SearchBar;
