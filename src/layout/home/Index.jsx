import React from 'react';
import Navbar from '../../components/navbar/Index';
import LatestStories from '../../components/latestStories/Index';
import i18next from 'i18next';

const Home = ({ t }) => {
  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };
  const NavbarStyle =
    'flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap bg-white p-4';
  return (
    <>
      <Navbar NavbarStyle={NavbarStyle} />
      <LatestStories />
      <button onClick={() => changeLanguage('en')}>Eng</button>
      <button onClick={() => changeLanguage('ar')}>Ar</button>
    </>
  );
};
export default Home;
