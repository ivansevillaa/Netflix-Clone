import React from 'react';
import PropTypes from 'prop-types';
import MovieInfo from './MovieInfo';
import Logo from './Logo';
import Description from './Description';
import Button from './Button';
import '../assets/styles/layout/Hero.scss';

const Hero = (props) => {
  const { cover, logo, description, age_rate } = props;

  return (
    <section className="hero">
      {/* TODO: here can be a video or image */}
      <img className="hero__background" src={cover} />
      <div className="container hero__content">
        <MovieInfo className="hero__content--left">
          <Logo
            className="movie-info__logo"
            logo={logo}
            alt="movie logo"
          />
          <Description
            className="movie-info__description"
            description={description}
          />
          <Buttons />
        </MovieInfo>
        <div className="hero__content--right trailer-info-action">
          <p className="age-rating">{`${age_rate}+`}</p>
        </div>
      </div>
    </section>
  );
};

const Buttons = () => (
  <div className="movie-info__buttons">
    <Button
      className="button--light"
      text="Play"
      iconName="play3"
      iconSize="24"
      iconColor="#000"
    />
    <Button
      className="button--dark"
      text="More Info"
      iconName="information-outline"
      iconSize="24"
      iconColor="#fff"
    />
  </div>
);

Hero.propTypes = {
  cover: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  age_rate: PropTypes.number.isRequired,
};

export default Hero;
