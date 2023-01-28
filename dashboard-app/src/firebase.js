import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDcjYgaP2rD7Jkb4jgrgxhu1RCMiRorsW4",
  authDomain: "react-dashboard-b0041.firebaseapp.com",
  projectId: "react-dashboard-b0041",
  storageBucket: "react-dashboard-b0041.appspot.com",
  messagingSenderId: "592609923145",
  appId: "1:592609923145:web:ee47f255853a053af3ef98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();