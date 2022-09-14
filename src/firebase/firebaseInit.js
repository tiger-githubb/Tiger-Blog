import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDwFUUcEcm5gsKUHcNMet9Uodopn-KTLJY",
    authDomain: "myblog-5b08e.firebaseapp.com",
    databaseURL: "https://myblog-5b08e-default-rtdb.firebaseio.com",
    projectId: "myblog-5b08e",
    storageBucket: "myblog-5b08e.appspot.com",
    messagingSenderId: "97976863320",
    appId: "1:97976863320:web:079142983cb8bf76ea982d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();