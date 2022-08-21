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
    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />

  </div>

</template>

<script setup>

import Note from "@/components/Notes/Note.vue";
import { useStoreNotes } from "@/store/StoreNotes";
import AddEditNotesVue from "@/components/Notes/AddEditNotes.vue";
import { ref, watch } from "vue";

const storeNotes = useStoreNotes()
const newNote = ref('')
const addEditNoteRef = ref(null)

const addNote = () => {
  storeNotes.addNote(newNote.value)
  newNote.value = ""
  addEditNoteRef.value.focusTextarea()
}
watch(newNote, (newValue) => {
  if (newValue.length === 100) {
    alert("Only 100 characters allowed")
  }
})

</script>

<style  scoped>
</style>