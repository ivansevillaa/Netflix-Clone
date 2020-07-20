import React from 'react';
import Icon from './Icon';
import '../assets/styles/layout/Footer.scss';

const socialMedia = [
  {
    url: 'https://www.linkedin.com/in/ivan-sevilla-70296b174/',
    icon: 'linkedin',
  },
  {
    url: 'https://github.com/ivansevillaa',
    icon: 'facebook-official',
  },
  {
    url: 'https://github.com/ivansevillaa',
    icon: 'instagram',
  },
  {
    url: 'https://github.com/ivansevillaa',
    icon: 'twitter',
  },
  {
    url: 'https://github.com/ivansevillaa',
    icon: 'youtube-play',
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Icons />
      <Links />
      <Description />
    </footer>
  );
};

const Icons = () => (
  <div className="footer__icons">
    {socialMedia.map((socialMedia, index) => {
      const { url, icon } = socialMedia;
      return (
        <a key={index} href={url} target="_blank">
          <Icon icon={icon} size="32" color="#808080" />
        </a>
      );
    })}
  </div>
);

const Links = () => (
  <div className="footer__text">
    <a href="mailto:ivansevillaa@gmail.com">Contact Me</a>
  </div>
);

const Description = () => (
  <div className="footer__description">
    <p>
      All icons except for Linkedin redirect you to my GitHub profile
    </p>
  </div>
);

export default Footer;
