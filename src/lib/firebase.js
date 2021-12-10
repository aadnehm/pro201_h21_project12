import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
	apiKey            : 'AIzaSyAtvIwZ6rF0g5hyBr8y4sv26PeAKroOL6A',
	authDomain        : 'smidig-718a1.firebaseapp.com',
	projectId         : 'smidig-718a1',
	storageBucket     : 'smidig-718a1.appspot.com',
	messagingSenderId : '39625868517',
	appId             : '1:39625868517:web:013e10213423c554cb800c',
	measurementId     : '${config.measurementId}'
};

// Initialize Firebase
const firebaseApp = Firebase.initializeApp(firebaseConfig);
const db = Firebase.firestore();

export default db;
