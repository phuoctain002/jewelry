// import firebase from 'firebase/app';
// import 'firebase/storage';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyBd2LKuQlmoEi46I2hOKL6oXKOY2SM6Ypk',
    authDomain: 'firjewelry-871f7.firebaseapp.com',
    projectId: 'firjewelry-871f7',
    storageBucket: 'firjewelry-871f7.appspot.com',
    messagingSenderId: '157493305350',
    appId: '1:157493305350:web:3928b8b728ca02b6a9a387',
    measurementId: 'G-43TTK13Q32',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage };
