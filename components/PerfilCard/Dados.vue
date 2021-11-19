<template>
  <div class="dados flex">
    <foto :url="profile['photo-url']" :user="profile.name" />
    <informacoes />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Foto from './Foto.vue'
import Informacoes from './Informacoes.vue'
export default Vue.extend({
  name: 'DadosPerfil',
  components: { Foto, Informacoes },
  computed: {
    profile() {
      return this.$store.state.user.profile
    },
  },
})
</script>

<style lang="scss" scoped></style>
