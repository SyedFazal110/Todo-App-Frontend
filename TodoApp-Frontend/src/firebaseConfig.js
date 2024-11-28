import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAlphn_eSumXJxHG_z-GkEACF4fQFUWcBk",
    authDomain: "connect-frontend-backend.firebaseapp.com",
    projectId: "connect-frontend-backend",
    storageBucket: "connect-frontend-backend.firebasestorage.app",
    messagingSenderId: "87789500949",
    appId: "1:87789500949:web:26e2ef3f79ffbc7e32ec1c",
    measurementId: "G-1RCGNL97KX"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, deleteDoc };