import React from 'react';
import RecommendedArticles from './';
import renderer from 'react-test-renderer';
it('Blog page renders correctly', () => {
  const tree = renderer.create(<RecommendedArticles />).toJSON();
  expect(tree).toMatchSnapshot();
});
