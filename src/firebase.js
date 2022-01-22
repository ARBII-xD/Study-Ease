import { initializeApp } from 'firebase-admin';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAqhEgDz98_4NMKytgDoG-fWL9hwvXRiy8",
    authDomain: "studyease-275aa.firebaseapp.com",
    projectId: "studyease-275aa",
    storageBucket: "studyease-275aa.appspot.com",
    messagingSenderId: "800421790314",
    appId: "1:800421790314:web:88871debf3c721b7ae8013"
  };
  


  const app = initializeApp(firebaseConfig)

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firestoreDatabase = getFirestore(app)


  

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db }; 