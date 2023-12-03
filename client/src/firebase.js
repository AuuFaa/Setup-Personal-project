// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "personal-auth-9e5c2.firebaseapp.com",
  projectId: "personal-auth-9e5c2",
  storageBucket: "personal-auth-9e5c2.appspot.com",
  messagingSenderId: "521930567654",
  appId: "1:521930567654:web:9520123af71a9df86a3027"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);