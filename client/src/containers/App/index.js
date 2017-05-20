// @flow
import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import Home from '../Home';
import NotFound from '../../components/NotFound';

const App = () => (
  <BrowserRouter>
    <div>
      <Match exactly pattern="/" component={Home} />
      <Miss component={NotFound} />
    </div>
  </BrowserRouter>
);

export default App;
