import React from 'react';
import RecommendedArticles from './';
import { render } from '@testing-library/react';

describe('RecommendedArticles', () => {
  test('enders correctly', () => {
    render(<RecommendedArticles />);
  });
});
