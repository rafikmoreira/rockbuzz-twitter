<template>
  <div class="perfil-card-wrapper">
    <perfil-card />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PerfilCard from './PerfilCard.vue'
export default Vue.extend({ components: { PerfilCard } })
</script>

<style lang="scss" scoped></style>
