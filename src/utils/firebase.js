// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEjJf5PWWKEseV0QmGtIg7v2BRSLGY5bQ",
  authDomain: "netflixgpt-8355c.firebaseapp.com",
  projectId: "netflixgpt-8355c",
  storageBucket: "netflixgpt-8355c.firebasestorage.app",
  messagingSenderId: "116900577892",
  appId: "1:116900577892:web:63d2086361cea121749571",
  measurementId: "G-X4T65X9VBJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
