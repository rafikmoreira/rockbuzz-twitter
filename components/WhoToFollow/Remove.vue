<template>
  <div class="remove-wrapper pl-4">
    <i class="ri-close-line"></i>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'RemoveComponent',
})
</script>

<style lang="scss" scoped>
.remove-wrapper {
  cursor: pointer;
  i {
    font-size: 33px;

    &:hover {
      color: #1da1f2;
    }
  }
}
</style>
