<script setup lang="ts">
import FiverField from "./components/FiverField.vue";
</script>

<template>
  <nav class="navbar navbar-dark bg-primary fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Blitzblick</a>
    </div>
  </nav>

  <main class="container-sm">
    <div class="row g-0">
      <div class="col-6">
        <FiverField :filled="3" />
      </div>
      <div class="col-6">
        <FiverField :filled="4" />
      </div>
    </div>

    <div class="row g-0">
      <div class="col-6">
        <FiverField :filled="3" />
      </div>
      <div class="col-6">
        <FiverField :filled="4" />
      </div>
    </div>
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
