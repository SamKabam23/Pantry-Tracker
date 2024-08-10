// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4MCTbo3tZarV_AiNVh_T7jFXxSUCYIks",
  authDomain: "pantry-tracker-ae09c.firebaseapp.com",
  projectId: "pantry-tracker-ae09c",
  storageBucket: "pantry-tracker-ae09c.appspot.com",
  messagingSenderId: "523523299023",
  appId: "1:523523299023:web:45a410ff931e1eb6c149ba",
  measurementId: "G-QF4QCZ6V4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}