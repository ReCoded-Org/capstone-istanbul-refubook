import React from 'react';
import AboutPageCTA from './';
import renderer from 'react-test-renderer';

it('AboutPageCTA renders correctly', () => {
  const tree = renderer.create(<AboutPageCTA />).toJSON();
  expect(tree).toMatchSnapshot();
});
