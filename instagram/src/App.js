import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/common/SearchBar';
import PostsList from './components/posts/PostsList';
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

  render() {
    const { posts, filteredPosts, searchTerm } = this.state;
    // const displayedPosts = filteredPosts ? filteredPosts : posts;
    return (
      <div className="App">
        <SearchBar onFilter={this.filterPosts} />
        <PostsList posts={posts} filteredPosts={filteredPosts} searchTerm={searchTerm} />
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
