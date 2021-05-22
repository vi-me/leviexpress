import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Reservation from './components/Reservation';
import Home from './components/Home';
import Footer from './components/Footer';
import './style.css';

const App = () => (
  <div className="container">
    <Header />

    <Router>
      <div>
        {/*      <ul>
          <li className="btn button-1">
            <Link to="/">Home</Link>
          </li>
          <li className="btn button-2">
            <Link to="/reservation">Reservation</Link>
          </li>
        </ul> */}

        <Switch>
          <Route path="/reservation">
            <Reservation />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

    <Footer />
  </div>
);

render(<App />, document.querySelector('#app'));
