import React from 'react';
import Testimonial from '../../components/testimonials/Index';
import Hero from '../../components/hero/Hero';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Index';
import LatestStories from '../../components/latestStories/Index';
import HomePageAboutSection from '../../components/homePageAboutSection';
const Home = () => {
  const NavbarStyle =
    'flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap bg-white p-4';
  return (
    <>
      <Navbar NavbarStyle={NavbarStyle} />
      <Hero />
      <HomePageAboutSection />
      <Testimonial />
      <LatestStories />
      <Footer />
    </>
  );
};

export default Home;
