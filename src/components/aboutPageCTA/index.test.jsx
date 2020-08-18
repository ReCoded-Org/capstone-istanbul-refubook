import React from 'react';
import ReactDOM from 'react-dom';

import AboutPageCTA from './';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <AboutPageCTA />
    </BrowserRouter>,

    div
  );
});
