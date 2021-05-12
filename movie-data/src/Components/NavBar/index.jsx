import React from 'react';
import './styles.css'
import Toggle from "../Theme/Toggler"
import { GlobalStyles } from "../Theme/globalStyles"
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../Theme/theme"
import { useDarkMode } from "../Theme/useDarkMode"
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function NavBar() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  // if component has not rendered, return an empty div 
  // if (!mountedComponent) return <div />

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="nav-bar-spacing">
          <Typography variant="h6" color="inherit">
            <ThemeProvider theme={themeMode}>
              
                    <Button component={Link} to="/" > Home </Button>
                    <Button component={Link} to="/movie-statistics"> Movie Statistics </Button>
                    <Button component={Link} to="/tv-statistics"> TV Show Statistics </Button>
                    <GlobalStyles />
                    <Toggle theme={theme} toggleTheme={themeToggler} />
           
            </ThemeProvider>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}


{/* <ThemeProvider theme={themeMode}>
  <nav>
    <div>
      <span className="nav-bar-spacing">
        <Button component={Link} to="/" > Home </Button>
        <Button component={Link} to="/movie-statistics"> Movie Statistics </Button>
        <Button component={Link} to="/tv-statistics"> TV Show Statistics </Button>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={themeToggler} />
      </span>
    </div>
  </nav>
</ThemeProvider>
 */}



