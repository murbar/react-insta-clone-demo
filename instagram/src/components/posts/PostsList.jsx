import React from 'react';
import Post from './Post';

const PostsList = ({ posts, filteredPosts, searchTerm }) => {
  if (searchTerm && !filteredPosts)
    return <div className="posts--no-results">No posts with username matching "{searchTerm}"</div>;

  let displayedPosts = filteredPosts || posts;
  return displayedPosts.map(p => <Post post={p} key={p.timestamp} />);
};

export default PostsList;
