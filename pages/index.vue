<template>
  <div class="index-page">
    <navbar-wrapper />
    <main>
      <div class="main-grid container mx-auto py-5 md:pt-10 px-2 md:px-0">
        <div>
          <perfil-card-wrapper />
          <trends />
        </div>
        <div>
          <tweets />
        </div>
        <div>
          <who-to-follow-wrapper />
          <copyright />
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavbarWrapper from '~/components/Navbar/NavbarWrapper.vue'
import PerfilCardWrapper from '~/components/PerfilCard/PerfilCardWrapper.vue'
import Trends from '~/components/Trends/Trends.vue'
import Tweets from '~/components/Tweets/Tweets.vue'
import Copyright from '~/components/Copyright/Copyright.vue'
import WhoToFollowWrapper from '~/components/WhoToFollow/WhoToFollowWrapper.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    NavbarWrapper,
    PerfilCardWrapper,
    Trends,
    Tweets,
    Copyright,
    WhoToFollowWrapper,
  },
})
</script>

<style lang="scss" scoped>
.index-page {
  .main-grid {
    display: grid;
    gap: 20px;
    @media (min-width: 720px) {
      grid-template-columns: 1fr 5fr;
    }
    @media (min-width: 1024px) {
      grid-template-columns: 1.3fr 2.6fr 1.3fr;
    }
  }
}
</style>
