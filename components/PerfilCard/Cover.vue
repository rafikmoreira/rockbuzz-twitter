<template>
  <div class="cover">
    <img :src="profile.coverPhotoUrl" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CoverPerfil',
  data: () => {
    return {}
  },
  computed: {
    profile() {
      return this.$store.state.user.profile
    },
  },
})
</script>

<style lang="scss" scoped>
.cover {
  img {
    object-fit: cover;
    height: 150px;
    width: 100%;
    border-radius: 8px 8px 0 0;
  }
}
</style>
