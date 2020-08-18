import React from 'react';
import SingleBlogPage from './';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('SingleBlogPage', () => {
  test('page renders correctly', () => {
    render(
      <BrowserRouter>
        <SingleBlogPage />
      </BrowserRouter>
    );
  });
});
