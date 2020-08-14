import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <div>
      <form name="contact" method="post">
        <label htmlFor="Name" className="block text-gray-700 text-sm font-bold mb-2">
          {t('contact.formLabels.name')}
        </label>
        <input
          required
          type="text"
          name="name"
          className="shadow appearance-none border rounded w-full mb-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          {t('contact.formLabels.email')}
        </label>
        <input
          required
          type="email"
          name="email"
          className="shadow appearance-none border rounded w-full mb-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label
          htmlFor="message"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          {t('contact.formLabels.message')}
        </label>
        <textarea
          required
          name="message"
          cols="30"
          rows="4"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
        <button
          className="w-full md:w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-8 rounded-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {t('contact.formLabels.submit')}
        </button>
      </form>
      <div className="mt-8">social media icons</div>
    </div>
  );
};
export default ContactForm;
