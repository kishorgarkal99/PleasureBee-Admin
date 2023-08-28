import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY,
  // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  // appId: import.meta.env.VITE_APPID,
  // measurementId: import.meta.env.VITE_MEASUREMENT_ID

  apiKey: "AIzaSyDhL2hpiDuj39s9DrsCloAF8Kcs0zZaxAc",
  authDomain: "pleasurebee-2.firebaseapp.com",
  projectId: "pleasurebee-2",
  storageBucket: "pleasurebee-2.appspot.com",
  messagingSenderId: "127813979231",
  appId: "1:127813979231:web:c3712ce29d34baf1a21fea",
  measurementId: "G-P9XH4MEXCD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)