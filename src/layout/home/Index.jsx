import React from 'react';
import Testimonial from '../../components/testimonials/Index';
import Hero from '../../components/hero/Hero';
import Footer from '../../components/footer/Footer';
import LatestStories from '../../components/latestStories/Index';
import HomePageAboutSection from '../../components/homePageAboutSection';
const Home = () => {
  return (
    <>
      <Hero />
      <HomePageAboutSection />
      <Testimonial />
      <LatestStories />
      <Footer />
    </>
  );
};
export default Home;
