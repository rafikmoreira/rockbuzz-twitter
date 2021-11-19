<template>
  <div class="trends-wrapper borda">
    <div class="trends mt-10 p-2">
      <Title text="Trends" />
      <ul>
        <item v-for="item in list" :key="item.id" :text="item.content" />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Title from '../Title.vue'
import Item from './Item.vue'

type Trend = {
  id: {
    required: true
    type: String
  }
  content: {
    required: true
    type: String
  }
}

export default Vue.extend({
  name: 'TrendsComponent',
  components: { Item, Title },
  data: () => {
    return { list: [] as Trend[] }
  },
  async fetch() {
    const { data } = await this.$axios('/trends')
    this.list = data
  },
  fetchOnServer: false,
})
</script>

<style lang="scss" scoped>
.trends-wrapper {
  background-color: white;
}
</style>
