<template>
  <div class="form-item-wrapper">
    <label :for="name" v-text="label"></label>
    <input
      :id="name"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      class="p-3"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FormItemComponent',
  props: {
    name: { type: String, required: true },
    label: { type: String, required: true },
    type: { type: String, required: true },
    placeholder: { type: String, required: true },
    required: { type: Boolean, default: true },
  },
})
</script>

<style lang="scss" scoped>
.form-item-wrapper {
  input {
    border: 1px solid #9ca3af;
    width: 100%;
    margin-bottom: 10px;
    outline: none;
  }
}
</style>
