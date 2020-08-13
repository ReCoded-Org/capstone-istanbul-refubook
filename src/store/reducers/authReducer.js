import {
  SIGN_IN_WITH_Facebook,
  SIGN_IN_WITH_Facebook_ERROR,
  SIGN_IN_WITH_GOOGLE,
  SIGN_IN_WITH_GOOGLE_ERROR,
  LOG_OUT,
  LOG_OUT_ERROR,
} from '../actions/actionTypes';
const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOG_OUT_ERROR:
      console.log('logout error');
      return {
        ...state,
        authError: 'Logout failed',
      };

    case LOG_OUT:
      console.log('logout success');
      return {
        ...state,
        authError: null,
      };

    case SIGN_IN_WITH_GOOGLE:
      console.log('sign in with google success');
      return state;

    case SIGN_IN_WITH_GOOGLE_ERROR:
      console.log('sign in with google error');
      return {
        ...state,
        authError: 'sign in error',
      };
    case SIGN_IN_WITH_Facebook:
      console.log('sign in with facebook success');
      return state;

    case SIGN_IN_WITH_Facebook_ERROR:
      console.log('sign in with facebook error');
      console.log(state);
      return {
        ...state,
        authError: 'sign in error',
      };
    default:
      return state;
  }
};

export default authReducer;
