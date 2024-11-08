// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4CTu31NEh1M_ZElL_EnDsaJjVSO9JaKs",
  authDomain: "netflixgpt-7f80b.firebaseapp.com",
  projectId: "netflixgpt-7f80b",
  storageBucket: "netflixgpt-7f80b.appspot.com",
  messagingSenderId: "877535133652",
  appId: "1:877535133652:web:8b75d9d2c3cb6a1acd2041",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();