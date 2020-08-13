import { googleProvider, facebookProvider } from '../../config/firebaseConfig';
import { browserHistory } from 'react-router';

import {
  SIGN_IN_WITH_Facebook,
  SIGN_IN_WITH_Facebook_ERROR,
  SIGN_IN_WITH_GOOGLE,
  SIGN_IN_WITH_GOOGLE_ERROR,
  LOG_OUT,
  LOG_OUT_ERROR,
} from './actionTypes';
export const SignInWithGoogle = (user, ownProps) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        dispatch({ type: SIGN_IN_WITH_GOOGLE, user });
      })
      .catch((err) => {
        dispatch({ type: SIGN_IN_WITH_GOOGLE_ERROR, err });
      });
  };
};
export const SignInWithFacebook = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        dispatch({ type: SIGN_IN_WITH_Facebook, user });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: SIGN_IN_WITH_Facebook_ERROR, err });
      });
  };
};
export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: LOG_OUT });
      })
      .catch((err) => {
        dispatch({ type: LOG_OUT_ERROR, err });
      });
  };
};
