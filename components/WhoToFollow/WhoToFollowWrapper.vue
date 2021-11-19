<template>
  <div class="whoToFollow-wrapper borda p-2 mb-10">
    <div class="">
      <Title text="Who To Follow" />
    </div>

    <ul>
      <li v-for="user in users" :key="user.id" class="my-5">
        <user-for-follow :user="user" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Title from '../Title.vue'
import UserForFollow from './UserForFollow.vue'

type User = {
  name: string
  id: number
  followers: number
  user: string
  tweets: number
  following: number
  coverPhotoUrl: string
  photoUrl: string
}

export default Vue.extend({
  name: 'WhoToFollowComponent',
  components: { Title, UserForFollow },
  data: () => {
    return { users: [] as User[] }
  },

  async fetch() {
    await this.getUsers()
  },
  mounted() {
    this.$nuxt.$on('userFollowReload', async () => {
      await this.getUsers()
    })
  },
  methods: {
    async getUsers() {
      const { data } = await this.$axios.get(
        '/user/suggestion?offset=0&limit=3'
      )
      this.users = data
    },
  },

  fetchOnServer: false,
})
</script>

<style lang="scss" scoped>
.whoToFollow-wrapper {
  background-color: #fff;
}
</style>
