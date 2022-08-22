import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "notess-7cbfa.firebaseapp.com",
  projectId: "notess-7cbfa",
  storageBucket: "notess-7cbfa.appspot.com",
  messagingSenderId: "814973988239",
  appId: "1:814973988239:web:8d457b734fb4750e186ffa",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
