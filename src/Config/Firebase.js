import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAzTer8AjeyJWoETmlH4vcWyc1qrRrvBHo",
    authDomain: "reactadmin-fe841.firebaseapp.com",
    projectId: "reactadmin-fe841",
    storageBucket: "reactadmin-fe841.firebasestorage.app",
    messagingSenderId: "1025796722434",
    appId: "1:1025796722434:web:1d189f9567cc5596207c1b",
    measurementId: "G-FHLNZVMPG0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
}