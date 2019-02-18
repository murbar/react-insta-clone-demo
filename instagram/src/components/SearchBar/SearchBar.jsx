import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="search-bar">
        logo
        <input type="search" placeholder="Search" />
        icons
      </div>
    );
  }
}

export default SearchBar;
