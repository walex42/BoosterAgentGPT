// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEnv7osBJQOH3dkPb-retVjjKTjXWwpNs",
  authDomain: "boostergpt.firebaseapp.com",
  projectId: "boostergpt",
  storageBucket: "boostergpt.appspot.com",
  messagingSenderId: "193233805416",
  appId: "1:193233805416:web:26fc707558b5bd24f9dbdd",
  measurementId: "G-8C9E6V0VWN"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();