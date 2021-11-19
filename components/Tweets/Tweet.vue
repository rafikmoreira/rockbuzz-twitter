<template>
  <div class="tweet-wrapper py-5">
    <hr />
    <div class="tweet mt-3">
      <div class="foto mr-4">
        <!-- <foto :url="data.user?.photoUrl" :user="data.user.name" /> -->
      </div>

      <div style="flex: 1">
        <!-- <autor :data="data.user" /> -->
        <div class="text" v-text="data.text"></div>
        <div v-if="data.imagePostUrl" class="image mt-5">
          <img :src="data.imagePostUrl" />
        </div>
        <atalhos :tweetId="data.id" :favorited="data.favorite" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Foto from '../PerfilCard/Foto.vue'
import Atalhos from './Atalhos.vue'
import Autor from './Autor.vue'
export default Vue.extend({
  name: 'TweetComponent',
  components: { Foto, Atalhos, Autor },
  props: {
    data: {
      required: true,
      type: Object,
    },
  },
})
</script>

<style lang="scss" scoped>
.tweet {
  display: flex;

  .image {
    @media (min-width: 1024px) {
      max-width: 80%;
    }
  }
  .foto {
    height: 70px;
    width: 70px;
    @media (min-width: 1024px) {
      height: 100px;
      width: 100px;
    }
  }
}
</style>
