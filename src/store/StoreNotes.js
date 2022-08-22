import { defineStore } from "pinia";
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/js/firebase";

const notesCollectionRef = collection(db, "notes");

export const useStoreNotes = defineStore("StoreNotes", {
  state: () => {
    return {
      notes: [],
    };
  },
  actions: {
    async getNotes() {
      onSnapshot(notesCollectionRef, (querySnapshot) => {
        let notes = [];
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
          };
          notes.push(note);
        });
        this.notes = notes;
      });
    },
    async addNote(newNoteContent) {
      let currenteDate = new Date().getTime(),
        id = currenteDate.toString();
      await setDoc(doc(notesCollectionRef, id), {
        content: newNoteContent,
      });
    },
    async deleteNote(idToDelete) {
      await deleteDoc(doc(notesCollectionRef, idToDelete));
    },
    async updateNotes(id, content) {
      await updateDoc(doc(notesCollectionRef, id), { content });
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => state.notes.filter((note) => note.id === id)[0].content;
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharacterCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => (count += note.content.length));
      return count;
    },
  },
});
