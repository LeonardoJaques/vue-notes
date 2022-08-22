<template>
  <div class="notes">
    <AddEditNotesVue v-model="newNote" ref="addEditNoteRef"
      placeholder="Add a new note">
      <template #buttons>
        <button @click="addNote" :disabled="!newNote"
          class="button is-link has-background-success">Add new
          notes</button>

      </template>
    </AddEditNotesVue>
    <progress v-if="!storeNotes.notesLoaded"
      class="progress is-large is-success" max="100" />
    <template v-else>
      <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
      <div v-if="!storeNotes.notes.length"
        class="is-size-5 has-text-centered has-text-grey-light is-family-monospace py-6">
        No notes here yet...
      </div>
    </template>

  </div>

</template>

<script setup>

import Note from "@/components/Notes/Note.vue";
import { useStoreNotes } from "@/store/StoreNotes";
import AddEditNotesVue from "@/components/Notes/AddEditNotes.vue";
import { ref } from "@vue/reactivity";

import { useWatchCharacters } from "@/use/useWatchCharacters"

const storeNotes = useStoreNotes()
const newNote = ref('')
const addEditNoteRef = ref(null)
useWatchCharacters(newNote)

const addNote = () => {
  storeNotes.addNote(newNote.value)
  newNote.value = ""
  addEditNoteRef.value.focusTextarea()
}


</script>

<style  scoped>
</style>