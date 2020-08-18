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
      <div className="mt-8">
        <button className="mx-1">
          <svg
            className="h-8 w-8 fill-current text-blue-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm2.274 6.634h-1.443c-.171 0-.361.225-.361.524V8.6h1.805l-.273 1.486H10.47v4.461H8.767v-4.461H7.222V8.6h1.545v-.874c0-1.254.87-2.273 2.064-2.273h1.443v1.581z" />
          </svg>
        </button>
        <button className="mx-1">
          <svg
            className="h-8 w-8 fill-current text-blue-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm3.905 7.864c.004.082.005.164.005.244 0 2.5-1.901 5.381-5.379 5.381a5.335 5.335 0 01-2.898-.85c.147.018.298.025.451.025.886 0 1.701-.301 2.348-.809a1.895 1.895 0 01-1.766-1.312 1.9 1.9 0 00.853-.033 1.892 1.892 0 01-1.517-1.854v-.023c.255.141.547.227.857.237a1.89 1.89 0 01-.585-2.526 5.376 5.376 0 003.897 1.977 1.891 1.891 0 013.222-1.725 3.797 3.797 0 001.2-.459 1.9 1.9 0 01-.831 1.047 3.799 3.799 0 001.086-.299 3.834 3.834 0 01-.943.979z" />
          </svg>
        </button>
        <button className="mx-1">
          <svg
            className="h-8 w-8 fill-current text-blue-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973 0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355-.537 0-.856.371-.997.728-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01 1.279 0 2.238.857 2.238 2.699v3.699z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default ContactForm;
