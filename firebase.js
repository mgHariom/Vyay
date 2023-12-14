// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB17oM6rjV7lhVB5KnS47BMYSxJsUj_wig",
  authDomain: "vyay-ccdff.firebaseapp.com",
  projectId: "vyay-ccdff",
  storageBucket: "vyay-ccdff.appspot.com",
  messagingSenderId: "625103276121",
  appId: "1:625103276121:web:eb7b44397779ba5ba74948"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

export {firebase}