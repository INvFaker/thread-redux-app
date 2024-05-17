import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Logo from '../components/Logo';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="h-screen flex bg-black">
      <header className="flex-1 flex items-center justify-center">
        <Logo />
      </header>
      <article className="flex-1 flex flex-col items-center justify-center text-white">
        <h2 className="text-center">
          Discover
          <strong> The World</strong>
          ,
          <br />
          Navigate With Thread.
        </h2>
        <LoginInput login={onLogin} />
        <p className="mt-4">
          Don&apos;t have an account?
          {' '}
          <Link to="/register">Register</Link>
        </p>
      </article>
    </section>
  );
}

export default LoginPage;
