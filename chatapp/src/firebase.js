// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe8mVVKxKQszaM2WHZwxC3SiUtfxa6qrw",
  authDomain: "realtimechatapp-94cc0.firebaseapp.com",
  databaseURL:
    "https://realtimechatapp-94cc0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "realtimechatapp-94cc0",
  storageBucket: "realtimechatapp-94cc0.appspot.com",
  messagingSenderId: "878319167434",
  appId: "1:878319167434:web:bd1ef2b61654dc1e4a9133",
  measurementId: "G-HBPJED79XE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
