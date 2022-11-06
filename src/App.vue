<script setup lang="ts">
import FiverField from "./components/FiverField.vue";
import ButtonField from "./components/ButtonField.vue";
import { ref } from "vue";

const points = ref<number>(0);
let number = getRandomInt(20);
const bucketSize = 5;
let fiverFieldValues = ref<number[]>(updateField(number));

let status = ref<number>(0);

function getRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

function updateField(rand: number) {
  const newValues = [0, 0, 0, 0];
  let i = 0;
  while (rand > 0) {
    if (rand >= bucketSize) {
      rand = rand - bucketSize;
      newValues[i] = bucketSize;
    } else {
      newValues[i] = rand;
      rand = 0;
    }
    i++;
  }
  return newValues;
}

function numberClicked(x: number) {
  if (x === number) {
    status.value = 1;
    points.value++;
    number = getRandomInt(20);
    fiverFieldValues.value = updateField(number);
  } else {
    status.value = 2;
  }
}
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
        <FiverField :filled="fiverFieldValues[0]" />
      </div>
      <div class="col-6">
        <FiverField :filled="fiverFieldValues[1]" />
      </div>
    </div>

    <div class="row g-0">
      <div class="col-6">
        <FiverField :filled="fiverFieldValues[2]" />
      </div>
      <div class="col-6">
        <FiverField :filled="fiverFieldValues[3]" />
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <ButtonField :callback="numberClicked" />
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div v-if="status === 1">richtig</div>
        <div v-if="status === 2">falsch</div>
      </div>
      <div class="col-6">Punkte: {{ points }}</div>
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
