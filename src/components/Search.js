import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const { className, iconColor, iconSize, placeholder } = props;
  return (
    <form className={className} role="search">
      <Icon
        className="icon-search"
        color={iconColor}
        size={iconSize}
        icon="search1"
      />
      <input type="search" placeholder={placeholder} />
    </form>
  );
};

Search.propTypes = {
  className: PropTypes.string,
  iconColor: PropTypes.string.isRequired,
  iconSize: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

Search.defaultProps = {
  className: '',
};

export default Search;
