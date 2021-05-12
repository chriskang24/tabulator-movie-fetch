import './App.css';
import 'react-tabulator/lib/styles.css';
import ScrollButton from "./Components/ScrollButton";
import Toggle from "./Components/Theme/Toggler";
import MovieFetch from './Components/MovieFetch'
import DashBoard from './Components/DashBoard'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/Theme/globalStyles"
import { lightTheme, darkTheme } from "./Components/Theme/theme"
import { useDarkMode } from "./Components/Theme/useDarkMode"

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  // if component has not rendered, return an empty div 
  if (!mountedComponent) return <div />

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <div>
          <GlobalStyles />
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </div>
        <div>
          {/* <DashBoard /> */}
          <MovieFetch />
        </div>
        <div>
          <ScrollButton />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
