import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: 'AIzaSyDWM4k82XSsKZmG6qK_x3yjx6ewxUW7uYs',
   authDomain: 'react-9ede0.firebaseapp.com',
   projectId: 'react-9ede0',
   storageBucket: 'react-9ede0.appspot.com',
   messagingSenderId: '225295611227',
   appId: '1:225295611227:web:130f4a1fd2eb239f99567e',
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
