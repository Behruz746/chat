import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_oLb3D1tEQHmmiH6tJYju_JYJ_8nibPU",
  authDomain: "chat-fire-9f6e4.firebaseapp.com",
  projectId: "chat-fire-9f6e4",
  storageBucket: "chat-fire-9f6e4.appspot.com",
  messagingSenderId: "1067946262495",
  appId: "1:1067946262495:web:b155e7b9730aa1ed800e6a",
  measurementId: "G-96G557WMB9",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export default app;
