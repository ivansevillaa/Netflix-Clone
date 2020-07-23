import React from 'react';
import PropTypes from 'prop-types';

const MovieDescription = ({ className, description }) => (
  <p className={className}>{description}</p>
);

MovieDescription.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string.isRequired,
};

MovieDescription.defaultProps = {
  className: '',
};

export default MovieDescription;
