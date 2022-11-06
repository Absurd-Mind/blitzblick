<script setup lang="ts">
export interface ButtonFieldProps {
  callback: (a: number) => void;
}

const props = defineProps<ButtonFieldProps>();
</script>

<template>
  <div class="feld">
    <button
      type="button"
      class="btn btn-primary numberbutton"
      v-for="i in 21"
      v-bind:key="i"
      @click="props.callback(i - 1)"
    >
      {{ i - 1 }}
    </button>
  </div>
</template>

<style scoped>
.numberbutton {
  margin: 8px;
}
</style>
