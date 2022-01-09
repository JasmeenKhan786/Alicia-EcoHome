// Import the functions you need from the SDKs you need
import firebase from 'firebase' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEGati9pm9jrhAkFxF8JseB486x4ZexrE",
  authDomain: "eco-home-287dc.firebaseapp.com",
  projectId: "eco-home-287dc",
  storageBucket: "eco-home-287dc.appspot.com",
  messagingSenderId: "752889660550",
  appId: "1:752889660550:web:985f88b8d04b6d4934bd07"
};

// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore()