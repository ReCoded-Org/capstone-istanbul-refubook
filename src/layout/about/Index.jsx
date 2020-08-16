import React from 'react';
import AboutPageCover from '../../components/aboutPageCover/Index';
import AboutUs from '../../components/aboutPageAboutUs/Index';
import TeamSection from '../../components/teamSection/index';
import AboutCTA from '../../components/aboutCTA';
const About = () => {
  return (
    <>
      <AboutPageCover />
      <AboutUs />
      <TeamSection />
      <AboutCTA />
    </>
  );
};

export default About;
