// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyAflOU0dvNiU16QqxdaznTLEXc089FIUuE",
  authDomain: "react-auth-436c0.firebaseapp.com",
  projectId: "react-auth-436c0",
  storageBucket: "react-auth-436c0.appspot.com",
  messagingSenderId: "935724451384",
  appId: "1:935724451384:web:d7e4b9e9c8b12c187488cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
   export const auth = getAuth()
export default app  ;