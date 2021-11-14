<template>
  <div class="autor-wrapper flex mt-5">
    <h3 class="mr-2 autor">{{ data.name }}</h3>
    <h4>{{ data.user }}</h4>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AutorComponente',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.autor-wrapper {
  align-items: center;
  h3 {
    font-weight: 600;
  }
}
</style>
