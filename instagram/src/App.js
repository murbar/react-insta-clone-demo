import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/common/SearchBar';
import PostContainer from './components/posts/PostContainer';
import './App.css';

class App extends Component {
  state = { posts: [], filteredPosts: null };

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  filterPosts = searchTerm => {
    if (!searchTerm) {
      this.setState({
        filteredPosts: null,
        searchTerm: null
      });
      return;
    }

    let filtered = this.state.posts.filter(p => {
      const normalizedUsername = p.username.toLowerCase();
      const normalizedSearchTerm = searchTerm.toLowerCase();
      return normalizedUsername.includes(normalizedSearchTerm);
    });
    filtered = filtered.length ? filtered : null;
    this.setState({
      filteredPosts: filtered,
      searchTerm
    });
  };

  // currently showing all when search term not found
  render() {
    const { posts, filteredPosts, searchTerm } = this.state;
    // const displayPosts = filteredPosts ? filteredPosts : posts;
    let displayedPosts = posts;
    if (searchTerm && !filteredPosts) {
      return (
        <div className="App">
          <SearchBar onFilter={this.filterPosts} />
          <div className="no-results">No results for "{searchTerm}".</div>
        </div>
      );
    }
    if (filteredPosts) {
      displayedPosts = filteredPosts;
    }

    return (
      <div className="App">
        <SearchBar onFilter={this.filterPosts} />
        {displayedPosts.map(p => (
          <PostContainer post={p} key={p.timestamp} />
        ))}
      </div>
    );
  }
}

export default App;

/* 
- feather icons
  - user
  - heart
  - compass
  - search
  - message-circle
  - more-horizontal
*/
