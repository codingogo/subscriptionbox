import React from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';

require('./App.css');

export default () =>
  <div>
    <Navbar />
    <section className="container center">
      <HomePage />
    </section>
  </div>;
