// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import{getAuth}from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNjgAvEvEzgNkNlCNQrcpaxiRogekYnfI",
  authDomain: "react-login-app-49af0.firebaseapp.com",
  projectId: "react-login-app-49af0",
  storageBucket: "react-login-app-49af0.appspot.com",
  messagingSenderId: "795779259715",
  appId: "1:795779259715:web:bf9aa1367c0a43c7d663f6",
  measurementId: "G-GTJPL6KW1E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth=getAuth(app)