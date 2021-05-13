import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/index";
import Results from "./results";
import "./styles.css"
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const API_KEY = process.env.REACT_APP_TMDB_KEY;

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));


export default function MovieSearch({ setState }) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState("movies");
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {

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
        const filteredResponse = response.data.results.filter((movie) => !existingIds.has(movie.id) && existingIds.add(movie.id))
        setResults(filteredResponse);
      })
      .catch((e) => console.log(`error ${e}`));
  }, [term, filter]);

  return (
    <>
      <div className="flex-centre">
        <div>
          <FormControl className={classes.formControl}>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              onChange={(event) => setFilter(event.target.value)}
              value={filter}
            >
              <option value="movies">Movies</option>
              <option value="shows">TV Shows</option>
            </Select>
          </FormControl>
        </div>

        <SearchBar
          onSearch={(term) => {
            if (term || term !== "") {
              setState(true);
            } else {
              setState(false);
            }
            setTerm(term);
          }
          }
        >
        </SearchBar>
      </div>
      <div className="movieStyles">
        <Results
          results={results}
          filter={filter}
        />
      </div>
    </>
  );
}





