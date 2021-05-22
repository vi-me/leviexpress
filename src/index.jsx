import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import './style.css';

const App = () => (
  <div className="container">
    <Header />
    <main></main>
    <Footer />
  </div>
);

render(<App />, document.querySelector('#app'));
