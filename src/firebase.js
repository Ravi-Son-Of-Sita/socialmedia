// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,}from 'firebase/auth'
import {getFirestore}from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyDXACmjbZEPkJznJRxwqUXu8-PxB1_eDNk",

  authDomain: "samyojak-connecting.firebaseapp.com",

  projectId: "samyojak-connecting",

  storageBucket: "samyojak-connecting.appspot.com",

  messagingSenderId: "961724020835",

  appId: "1:961724020835:web:382cb780e99920d8272056",

  measurementId: "G-ZRTM5LW1VL"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
//connectAuthEmulator(app)