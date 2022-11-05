<script setup lang="ts">
export interface FeldProps {
  filled: number;
}

const props = defineProps<FeldProps>();
</script>

<template>
  <div class="feld">
    <span v-for="i in props.filled" v-bind:key="i">⬤</span>
  </div>
</template>

<style scoped>
.feld {
  border-color: lightgrey;
  border-width: 1px;
  border-style: solid;
}
</style>
