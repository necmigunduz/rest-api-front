import { Redirect, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../sessions/sessions';
import { saveToken } from '../localStorage/storage';

const Login = () => {
  const [redirect, setRedirect] = useState();
  const [error, setError] = useState();

  const location = useLocation();
  const path = location.pathname.split('/')[2];

  const signUp = path !== 'login';
  const submitValue = signUp ? 'Sign Up' : 'Login';
  const endpoint = signUp ? 'users' : 'authentication';
  const validatePassword = signUp ? <input className="field m-b-20 background-blue color-white" id="rPassword" type="password" placeholder="reapeat password" /> : <div />;
  const link = signUp ? <a href="/users/login">Login</a> : <a href="/users/sign-up">Sign Up</a>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.parentElement[0].value;
    const password = e.target.parentElement[1].value;
    const rPassword = e.target.parentElement[2].value;
    if (signUp && password !== rPassword) return;
    const response = await login(name, password, endpoint);
    if (response.token) {
      saveToken(response.token);
      setRedirect(<Redirect to={{ pathname: '/' }} />);
    } else {
      setError(<div className="m-b-20">{response.message}</div>);
    }
  };

  return (
    <div className="login text-center">
      {redirect}
      <span>{error}</span>
      <form>
        <h6 className="m-b-10 color-gray">Enter your username</h6>
        <input className="field m-b-20 background-blue color-white" id="name" type="text" placeholder="username" />
        <h6 className="m-b-10 color-gray">Enter your password</h6>
        <input className="field m-b-20 background-blue color-white" id="password" type="password" placeholder="password" />
        {validatePassword}
        <input className="login-btn color-white background-dark-blue m-b-30" type="submit" value={submitValue} onClick={(e) => handleSubmit(e)} />
      </form>
      <p>or</p>
      {link}
    </div>
  );
};

export default Login;
