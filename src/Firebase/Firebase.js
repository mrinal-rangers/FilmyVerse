import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDT16sD-38moYUAhC9C9hrKdj-qMjmTqMY",
  authDomain: "filmyverse-cb46c.firebaseapp.com",
  projectId: "filmyverse-cb46c",
  storageBucket: "filmyverse-cb46c.appspot.com",
  messagingSenderId: "39573443608",
  appId: "1:39573443608:web:d30720c2331b50b8ab5f6d",
  appVerificationDisabledForTesting: true
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;