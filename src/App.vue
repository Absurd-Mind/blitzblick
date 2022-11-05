<script setup lang="ts">
import FiverField from "./components/FiverField.vue";
</script>

<template>
  <main>
    <FiverField :filled="3" />
    <FiverField :filled="4" />
    <FiverField :filled="2" />
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
