// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD41GKzIBNC05GuigZSrd1Ss8HxlIhWhD0",
  authDomain: "waste-ride.firebaseapp.com",
  projectId: "waste-ride",
  storageBucket: "waste-ride.appspot.com",
  messagingSenderId: "837991743788",
  appId: "1:837991743788:web:5a88490e5fc12e3a5eec89",
  measurementId: "G-F3X0H5W7CP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
