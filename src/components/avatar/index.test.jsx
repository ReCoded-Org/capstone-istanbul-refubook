import React from 'react';
import Avatar from './';
import renderer from 'react-test-renderer';
import editIcon from '../../assets/editIcon.svg';

const userInfo = {
  id: 1,
  name: 'Jonathan Reinink',
  avatar: 'https://via.placeholder.com/150',
  profile: '',
};

it('Avatar page renders correctly', () => {
  const tree = renderer
    .create(<Avatar user={userInfo} buttonIcon={editIcon} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
