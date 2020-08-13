import React from 'react';
import LatestStories from '../../components/latestStories/Index';
import i18next from 'i18next';

const Home = ({ t }) => {
  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };
  return (
    <>
      <LatestStories />
      <button onClick={() => changeLanguage('en')}>Eng</button>
      <button onClick={() => changeLanguage('ar')}>Ar</button>
    </>
  );
};
export default Home;
