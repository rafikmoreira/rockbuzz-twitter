<template>
  <div class="menu-ferramentas-wrapper flex justify-end">
    <ul class="flex menu-ferramentas md:mr-5 lg:mr-0">
      <li class="mr-5 md:mr-0 md:ml-5">
        <search />
      </li>
      <li
        v-for="item in menuFerramentas"
        :key="item.id"
        class="mr-5 md:mr-0 md:ml-5"
      >
        <a href="#">
          <icon :icon-class="item.class" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from './Icon.vue'
import Search from './Search.vue'
export default Vue.extend({
  name: 'MenuFerramentas',
  components: { Icon, Search },
  data: () => {
    return {
      menuFerramentas: [
        { id: 1, class: 'ri-message-line' },
        { id: 2, class: 'ri-settings-3-fill' },
        { id: 3, class: 'ri-edit-line' },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.menu-ferramentas-wrapper {
  .menu-ferramentas {
    z-index: 1;
  }
  a {
    transition: 0.4s;
    &:hover {
      color: #1da1f2;
    }
  }
}
</style>
