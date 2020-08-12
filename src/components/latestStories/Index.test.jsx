import React from 'react';
import ReactDOM from 'react-dom';
import LatestStories from './Index';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LatestStories></LatestStories>, div);
});
