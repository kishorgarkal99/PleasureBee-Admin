import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
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