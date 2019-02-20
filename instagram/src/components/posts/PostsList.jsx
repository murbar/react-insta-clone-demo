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
  let postPluralize;
  if (filteredPosts) postPluralize = filteredPosts.length === 1 ? 'post' : 'posts';

  return (
    <div className="posts-list">
      {showingResults && (
        <div className="posts-list--results-count">
          {filteredPosts.length} {postPluralize} matching <strong>"{searchTerm}"</strong>
        </div>
      )}
      {displayedPosts.map(p => (
        <Post post={p} key={p.timestamp} />
      ))}
    </div>
  );
};

export default PostsList;
