import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../common/SearchBar';
import PostsList from './PostsList';

class PostsPage extends Component {
  state = { posts: [], filteredPosts: null };

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  handleFilterPosts = searchTerm => {
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

    return (
      <div className="posts-page">
        <SearchBar onFilterPosts={this.handleFilterPosts} />
        <PostsList posts={posts} filteredPosts={filteredPosts} searchTerm={searchTerm} />
      </div>
    );
  }
}

export default PostsPage;
