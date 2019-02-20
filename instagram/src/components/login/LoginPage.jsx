import React, { useState } from 'react';
import './login.css';

const LoginPage = props => {
  const [username, setUsername] = useState('');

  const handleChange = e => {
    setUsername(e.target.value);
  };

  const handleSubmit = e => {
    // e.preventDefault();
    console.log(username);
    localStorage.setItem('username', username);
  };

  return (
    <div className="login-page">
      <h1>Login to continue</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={handleChange} />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
