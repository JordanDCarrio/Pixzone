import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDk_8qYk0exxc03hf56sjqx_z43E7DXOEQ",
  authDomain: "pixzone-1r0nm4n.firebaseapp.com",
  databaseURL: "https://pixzone-1r0nm4n-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pixzone-1r0nm4n",
  storageBucket: "pixzone-1r0nm4n.appspot.com",
  messagingSenderId: "695578112319",
  appId: "1:695578112319:web:a403a176c29745e8ef238a"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app); 