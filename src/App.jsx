import React from 'react';
import PostsPage from './components/posts/PostsPage';
import authenticate from './authentication/authenticate';
import LoginPage from './components/login/LoginPage';
import styled from 'styled-components';

const StyledAppDiv = styled.div`
  margin: 2rem auto;
  width: 40rem;
`;

const StyledByLineDiv = styled.div`
  padding: 1rem;
  font-size: 0.8rem;
`;

const App = props => {
  return (
    <StyledAppDiv className="App">
      <StyledByLineDiv>
        A React demo by <a href="https://murbar.com">Joel Bartlett</a> <br />
        <a href="https://github.com/murbar/react-todo-demo">See my code on GitHub</a>
      </StyledByLineDiv>
      <PostsPage />
    </StyledAppDiv>
  );
};

export default authenticate(App)(LoginPage);
