<template>
  <div
    class="
      menu-principal-wrapper
      fixed
      -bottom-0
      flex
      justify-center
      lg:justify-start
      py-1
      lg:static
    "
  >
    <ul class="flex menu-principal">
      <li
        v-for="item in menuPrincipal"
        :key="item.id"
        class="mx-1 md:mx-0 md:mr-5"
      >
        <a href="#" class="md:flex items-center">
          <icon :icon-class="`${item.class} mr-2`" />
          <span class="hidden md:inline-block" v-text="item.text"></span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from './Icon.vue'
export default Vue.extend({
  name: 'MenuPrincipal',
  components: { Icon },
  data: () => {
    return {
      menuPrincipal: [
        { id: 1, class: 'ri-home-2-line', text: 'Home' },
        { id: 2, class: 'ri-notification-line', text: 'Notifications' },
        { id: 3, class: 'ri-hashtag', text: 'Discover' },
        { id: 4, class: 'ri-user-line', text: 'Me' },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.menu-principal-wrapper {
  background-color: #fff;
  width: 100%;
  .menu-principal {
    z-index: 1;
  }
  @media (min-width: 1024px) {
    background-color: inherit;
    width: auto;
  }
  a {
    transition: 0.4s;
    &:hover {
      color: #1da1f2;
    }
  }
}
</style>
