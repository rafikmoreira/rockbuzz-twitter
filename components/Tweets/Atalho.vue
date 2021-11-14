<template>
  <div class="atalho-wrapper flex">
    <i :class="iconClass" class="mr-2"></i>
    <span class="hidden md:inline-block">{{ text }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AtalhoComponent',
  props: {
    iconClass: {
      type: String,
      required: true,
      default: '',
    },
    text: {
      type: String,
      required: true,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.atalho-wrapper {
  align-items: center;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    color: #1da1f2;
  }
}
</style>
