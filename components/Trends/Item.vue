<template>
  <li class="my-2">
    <a href="#" v-text="`#${text}`"></a>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TrendItem',
  props: {
    text: {
      required: true,
      default: '',
      type: String,
    },
  },
})
</script>

<style lang="scss" scoped>
a {
  transition: 0.4s;
  color: #1da1f2;
  &:hover {
    color: #222;
  }
}
</style>
