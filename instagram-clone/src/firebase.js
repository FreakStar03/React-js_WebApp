

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBS399OokHhMSO4PhbziZLfuX72Qbsvchs",
	authDomain: "instagram-clone-19818.firebaseapp.com",
	databaseURL: "https://instagram-clone-19818.firebaseio.com",
	projectId: "instagram-clone-19818",
	storageBucket: "instagram-clone-19818.appspot.com",
	messagingSenderId: "317681399725",
	appId: "1:317681399725:web:3f35b1ddd1964f2ca0d324",
	measurementId: "G-6TBZK2N0S2"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db , auth , storage};