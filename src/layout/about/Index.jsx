import React from 'react';
import AboutPageCover from '../../components/aboutPageCover/Index';
import AboutUs from '../../components/aboutPageAboutUs/Index';
import TeamSection from '../../components/teamSection/index';

import Testimonials from '../../components/testimonials/Index';
import AboutPageCTA from '../../components/aboutPageCTA/index';
const About = () => {
  return (
    <>
      <AboutPageCover />
      <AboutUs />
      <TeamSection />
      <Testimonials />
      <AboutPageCTA />
    </>
  );
};
export default About;
