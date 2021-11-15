<template>
  <div class="autor-wrapper mt-5" :class="`${flex ? '' : 'flex'}`">
    <h3 class="mr-2 autor" v-text="data.name"></h3>
    <h4 v-text="data.user"></h4>
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
    flex: {
      type: Boolean,
      required: false,
      default: false,
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
