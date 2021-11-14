<template>
  <h4 class="title">{{ text }}</h4>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TitleComponent',
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
.title {
  font-size: 32px;
  color: #505050;
}
</style>
