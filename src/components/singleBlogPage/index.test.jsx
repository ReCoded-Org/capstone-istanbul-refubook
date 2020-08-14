import React from 'react';
import SingleBlogPage from './';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
it('SingleBlogPage page renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <SingleBlogPage />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
