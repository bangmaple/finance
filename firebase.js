import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore';
import Constants from "expo-constants"
import "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration -- from firebase console
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: xxxxxxx,
    authDomain: xxxxxxx,
    databaseURL: xxxxxxxxx,
    projectId: xxxxxxxxx,
    storageBucket: xxxxxxxxx,
    messagingSenderId: xxxxxxxxx,
    appId: xxxxxxxxx,
    measurementId: xxxxxxxxx,
}

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig)
const firestore = getFirestore();
export default [Firebase, firestore]