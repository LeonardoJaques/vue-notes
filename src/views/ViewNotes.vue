<template>
  <div class="notes">

    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea v-model="newNote" class="textarea"
            placeholder="Add a new note" ref="newNoteRef" />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button @click="addNote" :disabled="!newNote"
            class="button is-link has-background-success">Add new
            notes</button>
        </div>

      </div>
    </div>
    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note"
     />
  </div>

</template>

<script setup>
import { ref } from "@vue/reactivity";
import Note from "@/components/Notes/Note.vue";
import { useStoreNotes } from "@/store/StoreNotes";



const storeNotes = useStoreNotes()
const newNote = ref('')
const newNoteRef = ref(null)

const addNote = () => {

  storeNotes.addNote(newNote.value)
  newNote.value = ""
  newNoteRef.value.focus()
}

</script>

<style  scoped>
</style>