<template>
  <div class="cover">
    <img :src="profile['cover-photo-url']" :style="`height: ${height}px`" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type Profile = {
  ['cover-photo-url']: String
}

export default Vue.extend({
  name: 'CoverPerfil',

  props: {
    height: {
      required: false,
      default: 150,
      type: Number,
    },
  },

  data: () => {
    return {}
  },
  computed: {
    profile(): Profile {
      return this.$store.state.user.profile
    },
  },
})
</script>

<style lang="scss" scoped>
.cover {
  img {
    object-fit: cover;
    width: 100%;
    border-radius: 8px 8px 0 0;
  }
}
</style>
