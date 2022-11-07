// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBd2LKuQlmoEi46I2hOKL6oXKOY2SM6Ypk",
authDomain: "firjewelry-871f7.firebaseapp.com",
projectId: "firjewelry-871f7",
storageBucket: "firjewelry-871f7.appspot.com",
messagingSenderId: "157493305350",
appId: "1:157493305350:web:3928b8b728ca02b6a9a387",
measurementId: "G-43TTK13Q32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

INSERT INTO `products_type` (`productTypeId`, `name`, `imageType`) VALUES (NULL, 'Trang Sức', 'https://firebasestorage.googleapis.com/v0/b/firjewelry-871f7.appspot.com/o/Product-Image%2Fsp1.jpg?alt=media&token=ef93f64d-6a93-4bc2-bb08-cd1629a341d5');

INSERT INTO `image` (`imageId`, `name`, `isAvatar`, `productId`) VALUES (NULL, 'https://firebasestorage.googleapis.com/v0/b/firjewelry-871f7.appspot.com/o/Product-Image%2Fsp1.jpg?alt=media&token=ef93f64d-6a93-4bc2-bb08-cd1629a341d5', '1', '2');
