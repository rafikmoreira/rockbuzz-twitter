<template>
  <nav class="c-navbar">
    <h1 class="hidden">Twitter BR</h1>
    <div class="flex justify-between relative items-center">
      <menu-principal />
      <twitter-icon />
      <menu-ferramentas />
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import MenuPrincipal from './MenuPrincipal.vue'
import MenuFerramentas from './MenuFerramentas.vue'
import TwitterIcon from './TwitterIcon.vue'

export default Vue.extend({
  name: 'NavbarComponent',
  components: { MenuPrincipal, MenuFerramentas, TwitterIcon },
})
</script>

<style lang="scss" scoped>
.c-navbar {
  width: 100%;
}
</style>
