<template>
  <div class="card mb-4">
    <div class="card-content ">
      <div class="content breakAll">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }} </small>
        </div>
      </div>
    </div>
    <footer class="card-footer">

      <router-link :to="`/editnote/${note.id}`" href=" #"
        class="card-footer-item">Edit</router-link>
      <a @click.prevent="modals.deleteNote = true" href="#"
        class="card-footer-item ">Delete</a>
    </footer>
    <modal-delete-note v-if="modals.deleteNote" v-model="modals.deleteNote"
      :noteId="note.id" />
  </div>
</template>
<script setup>
import { computed, reactive } from 'vue';
import { useStoreNotes } from "@/store/StoreNotes";
import ModalDeleteNote from './ModalDeleteNote.vue';


const characterLength = computed(() => {
  const length = props.note.content.length
  let description = length > 1 ? 'characters' : "character"
  return `${length} ${description}`
})
const props = defineProps({
  note: {
    type: Object,
    required: true,
  }
})
const storeNotes = useStoreNotes();
const modals = reactive({
  deleteNote: false
})

</script>

<style scoped>
.breakAll {
  word-break: break-all;
}
</style>