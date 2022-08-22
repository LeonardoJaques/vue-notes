import { defineStore } from "pinia";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/js/firebase";

export const useStoreNotes = defineStore("StoreNotes", {
  state: () => {
    return {
      notes: [],
    };
  },
  actions: {
    async getNotes() {
      let notes = [];
      onSnapshot(collection(db, "notes"), (querySnapshot) => {
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
    addNote(newNoteContent) {
      let currenteDate = new Date().getTime(),
        id = currenteDate.toString();
      let note = {
        id,
        content: newNoteContent,
      };
      this.notes.unshift(note);
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => note.id !== idToDelete);
    },
    updateNotes(id, content) {
      const index = this.notes.findIndex((note) => note.id === id);
      this.notes[index].content = content;
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
