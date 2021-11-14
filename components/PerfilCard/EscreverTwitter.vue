<template>
  <form class="mt-2">
    <label for="twitter" class="hidden">Compose new Tweet</label>
    <input
      id="twitter"
      v-model="twitter"
      class="p-2"
      type="text"
      placeholder="Compose new Tweet..."
    />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'EscreverTwitterComponent',
  data: () => {
    return {
      twitter: '',
    }
  },
})
</script>

<style lang="scss" scoped>
input#twitter {
  border: 1px solid #e1e1e1;
  width: 100%;
  outline: none;
}
</style>
