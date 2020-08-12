import React from 'react';
import ReactDom from 'react-dom';
import BlogsCard from './index';

it('renders the component without problems', () => {
  const card = document.createElement('div');
  ReactDom.render(<BlogsCard></BlogsCard>, card);
});
