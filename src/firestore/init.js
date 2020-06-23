var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');

var firebaseConfig = {
	apiKey: 'AIzaSyABPRjRiqeHP6su1BwPHvdkSEt2m-zHvdI',
	authDomain: 'smoothies-app-b60f9.firebaseapp.com',
	databaseURL: 'https://smoothies-app-b60f9.firebaseio.com',
	projectId: 'smoothies-app-b60f9',
	storageBucket: 'smoothies-app-b60f9.appspot.com',
	messagingSenderId: '789130268155',
	appId: '1:789130268155:web:7da14bca456534989a4f5e',
	measurementId: 'G-FWYMMEJF3L'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();
// console.log(db);

export default firebase.firestore();
