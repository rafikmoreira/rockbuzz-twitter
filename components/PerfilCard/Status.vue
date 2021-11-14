<template>
  <div class="status mt-4">
    <ul class="flex justify-center">
      <li>
        <a href="#">
          <status-item text="Tweets" :count="tweets" />
        </a>
      </li>
      <li>
        <a href="#">
          <status-item text="Following" :count="following" />
        </a>
      </li>
      <li>
        <a href="#">
          <status-item text="Followers" :count="followers" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import StatusItem from './StatusItem.vue'
export default Vue.extend({
  name: 'StatusPerfil',
  components: { StatusItem },
  props: {
    followers: {
      type: Number,
      required: true,
      default: 0,
    },
    following: {
      type: Number,
      required: true,
      default: 0,
    },
    tweets: {
      type: Number,
      required: true,
      default: 0,
    },
  },
})
</script>

<style lang="scss" scoped>
.status > ul {
  a {
    transition: 0.4s;
    &:hover {
      color: #1da1f2;
    }
  }
}
</style>
