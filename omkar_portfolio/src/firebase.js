

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAxmZaCo8EXv4kCGLS-afaRsxCxDAymVEw",
  authDomain: "omkar-port.firebaseapp.com",
  databaseURL: "https://omkar-port.firebaseio.com",
  projectId: "omkar-port",
  storageBucket: "omkar-port.appspot.com",
  messagingSenderId: "1068208900586",
  appId: "1:1068208900586:web:8fa0ea0b1db2b7ffacca93",
  measurementId: "G-MSTE287LCV"
});

const db = firebaseApp.firestore();
const storage = firebase.storage();

export {db  , storage};