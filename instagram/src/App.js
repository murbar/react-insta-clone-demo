import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/common/SearchBar';
import PostContainer from './components/posts/PostContainer';
import './App.css';

class App extends Component {
  state = { posts: [] };

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.posts.map(p => (
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
