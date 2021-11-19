<template>
  <div>
    <icon icon-class="ri-search-line md:hidden" />
    <div class="hidden search-wrapper md:flex p-2">
      <i class="ri-search-line mr-2"></i>
      <form id="search">
        <label for="search-input" class="hidden">Search Twitter</label>
        <input id="search-input" type="text" placeholder="Search Twitter" />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from './Icon.vue'
export default Vue.extend({
  name: 'SearchTwitterComponent',
  components: { Icon },
  data: () => {
    return {
      searchText: '',
    }
  },
})
</script>

<style lang="scss" scoped>
.search-wrapper {
  font-size: 17px;
  color: #9ca3af;
  input {
    outline: none;
  }
  border: 1px solid #9ca3af;
}
</style>
