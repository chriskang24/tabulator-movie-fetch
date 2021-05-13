import axios from 'axios';
import React, { useState, useEffect } from 'react';
import TrendingResults from './results';

export default function FeaturedFetch () {

  const [results, setResults] = useState([]);

  const API_KEY = process.env.REACT_APP_TMDB_KEY;

  const discoverTrendingMovies = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`
  const posterUrl = 'https://image.tmdb.org/t/p/original/';

  

  useEffect(() => {
    axios.get(discoverTrendingMovies)
    .then((response) => {
      const existingIds = new Set()
      const filteredResponse = response.data.results.filter((movie) => !existingIds.has(movie.id) && existingIds.add(movie.id))
      setResults(filteredResponse);
    })
    .catch((e) => console.log(`error ${e}`));
}, [])
  return (

    <div className="movieStyles">
      <TrendingResults
      results={results} 
      />
    </div>
  )
}