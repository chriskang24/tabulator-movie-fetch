import { useState, useEffect } from "react";
import axios from "axios";
import 'react-tabulator/lib/styles.css';
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import { ReactTabulator } from 'react-tabulator'
import './styles.css'

const TVShowFetch = () => {
  const [
    {
      showsAiringToday,
      popularShows,
      topRatedShows,
    },
    setShows
  ] = useState({
    showsAiringToday: [],
    popularShows: [],
    topRatedShows: [],
  });

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const getShowsAiringToday = `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`
  const getPopularShows = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
  const getTopRatedShows = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  const posterUrl = 'https://image.tmdb.org/t/p/original/'

  const tvShowResultsMapping = (showData) => {
    const data = showData.map((s) => ({
      id: s['id'],
      backdrop_path: posterUrl + s['backdrop_path'],
      original_name: s['original_name'],
      vote_average: s['vote_average'],
      vote_count: s['vote_count'],
      popularity: s['popularity'],
      first_air_date: s['first_air_date'],
      overview: s['overview'],
    }))
    console.log(data)
    return data;
  }

  useEffect(() => {
    Promise.all([
      axios.get(getShowsAiringToday),
      axios.get(getPopularShows),
      axios.get(getTopRatedShows),
    ]).then((responses) => {
      console.log('here', tvShowResultsMapping(responses[0].data.results))
      const showsAiringToday = tvShowResultsMapping(responses[0].data.results)
      const popularShows = tvShowResultsMapping(responses[1].data.results)
      const topRatedShows = tvShowResultsMapping(responses[2].data.results)
      setShows({
        showsAiringToday,
        popularShows,
        topRatedShows,
      })
    })
  }, [])


  const columns = [
    { title: "TV Show Title", field: "original_name", width: 400, responsive: 0, editor: 'input', headerFilter: 'input' },
    { title: "Average Rating", field: "vote_average", hozAlign: "right", sorter: "number", width: 150 },
    { title: "Total Votes", field: "vote_count", hozAlign: 'left', formatter: 'progress', editor: 'progress', width: 150 },
    { title: "Popularity Score", field: "popularity", hozAlign: "left", sorter: "number", width: 160 },
    { title: "Release Date", field: "first_air_date", hozAlign: "center", sorter: "alphanum", width: 150 },
    // { title: "Backdrop Path", field: "backdrop_path", hozAlign: "center", sorter: "alphanum", width: 500 },
    { title: "Overview", field: "overview", hozAlign: "center", sorter: "alphanum", width: 1000 },
  ];
  return (
    <div>
      <div className="background-design">
        <h3 className="title-centre">TV Shows Now Playing:</h3>
        <ReactTabulator
          data={showsAiringToday}
          columns={columns}
          tooltips={true}
          layout={"fitData"}
        />
      </div>
      <div className="background-design">
        <h3 className="title-centre"> Popular Shows:</h3>
        <ReactTabulator
          data={popularShows}
          columns={columns}
          tooltips={true}
          layout={"fitData"}
        />
      </div>
      <div className="background-design">
        <h3 className="title-centre">Top Rated Shows:</h3>
        <ReactTabulator
          data={topRatedShows}
          columns={columns}
          tooltips={true}
          layout={"fitData"}
        />
      </div>
    </div>

  )
}

export default TVShowFetch;