// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, push } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCCSQwvDoQFoK2_DQYy7Q2u4LJMeS6-mu4',
	authDomain: 'offcampus-b35ae.firebaseapp.com',
	databaseURL: 'https://offcampus-b35ae-default-rtdb.firebaseio.com',
	projectId: 'offcampus-b35ae',
	storageBucket: 'offcampus-b35ae.appspot.com',
	messagingSenderId: '21457135111',
	appId: '1:21457135111:web:d04f90f1f148f73f392ca2',
	measurementId: 'G-GY2DEFEZ1N'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export async function readData(path) {
	const dbRef = ref(db, path);
	const snapshot = await get(dbRef);
	if (snapshot.exists()) {
		return snapshot.val();
	} else {
		return null;
	}
}
