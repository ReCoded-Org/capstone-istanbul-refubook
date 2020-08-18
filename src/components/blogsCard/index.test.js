import React from 'react';
import ReactDom from 'react-dom';
import BlogsCard from './index';
import { articlesDataBase } from '../../consts/articles';
it('renders the component without problems', () => {
  const card = document.createElement('div');
  ReactDom.render(<BlogsCard article={articlesDataBase}></BlogsCard>, card);
});
