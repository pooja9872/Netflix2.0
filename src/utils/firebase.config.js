// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARAgRpFYuGNQydjLzFhegQjrLK47FnHVg",
  authDomain: "my-project-auth-329308.firebaseapp.com",
  projectId: "my-project-auth-329308",
  storageBucket: "my-project-auth-329308.appspot.com",
  messagingSenderId: "1028810028998",
  appId: "1:1028810028998:web:03fbd3fe4a0b415fcc64c7",
  measurementId: "G - DCLQEYVK6W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
