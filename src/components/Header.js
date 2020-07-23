import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Navbar from './Navbar';
import Search from './Search';
import ProfileMenu from './ProfileMenu';
import '../assets/styles/layout/Header.scss';
import RostenLogo from '../assets/static/images/logos/netflix-logo.png';
import navbarLinks from '../utils/navbarLinks';

const Header = () => {
  return (
    <header className="container header">
      {/* TODO: <Icon color="#fff" size="24" icon="menu or menu1" /> */}
      <i className="icon-menu burger-button" id="burger-button"></i>
      <Link to="/" className="header__logo">
        <Logo logo={RostenLogo} alt="rosten logo" />
      </Link>
      <Navbar itemsLinks={navbarLinks} />
      <div className="header__actions">
        <Search
          className="header__search"
          iconColor="#fff"
          iconSize="22"
          placeholder="Search a movie"
        />
        <ProfileMenu />
      </div>
    </header>
  );
};

export default Header;
