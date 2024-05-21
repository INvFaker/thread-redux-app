import React from 'react';
import { MdHome, MdLeaderboard, MdLogout } from 'react-icons/md';
import PropTypes from 'prop-types';
import NavItem from './NavItem';

function Navbar({ authUser, logout }) {
  const { id, avatar, name } = authUser;

  return (
    <nav className="h-full flex flex-col gap-4 justify-between">
      <ul className="flex flex-col gap-2">
        <NavItem link="/" icon={<MdHome className="w-6 h-6" />}>
          Home
        </NavItem>
        <NavItem link="/leaderboards" icon={<MdLeaderboard className="w-6 h-6" />}>
          Leaderboards
        </NavItem>
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
