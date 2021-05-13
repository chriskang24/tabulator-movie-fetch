import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function NavBar() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="nav-bar-spacing">
          <Button component={Link} to="/" > Home </Button>
          <Button component={Link} to="/movie-statistics"> Movie Statistics </Button>
          <Button component={Link} to="/tv-statistics"> TV Show Statistics </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}



