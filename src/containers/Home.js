import React from 'react';
import useFetchData from '../hooks/useFetchData';
import Hero from '../components/Hero';

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

  return <Hero movie={data[0]} />;
};

export default Home;
