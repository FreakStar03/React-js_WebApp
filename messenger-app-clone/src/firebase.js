// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyAT29d2CccU-ngUtPega-mN1w--X4p-81Q",
	authDomain: "messenger-clone-c234f.firebaseapp.com",
	databaseURL: "https://messenger-clone-c234f.firebaseio.com",
	projectId: "messenger-clone-c234f",
	storageBucket: "messenger-clone-c234f.appspot.com",
	messagingSenderId: "514594003178",
	appId: "1:514594003178:web:7587bc2df5b4a363f05f93",
	measurementId: "G-HYQWNC9L6M"
});

const db = firebaseApp.firestore();


export default db;