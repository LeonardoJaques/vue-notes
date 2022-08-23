import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/js/firebase";
import { useStoreNotes } from "./StoreNotes";

export const useStoreAuth = defineStore("StoreAuth", {
  state: () => {
    return {
      user: {},
    };
  },
  actions: {
    init() {
      const storeNotes = useStoreNotes();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid;
          this.user.email = user.email;
          this.router.push("/");
          storeNotes.init();
        } else {
          this.user = {};
          this.router.replace("/auth");
          storeNotes.clearNotes();
        }
      });
    },
    registerUser(credentials) {
      createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("🚀 ~ file: StoreAuth.js ~ line 18 ~ .then ~ user", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(
            "🚀 ~ file: StoreAuth.js ~ line 16 ~ registerUser ~ errorCode",
            errorCode
          );
          console.log(
            "🚀 ~ file: StoreAuth.js ~ line 18 ~ registerUser ~ errorMessage",
            errorMessage
          );
        });
    },
    loginUser(credentials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("🚀 ~ user", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("🚀 ~  loginUser ~ error", errorCode);
          console.log("🚀 ~  loginUser ~ error", errorMessage);
        });
    },
    logoutUser() {
      signOut(auth)
        .then(() => {
          console.log("🚀 ~  logoutUser ~ auth", auth);
        })
        .catch((error) => {
          console.log("🚀 ~  logoutUser ~ error", error.message);
        });
    },
  },
});
