// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBthtoV4ScDaR9acZIDIT6ssZmUV41XJH8",
  authDomain: "simple-firebase2-59120.firebaseapp.com",
  projectId: "simple-firebase2-59120",
  storageBucket: "simple-firebase2-59120.firebasestorage.app",
  messagingSenderId: "581910186469",
  appId: "1:581910186469:web:20a23f512ba8adfcfd070c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;