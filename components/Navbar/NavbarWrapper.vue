<template>
  <div class="navbar-wrapper py-0 md:py-3">
    <div class="lg:container mx-auto">
      <navbar />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from './Navbar.vue'
export default Vue.extend({ components: { Navbar } })
</script>

<style lang="scss" scoped>
.navbar-wrapper {
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 2;
}
</style>
