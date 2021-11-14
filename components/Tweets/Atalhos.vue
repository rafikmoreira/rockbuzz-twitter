<template>
  <div class="atalhos flex justify-between mt-5">
    <a href="#">Expand</a>
    <ul class="flex">
      <li>
        <atalho iconClass="ri-reply-line" text="Reply" />
      </li>
      <li class="ml-4">
        <atalho iconClass="ri-share-line" text="Retweet" />
      </li>
      <li class="ml-4">
        <atalho iconClass="ri-star-fill" text="Favorite" />
      </li>
      <li class="ml-4">
        <atalho iconClass="ri-more-line" text="More" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Atalho from './Atalho.vue'
export default Vue.extend({
  name: 'AtalhosComponente',
  components: { Atalho },
})
</script>

<style lang="scss" scoped></style>
