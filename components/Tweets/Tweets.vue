<template>
  <div class="tweets-wrapper borda mt-5 md:mt-0">
    <div class="px-2 pt-2">
      <Title text="Tweets " />
    </div>
    <ul>
      <li v-for="tweet in tweets" :key="tweet.id" class="pl-2 pr-10">
        <tweet :data="tweet" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Title from '../Title.vue'
import Tweet from './Tweet.vue'

type TweetType = {
  id: number
  text: string
  imagePostUrl: string
  user: {
    name: string
    id: number
    followers: number
    user: string
    tweets: number
    following: number
    coverPhotoUrl: string
    photoUrl: string
  }
}

export default Vue.extend({
  name: 'TweetsComponent',
  components: { Title, Tweet },
  data: () => {
    return {
      tweets: [] as TweetType[],
    }
  },
  async fetch() {
    await this.getTweets()
  },
  mounted() {
    this.$nuxt.$on('reloadAllTweets', async () => {
      await this.getTweets()
    })
  },
  methods: {
    async getTweets() {
      const { data } = await this.$axios.get('/tweets?limit=10&offset=0')
      console.log(data)
      this.tweets = data
    },
  },

  fetchOnServer: false,
})
</script>

<style lang="scss" scoped>
.tweets-wrapper {
  background-color: #fff;
}
</style>
