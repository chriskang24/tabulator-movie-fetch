import './App.css';
import 'react-tabulator/lib/styles.css';
import ScrollButton from "./Components/ScrollButton";
import MovieFetch from './Components/MovieFetch';
import TVShowFetch from './Components/TvShowFetch';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import HomePage from './Components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/movie-statistics">
          <MovieFetch />
          <ScrollButton />
        </Route>
        <Route path="/tv-statistics">
          <TVShowFetch />
          <ScrollButton />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
