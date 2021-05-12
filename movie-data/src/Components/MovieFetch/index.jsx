import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-tabulator/lib/styles.css';
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import { ReactTabulator } from 'react-tabulator'
import './styles.css'

const MovieFetch = () => {
  const [
    {
      nowPlaying,
      upcomingMovies,
      popularMovies,
      topRatedMovies,
    },
    setMovies
  ] = useState({
    nowPlaying: [],
    upcomingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
  });

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const getUpcomingMovies = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  const getNowPlayingMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  const getPopularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  const getTopRatedMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  const posterUrl = 'https://image.tmdb.org/t/p/original/';

  const movieResultsMapping = (movieData) => {
    const data = movieData.map((m) => ({
      id: m['id'],
      backdrop_path: posterUrl + m['backdrop_path'],
      title: m['title'],
      vote_average: m['vote_average'],
      vote_count: m['vote_count'],
      popularity: m['popularity'],
      release_date: m['release_date'],
      overview: m['overview'],
    }))

    return data;
  }

  useEffect(() => {
    Promise.all([
      axios.get(getNowPlayingMovies),
      axios.get(getUpcomingMovies),
      axios.get(getPopularMovies),
      axios.get(getTopRatedMovies),
    ]).then((responses) => {
      const nowPlaying = movieResultsMapping(responses[0].data.results)
      const upcomingMovies = movieResultsMapping(responses[1].data.results)
      const popularMovies = movieResultsMapping(responses[2].data.results)
      const topRatedMovies = movieResultsMapping(responses[3].data.results)
      setMovies({
        nowPlaying,
        upcomingMovies,
        popularMovies,
        topRatedMovies,
      })
    })
  }, [])


  const columns = [
    { title: "Movie Title", field: "title", width: 400, responsive: 0, editor: 'input', headerFilter: 'input' },
    { title: "Average Rating", field: "vote_average", hozAlign: "right", sorter: "number", width: 150 },
    { title: "Total Votes", field: "vote_count", hozAlign: 'left', formatter: 'progress', editor: 'progress', width: 150 },
    { title: "Popularity Score", field: "popularity", hozAlign: "left", sorter: "number", width: 160 },
    { title: "Release Date", field: "release_date", hozAlign: "center", sorter: "alphanum", width: 150 },
    // { title: "Backdrop Path", field: "backdrop_path", hozAlign: "center", sorter: "alphanum", width: 500 },
    { title: "Overview", field: "overview", hozAlign: "center", sorter: "alphanum", width: 1000 },
  ];

  return (
    <div>
      <div className="background-design">
        <h3 className="title-centre">Movies Now Playing:</h3>
        <ReactTabulator
          data={nowPlaying}
          columns={columns}
          tooltips={true}
          layout={"fitData"}
        />
      </div>
      <div className="background-design">
        <h3 className="title-centre">Upcoming Movies:</h3>
        <ReactTabulator
          data={upcomingMovies}
          columns={columns}
          tooltips={true}
          layout={"fitData"}
        />
      </div>
      <div className="background-design">
        <h3 className="title-centre">Popular Movies:</h3>
        <ReactTabulator
          data={popularMovies}
          columns={columns}
          tooltips={true}
          layout={"fitData"}
        />
      </div>
      <div className="background-design">
        <h3 className="title-centre">Top Rated Movies:</h3>
        <ReactTabulator
          data={topRatedMovies}
          columns={columns}
          tooltips={true}
          layout={"fitData"}
        />
      </div>
    </div>

  )
}

export default MovieFetch;
