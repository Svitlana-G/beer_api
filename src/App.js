
import './App.css';
import Beer from './components/Beer';
import Beers from './components/Beers';
import BeerItem from './components/BeerItem';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to="/beer">Beer</Link>
              </li>
              <li>
                <Link to="/beers">Beers</Link>
              </li>
            </ul>
          </nav> */}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/beers" component={Beers} exact />
            <Route path="/beers/:myId" component={BeerItem} />

            <Route path="/beer" component={Beer} exact />

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
