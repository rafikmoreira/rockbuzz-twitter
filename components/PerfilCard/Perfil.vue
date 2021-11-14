<template>
  <div class="perfil">
    <dados :name="profile.name" :user="profile.user" />
    <status
      :following="profile.following"
      :followers="profile.followers"
      :tweets="profile.tweets"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Status from './Status.vue'
import Dados from './Dados.vue'

export default Vue.extend({
  name: 'Perfil',
  components: { Status, Dados },
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
.perfil {
  margin-top: -30px;
}
</style>
