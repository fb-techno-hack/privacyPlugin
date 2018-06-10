import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyCkW7C2pvw1zggSigsh8dq7dEc4OsJ0J5I',
  authDomain: 'big-data-marketplace-1911.firebaseapp.com',
  databaseURL: 'https://big-data-marketplace-1911.firebaseio.com',
  projectId: 'big-data-marketplace-1911',
  storageBucket: 'big-data-marketplace-1911.appspot.com',
  messagingSenderId: '219669056189',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
