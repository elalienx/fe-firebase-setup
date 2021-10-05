// NPM packages
import firebase from "firebase/compat/app"; // firebase SDK
import "firebase/compat/firestore"; // the database

firebase.initializeApp({
  apiKey: "AIzaSyCg5AgfTsO8rtIQ5QyQ66RbuioeG0dcvuQ",
  authDomain: "fe-firebase-setup.firebaseapp.com",
  projectId: "fe-firebase-setup",
  storageBucket: "fe-firebase-setup.appspot.com",
  messagingSenderId: "466939589225",
  appId: "1:466939589225:web:02ac6c3e8770e9a000a8f8",
});

export default firebase;
