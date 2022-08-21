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
    <input class="input" type="text" placeholder="Do you want make a note?"
      v-autofocus />
  </div>
</template>

<script setup>
import { vAutofocus } from '@/directives/vAutofocus';
import { useStoreNotes } from '../store/StoreNotes';


const storeNotes = useStoreNotes()
</script>

<style  scoped>
</style>