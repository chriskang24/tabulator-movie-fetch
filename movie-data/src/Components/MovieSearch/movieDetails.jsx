import React from "react";
import "./styles.css"
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export default function MovieDetails(props) {

  const posterUrl = 'https://image.tmdb.org/t/p/original/'

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <img
          className="Movie__thumbnail"
          src={posterUrl + props.backdrop_path}
          alt="Movie"
        />
        {
          props.filter === 'movies' &&
          <ul>
            <li> Movie Title: {props.title}</li>
            <li> Release Date: {props.release_date}</li>
            <li> Overview: {props.overview}</li>
          </ul>
        }
        {
          props.filter === 'shows' &&
          <ul>
            <li> TV Show Title: {props.name}</li>
            <li> First Air Date: {props.first_air_date}</li>
            <li> Overview: {props.overview}</li>
          </ul>
        }
      </Container>
    </React.Fragment>

  );
}