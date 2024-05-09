import React from 'react';
import { Link } from 'react-router-dom';
import { MdHome, MdLeaderboard, MdLogout } from 'react-icons/md';
import PropTypes from 'prop-types';

function Navbar({ authUser, logout }) {
  const { id, avatar, name } = authUser;

  return (
    <nav className="h-full flex flex-col gap-4 justify-between">
      <ul className="flex flex-col gap-2">
        <li className="bg-gray-900 text-gray-300 rounded-lg">
          <Link to="/" className="flex gap-2 items-center font-bold text-base px-6 py-3">
            <MdHome className="w-6 h-6" />
            Home
          </Link>
        </li>
        <li className="border border-gray-300 bg-gray-100 rounded-lg">
          <Link to="/leaderboards" className="flex gap-2 items-center font-bold text-base px-6 py-3">
            <MdLeaderboard className="w-6 h-6" />
            Leaderboards
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col gap-2">
        <li className="flex items-center gap-2 w-full px-6 py-3 rounded-lg bg-gray-100">
          <img src={avatar} id={id} alt={name} className="w-6 h-6 rounded-full" />
          <p className="text-base font-bold">{name}</p>
        </li>
        <button type="button" onClick={logout} className="flex gap-2 items-center font-bold text-base w-full px-6 py-3 border border-gray-300 bg-gray-100 rounded-lg">
          <MdLogout className="w-6 h-6" />
          Logout
        </button>
      </ul>
    </nav>
  );
}

const authUserPropTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

};

Navbar.propTypes = {
  authUser: PropTypes.shape(authUserPropTypes).isRequired,
  logout: PropTypes.func.isRequired,
};

export default Navbar;
