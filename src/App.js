import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import MainNav from "./components/MainNav";
import Trending from "./components/Pages/Trending/Trending";
import Movies from "./components/Pages/Movies/Movies";
import Search from "./components/Pages/Search/Search";
import Series from "./components/Pages/Series/Series";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { Container } from "@material-ui/core";

function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <div className="App">
          <Container>
            <Switch>
              <Route exact path="/">
                <Trending />
              </Route>
              <Route path="/movies">
                <Movies />
              </Route>
              <Route path="/series">
                <Series />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
            </Switch>
          </Container>
        </div>

        <MainNav />
      </ThemeProvider>
    </Router>
  );
}

export default App;
