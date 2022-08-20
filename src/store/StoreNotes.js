import { defineStore } from "pinia";

export const useStoreNotes = defineStore("StoreNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, modi. Vitae, reiciendis. Atque dicta nam eligendi fuga sed magnam illo, officia consectetur perspiciatis? ",
        },
        {
          id: "id2",
          content: "This is shorter note!",
        },
      ],
    };
  },
  actions: {
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
  },
});
