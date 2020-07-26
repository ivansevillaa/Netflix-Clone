import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Button from './Button';
import Description from './Description';
import MovieInfo from './MovieInfo';
import '../assets/styles/components/FeaturedMovies.scss';

const FeaturedMovie = (props) => {
  const { cover, age_rate, logo, description } = props;

  const backgroundImage = {
    background: `linear-gradient(180deg,rgba(20, 20, 20, 1) 0%,rgba(20, 20, 20, 0.7) 50%,rgba(20, 20, 20, 1) 100%), url(${cover})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section className="featured-movie" style={backgroundImage}>
      <div className="container">
        <div className="featured-movie__cover">
          {/* TODO: here can be a video or image */}
          <img src={cover} alt="movie-cover" />
          <div className="trailer-info-action">
            <p className="age-rating">{`${age_rate}+`}</p>
          </div>
        </div>
        <MovieInfo className="featured-movie__info">
          <Logo
            className="movie-info__logo"
            logo={logo}
            alt="movie logo"
          />
          <Buttons />
          <Description
            className="movie-info__description"
            description={description}
          />
        </MovieInfo>
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

FeaturedMovie.propTypes = {
  cover: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  age_rate: PropTypes.number.isRequired,
};

export default FeaturedMovie;
