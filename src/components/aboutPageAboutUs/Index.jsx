import React from 'react';
import { useTranslation } from 'react-i18next';

function OurStory() {
  const { t } = useTranslation();
  return (
    <div className="items-center text-center xl:pt-20 sm:pt-10 py-20 space-y-6 ">
      {/* <img className="absolute h-65 w-full opacity-25 xl: h-64 object-cover" src={aboutus} alt="" /> */}
      <h2 className="text-blue-700 font-bold text-3xl">
        {t('about.section-title')}
      </h2>
      <p className=" px-12 mx-auto lg:px-40 sm:px-20">
        {t('about.section-content')}
      </p>
    </div>
  );
}
export default OurStory;
