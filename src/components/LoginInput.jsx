import React from 'react';
import PropTypes from 'prop-types';
import UserInput from '../hooks/UserInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = UserInput('');
  const [password, onPasswordChange] = UserInput('');

  return (
    <form action="" className="flex flex-col gap-1 mt-8 text-black">
      <input type="email" value={email} onChange={onEmailChange} placeholder="Email" className="px-2 py-3 border border-black rounded" />
      <input type="password" value={password} onChange={onPasswordChange} placeholder="Password" className="p-2 border border-black rounded" />
      <button type="button" onClick={() => login({ email, password })} className="p-2 bg-blue-500 rounded text-white font-medium">Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
