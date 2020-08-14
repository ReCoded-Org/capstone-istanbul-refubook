import React from 'react';
import { render } from '@testing-library/react';
import SignUpForm from './Index';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import rootReducer from '../../store/reducers/rootReducer';
const store = createStore(rootReducer, applyMiddleware(logger));

describe('signUpForm', () => {
  test('renders the sign up form component', () => {
    render(
      <Provider store={store}>
        <SignUpForm />
      </Provider>
    );
  });
});
