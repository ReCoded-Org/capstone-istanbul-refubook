import React from 'react';
import ReactDOM from 'react-dom';
import UserProfile from './';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import rootReducer from '../../store/reducers/rootReducer';
const store = createStore(rootReducer, applyMiddleware(logger));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <UserProfile />
      </BrowserRouter>
    </Provider>,

    div
  );
});
