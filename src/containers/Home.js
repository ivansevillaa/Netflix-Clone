import React from 'react';
import useFetchData from '../hooks/useFetchData';
import Hero from '../components/Hero';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import FeaturedMovie from '../components/FeaturedMovie';
import '../assets/styles/pages/Home.scss';

const API_URL = 'http://localhost:3000/movies';

const Home = () => {
  const [{ data, isLoading, error }, doFetch] = useFetchData(
    API_URL,
    [],
  );

  if (isLoading) {
    /* TODO: a spinner component or something that indacate that the hero is loading */
    return (
      <div>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    /* TODO: an error component in case something goes wrong in the request */
    return (
      <div>
        <h1>{error.message}</h1>
        <h1>{error.message}</h1>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <>
      <Hero
        cover={data[0].cover_src}
        age_rate={data[0].age_rate}
        logo={data[0].logo_src}
        description={data[0].description}
      />
      <main className="movies">
        {/* TODO: category must be returned by a map function(e.g categories.map(i => <tatata />)) */}
        <Category title="My List">
          <Carousel>
            {data.map((movie) => {
              return (
                <CarouselItem
                  key={movie.id}
                  cover={movie.cover_src}
                  title={movie.title}
                  duration={movie.duration}
                  age_rate={movie.age_rate}
                />
              );
            })}
          </Carousel>
        </Category>
        <Category title="Action">
          <Carousel>
            {data.map((movie) => {
              return (
                <CarouselItem
                  key={movie.id}
                  cover={movie.cover_src}
                  title={movie.title}
                  duration={movie.duration}
                  age_rate={movie.age_rate}
                />
              );
            })}
          </Carousel>
        </Category>
        <FeaturedMovie
          cover={data[1].cover_src}
          age_rate={data[1].age_rate}
          logo={data[1].logo_src}
          description={data[1].description}
        />
        <Category title="Netflix Originals">
          <Carousel>
            {data.map((movie) => {
              return (
                <CarouselItem
                  modifier="carousel__item--original"
                  key={movie.id}
                  cover={movie.cover_src}
                  title={movie.title}
                  duration={movie.duration}
                  age_rate={movie.age_rate}
                />
              );
            })}
          </Carousel>
        </Category>
      </main>
    </>
  );
};

export default Home;
