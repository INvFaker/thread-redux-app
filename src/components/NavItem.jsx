import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavItem({ icon, children, link }) {
  const baseStyles = 'flex gap-2 items-center font-bold text-base px-6 py-3 py-1 px-2 rounded-lg';
  const activeStyles = `${baseStyles} bg-gray-900 text-gray-300`;
  const unActiveStyles = `${baseStyles} border border-gray-300 bg-gray-100`;
  return (
    <li className="list-none">
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? activeStyles : unActiveStyles)}
      >
        {icon && <span className="w-6 h-6">{icon}</span>}
        {children}
      </NavLink>
    </li>
  );
}

NavItem.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  children: PropTypes.string.isRequired,
};

export default NavItem;
