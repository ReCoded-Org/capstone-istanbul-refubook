import React from 'react';
import Navbar from '../../components/navbar/Index';
import { Link, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import SignUpForm from '../../components/signUpForm/Index';
import {
  SignInWithGoogle,
  SignInWithFacebook,
} from '../../store/actions/authAction';
const SignUp = (props) => {
  const { t } = useTranslation();
  const NavbarStyle =
    'z-10 flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap bg-transparent p-4';
  const Btn = 'hidden';
  console.log(props.auth.uid);
  if (props.auth.uid) return <Redirect to="/" />;
  else {
    return (
      <>
        <div className="relative">
          <Navbar NavbarStyle={NavbarStyle} Btn={Btn} />
        </div>
        <div className="h-full bg-blue-200 mx-auto p-2">
          <div className="max-w-md mx-auto my-24 bg-white px-5 py-10 rounded-lg shadow-xl">
            <div className="text-center mb-8">
              <h1 className=" text-blue-600 font-bold text-2xl font-bold">
                {t('signUp.title')}
              </h1>
            </div>
            {/* <div className="mt-5 text-center px-8">
              <Link
                className="block appearance-none bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full"
                to="/facebook"
                onClick={(e) => {
                  e.preventDefault();
                  props.onSignInFacebook();
                }}
              >
                {t('signUp.buttonFacebook')}
              </Link>
            </div>
            <div className="mt-5 text-center">
              <p className="text-center text-gray-400 font-bold">{t('signUp.or')}</p>
            </div>
            <div className="mt-5 text-center px-8">
              <Link
                className=" block appearance-none bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-full"
                to="/google"
                onClick={(e) => {
                  e.preventDefault();
                  props.onSignInGoogle();
                }}
              >
                {t('signUp.buttonGoogle')}
              </Link>
            </div> */}
            <SignUpForm />
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
  }
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
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
