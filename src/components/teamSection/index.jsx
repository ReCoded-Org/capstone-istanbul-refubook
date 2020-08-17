import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useTranslation, I18nextProvider } from 'react-i18next';

const TeamSection = () => {
  const { t } = useTranslation();
  return (
    <I18nextProvider>
      <div className="bg-blue-100 text-center py-4 xl:py-8">
        <h2 className="text-blue-800 text-5xl py-8">{t('about.team.heading')}</h2>
        <Tabs selectedTabClassName="transition duration-500 ease-in-out text-white bg-blue-800 ">
          <TabList className="mb-16 md:mb-32 flex justify-center">
            {t('about.team.countries', { returnObjects: true }).map(
              (country, index) => {
                return (
                  <Tab
                    key={index}
                    className="cursor-pointer text-sm md:text-base mr-2 md:mr-8 rounded-full py-1 px-4 font-medium"
                  >
                    {country}
                  </Tab>
                );
              }
            )}
          </TabList>

          <TabPanel className="px-4 md:px-48 text-left grid grid-cols-2 gap-16 md:grid-cols-3 md:gap-32">
            {t('about.team.members-all', { returnObjects: true }).map(
              (member, index) => {
                return (
                  <div key={index}>
                    <ul>
                      <li>
                        <h4 className="font-bold text-blue-800">{t(member.name)}</h4>
                        <p className="text-blue-800">{t(member.title)}</p>
                      </li>
                    </ul>
                  </div>
                );
              }
            )}
          </TabPanel>

          <TabPanel className="px-4 md:px-48 text-left grid grid-cols-2 gap-16 md:grid-cols-3 md:gap-32 ">
            {t('about.team.members-usa', { returnObjects: true }).map(
              (member, index) => {
                return (
                  <div key={index}>
                    <ul>
                      <li>
                        <h4 className="font-bold text-blue-800">{t(member.name)}</h4>
                        <p className="text-blue-800">{t(member.title)}</p>
                      </li>
                    </ul>
                  </div>
                );
              }
            )}
          </TabPanel>

          <TabPanel className="px-4 md:px-48 text-left grid grid-cols-2 gap-16 md:grid-cols-3 md:gap-32">
            {t('about.team.members-turkey', { returnObjects: true }).map(
              (member, index) => {
                return (
                  <div key={index}>
                    <ul>
                      <li>
                        <h4 className="font-bold text-blue-800">{t(member.name)}</h4>
                        <p className="text-blue-800">{t(member.title)}</p>
                      </li>
                    </ul>
                  </div>
                );
              }
            )}
          </TabPanel>

          <TabPanel className="px-4 md:px-48 text-left grid grid-cols-2 gap-16 md:grid-cols-3 md:gap-32">
            {t('about.team.members-lebanon', { returnObjects: true }).map(
              (member, index) => {
                return (
                  <div key={index}>
                    <ul>
                      <li>
                        <h4 className="font-bold text-blue-800">{t(member.name)}</h4>
                        <p className="text-blue-800">{t(member.title)}</p>
                      </li>
                    </ul>
                  </div>
                );
              }
            )}
          </TabPanel>
        </Tabs>

        <button></button>
      </div>
    </I18nextProvider>
  );
};

export default TeamSection;
