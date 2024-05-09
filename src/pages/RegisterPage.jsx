import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Logo from '../components/Logo';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
  };

  return (
    <section className="w-full h-screen grid grid-cols-2">
      <header className="flex items-center justify-center">
        <Logo />
      </header>
      <article className="flex flex-col items-center justify-center text-white">
        <h2 className="text-center">
          Discover
          <strong> The World</strong>
          ,
          <br />
          Navigate With Thread App.
        </h2>
        <RegisterInput register={onRegister} />
        <p className="mt-4">
          Already have an account?
          {' '}
          <Link to="/">Login</Link>
        </p>
      </article>
    </section>
  );
}

export default RegisterPage;
