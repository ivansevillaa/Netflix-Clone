import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import '../assets/styles/components/Button.scss';

const Button = (props) => {
  const { className, text, iconName, iconSize, iconColor } = props;

  return (
    <button className={`button ${className}`}>
      <span className="button__content">
        {iconName && (
          <Icon
            className="icon"
            icon={iconName}
            size={iconSize}
            color={iconColor}
          />
        )}
        {text}
      </span>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  iconSize: PropTypes.string,
  iconColor: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
