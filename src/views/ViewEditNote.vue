<template>
  <div class="edit-notes">
    <AddEditNotesVue v-model="noteContent" ref="addEditNoteRef" bgColor="link"
      placeholder="Edit Note" label="Edit Note">
      <template #buttons>
        <button @click="$router.back()" class="button is-light mr-2">
          Cancel
        </button>
        <button class="button is-link has-background-link"
          @click="handleSaveClicked" :disabled="!noteContent">
          Save note
        </button>
      </template>
    </AddEditNotesVue>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AddEditNotesVue from '@/components/Notes/AddEditNotes.vue';
import { useStoreNotes } from '@/store/StoreNotes';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const noteContent = ref('')
const storeNotes = useStoreNotes()

noteContent.value = storeNotes.getNoteContent(route.params.id)

const handleSaveClicked = () => {
  storeNotes.updateNotes(route.params.id, noteContent.value)
  router.push('/')
}

</script>

