import React from 'react';
import ReactDOM from 'react-dom';
import BlogsPageLayout from './Index';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlogsPageLayout></BlogsPageLayout>, div);
});
