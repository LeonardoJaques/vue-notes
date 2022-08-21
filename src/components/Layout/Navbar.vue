<template>
  <nav class="navbar is-success is-fixed-top" role=" navigation"
    aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">
          Notess
        </div>
        <a @click.prevent="showMobileNav = !showMobileNav" class="navbar-burger"
          :class="{ 'is-active': showMobileNav }" aria-label="menu"
          aria-expanded="false" data-target="navbarBasicExample"
          ref="navbarBuggerRef">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu"
        :class="{ 'is-active': showMobileNav }" ref="navbarMenuRef">
        <div class="navbar-end">
          <router-link @click="showMobileNav = false" class="navbar-item"
            active-class="is-active" to="/">Notes</router-link>
          <router-link @click="showMobileNav = false" class="navbar-item"
            to="/stats">
            Stats</router-link>
        </div>
      </div>
    </div>
  </nav>

</template>



<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'

const navbarMenuRef = ref(null)
const navbarBuggerRef = ref(null)

const showMobileNav = ref(false)

onClickOutside(navbarMenuRef, () => showMobileNav.value = false, {
  ignore: [navbarBuggerRef]
})




</script>
<style>
@media(max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>