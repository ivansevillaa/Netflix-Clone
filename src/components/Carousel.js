import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => {
  return <div className="container carousel">{children}</div>;
};

export default Carousel;
