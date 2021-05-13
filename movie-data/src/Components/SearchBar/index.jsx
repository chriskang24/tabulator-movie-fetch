import React, { useState, useEffect, useCallback } from "react";
import useDebounce from './useDebounce';
import "./styles.css"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function SearchBar(props) {
  const [value, setValue] = useState("");
  const term = useDebounce(value, 100);

  const onSearch = useCallback(props.onSearch, [term]);

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        type="text"
        placeholder="Search Media"
        aria-label="Search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </form>
  );
}
