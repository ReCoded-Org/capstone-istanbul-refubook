import React from 'react';
import ReactDOM from 'react-dom';
import Testimonials from './Index';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Testimonials></Testimonials>, div);
});
