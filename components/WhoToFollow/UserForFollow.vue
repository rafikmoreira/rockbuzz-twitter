<template>
  <div class="user-for-follow-wrapper">
    <div class="flex content-between">
      <div class="foto mr-3">
        <foto :url="user.photoUrl" :user="user.name" />
      </div>
      <div>
        <autor :data="user" />
        <follow-button />
      </div>
      <remove />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Foto from '../PerfilCard/Foto.vue'
import Autor from '../Tweets/Autor.vue'
import FollowButton from './FollowButton.vue'
import Remove from './Remove.vue'
export default Vue.extend({
  name: 'UserForFollow',
  components: { Foto, Autor, FollowButton, Remove },
  props: { user: { type: Object, required: true } },
})
</script>

<style lang="scss" scoped>
.user-for-follow-wrapper {
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
