import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from './config/firebaseConfig';
import rootReducer from './store/reducers/rootReducer';
import App from './App';
import './i18n';

// import {useSelector} from 'react-redux';
// import {isLoaded} from 'react-redux-firebase';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
);
const rrfConfig = {
  userProfile: 'users',
  // useFirestoreForProfile: true //Firestore for Profile instead of Realtime DB
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

// function AuthIsLoaded({children}) {
//   const auth = useSelector((state) => state.firebase.auth);
//   if (!isLoaded(auth))
//     return (
//       <div className='text-center'>
//         <div
//           className='spinner-grow text-primary'
//           style={{width: '7rem', height: '7rem'}}
//           role='status'>
//           <span className='sr-only'>Loading...</span>
//         </div>
//       </div>
//     );
//   return children;
// }

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      {/* <AuthIsLoaded> */}
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
      {/* </AuthIsLoaded> */}
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
