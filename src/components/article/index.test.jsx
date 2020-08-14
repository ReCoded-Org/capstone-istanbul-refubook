import React from 'react';
import Article from './';
import renderer from 'react-test-renderer';
it('Blog page renders correctly', () => {
  const tree = renderer.create(<Article />).toJSON();
  expect(tree).toMatchSnapshot();
});
