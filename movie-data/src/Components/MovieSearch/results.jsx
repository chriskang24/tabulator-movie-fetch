import React from "react";

import MovieDetails from "./movieDetails";

export default function Results(props) {
  const { results, filter } = props;

  const moviesWithPosters = results.filter((movie) => movie.backdrop_path !== null);

  return moviesWithPosters.map((movie) => {
    return <MovieDetails key={movie.id} {...movie} filter={filter} />;
  });
}
