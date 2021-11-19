<template>
  <div class="remove-wrapper pl-4">
    <i class="ri-close-line" @click="remove(user.id)"></i>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'RemoveComponent',
  props: {
    user: { type: Object, required: true },
  },
  methods: {
    async remove(id: String) {
      try {
        await this.$axios.delete(`/user/${id}`)
        this.$nuxt.$emit('userFollowReload')
      } catch (e) {}
    },
  },
})
</script>

<style lang="scss" scoped>
.remove-wrapper {
  cursor: pointer;
  i {
    font-size: 33px;

    &:hover {
      color: #1da1f2;
    }
  }
}
</style>
