import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth';

// import firestore from 'firebase/app'


const firebaseConfig = {
    apiKey: "AIzaSyAqhEgDz98_4NMKytgDoG-fWL9hwvXRiy8",
    authDomain: "studyease-275aa.firebaseapp.com",
    projectId: "studyease-275aa",
    storageBucket: "studyease-275aa.appspot.com",
    messagingSenderId: "800421790314",
    appId: "1:800421790314:web:88871debf3c721b7ae8013"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;

// // const firebase = initializeApp(firebaseConfig)
// export const firestore = firebase.firestore()

// export const createUserDocument = async (user, additionalData)=>{
//   if (!user) return;

//   const userRef = firestore.doc(`users/${user.uid}`);

//   const snapshot = await userRef.get();

//   if (!snapshot.exists){
//     const {email} =user;
//     const {displayName} = additionalData;

//     try{
//       userRef.set({
//         displayName,
//         email,
//         createdAt: new Date()
//       })
//     } catch (error){
//       console.log("Error in creating user ", error)
//     }
//   }
// }