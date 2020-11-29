// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCSbyA1a67sUJNJJI1xttq6OkG_4ocLBWk",
  authDomain: "todoapp-c4913.firebaseapp.com",
  databaseURL: "https://todoapp-c4913.firebaseio.com",
  projectId: "todoapp-c4913",
  storageBucket: "todoapp-c4913.appspot.com",
  messagingSenderId: "602975023680",
  appId: "1:602975023680:web:e2842cba4f2ea5ccf1e5a5",
  measurementId: "G-GN6E5L10EK"
});

const db = firebaseApp.firestore();


export default db;