import './styles/output.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Landing from './pages/Landing'
import About from './pages/About'
import Work from './pages/Work'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/work">
          <Work />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/process">
          <Work />
        </Route>
        <Route exact path="/contact">
          <Work />
        </Route>
        <Route exact path="/books">
          <Work />
        </Route>
        <Route exact path="/notion">
          <Work />
        </Route>
        <Route exact path="/playlists">
          <Work />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
