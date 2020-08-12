import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import arTranslation from './locales/ar.json';
import enTranslation from './locales/en.json';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      ar: {
        translation: arTranslation,
      },
      en: {
        translation: enTranslation,
      },
    },
    lng: 'en',
    fallbackLng: 'ar',
    debug: true,
    keySeparator: '.',
    nsSeparator: '|', // changed from ':' to allow colons in translated text
  });

export default i18n;
