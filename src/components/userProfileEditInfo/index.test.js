import React from 'react';
import { render } from '@testing-library/react';
import UserProfileEdit from './index';

describe('UserProfileEdit', () => {
  test('renders the user profile component', () => {
    render(<UserProfileEdit />);
  });
});
