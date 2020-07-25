import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import '../assets/styles/components/CarouselItem.scss';
import convertMinutes from '../utils/convertMinutes';

const CarouselItem = (props) => {
  const [morInfoColor, setMoreInfoColor] = useState('#e5e5e5');
  const { cover, title, duration, age_rate } = props;

  return (
    <article className="carousel__item movie-item">
      {/* TODO: here can be a video or image. */}
      <img
        className="movie-item__image"
        src={cover}
        alt="movie-cover"
      />
      <div className="movie-item__overlay">
        <div className="movie-item__content-wrapper">
          <div className="movie-item__description">
            <button>
              <Icon color="#141414" size="16" icon="play3" />
            </button>
            <h4>{title}</h4>
            <p className="age-rated">{age_rate}+</p>
            <p>{convertMinutes(duration)}</p>
          </div>
          <div className="movie-item__buttons">
            {/* This feature if possible if the component is able to play a video */}
            {/* <Icon color="#000" size="24" icon="volume-mute2" /> */}
            <Icon color="#e5e5e5" size="18" icon="plus" />
          </div>
        </div>
        <div
          className="movie-item__more-info-button"
          onMouseEnter={() => setMoreInfoColor('#e50914')}
          onMouseLeave={() => setMoreInfoColor('#e5e5e5')}
        >
          <Icon
            color={morInfoColor}
            size="24"
            icon="chevron-thin-down"
          />
        </div>
      </div>
    </article>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  age_rate: PropTypes.number.isRequired,
};

export default CarouselItem;
