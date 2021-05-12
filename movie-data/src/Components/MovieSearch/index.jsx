import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "../SearchBar/index";
import Results from "./results";
import "./styles.css"

const API_KEY = process.env.REACT_APP_TMDB_KEY;

export default function MovieSearch() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState("movies");

  useEffect(() => {
    // let apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${term}`;

    let apiUrl = "";
    if (filter === "movies") {
      apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${term}`;
    }
    if (filter === "shows") {
      apiUrl = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${term}`;
    }

    axios.get(apiUrl)
      .then((response) => {
        const existingIds = new Set()
        console.log(response.data.results)
        const filteredResponse = response.data.results.filter((movie) => !existingIds.has(movie.id) && existingIds.add(movie.id))
        // console.log("filtered:", filteredResponse)
        setResults(filteredResponse);
      })
      .catch((e) => console.log(`error ${e}`));
  }, [term, filter]);

  return (
    <Fragment>
      <div className="flex-centre">
        <select
          onChange={(event) => setFilter(event.target.value)}
          value={filter}
        >
          <option value="movies">Movies</option>
          <option value="shows">TV Shows</option>
        </select>
        <SearchBar onSearch={(term) => setTerm(term)}>
          
        </SearchBar>
      </div>
      <div className="movieStyles">
        <Results 
        results={results} 
        filter={filter} 
        />
      </div>
    </Fragment>
  );
}

