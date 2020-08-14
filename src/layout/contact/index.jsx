import React from 'react';
import { ReactComponent as EmailVector } from '../../assets/EmailVector.svg';
import ContactForm from '../../components/ContactForm/index';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-blue-100 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="px-8 md:px-24 py-8 md:py-16">
        <div>
          <h1 className="text-center md:text-left text-5xl text-blue-600 font-bold mb-4">
            {t('contact.heading')}
          </h1>
          <p className="text-center md:text-left text-gray-800 text-m mb-8">
            {t('contact.paragraph')}
          </p>
          <ContactForm />
        </div>
      </div>

      <div className="flex justify-center items-center row-end-1 md:col-end-3">
        <div className="w-full">
          <EmailVector />
        </div>
      </div>
    </div>
  );
};

export default Contact;
