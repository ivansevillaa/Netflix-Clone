import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ className, logo, alt }) => (
  <img className={className} src={logo} alt={alt} />
);

Logo.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Logo.defaultProps = {
  className: '',
};

export default Logo;
