// This import loads the firebase namespace along with all its type information.
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCio58iAqlCawFdZTMx6uknBtoHUXxbudA',
  authDomain: 'refubook-7b3d4.firebaseapp.com',
  databaseURL: 'https://refubook-7b3d4.firebaseio.com',
  projectId: 'refubook-7b3d4',
  storageBucket: 'refubook-7b3d4.appspot.com',
  messagingSenderId: '537037756766',
  appId: '1:537037756766:web:6a253ff5685a31783997cf',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebaseConfig;
