import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Trending from "./components/Pages/Trending/Trending";
import Movies from "./components/Pages/Movies/Movies";
import Search from "./components/Pages/Search/Search";
import Series from "./components/Pages/Series/Series";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </container>
      </div>

      <SimpleBottomNavigation />
    </Router>
  );
}

export default App;
