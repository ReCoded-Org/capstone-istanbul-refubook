import React from 'react';
import aboutCTA from '.';
import renderer from 'react-test-renderer';

it('aboutCTA renders correctly', () => {
  const tree = renderer.create(<aboutCTA />).toJSON();
  expect(tree).toMatchSnapshot();
});
