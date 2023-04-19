import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBM4ZJmSEtsg10miqxbxM6O5Nx2IjeU8IQ",
  authDomain: "my-porfolio-4b314.firebaseapp.com",
  databaseURL: "https://my-porfolio-4b314-default-rtdb.firebaseio.com",
  projectId: "my-porfolio-4b314",
  storageBucket: "my-porfolio-4b314.appspot.com",
  messagingSenderId: "1011270684192",
  appId: "1:1011270684192:web:f29c7744931431a9f5b645"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);