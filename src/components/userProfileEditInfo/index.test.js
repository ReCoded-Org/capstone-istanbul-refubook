import React from 'react';
import { render } from '@testing-library/react';
import SignUpForm from '../signUpForm/Index';
import logger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import { Provider } from 'react-redux';
import rootReducer from '../../store/reducers/rootReducer';
const store = createStore(rootReducer, applyMiddleware(logger));

describe('UserProfileEdit', () => {
  test('renders the user profile component', () => {
    render(
      <Provider store={store}>
        <SignUpForm />
      </Provider>
    );
  });
});
