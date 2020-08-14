import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import {
  SignInWithGoogle,
  SignInWithFacebook,
} from '../../store/actions/authAction';
const LogIn = (props) => {
  const { t } = useTranslation();
  if (props.auth.uid) return <Redirect to="/" />;

  return (
    <>
      <div className="h-screen bg-blue-200 mx-auto p-2">
        <div className="max-w-md mx-auto my-24 bg-white px-5 py-10 rounded-lg shadow-xl">
          <div className="text-center mb-8">
            <h1 className=" text-blue-600 font-bold text-2xl font-bold">
              {t('logIn.title')}
            </h1>
          </div>
          <div className="mt-5 text-center px-8">
            <button
              className="block appearance-none bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full"
              onClick={(e) => {
                e.preventDefault();
                props.onSignInFacebook();
              }}
            >
              {t('logIn.buttonFacebook')}
            </button>
          </div>
          <div className="mt-5 text-center">
            <p className="text-center text-gray-400 font-bold">{t('logIn.or')}</p>
          </div>
          <div className="mt-5 text-center px-8">
            <button
              className="block appearance-none bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-full"
              onClick={(e) => {
                e.preventDefault();
                props.onSignInGoogle();
              }}
            >
              {t('logIn.buttonGoogle')}
            </button>
          </div>
          <div className="mt-10">
            <Link
              className="block appearance-none text-gray-400 font-bold py-1 px-3 rounded-full text-center"
              to="/signup"
            >
              {t('logIn.signUp')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSignInGoogle: () => dispatch(SignInWithGoogle()),
    onSignInFacebook: () => dispatch(SignInWithFacebook()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
