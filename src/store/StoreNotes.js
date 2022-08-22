import { defineStore } from "pinia";
import {
  collection,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "@/js/firebase";

const notesCollectionRef = collection(db, "notes");
const notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"));

export const useStoreNotes = defineStore("StoreNotes", {
  state: () => {
    return {
      notes: [],
      notesLoaded: false,
    };
  },
  actions: {
    async getNotes() {
      this.notesLoaded = false;
      onSnapshot(notesCollectionQuery, (querySnapshot) => {
        let notes = [];
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date,
          };
          notes.push(note);
        });

        this.notes = notes;
        this.notesLoaded = true;
      });
    },
    async addNote(newNoteContent) {
      let currenteDate = new Date().getTime(),
        date = currenteDate.toString();

      await addDoc(notesCollectionRef, {
        content: newNoteContent,
        date,
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
