import React from 'react';
import PostsPage from './components/posts/PostsPage';
import authenticate from './authentication/authenticate';
import LoginPage from './components/login/LoginPage';
import './App.css';

class App extends React.Component {
  // state = {};
  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default authenticate(App)(LoginPage);

/* 
TODO
- fuzzy search with https://fusejs.io/
- add and style iconography
- style search bar
- style post controls
- persist to localStorage
- delete comment functionality
- feather icons
  - user
  - heart
  - compass
  - search
  - message-circle
  - more-horizontal
*/
