// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRSs9lSUC187dxPtrZLljbyeRlXbr39fY",
  authDomain: "car-rental-6c833.firebaseapp.com",
  projectId: "car-rental-6c833",
  storageBucket: "car-rental-6c833.appspot.com",
  messagingSenderId: "137230397910",
  appId: "1:137230397910:web:3fb0cfe1c1969e4a6bb477",
  measurementId: "G-CVGQ9N3BPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);