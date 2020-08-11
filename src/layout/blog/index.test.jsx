import React from 'react';
import Blog from './';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
it('Blog page renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Blog />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
