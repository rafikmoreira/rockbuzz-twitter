<template>
  <div class="button-follow-wrapper">
    <button class="py-2 px-5 mt-5">Follow</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FollowButtonComponent',
})
</script>

<style lang="scss" scoped>
.button-follow-wrapper {
  button {
    transition: 0.4s;

    background-color: #222;
    color: #fff;
    &:hover {
      background-color: #1da1f2;
    }
  }
}
</style>
