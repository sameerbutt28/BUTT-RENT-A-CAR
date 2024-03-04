import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

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

// Get a reference to the Firestore database
const firestore = getFirestore(app);

export { firestore };