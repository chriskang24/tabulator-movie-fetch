import React from "react";
import "./styles.css"
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export default function TrendingMovieDetails(props) {

  const posterUrl = 'https://image.tmdb.org/t/p/original/';

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <img
          className="Movie__thumbnail"
          src={posterUrl + props.backdrop_path}
          alt="Movie"
        />
        <ul>
          <h2> Movie Title: {props.title}</h2>
          <li> Release Date: {props.release_date}</li>
          <li> Overview: {props.overview}</li>
        </ul>
      </Container>
    </React.Fragment>
  );
}