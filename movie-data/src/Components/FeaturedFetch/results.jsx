import React from 'react';
import TrendingMovieDetails from './movieDetails';

export default function TrendingResults(props) {
  const { results } = props;

  const moviesWithPosters = results.filter((movie) => movie.backdrop_path !== null);

  return moviesWithPosters.map((movie) => {
    return <TrendingMovieDetails key={movie.id} {...movie} />;
  });
}