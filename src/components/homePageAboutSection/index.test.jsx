import React from 'react';
import ReactDOM from 'react-dom';
import HomePageAboutSection from '.';
import { BrowserRouter } from 'react-router-dom';

it('HomePageAboutSection renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <HomePageAboutSection />
    </BrowserRouter>,
    div
  );
});
