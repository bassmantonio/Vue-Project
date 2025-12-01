<template>

  <h3>Computed Properties </h3>
  <input type="text" v-model="value">
  {{ calculatedValue }}
  <SectionResult v-if="showElement" :result="calculatedValue"></SectionResult>
  <div v-else-if="isNaN(value)"> please text a number </div>
  <div v-else>
    here is showing nothing
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import SectionResult from '../components/SectionResult.vue';

const value = ref('');
const calculatedValue = computed(() =>{
    return value.value *3;
});

const showElement = computed(() =>{
    return value.value >10;
});

</script>

<style scoped>

</style>
