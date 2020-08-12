import React from 'react';
import Navbar from '../../components/navbar/Index';
import AboutPageCover from '../../components/aboutPageCover/Index';
import AboutUs from '../../components/aboutPageAboutUs/Index';

const About = () => {
  const NavbarStyle =
    'z-10 flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap bg-transparent p-4';
  return (
    <>
      <div className="relative">
        <Navbar NavbarStyle={NavbarStyle} />
      </div>
      <AboutPageCover />
      <AboutUs />
    </>
  );
};
export default About;
