<template>
  <div class="edit-notes">
    <AddEditNotesVue v-model="noteContent" ref="addEditNoteRef" bgColor="link"
      placeholder="Edit Note" label="Edit Note">
      <template #buttons>
        <button @click="$router.back()" class="button is-light ">
          Cancel
        </button>
        <button class="button is-link has-background-link"
          :disabled="!noteContent">
          Save note
        </button>
      </template>
    </AddEditNotesVue>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AddEditNotesVue from '@/components/Notes/AddEditNotes.vue';

const noteContent = ref('')
</script>

<style lang="scss" scoped>
</style>