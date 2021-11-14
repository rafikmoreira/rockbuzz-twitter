<template>
  <div class="trends-wrapper borda">
    <div class="trends mt-10 p-2">
      <Title text="Trends" />
      <ul>
        <item text="LoremIpsum" />
        <item text="LoremForLoremLorem" />
        <item text="GiantLoremLorem" />
        <item text="AbraLoremLorem" />
        <item text="Lorem" />
        <item text="IsLorem" />
        <item text="EUAVXO" />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Item from './Item.vue'
import Title from '../Title.vue'

export default Vue.extend({
  name: 'TrendsComponent',
  components: { Item, Title },
})
</script>

<style lang="scss" scoped>
.trends-wrapper {
  background-color: white;
  a {
    color: #1da1f2;
  }
}
</style>
