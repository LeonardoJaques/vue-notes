<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Characters(of all notes)</td>
          <td>{{ storeNotes.totalCharacterCount }}</td>
        </tr>
      </tbody>
    </table>
    <input v-model="inputWatch" class="input" type="text"
      placeholder="Do you want make a note?" v-autofocus />
  </div>
</template>

<script setup>

import { vAutofocus } from '@/directives/vAutofocus';
import { useStoreNotes } from '../store/StoreNotes';
import { useWatchCharacters } from "@/use/useWatchCharacters"
import { ref } from 'vue';

const storeNotes = useStoreNotes()
const inputWatch = ref("")

useWatchCharacters(inputWatch, 50)

</script>

<style  scoped>
</style>