import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import areCredentialsValid from '../../../helpers/session';
import './Login.css';

const Login = ({ logIn }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginFailed, setLoginFailed] = useState(false);
  const [redirectToPreviousRoute, setRedirectToPreviousRoute] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if (areCredentialsValid({ username, password })) {
      logIn({ username });
      setRedirectToPreviousRoute(true);
    } else {
      setLoginFailed(true);
    }
  }

  if (redirectToPreviousRoute) {
    return <Redirect to="/profile" />
  }

  return (
    <div className="Login">
      <h1>Login Page</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          data-field-name="username"
          type="text"
          placeholder="Имя"
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
        <input
          data-field-name="password"
          type="text"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <button type="submit">Log in</button>
      </form>
      
      {loginFailed &&
        <p>Имя пользователя или пароль введены не верно</p>
      }
    </div>
  );
}

export default Login;