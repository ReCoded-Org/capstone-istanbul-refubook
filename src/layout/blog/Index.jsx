import React from 'react';
import Navbar from '../../components/navbar/Index';
import BlogsPageLayout from '../../components/blogsPageLayout/Index';

const Blog = () => {
  const NavbarStyle =
    'flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap bg-white p-4';
  return (
    <>
      <Navbar NavbarStyle={NavbarStyle} />
      <BlogsPageLayout />
    </>
  );
};
export default Blog;
