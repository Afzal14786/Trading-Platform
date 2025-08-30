
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRJIS6oHqiaVeUk4Q9FSn4-SBF4nkmtC8",
  authDomain: "zerodha-clone-5fb13.firebaseapp.com",
  projectId: "zerodha-clone-5fb13",
  storageBucket: "zerodha-clone-5fb13.firebasestorage.app",
  messagingSenderId: "397825119882",
  appId: "1:397825119882:web:c853f71d60c4b3f4823f73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);