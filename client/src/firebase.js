// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'estate-23af4.firebaseapp.com',
  projectId: 'estate-23af4',
  storageBucket: 'estate-23af4.appspot.com',
  messagingSenderId: '866154203424',
  appId: '1:866154203424:web:4e867ae4de70b25f4eef45',
  measurementId: "G-H0LMQZJ9MZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
