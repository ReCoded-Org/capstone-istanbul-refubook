import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from './index';

describe('ContactForm', () => {
  test('renders the input fields', () => {
    render(<ContactForm />);
  });
});
