import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6dnjSpy1xgXp1WRAYk_YcXF_loOhmeRU",
  authDomain: "leetcode-clone-406d6.firebaseapp.com",
  projectId: "leetcode-clone-406d6",
  storageBucket: "leetcode-clone-406d6.appspot.com",
  messagingSenderId: "361698629488",
  appId: "1:361698629488:web:bfb507b53d7a865478e1b5",
  measurementId: "G-JNDZ2V4GTN"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);