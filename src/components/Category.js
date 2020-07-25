import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Category.scss';

const Category = ({ children, title }) => {
  return (
    <section className="category">
      <h3 className="container category__title">{title}</h3>
      {children}
    </section>
  );
};

Category.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Category;
