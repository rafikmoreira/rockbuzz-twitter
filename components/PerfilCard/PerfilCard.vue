<template>
  <div class="perfil-card borda relative">
    <cover :height="height" />
    <div class="px-2 pb-2 relative">
      <perfil />
      <hr class="mt-2" />
      <escrever-twitter />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Cover from './Cover.vue'

import Perfil from './Perfil.vue'
import EscreverTwitter from './EscreverTwitter.vue'
export default Vue.extend({
  name: 'PerfilCard',
  components: { Cover, Perfil, EscreverTwitter },
  props: {
    height: {
      required: false,
      default: 150,
      type: Number,
    },
  },
})
</script>

<style lang="scss" scoped>
.perfil-card {
  background-color: #fff;
}
</style>
