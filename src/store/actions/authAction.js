import { googleProvider, facebookProvider } from '../../config/firebaseConfig';

import {
  SIGN_IN_WITH_Facebook,
  SIGN_IN_WITH_Facebook_ERROR,
  SIGN_IN_WITH_GOOGLE,
  SIGN_IN_WITH_GOOGLE_ERROR,
  LOG_OUT,
  LOG_OUT_ERROR,
  SIGN_IN_WITH_EMAIL,
  SIGN_IN_WITH_EMAIL_ERROR,
  CHANGE_BIO_OR_LOC,
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
        console.log(err);
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
export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const fireStore = getFirebase().firestore();
    // console.log(newUser);
    return firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((resp) => {
        return fireStore.collection('users').doc(resp.user.uid).set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          location: newUser.location,
          bio: newUser.bio,
          email: newUser.email,
          password: newUser.password,
        });
      })
      .then(() => {
        dispatch({ type: SIGN_IN_WITH_EMAIL });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: SIGN_IN_WITH_EMAIL_ERROR, err });
      });
  };
};
export const changeEmail = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const user = firebase.auth().currentUser;

    // console.log(newUser);
    return user
      .updateEmail('owes4545@gmail.com')
      .then(() => {
        dispatch({ type: SIGN_IN_WITH_EMAIL });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: SIGN_IN_WITH_EMAIL_ERROR, err });
      });
  };
};

export const changeBioAndLoc = (userNewInfo) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const fireStore = getFirebase().firestore();
    const user = firebase.auth().currentUser;
    if (user) {
      dispatch({ type: CHANGE_BIO_OR_LOC });
      return fireStore
        .collection('users')
        .doc(user.uid)
        .set({
          name: `${userNewInfo.firstName} ${userNewInfo.lastName}`,
          email: user.email,
          photoUrl: user.photoURL,
          emailVerified: user.emailVerified,
          uid: user.uid,
          bio: userNewInfo.bio,
          location: userNewInfo.location,
        });
    }
  };
};
