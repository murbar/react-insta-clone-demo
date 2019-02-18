import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        {dummyData.map(p => (
          <PostContainer post={p} key={p.timestamp} />
        ))}
      </div>
    );
  }
}

export default App;
