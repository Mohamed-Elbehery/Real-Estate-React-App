import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHUnrKAZKzBz34BEKTXU9HHSVEzlOa5Lo",
  authDomain: "fr7ty-7276a.firebaseapp.com",
  projectId: "fr7ty-7276a",
  storageBucket: "fr7ty-7276a.appspot.com",
  messagingSenderId: "1078750761907",
  appId: "1:1078750761907:web:9db6aaf387e9e7c613f1c6",
  measurementId: "G-CEE3M9NQ6D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
