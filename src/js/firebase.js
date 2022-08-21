import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6MaAeJf-GieBsVELrTQr3hl__OCEPVV0",
  authDomain: "notess-7cbfa.firebaseapp.com",
  projectId: "notess-7cbfa",
  storageBucket: "notess-7cbfa.appspot.com",
  messagingSenderId: "814973988239",
  appId: "1:814973988239:web:8d457b734fb4750e186ffa",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
