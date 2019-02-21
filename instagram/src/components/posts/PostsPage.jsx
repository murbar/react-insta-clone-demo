import React, { useState, useEffect } from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../common/SearchBar';
import PostsList from './PostsList';

const PostsPage = props => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState(null);

  useEffect(() => {
    setPosts(dummyData);
  }, []);

  const handleFilterPosts = searchTerm => {
    if (!searchTerm) {
      setFilteredPosts(null);
      setSearchTerm(null);
      return;
    }

    let filtered = posts.filter(p => {
      const normalizedUsername = p.username.toLowerCase();
      const normalizedSearchTerm = searchTerm.toLowerCase();
      return normalizedUsername.includes(normalizedSearchTerm);
    });
    setFilteredPosts(filtered.length ? filtered : null);
    setSearchTerm(searchTerm);
  };

  return (
    <div className="posts-page">
      <SearchBar onFilterPosts={handleFilterPosts} />
      <PostsList posts={posts} filteredPosts={filteredPosts} searchTerm={searchTerm} />
    </div>
  );
};

export default PostsPage;
