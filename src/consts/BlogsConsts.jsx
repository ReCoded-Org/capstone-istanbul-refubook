import React from 'react';
import BlogsCard from '../components/blogsCard/';
import { articlesDataBase } from './articles';
import i18next from 'i18next';
import { Link } from 'react-router-dom';
const articles = i18next.t('articles', { returnObjects: true });

export const BlogsCarouselSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const BlogsInfo = [
  // <BlogsCard article={articles} />,
  <BlogsCard article={articlesDataBase} />,
  <BlogsCard article={articlesDataBase} />,
  <BlogsCard article={articlesDataBase} />,
  <BlogsCard article={articlesDataBase} />,
];
