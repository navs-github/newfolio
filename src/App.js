import './styles/output.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
import Landing from './components/Landing';
import Friend from './components/Friend';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/friend1">
          <Friend
            name="friend1" />
        </Route>
        <Route exact path="/friend2">
          <Friend
            name="friend2" />
        </Route>
        <Route exact path="/friend3">
          <Friend
            name="friend3"
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
