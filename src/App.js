import './styles/output.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'


import Landing from './pages/Landing'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Enroller from './pages/Enroller'
import Raofolio from './pages/Raofolio'
import Unicodes from './pages/Unicodes'

import NotReady from './pages/NotReady'

function App() {
  return (
    <Router>
      <ScrollToTop />
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
          <NotReady />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/enroller">
          <Enroller />
        </Route>
        <Route exact path="/raofolio">
          <Raofolio />
        </Route>
        <Route exact path="/unicodes">
          <Unicodes />
        </Route>
        <Route exact path="/books">
          <NotReady />
        </Route>
        <Route exact path="/notion">
          <NotReady />
        </Route>
        <Route exact path="/playlists">
          <NotReady />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
