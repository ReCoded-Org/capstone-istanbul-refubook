import React from 'react';
import ReactDOM from 'react-dom';
import HomePageAboutSection from '.';
it('HomePageAboutSection renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomePageAboutSection />, div);
});
