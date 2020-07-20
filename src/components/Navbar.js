import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../assets/styles/components/Nav.scss';

const Navbar = ({ itemsLinks }) => {
  return (
    <nav className="nav">
      <ul>
        {itemsLinks.map((itemLink, index) => {
          const { to, label } = itemLink;
          return (
            <li key={index}>
              <NavLink exact to={to} activeClassName="selected">
                {label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  itemsLinks: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Navbar;
