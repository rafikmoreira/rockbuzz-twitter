<template>
  <span id="c-icone">
    <i :class="iconClass"></i>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NavbarIcon',
  props: {
    iconClass: {
      type: String,
      required: true,
      default: '',
    },
  },
})
</script>

<style scoped lang="scss">
#c-icone {
  font-size: 30px;
}
</style>
