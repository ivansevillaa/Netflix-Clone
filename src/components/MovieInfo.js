import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/MovieInfo.scss';

const MovieInfo = ({ children, className }) => (
  <div className={`movie-info ${className}`}>{children}</div>
);

MovieInfo.propTypes = {
  className: PropTypes.string,
};

MovieInfo.defaultProps = {
  className: '',
};

export default MovieInfo;
