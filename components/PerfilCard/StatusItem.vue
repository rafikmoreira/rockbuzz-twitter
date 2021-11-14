<template>
  <ul class="status-item mx-4">
    <li>{{ text }}</li>
    <li>
      {{
        new Intl.NumberFormat('pt-BR', {
          style: 'decimal',
        }).format(count)
      }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'StatusItem',
  props: {
    text: {
      type: String,
      required: true,
      default: '',
    },
    count: {
      type: Number,
      required: true,
      default: 0,
    },
  },
})
</script>

<style lang="scss" scoped>
.status-item {
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
}
</style>
