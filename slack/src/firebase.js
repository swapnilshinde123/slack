// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  
  
    apiKey: "AIzaSyDBfQ7pZAbrhUKcNeZ-hMAMjjmFXagNi9g",
    authDomain: "slack-d9c22.firebaseapp.com",
    projectId: "slack-d9c22",
    storageBucket: "slack-d9c22.appspot.com",
    messagingSenderId: "207349975464",
    appId: "1:207349975464:web:d9263023e8bb684f65759d",  
    measurementId: "G-1F8SMK8DQW"
  };
   const firebaseApp = firebase.initializeApp(firebaseConfig);
   const db = firebaseApp.firestore();
   const auth = firebase.auth();
   const provider = new firebase.auth.GoogleAuthProvider();

   export { auth ,provider};
   export default db;