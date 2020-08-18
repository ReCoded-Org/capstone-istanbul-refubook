import React from 'react';
import ReactDOM from 'react-dom';
import BlogsPageLayout from './Index';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <BlogsPageLayout />
    </BrowserRouter>,
    div
  );
});
