import React from 'react';
import { render } from '@testing-library/react';
import SignUpForm from './Index';

describe('signUpForm', () => {
  test('renders the sign up form component', () => {
    render(<SignUpForm />);
  });
});
