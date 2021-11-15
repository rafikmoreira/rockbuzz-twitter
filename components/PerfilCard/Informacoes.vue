<template>
  <div class="info">
    <h3 v-text="user.name"></h3>
    <h4 v-text="`@${user.user}`"></h4>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'InformacoesPerfil',
  computed: {
    user() {
      return this.$store.state.user.profile
    },
  },
})
</script>

<style lang="scss" scoped>
.info {
  padding-top: 40px;
  h3 {
    font-weight: 600;
  }
}
</style>
