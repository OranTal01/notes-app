import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBlpsDs3W_iyxgvYLmaIqvVI4iGr7YKB8Q",
    authDomain: "note-app-5cade.firebaseapp.com",
    databaseURL: "https://note-app-5cade.firebaseio.com",
    projectId: "note-app-5cade",
    storageBucket: "note-app-5cade.appspot.com",
    messagingSenderId: "139219129819",
    appId: "1:139219129819:web:c8971bc3781796ef3b43fe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;