<template>
  <div
    class="
      twitter-icon-wrapper
      ml-5
      lg:absolute lg:mr-auto lg:ml-auto
      -left-0
      -right-0
      lg:text-center
    "
  >
    <span id="twitter-icon">
      <a href="#">
        <i class="ri-twitter-line"></i>
      </a>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TwitterIcon',
})
</script>

<style lang="scss" scoped>
.twitter-icon-wrapper {
  #twitter-icon {
    font-size: 50px;
    @media (min-width: 1024px) {
      font-size: 60px;
    }
    color: #1da1f2;
  }
}
</style>
