import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import '../assets/styles/components/ProfileMenu.scss';

// TODO: This photo should get from the api
import ProfilePhoto from '../assets/static/images/backgrounds/404_1.jpg';

const profileOptions = [
  {
    to: '/account',
    label: 'Account',
  },
  {
    to: '/sign-in',
    label: 'Sign out of Netflix',
  },
];

const ProfileMenu = () => (
  <div className="profile-menu">
    <div className="profile-menu--profile">
      <img src={ProfilePhoto} alt="profile" />
      <Icon color="#fff" size="18" icon="triangle-down" />
    </div>
    <ul className="profile-menu--options">
      <Icon
        className="icon-triangle-up"
        color="#fff"
        size="20"
        icon="triangle-up"
      />
      {profileOptions.map((option, index) => {
        const { to, label } = option;
        return (
          <li key={index}>
            <Link to={to}>{label}</Link>
          </li>
        );
      })}
    </ul>
  </div>
);

export default ProfileMenu;
