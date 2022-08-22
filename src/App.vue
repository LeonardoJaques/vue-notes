<template>
  <Navbar />
  <div class="container is-max-desktop px-2 py-5">
    <router-view />
  </div>
</template>

<script setup>
import Navbar from '@/components/Layout/Navbar.vue';
import { onMounted } from 'vue';
import { useStoreAuth } from '@/store/StoreAuth';

const storeAuth = useStoreAuth();

onMounted(() => {
  storeAuth.init()
})
</script>
<style>
@import "bulma/css/bulma.min.css";
</style>