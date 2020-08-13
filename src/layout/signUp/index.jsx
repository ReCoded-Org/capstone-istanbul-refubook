import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SignUp = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="h-screen bg-blue-200 mx-auto p-2">
        <div className="max-w-md mx-auto my-24 bg-white px-5 py-10 rounded-lg shadow-xl">
          <div className="text-center mb-8">
            <h1 className=" text-blue-600 font-bold text-2xl font-bold">
              {t('signUp.title')}
            </h1>
          </div>
          <div className="mt-5 text-center px-8">
            <button className="focus:outline-none w-64 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              {t('logIn.buttonFacebook')}
            </button>
          </div>
          <div className="mt-5 text-center">
            <p className="text-center text-gray-400 font-bold">{t('signUp.or')}</p>
          </div>
          <div className="mt-5 text-center px-8">
            <button className="focus:outline-none w-64 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
              {t('logIn.buttonGoogle')}
            </button>
          </div>
          <div className="mt-10">
            <Link
              className="block appearance-none text-gray-400 font-bold py-1 px-3 rounded-full text-center"
              to="/login"
            >
              {t('signUp.logIn')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
