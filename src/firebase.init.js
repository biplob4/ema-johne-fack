// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDprA0SzkeXsqxIzfRcbx73y74yCAf4_mg",
  authDomain: "ema-jhon-a75ca.firebaseapp.com",
  projectId: "ema-jhon-a75ca",
  storageBucket: "ema-jhon-a75ca.appspot.com",
  messagingSenderId: "1091598689301",
  appId: "1:1091598689301:web:1b92f03f683c1b6d3ada1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;