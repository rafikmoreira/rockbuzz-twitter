<template>
  <div class="foto">
    <img :src="url" :alt="`Foto de ${user}`" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FotoPerfil',
  props: {
    url: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  data: () => {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.foto {
  margin-right: 10px;
  img {
    height: 70px;
    width: 70px;
    @media (min-width: 1024px) {
      height: 100px;
      width: 100px;
    }
    object-fit: cover;
  }
}
</style>
