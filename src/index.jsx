import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Reservation from './components/Reservation';
import Home from './components/Home';
import Footer from './components/Footer';
import './style.css';

const App = () => (
  <Router>
    <Header />

    <Switch>
      <Route path="/reservation">
        <Reservation />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    <Footer />
  </Router>
);

render(<App />, document.querySelector('#app'));
