import React from 'react';
import Post from './Post';

const PostsList = ({ posts, filteredPosts, searchTerm }) => {
  if (searchTerm && !filteredPosts)
    return (
      <div className="posts-list--no-results">
        No posts with username matching <strong>"{searchTerm}"</strong>
      </div>
    );

  const displayedPosts = filteredPosts || posts;
  const showingResults = searchTerm && filteredPosts;

  return (
    <div className="posts-list">
      {showingResults && (
        <div className="posts-list--results-count">
          {filteredPosts.length} post(s) matching <strong>"{searchTerm}"</strong>
        </div>
      )}
      {displayedPosts.map(p => (
        <Post post={p} key={p.timestamp} />
      ))}
    </div>
  );
};

export default PostsList;
