import React from 'react';
import ReactDOM from 'react-dom';
import AboutPageCover from './Index';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AboutPageCover></AboutPageCover>, div);
});
