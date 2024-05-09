import React from 'react';
import PropTypes from 'prop-types';
import UserInput from '../hooks/UserInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = UserInput('');
  const [email, onEmailChange] = UserInput('');
  const [password, onPasswordChange] = UserInput('');

  return (
    <form action="" className="flex flex-col gap-1 mt-8 text-black">
      <input type="text" value={name} onChange={onNameChange} placeholder="Name" className="p-2 border border-black rounded" />
      <input type="email" value={email} onChange={onEmailChange} placeholder="Email" className="p-2 border border-black rounded" />
      <input type="password" value={password} onChange={onPasswordChange} name="" id="" placeholder="Password" className="p-2 border border-black rounded" />
      <button type="button" onClick={() => register({ name, email, password })} className="p-2 bg-blue-500 rounded text-white font-medium">Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
