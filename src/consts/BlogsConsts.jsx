import React from 'react';
import BlogsCard from '../components/blogsCard/';

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
  <BlogsCard />,
  <BlogsCard />,
  <BlogsCard />,
  <BlogsCard />,
  <BlogsCard />,
  <BlogsCard />,
  <BlogsCard />,
  <BlogsCard />,
];
