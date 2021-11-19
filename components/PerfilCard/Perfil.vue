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
  async fetch() {
    await this.getProfileInfo()
  },
  computed: {
    profile() {
      return this.$store.state.user.profile
    },
  },
  methods: {
    async getProfileInfo() {
      const response = await this.$axios.get('/user/profile')
      this.$store.commit('user/setData', response.data.data.attributes)
    },
  },

  fetchOnServer: false,
})
</script>

<style lang="scss" scoped>
.perfil {
  margin-top: -30px;
}
</style>
