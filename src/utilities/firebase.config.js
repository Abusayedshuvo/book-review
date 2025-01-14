// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ-DaMXyENg9xHumcJtAdbVYd151AiFL4",
  authDomain: "book-review-ae78b.firebaseapp.com",
  projectId: "book-review-ae78b",
  storageBucket: "book-review-ae78b.firebasestorage.app",
  messagingSenderId: "504249384488",
  appId: "1:504249384488:web:6c58a364824b9b4ea83f1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;