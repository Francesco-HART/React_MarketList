import firebase from 'firebase/app'
import 'firebase/firebase-auth';
import 'firebase/firebase-database';
import 'firebase/firebase-storage';

const config = {
    apiKey: "AIzaSyAO7eovisFFGroeV1-7tTCCdeLk5hV87GI",
    authDomain: "marketplace-39ebe.firebaseapp.com",
    databaseURL: "https://marketplace-39ebe.firebaseio.com",
    projectId: "marketplace-39ebe",
    storageBucket: "marketplace-39ebe.appspot.com",
    messagingSenderId: "734441487958",
    appId: "1:734441487958:web:4a3b6e1aec47a98f0e85f7",
    measurementId: "G-LR2GPB9CE5"
}

export default firebase.initializeApp(config);
